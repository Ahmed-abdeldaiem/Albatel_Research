import type { MetadataRoute } from "next";
import { BOOKS } from "@/lib/books";
import { NEWS } from "@/lib/news";
import { SITEMAP_STATIC_ENTRIES } from "@/lib/sitemap-static-paths";
import { SITE_URL } from "@/lib/site-url";

/**
 * خريطة الموقع (XML) — تُولَّد تلقائيًا على المسار `/sitemap.xml`
 *
 * - **صفحات ثابتة:** من `SITEMAP_STATIC_ENTRIES` في `lib/sitemap-static-paths.ts`
 * - **صفحات الكتب:** من `BOOKS` في `lib/books.ts` (ديناميكي عند إضافة إصدار)
 * - **صفحات الأخبار:** من `NEWS` في `lib/news.ts` (ديناميكي عند إضافة خبر)
 *
 * **التحقق بعد الرفع:** افتح `https://<نطاقك>/sitemap.xml` و`robots.txt`،
 * وأرسل الخريطة في Google Search Console.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = SITEMAP_STATIC_ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path === "" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const bookEntries: MetadataRoute.Sitemap = BOOKS.map((book) => ({
    url: `${SITE_URL}/publications/${book.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: book.status === "published" ? 0.82 : 0.55,
  }));

  const newsEntries: MetadataRoute.Sitemap = NEWS.map((news) => ({
    url: `${SITE_URL}/news/${news.slug}`,
    lastModified: new Date(news.date),
    changeFrequency: "yearly" as const,
    priority: 0.75,
  }));

  /** الصفحة الرئيسية أولاً ثم الباقي ثم الكتب ثم الأخبار — ترتيب قراءة أوضح للبشر والأدوات */
  return [...staticEntries, ...bookEntries, ...newsEntries];
}
