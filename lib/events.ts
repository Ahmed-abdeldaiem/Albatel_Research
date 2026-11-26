import { BOOK_GALLERY_CAIRO } from "@/lib/public-assets";

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
  i18nKey: "cairoFairNext";
  /** صورة من `public/` — تُعرض بـ `<img>` لأن `.jfif` لا يمرّ عبر `next/image` */
  image: string;
  /** موضع اقتصاص الصورة (صنف Tailwind `object-*`) ليبقى الأهم ظاهرًا */
  imagePosition: string;
  /** وجهة زرّ الدعوة */
  ctaHref: string;
};

export const UPCOMING_EVENT: EventRecord | null = {
  i18nKey: "cairoFairNext",
  /** ندوة "اقتصاديات كرة القدم" في الدورة الماضية — شعار المعرض ظاهر خلف المؤلفين */
  image: BOOK_GALLERY_CAIRO[3],
  imagePosition: "object-[55%_40%]",
  ctaHref: "/publications",
};

/** مفتاح ترجمة داخل نصوص الفعالية — مثال: `eventKey(event, "title")` */
export function eventKey(event: EventRecord, suffix: string): string {
  return `media.events.items.${event.i18nKey}.${suffix}`;
}
