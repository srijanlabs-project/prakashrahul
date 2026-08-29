import type { MetadataRoute } from "next";
import { experiences } from "./lib/experience-data";
import { SITE_URL } from "./lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...experiences.map((entry) => ({
      url: `${SITE_URL}/experience/${entry.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
