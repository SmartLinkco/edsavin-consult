"use client";

import { FormEvent, useId, useState } from "react";
import { lines, productsIn } from "@/content/site";

const messages: Record<string, string> = {
  invalid: "Please check the form. Add your name, a valid email, the product, a message of at least 10 characters, and consent.",
  fast: "Please wait a moment and send the form again.",
  rate: "Too many messages were sent from this connection. Wait a few minutes, or use WhatsApp.",
  config: "The enquiry inbox is not connected yet. The site owner still needs to set the enquiry email. You can use WhatsApp in the meantime.",
  send: "The message could not be sent just now. Please try again, or use WhatsApp.",
};

export function EnquiryForm({ initialProduct = "general" }: { initialProduct?: string }) {
  const baseId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await response.json()) as { ok?: boolean; error?: string };
      if (response.ok && body.ok) {
        setStatus("sent");
        form.reset();
        const started = form.elements.namedItem("startedAt");
        if (started instanceof HTMLInputElement) started.value = String(Date.now());
        return;
      }
      setStatus("error");
      setError(messages[body.error || "send"] || messages.send);
    } catch {
      setStatus("error");
      setError(messages.send);
    }
  }

  return (
    <form className="enquiry" action="/api/enquiry" method="post" onSubmit={onSubmit} noValidate={false}>
      <div className="hp" aria-hidden="true">
        <label>
          Fax
          <input name="fax" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input
        type="hidden"
        name="startedAt"
        ref={(node) => {
          if (node && node.value === "") node.value = String(Date.now());
        }}
      />

      <div className="fields">
        <label htmlFor={`${baseId}-name`}>
          Name
          <input id={`${baseId}-name`} name="name" autoComplete="name" required maxLength={80} />
        </label>
        <label htmlFor={`${baseId}-email`}>
          Email
          <input id={`${baseId}-email`} name="email" type="email" autoComplete="email" required maxLength={120} />
        </label>
        <label htmlFor={`${baseId}-phone`}>
          Phone <span className="optional">(optional)</span>
          <input id={`${baseId}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label htmlFor={`${baseId}-org`}>
          Organisation <span className="optional">(optional)</span>
          <input id={`${baseId}-org`} name="organisation" autoComplete="organization" maxLength={80} />
        </label>
        <label htmlFor={`${baseId}-product`} className="span-2">
          Product
          <select id={`${baseId}-product`} name="product" defaultValue={initialProduct} required>
            <option value="general">General enquiry</option>
            {lines.map((line) => (
              <optgroup key={line.id} label={line.title}>
                {productsIn(line.id).map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label htmlFor={`${baseId}-qty`} className="span-2">
          Quantity or packs <span className="optional">(optional)</span>
          <input id={`${baseId}-qty`} name="quantity" maxLength={140} />
          <span className="hint">Pack sizes have not been confirmed yet. Describe what you need in your own words.</span>
        </label>
        <label htmlFor={`${baseId}-message`} className="span-2">
          Message
          <textarea id={`${baseId}-message`} name="message" required minLength={10} maxLength={2000} rows={6} />
        </label>
      </div>

      <label className="consent" htmlFor={`${baseId}-consent`}>
        <input id={`${baseId}-consent`} name="consent" type="checkbox" value="yes" required />
        <span>I have read the privacy notice and agree to my details being used to answer this enquiry.</span>
      </label>

      <button className="btn btn-red" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="hint">There is no payment on this form. The farm confirms availability after it receives your message.</p>

      <div aria-live="polite">
        {status === "sent" ? (
          <p className="form-status" role="status" tabIndex={-1}>
            Thank you. Your enquiry has been sent. The farm will reply using the details you gave.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="form-status is-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
