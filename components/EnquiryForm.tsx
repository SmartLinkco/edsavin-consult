"use client";

import { FormEvent, useId, useState } from "react";
import { cta, enquiryPage, formCopy, lines, productsIn } from "@/content/site";

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
      const code = body.error || "send";
      setError(formCopy.errors[code as keyof typeof formCopy.errors] || formCopy.errors.send);
    } catch {
      setStatus("error");
      setError(formCopy.errors.send);
    }
  }

  return (
    <form className="enquiry" action="/api/enquiry" method="post" onSubmit={onSubmit}>
      <div className="hp" aria-hidden="true">
        <label>
          {formCopy.fax}
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
          {formCopy.name}
          <input id={`${baseId}-name`} name="name" autoComplete="name" required maxLength={80} />
        </label>
        <label htmlFor={`${baseId}-email`}>
          {formCopy.email}
          <input id={`${baseId}-email`} name="email" type="email" autoComplete="email" required maxLength={120} />
        </label>
        <label htmlFor={`${baseId}-phone`}>
          {formCopy.phone} <span className="optional">({formCopy.phoneOptional})</span>
          <input id={`${baseId}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label htmlFor={`${baseId}-org`}>
          {formCopy.organisation} <span className="optional">({formCopy.organisationOptional})</span>
          <input id={`${baseId}-org`} name="organisation" autoComplete="organization" maxLength={80} />
        </label>
        <label htmlFor={`${baseId}-product`} className="span-2">
          {formCopy.product}
          <select id={`${baseId}-product`} name="product" defaultValue={initialProduct} required>
            <option value="general">{formCopy.general}</option>
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
          {formCopy.quantity} <span className="optional">({formCopy.quantityOptional})</span>
          <input id={`${baseId}-qty`} name="quantity" maxLength={140} />
          <span className="hint">{formCopy.quantityHint}</span>
        </label>
        <label htmlFor={`${baseId}-message`} className="span-2">
          {formCopy.message}
          <textarea id={`${baseId}-message`} name="message" required minLength={10} maxLength={2000} rows={6} />
          <span className="hint">{formCopy.messageHint}</span>
        </label>
      </div>

      <label className="consent" htmlFor={`${baseId}-consent`}>
        <input id={`${baseId}-consent`} name="consent" type="checkbox" value="yes" required />
        <span>{formCopy.consent}</span>
      </label>

      <button className="btn btn-red" type="submit" disabled={status === "sending"}>
        {status === "sending" ? cta.sending : cta.send}
      </button>
      <p className="hint">{formCopy.hint}</p>

      <div aria-live="polite">
        {status === "sent" ? (
          <p className="form-status" role="status" tabIndex={-1}>
            {enquiryPage.sent}
          </p>
        ) : null}
      </div>
    </form>
  );
}
