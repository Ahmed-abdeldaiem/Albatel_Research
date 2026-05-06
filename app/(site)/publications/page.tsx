"use client";

import { PageHero } from "@/components/layout/PageHero";
import { PublicationsClosing } from "@/components/publications/PublicationsClosing";
import { PublicationsFAQ } from "@/components/publications/PublicationsFAQ";
import { PublicationsIndex } from "@/components/publications/PublicationsIndex";
import { PublicationsManifesto } from "@/components/publications/PublicationsManifesto";
import { PublicationsProcess } from "@/components/publications/PublicationsProcess";
import { PublicationsQualities } from "@/components/publications/PublicationsQualities";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

// =============================================================================
// صفحة /publications — إصداراتنا
// الترتيب: نقدّم الفلسفة المختصرة ثم نُبرز المنتج (الكتب) مبكرًا في الصفحة،
// لأن غاية الصفحة الأساسية هي عرض الإصدارات؛ ثم نتبع بالقيم والمراحل والـFAQ:
//   1) PageHero               → الشريط العلوي
//   2) PublicationsManifesto  → بيان فلسفة النشر
//   3) PublicationsIndex      → شبكة الإصدارات (المنتج الأساسي — يُعرض مبكرًا)
//   4) PublicationsQualities  → 4 قيم تشكّل بصمة كل كتاب
//   5) PublicationsProcess    → رحلة الكتاب من الفكرة إلى القارئ
//   6) PublicationsFAQ        → أسئلة شائعة قابلة للطيّ
//   7) PublicationsClosing    → خاتمة بنفس النمط الداكن المعتمد
// =============================================================================

export default function PublicationsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* (1) ───── الشريط العلوي ───── */}
      <PageHero
        kicker={t("pub.index.kicker")}
        title={t("pub.index.title")}
        subtitle={t("pub.index.subtitle")}
        imageSrc={siteImages.pagePublications}
        imageAlt=""
      />

      {/* (2) ───── بيان فلسفة النشر ───── */}
      <PublicationsManifesto />

      {/* (3) ───── شبكة الإصدارات (الكتب) — تُعرض مبكرًا لأنها المنتج الأساسي ───── */}
      <PublicationsIndex />

      {/* (4) ───── أربع قيم تُشكّل بصمة كل كتاب ───── */}
      <PublicationsQualities />

      {/* (5) ───── رحلة الكتاب من الفكرة إلى القارئ ───── */}
      <PublicationsProcess />

      {/* (6) ───── أسئلة شائعة ───── */}
      <PublicationsFAQ />

      {/* (7) ───── خاتمة الصفحة ───── */}
      <PublicationsClosing />
    </>
  );
}
