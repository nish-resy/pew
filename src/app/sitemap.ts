import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: "https://paulenggworks.com",
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://paulenggworks.com/ios-architecture-consulting",
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://paulenggworks.com/mobile-app-modernization",
    },
  ];
}
