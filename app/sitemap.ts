import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return pages.map((page) => ({
    url: new URL(page.href, base).toString(),
    lastModified: new Date("2026-11-19"),
    changeFrequency: "monthly",
    priority: page.href === "/" ? 1 : 0.7,
  }));
}
