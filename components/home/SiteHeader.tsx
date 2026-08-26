"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { LOGO_NAVBAR } from "@/lib/public-assets";
import { MediaNavMenu } from "@/components/home/MediaNavMenu";
import { PublicationsNavMenu } from "@/components/home/PublicationsNavMenu";

/**
 * عنصر في النافبار. `menu` يعني أن العنصر يفتح قائمة منسدلة بدل رابط مباشر،
 * و`href` حينها هو المسار الأساسي المستخدم في تمييز العنصر النشط.
 */
type NavItem = {
  href: string;
  label: string;
  menu?: "publications" | "media";
};

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav: NavItem[] = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/board", label: t("nav.board") },
    { href: "/research-committee", label: t("nav.research") },
    { href: "/translation-committee", label: t("nav.translation") },
    { href: "/publications", label: t("nav.publications"), menu: "publications" },
    { href: "/news", label: t("nav.media"), menu: "media" },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isPathActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  /** المركز الإعلامي يضم مسارين، فيُعدّ نشطًا على أيٍّ منهما */
  const isItemActive = (item: NavItem) =>
    item.menu === "media"
      ? isPathActive("/news") || isPathActive("/blog")
      : isPathActive(item.href);

  const linkDesktop = (active: boolean) =>
    [
      "whitespace-nowrap rounded-full px-2.5 py-2 text-[0.75rem] font-semibold transition-all lg:px-2 lg:text-[0.72rem] xl:px-2.5 xl:text-[0.78rem] 2xl:px-3 2xl:text-[0.8rem]",
      active
        ? "bg-brand-600 text-white shadow-md shadow-brand-600/25 dark:bg-brand-500 dark:text-ink-950"
        : "text-slate-600 hover:bg-slate-100 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-brand-200",
    ].join(" ");

  const linkMobile = (active: boolean) =>
    [
      "block rounded-xl px-4 py-3.5 text-base font-semibold transition-[color,background-color,transform] duration-200 ease-out active:scale-[0.99]",
      active
        ? "bg-brand-600 text-white dark:bg-brand-500 dark:text-ink-950"
        : "text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10",
    ].join(" ");

  const Tools = ({ compact }: { compact?: boolean }) => (
    <div
      className={`flex items-center gap-1.5 ${compact ? "" : "rounded-2xl border border-slate-200/90 bg-slate-50/90 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-1.5"}`}
    >
      <div
        className="flex items-center rounded-xl border border-slate-200/80 bg-white p-0.5 shadow-sm dark:border-white/10 dark:bg-ink-900/90"
        role="group"
        aria-label={t("lang.switch")}
      >
        <button
          type="button"
          onClick={() => setLocale("ar")}
          className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition sm:px-3 sm:text-xs ${
            locale === "ar"
              ? "bg-brand-600 text-white dark:bg-brand-400 dark:text-ink-950"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
        >
          {t("lang.ar")}
        </button>
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold transition sm:px-3 sm:text-xs ${
            locale === "en"
              ? "bg-brand-600 text-white dark:bg-brand-400 dark:text-ink-950"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
        >
          {t("lang.en")}
        </button>
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-amber-500 shadow-sm transition hover:bg-slate-50 dark:border-white/10 dark:bg-ink-900/90 dark:text-amber-300 dark:hover:bg-white/10"
        aria-label={t("theme.toggle")}
        title={theme === "dark" ? t("theme.light") : t("theme.dark")}
      >
        {theme === "dark" ? (
          <i className="fa-solid fa-sun text-base" aria-hidden />
        ) : (
          <i className="fa-solid fa-moon text-base" aria-hidden />
        )}
      </button>
    </div>
  );

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] isolate border-b border-slate-200/90 bg-white shadow-md shadow-slate-900/10 ring-1 ring-slate-200/80 backdrop-blur-none dark:border-white/10 dark:bg-ink-950 dark:shadow-black/30 dark:ring-white/10 lg:bg-white/95 lg:shadow-sm lg:ring-0 lg:backdrop-blur-xl lg:dark:bg-ink-950/95"
      style={{ WebkitBackfaceVisibility: "hidden" }}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {/* الشعار */}
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 text-start transition-opacity hover:opacity-90 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative flex h-10 w-11 shrink-0 items-center justify-center sm:h-11 sm:w-12">
            <Image
              src={LOGO_NAVBAR}
              alt={t("brand.name")}
              width={120}
              height={88}
              className="object-contain object-center"
              priority
              sizes="48px"
            />
          </span>
          {/* اسم المؤسسة يُخفى في نطاق lg وحده لإفساح المجال لروابط النافبار الثمانية */}
          <span className="hidden min-w-0 sm:block sm:max-w-[14rem] lg:hidden xl:block xl:max-w-[10rem] 2xl:max-w-[13rem]">
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300/90">
              {t("brand.short")}
            </span>
            <span className="block truncate text-sm font-bold leading-tight text-slate-900 dark:text-white lg:text-base">
              {t("brand.name")}
            </span>
          </span>
        </Link>

        {/* روابط سطح المكتب — لا تلف، من xl فما فوق */}
        <nav
          className="hidden min-w-0 lg:flex lg:flex-1 lg:justify-center lg:px-2 xl:px-3 2xl:px-4"
          aria-label={t("nav.label")}
        >
          <ul className="flex flex-nowrap items-center justify-center gap-0.5 xl:gap-1">
            {nav.map((item) => {
              const active = isItemActive(item);
              return (
                <li key={item.href}>
                  {item.menu === "publications" ? (
                    <PublicationsNavMenu
                      variant="desktop"
                      linkClassName={linkDesktop(active)}
                      isActive={active}
                    />
                  ) : item.menu === "media" ? (
                    <MediaNavMenu
                      variant="desktop"
                      linkClassName={linkDesktop(active)}
                      isActive={active}
                    />
                  ) : (
                    <Link href={item.href} className={linkDesktop(active)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* نهاية الشريط: قائمة الجوال + لغة + ثيم */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            className="group/menu-btn flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-800 shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out hover:bg-slate-50 active:scale-[0.94] lg:hidden dark:border-white/10 dark:bg-ink-900/90 dark:text-white dark:hover:bg-white/10"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {/* أيقونة برجر → X بانتقال سلس (بدون تبديل أيقونة فجّ) */}
            <span className="relative block h-[14px] w-[18px]" aria-hidden>
              <span
                className={`absolute start-0 top-0 h-0.5 w-full rounded-full bg-current transition-[transform,top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "top-[6px] rotate-45" : "top-0 rotate-0"
                }`}
              />
              <span
                className={`absolute start-0 top-[6px] h-0.5 w-full rounded-full bg-current transition-[opacity,transform] duration-200 ease-out ${
                  menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute start-0 top-[12px] h-0.5 w-full rounded-full bg-current transition-[transform,top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "top-[6px] -rotate-45" : "top-[12px] rotate-0"
                }`}
              />
            </span>
          </button>
          <div className="hidden sm:block">
            <Tools />
          </div>
          <div className="sm:hidden">
            <Tools compact />
          </div>
        </div>
      </div>

      {/* طبقة التعتيم — تبقى في DOM لانتقال opacity سلس عند الفتح/الإغلاق */}
      <button
        type="button"
        className={`fixed inset-0 top-[4.25rem] z-[90] lg:hidden transition-opacity duration-300 ease-out ${
          menuOpen
            ? "bg-slate-950/50 opacity-100 backdrop-blur-sm"
            : "pointer-events-none bg-slate-950/50 opacity-0 backdrop-blur-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-label={t("nav.closeMenu")}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
      />

      {/* لوحة القائمة — max-height + opacity + translate لحركة انسيابية */}
      <div
        id="mobile-nav-panel"
        inert={!menuOpen ? true : undefined}
        className={`fixed inset-x-0 top-[4.25rem] z-[95] overflow-hidden border-b lg:hidden ${
          menuOpen
            ? "pointer-events-auto border-slate-200/90 bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200/70 backdrop-blur-none dark:border-white/10 dark:bg-ink-950 dark:shadow-black/50 dark:ring-white/10"
            : "pointer-events-none border-transparent bg-transparent shadow-none ring-0"
        } transition-[max-height,opacity,transform,box-shadow,border-color,background-color,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen
            ? "visible max-h-[min(82vh,32rem)] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-1 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="relative z-[1] min-h-0 max-h-[min(76vh,30rem)] overflow-y-auto overscroll-contain p-4 sm:p-5"
          aria-label={t("nav.label")}
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = isItemActive(item);
              return (
                <li key={item.href}>
                  {item.menu === "publications" ? (
                    <PublicationsNavMenu
                      variant="mobile"
                      linkClassName={linkMobile(active)}
                      isActive={active}
                      onNavigate={() => setMenuOpen(false)}
                    />
                  ) : item.menu === "media" ? (
                    <MediaNavMenu
                      variant="mobile"
                      linkClassName={linkMobile(active)}
                      isActive={active}
                      onNavigate={() => setMenuOpen(false)}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={linkMobile(active)}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
