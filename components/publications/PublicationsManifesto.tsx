"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// PublicationsManifesto — بيان فلسفة الإصدارات
// يفتح صفحة /publications بمقدمة ذات طابع تحريري:
//   - Kicker صغير، عنوان كبير بتدرّج لوني، خط فاصل، ثم نص جستفي مطوّل.
//   - متناغم مع نمط ManifestoSection في صفحات اللجان.
// =============================================================================

export function PublicationsManifesto() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-16 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-20">
      {/* خلفيات ضوئية decorative */}
      <div
        className="pointer-events-none absolute -top-32 end-[-15%] h-[26rem] w-[26rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 start-[-10%] h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p
          className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
          data-aos="fade-up"
        >
          {t("pub.index.manifestoKicker")}
        </p>
        <h2
          className="mt-3 text-balance bg-gradient-to-l from-brand-600 via-brand-500 to-cyan-500 bg-clip-text py-3 text-3xl font-extrabold leading-[1.5] text-transparent dark:from-brand-300 dark:via-brand-400 dark:to-cyan-300 sm:text-4xl sm:leading-[1.45] lg:text-[2.75rem]"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {t("pub.index.manifestoTitle")}
        </h2>
        <span
          className="mx-auto mt-5 block h-px w-20 bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
          data-aos="zoom-in"
          data-aos-delay="120"
        />
        <p
          className="mx-auto mt-6 max-w-3xl text-justify text-base leading-loose text-slate-700 dark:text-slate-300 sm:text-lg"
          style={{ textJustify: "inter-word" }}
          lang={locale === "en" ? "en" : "ar"}
          data-aos="fade-up"
          data-aos-delay="160"
        >
          {t("pub.index.manifestoBody")}
        </p>
      </div>
    </section>
  );
}
