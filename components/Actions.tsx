import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Actions({
  productId,
  productName,
  whatsAppClass = "btn btn-ink",
  enquireClass = "btn btn-red",
}: {
  productId?: string;
  productName?: string;
  whatsAppClass?: string;
  enquireClass?: string;
}) {
  const href = productId ? `/enquiry?product=${encodeURIComponent(productId)}` : "/enquiry";
  const label = productName ? `Enquire about ${productName}` : "Make an enquiry";
  return (
    <div className="actions">
      <Link className={enquireClass} href={href}>
        {label}
      </Link>
      <WhatsAppLink product={productName} className={whatsAppClass} />
    </div>
  );
}
