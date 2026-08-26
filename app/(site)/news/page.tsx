"use client";

import { PageHero } from "@/components/layout/PageHero";
import { NewsClosing } from "@/components/news/NewsClosing";
import { NewsIndex } from "@/components/news/NewsIndex";
import { useLanguage } from "@/contexts/LanguageContext";
import { LATEST_NEWS } from "@/lib/news";
import { siteImages } from "@/lib/site-images";

// =============================================================================
// صفحة /news — الأخبار والفعاليات (المركز الإعلامي)
// صفحة موجزة: بطاقة لكل خبر تنتهي بزرّ يفتح صفحة تفاصيله:
//   1) PageHero     → الشريط العلوي
//   2) NewsIndex    → موجز كل خبر + رابط "اقرأ تفاصيل الخبر"
//   3) NewsClosing  → خاتمة داكنة (تتكرّر في صفحة تفاصيل الخبر)
//
// تفاصيل الخبر (الحضور، محاور الاجتماع، معرض الصور) في `/news/[slug]`.
//
// **لإضافة خبر جديد:** أضفه في `lib/news.ts` ونصوصه في `lib/media-locales.ts`،
// وتُنشأ صفحة تفاصيله وبيانات الـ SEO والـ sitemap تلقائيًا.
// =============================================================================

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t("media.news.kicker")}
        title={t("media.news.title")}
        subtitle={t("media.news.subtitle")}
        imageSrc={siteImages.pageNews}
        imageAlt=""
      />
      <NewsIndex />
      <NewsClosing news={LATEST_NEWS} />
    </>
  );
}
