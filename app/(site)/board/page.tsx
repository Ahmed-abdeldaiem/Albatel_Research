"use client";

import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { boardMembers, type BoardMember } from "@/lib/board";
import { siteImages } from "@/lib/site-images";

// =============================================================================
// صفحة /board — تشكيل مجلس الأمناء
// تتكوّن من أربعة أقسام:
//   1) PageHero  → الشريط العلوي بصورة الخلفية + Kicker + Title + Subtitle
//   2) ChairFeaturedSection → بطاقة كبيرة مميزة لرئيس المجلس
//   3) BoardMembersGrid → شبكة بطاقات لباقي الأعضاء (نائب، أمين عام، أمين صندوق، عضو)
//   4) BoardPledgeSection → ميثاق المجلس الختامي (4 التزامات + ختم زخرفي)
// =============================================================================

export default function BoardPage() {
  const { t, locale } = useLanguage();
  const members = boardMembers[locale];

  // فصل رئيس المجلس عن باقي الأعضاء
  const chair = members.find((m) => m.featured);
  const others = members.filter((m) => !m.featured);

  return (
    <>
      {/* (1) ───────────── الشريط العلوي ───────────── */}
      <PageHero
        kicker={t("boardPage.kicker")}
        title={t("boardPage.title")}
        subtitle={t("boardPage.subtitle")}
        imageSrc={siteImages.pageBoard}
        imageAlt=""
      />

      {/* (2) ───────────── بطاقة رئيس المجلس (Featured) ─────────────
          تظهر فقط إذا كان هناك عضو معلَّم بـ featured: true في lib/board.ts */}
      {chair && <ChairFeaturedSection member={chair} t={t} locale={locale} />}

      {/* (3) ───────────── باقي الأعضاء (شبكة بطاقات) ───────────── */}
      <BoardMembersGrid members={others} t={t} locale={locale} />

      {/* (4) ───────────── ميثاق المجلس (ختام الصفحة) ───────────── */}
      <BoardPledgeSection t={t} locale={locale} />
    </>
  );
}

// =============================================================================
// قسم رئيس المجلس — بطاقة أفقية كبيرة بتصميم Editorial
// تخطيط: صورة على جانب + نص (شارة + اسم + دور + لقب + سيرة + قائمة مؤهلات) على الجانب الآخر
// =============================================================================
type SectionProps = {
  t: (k: string) => string;
  locale: string;
};

function ChairFeaturedSection({
  member,
  t,
  locale,
}: { member: BoardMember } & SectionProps) {
  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-16 dark:border-white/5 dark:from-ink-950 dark:to-ink-900 sm:py-20"
      aria-labelledby="chair-heading"
    >
      {/* خلفية ضوئية متدرجة decorative */}
      <div
        className="pointer-events-none absolute -top-32 end-[-15%] h-[28rem] w-[28rem] rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-400/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 start-[-10%] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* العمود (أ): الصورة في إطار أنيق */}
          <div
            className="relative lg:col-span-5"
            data-aos="fade-up"
          >
            {/* هالة ضوئية خلف الصورة */}
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-400/30 via-transparent to-cyan-400/20 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-2xl dark:border-white/10 dark:bg-ink-800">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* تدرج خفيف من الأسفل لمنح الصورة عمقًا */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />
              {/* شارة "رئيس المجلس" في أعلى الصورة — خلفية داكنة دائمًا
                  لضمان وضوحها فوق أي لون في الصورة (بما فيها الخلفيات الفاتحة) */}
              <span className="absolute end-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/70 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-black/30 backdrop-blur-md ring-1 ring-white/10">
                <i className="fa-solid fa-crown text-[0.7rem] text-amber-300" aria-hidden />
                {t("boardPage.chairBadge")}
              </span>
            </div>
          </div>

          {/* العمود (ب): النص — شارة الدور + الاسم + اللقب المهني + السيرة + القائمة */}
          <div
            className="lg:col-span-7"
            lang={locale === "en" ? "en" : "ar"}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            {/* شارة الدور (بادج صغير علوي) */}
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700 dark:border-brand-400/30 dark:bg-brand-400/10 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {member.role}
            </p>

            {/* العنوان: اسم العضو */}
            <h2
              id="chair-heading"
              className="mt-4 text-balance text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              {member.name}
            </h2>

            {/* اللقب المهني (subtitle) */}
            <p className="mt-3 text-balance text-base font-medium text-brand-700 dark:text-brand-300 sm:text-lg">
              {member.title}
            </p>

            {/* خط زخرفي متدرج */}
            <span className="mt-5 block h-px w-16 bg-gradient-to-r from-brand-500/70 via-brand-400/50 to-transparent" />

            {/* السيرة المختصرة — مضبوطة من الجانبين */}
            {member.bio && (
              <p
                className="mt-5 text-justify leading-loose text-slate-600 dark:text-slate-400 sm:text-[1.0625rem]"
                style={{ textJustify: "inter-word" }}
              >
                {member.bio}
              </p>
            )}

            {/* قائمة المؤهلات والخبرات */}
            {member.qualifications && member.qualifications.length > 0 && (
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 sm:text-sm">
                  <i className="fa-solid fa-award me-2" aria-hidden />
                  {t("boardPage.qualificationsLabel")}
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {member.qualifications.map((q, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <i
                        className="fa-solid fa-circle-check mt-1 shrink-0 text-brand-500 dark:text-brand-400"
                        aria-hidden
                      />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// شبكة باقي الأعضاء — بطاقة لكل عضو مع <details> قابل للتوسيع
// =============================================================================
function BoardMembersGrid({
  members,
  t,
  locale,
}: { members: BoardMember[] } & SectionProps) {
  return (
    <section
      className="border-t border-slate-200/60 bg-slate-100/80 py-16 dark:border-white/5 dark:bg-ink-900/40 sm:py-24"
      aria-labelledby="members-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* رأس القسم: Kicker + Title + خط زخرفي + Intro */}
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 sm:text-sm">
            {t("boardPage.membersKicker")}
          </p>
          <h2
            id="members-heading"
            className="mt-3 text-balance text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {t("boardPage.membersTitle")}
          </h2>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
          <p className="mt-4 text-balance text-slate-600 dark:text-slate-400">
            {t("boardPage.membersIntro")}
          </p>
        </div>

        {/* الشبكة — 2 أعمدة على الشاشات المتوسطة وما فوق */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {members.map((m, i) => (
            <BoardMemberCard
              key={m.name}
              member={m}
              t={t}
              locale={locale}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// بطاقة عضو واحد — صورة + اسم + دور + لقب + سيرة + <details> للمؤهلات
// =============================================================================
function BoardMemberCard({
  member,
  t,
  locale,
  index,
}: {
  member: BoardMember;
  index: number;
} & SectionProps) {
  const hasQualifications =
    !!member.qualifications && member.qualifications.length > 0;

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-ink-900/60 dark:shadow-none dark:hover:border-brand-500/30"
      lang={locale === "en" ? "en" : "ar"}
      data-aos="fade-up"
      data-aos-delay={String(index * 100)}
    >
      {/* الصورة + تراكب الاسم/الدور */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-ink-800">
        <Image
          src={member.image}
          alt={member.imagePlaceholder ? "" : member.name}
          fill
          className={
            member.imagePlaceholder
              ? "object-contain object-center p-10 opacity-70 transition group-hover:opacity-90"
              : "object-cover object-top transition duration-700 group-hover:scale-105"
          }
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* تدرج من الأسفل لجعل النص قابلًا للقراءة */}
        {!member.imagePlaceholder && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
        )}
        {/* اسم + دور — يظهران فوق الصورة (إن لم تكن placeholder) */}
        {!member.imagePlaceholder && (
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white/95 backdrop-blur-md">
              {member.role}
            </p>
            <h3 className="mt-2 text-xl font-bold">{member.name}</h3>
          </div>
        )}
      </div>

      {/* محتوى البطاقة — يختلف حسب وجود بيانات أم لا */}
      <div className="flex flex-1 flex-col p-6">
        {/* عند placeholder (لا يوجد صورة): نعرض الاسم + الدور هنا */}
        {member.imagePlaceholder && (
          <div className="mb-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-brand-700 dark:border-brand-400/30 dark:bg-brand-400/10 dark:text-brand-300">
              {member.role}
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              {member.name}
            </h3>
          </div>
        )}

        {/* اللقب المهني (subtitle) */}
        <p className="text-balance text-sm font-semibold leading-relaxed text-brand-700 dark:text-brand-300">
          {member.title}
        </p>

        {/* السيرة — مضبوطة من الجانبين إن وُجدت */}
        {member.bio ? (
          <p
            className="mt-3 flex-1 text-justify text-sm leading-loose text-slate-600 dark:text-slate-400"
            style={{ textJustify: "inter-word" }}
          >
            {member.bio}
          </p>
        ) : (
          // حالة: السيرة قريبًا
          <p className="mt-3 flex-1 rounded-lg border border-dashed border-slate-300/80 bg-slate-50/70 p-4 text-center text-xs italic text-slate-500 dark:border-white/10 dark:bg-ink-950/40 dark:text-slate-500">
            <i className="fa-solid fa-hourglass-half me-2" aria-hidden />
            {t("boardPage.bioComingSoon")}
          </p>
        )}

        {/* قائمة المؤهلات داخل <details> قابل للطيّ */}
        {hasQualifications && (
          <details className="group/details mt-5 rounded-xl border border-slate-200/70 bg-slate-50/60 transition open:bg-white dark:border-white/10 dark:bg-ink-950/30 dark:open:bg-ink-900/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-100/70 dark:text-slate-200 dark:hover:bg-ink-900/50">
              <span className="inline-flex items-center gap-2">
                <i
                  className="fa-solid fa-award text-brand-600 dark:text-brand-400"
                  aria-hidden
                />
                <span className="group-open/details:hidden">
                  {t("boardPage.showDetails")}
                </span>
                <span className="hidden group-open/details:inline">
                  {t("boardPage.hideDetails")}
                </span>
              </span>
              {/* أيقونة سهم تدور عند الفتح */}
              <i
                className="fa-solid fa-chevron-down text-xs text-slate-500 transition-transform duration-300 group-open/details:rotate-180 dark:text-slate-400"
                aria-hidden
              />
            </summary>
            <ul className="space-y-2 px-4 pb-4 pt-1">
              {member.qualifications!.map((q, idx) => (
                <li
                  key={idx}
                  className="flex gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  <i
                    className="fa-solid fa-circle-check mt-1 shrink-0 text-xs text-brand-500 dark:text-brand-400"
                    aria-hidden
                  />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </article>
  );
}

// =============================================================================
// قسم ميثاق المجلس — Closing pledge with same dark gradient as /about & /research
// خلفية: bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950
// محتوى: 4 بطاقات التزامات شفافة (glass) + ختم دائري ذهبي اللمعة
// =============================================================================
function BoardPledgeSection({ t, locale }: SectionProps) {
  const pledges = [
    { t: t("boardPage.p1T"), d: t("boardPage.p1D"), icon: "fa-scale-balanced" },
    { t: t("boardPage.p2T"), d: t("boardPage.p2D"), icon: "fa-compass" },
    { t: t("boardPage.p3T"), d: t("boardPage.p3D"), icon: "fa-eye" },
    { t: t("boardPage.p4T"), d: t("boardPage.p4D"), icon: "fa-trophy" },
  ];

  return (
    <section
      className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 py-20 dark:border-white/5 sm:py-28"
      aria-labelledby="pledge-heading"
    >
      {/* خلفيات ضوئية radial — نفس نمط /about و /research-committee */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(56,189,248,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(20,184,166,0.18),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ── رأس القسم ── */}
        <div
          className="mx-auto max-w-2xl text-center"
          lang={locale === "en" ? "en" : "ar"}
          data-aos="fade-up"
        >
          {/* شارة دائرية شفافة فوق الكيكر */}
          <span className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-brand-100 shadow-md backdrop-blur-md">
            <i className="fa-solid fa-feather-pointed text-base" aria-hidden />
          </span>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-200/90 sm:text-sm">
            {t("boardPage.pledgeKicker")}
          </p>
          <h2
            id="pledge-heading"
            className="mt-3 text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl"
          >
            {t("boardPage.pledgeTitle")}
          </h2>

          {/* خط زخرفي مع نقطتين على الجانبين */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-200/70" />
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-brand-200/70 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-200/70" />
          </div>

          <p className="mt-5 text-balance text-base leading-relaxed text-white/80">
            {t("boardPage.pledgeIntro")}
          </p>
        </div>

        {/* ── شبكة الالتزامات الأربعة (2×2) ── بطاقات Glassmorphism */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7">
          {pledges.map((p, i) => (
            <article
              key={p.t}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.10] hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-8"
              lang={locale === "en" ? "en" : "ar"}
              data-aos="fade-up"
              data-aos-delay={String(i * 110)}
            >
              {/* رقم روماني زخرفي في الزاوية */}
              <span
                className="pointer-events-none absolute -end-2 -top-3 select-none font-serif text-7xl font-bold leading-none text-white/[0.07] transition group-hover:text-white/[0.14]"
                aria-hidden
              >
                {["I", "II", "III", "IV"][i]}
              </span>

              <div className="relative flex items-start gap-4">
                {/* الأيقونة بإطار شفاف لامع */}
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 text-xl text-brand-100 shadow-inner transition group-hover:scale-110 group-hover:rotate-3 group-hover:border-white/40">
                  <i className={`fa-solid ${p.icon}`} aria-hidden />
                </span>

                <div className="flex-1">
                  <h3 className="text-balance text-lg font-bold text-white">
                    {p.t}
                  </h3>
                  <span className="mt-2 block h-px w-8 bg-gradient-to-r from-brand-200/80 to-transparent transition-all duration-500 group-hover:w-16" />
                  <p
                    className="mt-3 text-justify text-sm leading-loose text-white/75"
                    style={{ textJustify: "inter-word" }}
                  >
                    {p.d}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── الختم الزخرفي (Seal) ── دائرة ذهبية اللمعة على الخلفية الداكنة */}
        <div
          className="mt-14 flex flex-col items-center text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
          lang={locale === "en" ? "en" : "ar"}
        >
          {/* الختم الدائري */}
          <div className="relative">
            {/* هالة ضوئية مزدوجة خلف الختم */}
            <div
              className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl"
              aria-hidden
            />
            <div
              className="absolute inset-0 rounded-full bg-brand-400/20 blur-3xl"
              aria-hidden
            />
            {/* الدائرة الخارجية بحدود متقطعة بيضاء */}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-white/40 bg-white/5 shadow-2xl backdrop-blur-md">
              {/* الدائرة الداخلية المصمتة بيضاء (لتبرز على الخلفية الداكنة) */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-white via-white to-brand-100 shadow-inner ring-1 ring-white/40">
                <i
                  className="fa-solid fa-landmark text-2xl text-brand-700"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          {/* اسم المجلس + نص فرعي */}
          <p className="mt-5 text-balance text-base font-bold text-white sm:text-lg">
            {t("boardPage.pledgeSeal")}
          </p>
          <p className="mt-1 text-balance text-xs italic text-white/70 sm:text-sm">
            {t("boardPage.pledgeSealNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
