import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { cta } from "@/content/site";

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <Link className="btn btn-red" href="/enquiry">
        {cta.enquire}
      </Link>
      <WhatsAppLink className="btn btn-ink" />
    </div>
  );
}
