import { BOOK_GALLERY_RIYADH } from "@/lib/public-assets";

// =============================================================================
// الفعالية القادمة — تُعرض في الصفحة الرئيسية وأعلى صفحة /news
//
// النصوص في `lib/media-locales.ts` تحت `media.events.items.<i18nKey>`،
// وهذا الملف يحمل الصورة والرابط فقط — نفس نمط `lib/news.ts`.
//
// **لتغيير الفعالية:** عدّل `UPCOMING_EVENT` ونصوصها، أو اجعلها `null`
// لإخفاء القسم من الصفحتين بعد انتهاء الفعالية.
// =============================================================================

export type EventRecord = {
  /** يطابق مفاتيح `media.events.items.*` في ملفات الترجمة */
  i18nKey: "riyadhFair2026";
  /** صورة من `public/` — تُعرض بـ `<img>` لأن `.jfif` لا يمرّ عبر `next/image` */
  image: string;
  /** وجهة زرّ الدعوة */
  ctaHref: string;
};

export const UPCOMING_EVENT: EventRecord | null = {
  i18nKey: "riyadhFair2026",
  image: BOOK_GALLERY_RIYADH[0],
  ctaHref: "/publications",
};

/** مفتاح ترجمة داخل نصوص الفعالية — مثال: `eventKey(event, "title")` */
export function eventKey(event: EventRecord, suffix: string): string {
  return `media.events.items.${event.i18nKey}.${suffix}`;
}
