import type { Metadata } from "next";
import { COMPANY, home, siteUrl } from "@/content/site";

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
  const description = home.metaDescription;
  const title = `${home.metaTitle} · ${COMPANY}`;
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: title,
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
      title,
      description,
      url: "/",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: COMPANY }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    ...(verification ? { verification: { google: verification } } : {}),
  };
}
