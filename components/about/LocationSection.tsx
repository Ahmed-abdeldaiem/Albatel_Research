"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { OFFICIAL_EMAIL } from "@/lib/contact";

// =============================================================================
// LocationSection — قسم "موقعنا"
// تخطيط من عمودين:
//   • العمود (1): بطاقة تواصل بالعنوان والبريد + زرّان CTA
//   • العمود (2): خريطة جوجل المضمّنة بإطار مزخرف
// رابط الخريطة موحَّد للاتجاهات والمضمّن.
// =============================================================================

const ADDRESS_QUERY =
  "84 El-Horeya Rd, Bab Sharqi, Al Attarin, Alexandria Governorate, Egypt";

const GOOGLE_MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_QUERY,
)}`;

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.928126709301!2d29.9054736751065!3d31.19941006293017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38d84255555%3A0x1d51fb06bed5c38b!2zODQgRWwtSG9yZXlhIFJkLCDYqNin2Kgg2LTYsdmC2IwgQWwgQXR0YXJpbiwgQWxleGFuZHJpYSBHb3Zlcm5vcmF0ZSA1MzcyMDU0LCBFZ3lwdA!5e1!3m2!1sen!2ssa!4v1778075503808!5m2!1sen!2ssa";

export function LocationSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-slate-100/80 py-16 dark:border-white/5 dark:from-ink-900/40 dark:to-ink-950 sm:py-24"
      data-aos="fade-up"
    >
      {/* خلفيات ضوئية decorative */}
      <div
        className="pointer-events-none absolute -top-32 start-[-10%] h-[24rem] w-[24rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 end-[-10%] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/5"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── رأس القسم ── */}
        <div
          className="mx-auto max-w-2xl text-center"
          lang={locale === "en" ? "en" : "ar"}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("about.locKicker")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {t("about.locTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
            {t("about.locIntro")}
          </p>
        </div>

        {/* ── شبكة العمودين ── */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* ─ العمود (1): بطاقة تواصل ─ */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div
              className="relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-7 shadow-xl dark:border-white/10 dark:bg-ink-900/70 sm:p-8"
              lang={locale === "en" ? "en" : "ar"}
            >
              {/* لمعان زخرفي علوي */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
                aria-hidden
              />

              {/* العنوان */}
              <div className="group flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-600 ring-1 ring-brand-500/20 transition group-hover:scale-110 dark:text-brand-300">
                  <i className="fa-solid fa-location-dot text-lg" aria-hidden />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600/80 dark:text-brand-400/80">
                    {t("about.locAddressLabel")}
                  </p>
                  <p
                    className="mt-1.5 text-balance text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-200"
                    lang={locale === "en" ? "en" : "ar"}
                  >
                    {t("about.locAddressVal")}
                  </p>
                </div>
              </div>

              {/* فاصل */}
              <div className="my-6 h-px bg-slate-200/70 dark:bg-white/5" />

              {/* البريد */}
              <div className="group flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-600 ring-1 ring-cyan-500/20 transition group-hover:scale-110 dark:text-cyan-300">
                  <i className="fa-solid fa-envelope text-lg" aria-hidden />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600/80 dark:text-brand-400/80">
                    {t("about.locEmailLabel")}
                  </p>
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    dir="ltr"
                    className="mt-1.5 block text-base font-semibold text-slate-800 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
              </div>

              {/* أزرار CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 dark:text-ink-950"
                >
                  <i
                    className="fa-solid fa-route transition group-hover:scale-110"
                    aria-hidden
                  />
                  {t("about.locDirectionsCta")}
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-brand-400/50 hover:bg-brand-500/5 hover:text-brand-700 dark:border-white/10 dark:bg-ink-950/60 dark:text-slate-200 dark:hover:border-brand-500/30 dark:hover:text-brand-300"
                >
                  <i
                    className="fa-solid fa-paper-plane transition group-hover:scale-110"
                    aria-hidden
                  />
                  {t("about.locContactCta")}
                </Link>
              </div>
            </div>
          </div>

          {/* ─ العمود (2): خريطة جوجل ─ */}
          <div
            className="lg:col-span-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-2 shadow-xl ring-1 ring-brand-500/10 transition hover:ring-brand-500/30 dark:border-white/10 dark:bg-ink-900/70 dark:ring-brand-400/10 dark:hover:ring-brand-400/30">
              {/* خط زخرفي علوي متدرّج */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
                aria-hidden
              />

              <iframe
                src={GOOGLE_MAPS_EMBED}
                title={t("about.locMapTitle")}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[420px] w-full rounded-2xl sm:h-[460px] lg:h-[500px]"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
