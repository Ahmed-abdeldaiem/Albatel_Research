"use client";

import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComingSoon } from "@/components/blog/BlogComingSoon";
import { BlogTopics } from "@/components/blog/BlogTopics";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

// =============================================================================
// صفحة /blog — المدونة والمقالات (المركز الإعلامي)
//   1) PageHero        → الشريط العلوي
//   2) BlogComingSoon  → بطاقة "ترقّبوا المقالات قريبًا"
//   3) BlogTopics      → محاور المدونة المرتقبة
//   4) BlogCTA         → توجيه إلى الإصدارات والأخبار حتى نشر أول مقال
//
// **عند نشر أول مقال:** استبدل `BlogComingSoon` بشبكة المقالات واحتفظ بالباقي.
// =============================================================================

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t("media.blog.kicker")}
        title={t("media.blog.title")}
        subtitle={t("media.blog.subtitle")}
        imageSrc={siteImages.pageBlog}
        imageAlt=""
      />
      <BlogComingSoon />
      <BlogTopics />
      <BlogCTA />
    </>
  );
}
