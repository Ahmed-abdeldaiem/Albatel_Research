"use client";

import { AboutSection } from "@/components/home/AboutSection";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

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
    </>
  );
}
