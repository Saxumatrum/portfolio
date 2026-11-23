import type { MetadataRoute } from "next";
import { profile } from "./content";

const BASE = "https://www.adjetei.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["", 1],
    ["/services", 0.9],
    ["/restaurant-booking-assistant", 0.9],
    ["/salon-clinic-booking-assistant", 0.9],
    ["/trades-booking-assistant", 0.9],
    ["/automate-invoice-data-entry", 0.9],
    ["/work", 0.8],
    ["/about", 0.6],
    ["/hire", 0.5],
    ["/play/frontdesk", 0.7],
    ["/play/frontdesk/salon", 0.6],
    ["/play/frontdesk/trades", 0.6],
    ["/play/docuchat", 0.6],
    ["/play/extractly", 0.6],
    ["/play/triagepilot", 0.6],
    ...(profile.booking ? [["/book", 0.8] as [string, number]] : []),
  ];
  return pages.map(([path, priority]) => ({
    url: BASE + path,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
