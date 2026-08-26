import {
  MEMBER_FILES,
  NEWS_BOARD_MEETING_COVER,
  NEWS_BOARD_MEETING_GALLERY,
} from "@/lib/public-assets";

// =============================================================================
// أخبار وفعاليات المؤسسة — تُعرض في صفحة /news
//
// النصوص كلها في `lib/media-locales.ts` تحت `media.news.items.<i18nKey>`،
// وهذا الملف يحمل البنية والأصول فقط (صور، تواريخ، أيقونات) — نفس نمط
// `lib/books.ts` مع `pub.*`.
//
// **لإضافة خبر جديد:** أضف كائنًا في `NEWS` بمفتاح `i18nKey` جديد، ثم أضف
// نصوصه في `media.news.items` بالعربية والإنجليزية.
// =============================================================================

/** حاضر في الفعالية — الصورة من `MEMBER_FILES`، والاسم/الدور من ملف الترجمة */
export type NewsAttendee = {
  /** لاحقة مفاتيح الترجمة: `att1Name` و`att1Role` */
  i18nKey: string;
  image: string;
  /** يحصل على بطاقة مميزة أوسع — رئيس الاجتماع */
  chair?: boolean;
};

/** محور من محاور الفعالية — العنوان والوصف من ملف الترجمة */
export type NewsHighlight = {
  /** لاحقة مفاتيح الترجمة: `h1T` و`h1D` */
  i18nKey: string;
  /** صنف أيقونة Font Awesome كامل */
  icon: string;
};

export type NewsRecord = {
  slug: string;
  /** يطابق مفاتيح `media.news.items.*` في ملفات الترجمة */
  i18nKey: "boardMeeting";
  /** تاريخ ISO للوسم `<time dateTime>` والترتيب — نص العرض في ملف الترجمة */
  date: string;
  cover: string;
  gallery: string[];
  attendees: NewsAttendee[];
  highlights: NewsHighlight[];
};

export const NEWS: NewsRecord[] = [
  {
    slug: "board-of-trustees-meeting-august-2026",
    i18nKey: "boardMeeting",
    date: "2026-08-25",
    cover: NEWS_BOARD_MEETING_COVER,
    gallery: [...NEWS_BOARD_MEETING_GALLERY],
    attendees: [
      { i18nKey: "att1", image: MEMBER_FILES.batil, chair: true },
      { i18nKey: "att2", image: MEMBER_FILES.abdallah },
      { i18nKey: "att3", image: MEMBER_FILES.walid },
      { i18nKey: "att4", image: MEMBER_FILES.mohamed },
      { i18nKey: "att5", image: MEMBER_FILES.wafa },
    ],
    highlights: [
      { i18nKey: "h1", icon: "fa-solid fa-graduation-cap" },
      { i18nKey: "h2", icon: "fa-solid fa-globe" },
      { i18nKey: "h3", icon: "fa-solid fa-user-graduate" },
      { i18nKey: "h4", icon: "fa-solid fa-landmark" },
      { i18nKey: "h5", icon: "fa-solid fa-book-open" },
    ],
  },
];

/** أحدث خبر — تُستخدم خاتمته في صفحة /news الموجزة */
export const LATEST_NEWS = NEWS[0];

export const NEWS_SLUGS = NEWS.map((n) => n.slug);

export function getNews(slug: string): NewsRecord | undefined {
  return NEWS.find((n) => n.slug === slug);
}

/** رابط صفحة تفاصيل الخبر */
export function newsHref(news: NewsRecord): string {
  return `/news/${news.slug}`;
}

/** مفتاح ترجمة داخل نصوص الخبر — مثال: `newsKey(news, "title")` */
export function newsKey(news: NewsRecord, suffix: string): string {
  return `media.news.items.${news.i18nKey}.${suffix}`;
}
