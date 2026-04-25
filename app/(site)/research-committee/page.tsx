"use client";

import { CommitteeHighlights } from "@/components/committees/CommitteeHighlights";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteImages } from "@/lib/site-images";

export default function ResearchCommitteePage() {
  const { t } = useLanguage();

  const items = [
    { title: t("researchPage.b1t"), desc: t("researchPage.b1d"), icon: "fa-flask" },
    { title: t("researchPage.b2t"), desc: t("researchPage.b2d"), icon: "fa-file-lines" },
    { title: t("researchPage.b3t"), desc: t("researchPage.b3d"), icon: "fa-handshake" },
    { title: t("researchPage.b4t"), desc: t("researchPage.b4d"), icon: "fa-shield-halved" },
  ];

  return (
    <>
      <PageHero
        kicker={t("researchPage.kicker")}
        title={t("researchPage.title")}
        subtitle={t("researchPage.subtitle")}
        imageSrc={siteImages.pageResearch}
        imageAlt=""
      />
      <CommitteeHighlights items={items} />
    </>
  );
}
