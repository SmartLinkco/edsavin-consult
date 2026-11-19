import Link from "next/link";
import { COMPANY } from "@/content/site";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const src = tone === "dark" ? "/brand/logo-horizontal-dark.svg" : "/brand/logo-horizontal-light.svg";
  return (
    <Link href="/" className="brand" aria-label={COMPANY}>
      {/* Official logo files. Do not redraw. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo-full" src={src} alt="" width={721} height={215} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo-mark" src="/brand/logo-avatar.svg" alt="" width={200} height={200} />
    </Link>
  );
}
