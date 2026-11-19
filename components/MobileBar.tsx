import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <Link className="btn btn-red" href="/enquiry">
        Make an enquiry
      </Link>
      <WhatsAppLink className="btn btn-ink" />
    </div>
  );
}
