"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// AboutSection — قسم "من نحن"
// يُستخدم في:
//   1) الصفحة الرئيسية: يظهر مع العنوان (kicker + title) كاملاً.
//   2) صفحة /about: يُمرَّر له omitIntroHeadings={true} لإخفاء العنوان لأن
//      مكون PageHero يعرضه بالفعل في أعلى الصفحة.
// =============================================================================

type AboutSectionProps = {
  /** Use on /about when PageHero already shows the main title */
  omitIntroHeadings?: boolean;
};

export function AboutSection({ omitIntroHeadings }: AboutSectionProps) {
  const { t, locale } = useLanguage();
  const isArabic = locale === "ar";

  // النقاط الثلاث التي تظهر في البطاقة الجانبية (الكارت)
  const bullets = [t("about.li1"), t("about.li2"), t("about.li3")];
  // أيقونات Font Awesome المقابلة لكل نقطة (بحوث / ترجمة / تطوير مهني)
  const icons = ["fa-microscope", "fa-language", "fa-people-group"] as const;

  return (
    <section
      id="about"
      data-aos="fade-up"
      // ⬇️ خلفية متدرجة بين الفاتح والأبيض + حدود علوية رفيعة + padding عمودي كبير
      className="scroll-mt-24 border-t border-slate-200/60 bg-gradient-to-b from-slate-100 to-white py-20 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ───────────────────────────────────────────────────────────────────
            الشبكة (Grid) من عمودين على الشاشات الكبيرة:
            العمود الأول → النص التعريفي (الفقرات)
            العمود الثاني → بطاقة بيمينها 3 نقاط (أعمدة العمل)
          ─────────────────────────────────────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* ===============================================================
              العمود (1): النص التعريفي
              يحتوي على: Kicker + Title + خط زخرفي + فقرتين تعريفيتين
              =============================================================== */}
          <div lang={isArabic ? "ar" : "en"}>
            {/* (أ) Kicker + Title — يظهران فقط في الصفحة الرئيسية،
                   ويُخفيان في /about لأن PageHero يعرضهما بالفعل */}
            {omitIntroHeadings ? (
              <h2 id="about-heading" className="sr-only">
                {t("about.title")}
              </h2>
            ) : (
              <>
                {/* Kicker صغير بحرف كابيتال متباعد */}
                <h2
                  id="about-heading"
                  className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm"
                >
                  {t("about.kicker")}
                </h2>
                {/* العنوان الرئيسي — text-balance يضبط توزيع السطور */}
                <p className="mt-3 text-balance text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                  {t("about.title")}
                </p>
                {/* خط زخرفي متدرّج تحت العنوان */}
                <span className="mt-4 block h-px w-12 bg-gradient-to-r from-brand-500/70 to-transparent" />
              </>
            )}

            {/* (ب) الفقرة الأولى: تعريف رسمي بالمؤسسة (p1a + p1b)
                   - p1a يظهر بخط أثقل (strong) لإبراز اسم المؤسسة
                   - النص مضبوط من الجانبين (text-justify) لمظهر أنيق */}
            <p
              className={`text-justify text-lg leading-loose text-slate-600 dark:text-slate-400 ${
                omitIntroHeadings ? "mt-0" : "mt-6"
              }`}
              style={{ textJustify: "inter-word" }}
            >
              <strong className="font-semibold text-slate-800 dark:text-slate-200">
                {t("about.p1a")}
              </strong>{" "}
              {t("about.p1b")}
            </p>

            {/* (ج) الفقرة الثانية: الرؤية والطموح (p2)
                   مضبوطة من الجانبين أيضاً لتناسق بصري */}
            <p
              className="mt-5 text-justify text-lg leading-loose text-slate-600 dark:text-slate-400"
              style={{ textJustify: "inter-word" }}
            >
              {t("about.p2")}
            </p>
          </div>

          {/* ===============================================================
              العمود (2): البطاقة الجانبية بثلاث نقاط
              تحتوي على: بحوث تطبيقية / ترجمة الحضارات / تطوير القدرات
              =============================================================== */}
          <div className="relative" data-aos="fade-up" data-aos-delay="120">
            {/* (أ) هالة ضوئية متدرجة خلف البطاقة (decorative blur) */}
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-400/20 via-transparent to-blue-400/10 blur-2xl dark:from-brand-500/20 dark:to-blue-500/10"
              aria-hidden
            />
            {/* (ب) البطاقة نفسها بحدود وظل وزجاج خلفي */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-ink-800/80 dark:shadow-2xl sm:p-10">
              {/* لمعان زخرفي خفيف داخل البطاقة */}
              <div className="bg-card-shine pointer-events-none absolute inset-0 opacity-60 dark:opacity-100" />
              {/* (ج) قائمة النقاط الثلاث، بينها فاصل أفقي شفاف */}
              <ul className="relative divide-y divide-slate-200/60 text-slate-700 dark:divide-white/5 dark:text-slate-300">
                {bullets.map((text, idx) => (
                  <li
                    key={idx}
                    className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    {/* أيقونة في صندوق متدرّج — تكبر عند الـ hover */}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-600 ring-1 ring-brand-500/15 transition duration-500 group-hover:scale-110 group-hover:from-brand-500/30 group-hover:ring-brand-500/40 dark:from-brand-400/20 dark:to-brand-400/5 dark:text-brand-300 dark:ring-brand-400/15 dark:group-hover:ring-brand-400/40">
                      <i className={`fa-solid ${icons[idx]}`} aria-hidden />
                    </span>
                    {/* نص النقطة — مضبوط من اليمين (start) لأن الجمل قصيرة
                        ولا يصلح فيها justify (سيخلق فراغات كبيرة) */}
                    <span
                      className="text-start leading-relaxed"
                      lang={isArabic ? "ar" : "en"}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
