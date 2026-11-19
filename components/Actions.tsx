import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { cta } from "@/content/site";

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
  const label = productName ? cta.enquireAbout(productName) : cta.enquire;
  return (
    <div className="actions">
      <Link className={enquireClass} href={href}>
        {label}
      </Link>
      <WhatsAppLink product={productName} className={whatsAppClass} />
    </div>
  );
}
