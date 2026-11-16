import type { MetadataRoute } from "next";

const BASE = "https://adjetei-martey.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["", 1],
    ["/services", 0.9],
    ["/restaurant-booking-assistant", 0.9],
    ["/work", 0.8],
    ["/about", 0.6],
    ["/play/frontdesk", 0.7],
    ["/play/docuchat", 0.6],
    ["/play/extractly", 0.6],
    ["/play/triagepilot", 0.6],
  ];
  return pages.map(([path, priority]) => ({
    url: BASE + path,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
