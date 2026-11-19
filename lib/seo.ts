import type { Metadata } from "next";
import { COMPANY, siteUrl } from "@/content/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${COMPANY}`,
      description,
      url: path,
    },
  };
}

export function rootMetadata(): Metadata {
  const description =
    "EDSAVIN CONSULT AND TRADING is a Ghanaian farm. Livestock, goat meat, beef, mutton, cassava, maize, beans, gari and starch. Send an enquiry or a WhatsApp message. No online shop.";
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: `${COMPANY} | Livestock, meat, crops, gari and starch`,
      template: `%s · ${COMPANY}`,
    },
    description,
    applicationName: COMPANY,
    authors: [{ name: COMPANY }],
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_GH",
      siteName: COMPANY,
      title: COMPANY,
      description,
      url: "/",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: COMPANY }],
    },
    twitter: {
      card: "summary_large_image",
      title: COMPANY,
      description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    ...(verification ? { verification: { google: verification } } : {}),
  };
}
