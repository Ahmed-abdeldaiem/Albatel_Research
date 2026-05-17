import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/** https://nextjs.org/docs/app/api-reference/file-conventions/robots */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /** لا فائدة لفهرسة واجهات الـ API — يوفّر ميزانية الزحف */
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}