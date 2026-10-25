import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reinvent-amravati.vercel.app";

  return [
    {
      url: siteUrl,
      lastModified: "2026-10-25",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
