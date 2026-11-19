import { NextResponse } from "next/server";
import { rateLimit, sendEnquiry, validateEnquiry, type EnquiryInput } from "@/lib/enquiry";

export const runtime = "nodejs";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "local";
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

async function readInput(request: Request): Promise<{ json: boolean; input: EnquiryInput }> {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    const input = (await request.json()) as EnquiryInput;
    return { json: true, input };
  }
  const form = await request.formData();
  const input: EnquiryInput = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === "string") input[key as keyof EnquiryInput] = value;
  }
  return { json: false, input };
}

function finish(request: Request, json: boolean, status: number, error: string | null) {
  if (json) {
    return NextResponse.json(error ? { ok: false, error } : { ok: true }, { status });
  }
  const url = new URL("/enquiry", request.url);
  if (error) url.searchParams.set("error", error);
  else url.searchParams.set("sent", "1");
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 403 });
  }
  if (!rateLimit(clientKey(request))) {
    const type = request.headers.get("content-type") || "";
    return finish(request, type.includes("application/json"), 429, "rate");
  }

  let parsed: { json: boolean; input: EnquiryInput };
  try {
    parsed = await readInput(request);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const result = validateEnquiry(parsed.input);
  if (!result.ok) {
    if (result.code === "bot") return finish(request, parsed.json, 200, null);
    return finish(request, parsed.json, 400, result.code);
  }

  try {
    const sent = await sendEnquiry(result.enquiry);
    if (sent === "sent") return finish(request, parsed.json, 200, null);
    return finish(request, parsed.json, sent === "config" ? 503 : 502, sent);
  } catch {
    console.error("Enquiry send failed");
    return finish(request, parsed.json, 502, "send");
  }
}
