import nodemailer from "nodemailer";
import { COMPANY, findProduct } from "@/content/site";

export type EnquiryInput = {
  name?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  product?: string;
  quantity?: string;
  message?: string;
  consent?: string;
  fax?: string;
  startedAt?: string;
};

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  product: string;
  quantity: string;
  message: string;
};

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;

export function rateLimit(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

function oneLine(value: unknown, max: number) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (text.length > max) return null;
  return text;
}

function multiLine(value: unknown, max: number) {
  const text = String(value ?? "").replace(/\r\n/g, "\n").trim();
  if (text.length > max) return null;
  return text;
}

export function validateEnquiry(input: EnquiryInput):
  | { ok: true; enquiry: Enquiry }
  | { ok: false; code: "bot" | "fast" | "invalid" } {
  if (String(input.fax ?? "").trim() !== "") {
    return { ok: false, code: "bot" };
  }

  if (input.startedAt) {
    const started = Number(input.startedAt);
    if (!Number.isFinite(started)) return { ok: false, code: "invalid" };
    const age = Date.now() - started;
    if (age >= 0 && age < 2000) return { ok: false, code: "fast" };
    if (age < 0 || age > 24 * 60 * 60 * 1000) return { ok: false, code: "invalid" };
  }

  const name = oneLine(input.name, 80);
  const email = oneLine(input.email, 120);
  const phone = oneLine(input.phone, 40);
  const organisation = oneLine(input.organisation, 80);
  const productId = oneLine(input.product, 40);
  const quantity = oneLine(input.quantity, 140);
  const message = multiLine(input.message, 2000);
  const consent = input.consent === "yes" || input.consent === "on" || input.consent === "true";

  if (!name || name.length < 2 || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, code: "invalid" };
  }
  if (!message || message.length < 10 || !consent || phone === null || organisation === null || quantity === null || !productId) {
    return { ok: false, code: "invalid" };
  }
  if (phone && !/^[0-9+\s().-]{6,40}$/.test(phone)) {
    return { ok: false, code: "invalid" };
  }
  const links = message.match(/https?:\/\//gi);
  if (links && links.length > 3) return { ok: false, code: "invalid" };

  const product = productId === "general" ? "General enquiry" : findProduct(productId)?.name;
  if (!product) return { ok: false, code: "invalid" };

  return {
    ok: true,
    enquiry: { name, email, phone, organisation, product, quantity, message },
  };
}

function enquiryText(enquiry: Enquiry) {
  return [
    `New enquiry from the ${COMPANY} website`,
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "(not given)"}`,
    `Organisation: ${enquiry.organisation || "(not given)"}`,
    `Product: ${enquiry.product}`,
    `Quantity / packs: ${enquiry.quantity || "(not given)"}`,
    "",
    enquiry.message,
  ].join("\n");
}

export async function sendEnquiry(enquiry: Enquiry): Promise<"sent" | "config" | "send"> {
  const to = process.env.ENQUIRY_TO_EMAIL?.trim();
  const from = process.env.ENQUIRY_FROM_EMAIL?.trim();
  if (!to || !from) return "config";

  const subject = `Enquiry: ${enquiry.product} — ${enquiry.name}`;
  const text = enquiryText(enquiry);

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        reply_to: enquiry.email,
      }),
    });
    if (!response.ok) {
      console.error("Enquiry mail provider returned", response.status);
      return "send";
    }
    return "sent";
  }

  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transporter.sendMail({
      from,
      to,
      replyTo: enquiry.email,
      subject,
      text,
    });
    return "sent";
  }

  return "config";
}
