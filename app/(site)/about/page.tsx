"use client";

import { AboutCTA } from "@/components/about/AboutCTA";
import { ActivitiesGlance } from "@/components/about/ActivitiesGlance";
import { CoreValues } from "@/components/about/CoreValues";
import { LocationSection } from "@/components/about/LocationSection";
import { WhatSetsUsApart } from "@/components/about/WhatSetsUsApart";
import { AboutSection } from "@/components/home/AboutSection";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

// =============================================================================
// /about — صفحة "من نحن" — الترتيب الكامل (8 أقسام)
//   1) PageHero            → الترويسة العلوية
//   2) AboutSection        → التعريف + 3 نقاط (موجود)
//   3) VisionMissionSection→ الرؤية والرسالة + الأهداف (موجود)
//   4) WhatSetsUsApart     → ما يميّزنا (3 بطاقات)
//   5) CoreValues          → قيمنا الأساسية (6 بطاقات)
//   6) ActivitiesGlance    → نشاطاتنا في لمحة (4 روابط)
//   7) LocationSection     → موقعنا + خريطة جوجل
//   8) AboutCTA            → دعوة ختامية للتواصل
// =============================================================================

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        kicker={t("about.kicker")}
        title={t("about.title")}
        subtitle={t("about.heroSubtitle")}
        imageSrc={siteImages.pageAbout}
        imageAlt=""
      />
      <AboutSection omitIntroHeadings />
      <VisionMissionSection />
      <WhatSetsUsApart />
      <CoreValues />
      <ActivitiesGlance />
      <LocationSection />
      <AboutCTA />
    </>
  );
}
