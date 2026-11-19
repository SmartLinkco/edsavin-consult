import { contact, cta } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M5 6.8A2.8 2.8 0 0 1 7.8 4h8.4A2.8 2.8 0 0 1 19 6.8v6.2a2.8 2.8 0 0 1-2.8 2.8H9.2L5 19.4V6.8z"
      />
    </svg>
  );
}

export function WhatsAppLink({
  product,
  className = "btn btn-ink",
}: {
  product?: string;
  className?: string;
}) {
  const label = product ? cta.whatsappAbout(product) : cta.whatsapp;
  return (
    <a
      className={className}
      href={whatsappHref(product)}
      target="_blank"
      rel="noopener noreferrer"
      data-placeholder={contact.whatsappIsPlaceholder ? "true" : undefined}
    >
      <ChatIcon />
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
