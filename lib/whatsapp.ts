import { contact, whatsappCopy } from "@/content/site";

/** Opens WhatsApp with a message that already names the product, when one is given. */
export function whatsappHref(productName?: string) {
  const digits = contact.whatsappDigits.replace(/\D/g, "");
  const text = productName ? whatsappCopy.withProduct(productName) : whatsappCopy.general;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
