import type { MetadataRoute } from "next";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SitemapStaticEntry = {
  /** المسار من جذر الموقع؛ سلسلة فارغة = الصفحة الرئيسية */
  path: string;
  changeFrequency: ChangeFrequency;
  /** بين 0 و 1 — تلميح لأهمية الصفحة بالنسبة لباقي الموقع */
  priority: number;
};

/**
 * صفحات ثابتة تُدرَج في `sitemap.xml`.
 *
 * **عند إضافة صفحة جديدة في `app/(site)/…`** أضف هنا سطرًا واحدًا بالمسار
 * (مثل `/news`) — لا حاجة لتعديل `app/sitemap.ts` نفسه.
 *
 * صفحات `/publications/[slug]` تُولَّد تلقائيًا من `BOOKS` في `lib/books.ts`.
 */
export const SITEMAP_STATIC_ENTRIES: SitemapStaticEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/board", changeFrequency: "monthly", priority: 0.85 },
  { path: "/research-committee", changeFrequency: "monthly", priority: 0.85 },
  { path: "/translation-committee", changeFrequency: "monthly", priority: 0.85 },
  { path: "/publications", changeFrequency: "weekly", priority: 0.9 },
  { path: "/publications/order", changeFrequency: "monthly", priority: 0.75 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
];
