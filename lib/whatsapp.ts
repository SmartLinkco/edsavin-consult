import { COMPANY, contact } from "@/content/site";

/** Opens WhatsApp with a message that already names the product, when one is given. */
export function whatsappHref(productName?: string) {
  const digits = contact.whatsappDigits.replace(/\D/g, "");
  const text = productName
    ? `Hello ${COMPANY}, I would like to enquire about ${productName}.`
    : `Hello ${COMPANY}, I would like to make an enquiry.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
