import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhLabel } from "@/components/Placeholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { COMPANY, contact, footer, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo tone="dark" />
          <p className="footer-note">{footer.note}</p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-heading">{footer.pages}</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/enquiry">{footer.enquiry}</Link>
            </li>
            <li>
              <Link href="/privacy">{footer.privacy}</Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="footer-heading">{footer.contact}</p>
          <p>
            <PhLabel /> {contact.phoneDisplay}
          </p>
          <p>
            <PhLabel /> {contact.whatsappDisplay}
          </p>
          <p>
            <PhLabel /> {contact.email}
          </p>
          <p>
            {contact.addressLines.map((line) => (
              <span key={line} className="address-line">
                {line === "Ghana" ? line : <><PhLabel /> {line}</>}
              </span>
            ))}
          </p>
          <WhatsAppLink className="btn btn-light" />
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} {COMPANY}</p>
      </div>
    </footer>
  );
}
