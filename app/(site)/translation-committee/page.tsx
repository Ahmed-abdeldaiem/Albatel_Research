"use client";

import { CommitteeHighlights } from "@/components/committees/CommitteeHighlights";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

export default function TranslationCommitteePage() {
  const { t } = useLanguage();

  const items = [
    {
      title: t("translationPage.b1t"),
      desc: t("translationPage.b1d"),
      icon: "fa-spell-check",
    },
    {
      title: t("translationPage.b2t"),
      desc: t("translationPage.b2d"),
      icon: "fa-pen-fancy",
    },
    {
      title: t("translationPage.b3t"),
      desc: t("translationPage.b3d"),
      icon: "fa-layer-group",
    },
    {
      title: t("translationPage.b4t"),
      desc: t("translationPage.b4d"),
      icon: "fa-earth-americas",
    },
  ];

  return (
    <>
      <PageHero
        kicker={t("translationPage.kicker")}
        title={t("translationPage.title")}
        subtitle={t("translationPage.subtitle")}
        imageSrc={siteImages.pageTranslation}
        imageAlt=""
      />
      <CommitteeHighlights items={items} />
    </>
  );
}
