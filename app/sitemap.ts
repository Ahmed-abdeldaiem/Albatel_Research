import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/books";
import { SITEMAP_STATIC_ENTRIES } from "@/lib/sitemap-static-paths";
import { SITE_URL } from "@/lib/site-url";

/**
 * خريطة الموقع (XML) — تُولَّد تلقائيًا على المسار `/sitemap.xml`
 *
 * - **صفحات ثابتة:** من `SITEMAP_STATIC_ENTRIES` في `lib/sitemap-static-paths.ts`
 * - **صفحات الكتب:** من `BOOKS` في `lib/books.ts` (ديناميكي عند إضافة إصدار)
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = SITEMAP_STATIC_ENTRIES.map(
    ({ path, changeFrequency, priority }) => ({
      url: path === "" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  for (const book of BOOKS) {
    entries.push({
      url: `${SITE_URL}/publications/${book.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: book.status === "published" ? 0.82 : 0.55,
    });
  }

  return entries;
}
