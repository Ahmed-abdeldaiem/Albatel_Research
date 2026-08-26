"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// =============================================================================
// MediaNavMenu — قائمة "المركز الإعلامي" المنسدلة في النافبار
//
// تتبع نفس سلوك `PublicationsNavMenu` (فتح بالمرور على سطح المكتب، وأكورديون
// على الجوال) مع اختلاف واحد: لا توجد صفحة أمّ للمركز الإعلامي، لذا العنصر
// الرئيسي زر لا رابط — والوجهات هي /blog و/news فقط.
// =============================================================================

type MediaNavMenuProps = {
  variant: "desktop" | "mobile";
  /** أصناف عنصر النافبار — تُمرَّر من `SiteHeader` لتوحيد المظهر */
  linkClassName: string;
  isActive: boolean;
  onNavigate?: () => void;
};

const MEDIA_LINKS = [
  {
    href: "/blog",
    icon: "fa-solid fa-feather-pointed",
    labelKey: "nav.blog",
    descKey: "nav.blogDesc",
    /** المدونة لم تُنشَر بعد — شريط "قريبًا" */
    soon: true,
  },
  {
    href: "/news",
    icon: "fa-solid fa-newspaper",
    labelKey: "nav.news",
    descKey: "nav.newsDesc",
    soon: false,
  },
] as const;

export function MediaNavMenu({
  variant,
  linkClassName,
  isActive,
  onNavigate,
}: MediaNavMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const suppressOpenRef = useRef(false);
  const [subOpen, setSubOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);

  useEffect(() => {
    setSubOpen(false);
    setDesktopOpen(false);
    suppressOpenRef.current = false;
  }, [pathname]);

  useEffect(() => {
    if (variant !== "desktop" || !desktopOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setDesktopOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopOpen, variant]);

  const handleNavigate = () => {
    setSubOpen(false);
    setDesktopOpen(false);
    suppressOpenRef.current = true;
    onNavigate?.();
  };

  const handleDesktopEnter = () => {
    if (!suppressOpenRef.current) setDesktopOpen(true);
  };

  const handleDesktopLeave = () => {
    suppressOpenRef.current = false;
    setDesktopOpen(false);
  };

  const mediaLinks = MEDIA_LINKS.map((item) => {
    const active =
      pathname === item.href || pathname.startsWith(`${item.href}/`);

    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={[
            "group/item flex items-start gap-3 rounded-xl p-2.5 transition-[background-color,box-shadow,transform] duration-200 ease-out",
            active
              ? "bg-brand-50 ring-1 ring-brand-200/80 dark:bg-brand-500/10 dark:ring-brand-400/25"
              : "hover:bg-slate-50 hover:shadow-sm dark:hover:bg-white/5",
          ].join(" ")}
          onClick={handleNavigate}
          aria-current={active ? "page" : undefined}
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-md shadow-brand-600/20 transition duration-500 group-hover/item:scale-[1.04]">
            <i className={`${item.icon} text-base`} aria-hidden />
          </span>
          <span className="min-w-0 flex-1 text-start">
            <span className="flex items-center gap-2">
              <span className="text-sm font-bold leading-snug text-slate-900 dark:text-white">
                {t(item.labelKey)}
              </span>
              {item.soon ? (
                <span className="inline-flex shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
                  {t("nav.blogSoon")}
                </span>
              ) : null}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {t(item.descKey)}
            </span>
          </span>
        </Link>
      </li>
    );
  });

  const dropdownContent = (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/60 dark:border-white/10 dark:bg-ink-950 dark:shadow-black/40 dark:ring-white/10">
      <ul className="space-y-1 p-2">{mediaLinks}</ul>
    </div>
  );

  const dropdownPanel =
    variant === "desktop" ? (
      <div
        className={[
          "absolute top-full z-[120] w-[min(calc(100vw-2rem),21rem)] origin-top pt-2.5 start-0 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          desktopOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        ].join(" ")}
        id={menuId}
        role="region"
        aria-label={t("nav.mediaMenu")}
      >
        {dropdownContent}
      </div>
    ) : (
      <div
        className={[
          "mt-2 overflow-hidden transition-[opacity,transform,visibility,max-height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          subOpen
            ? "visible max-h-[22rem] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-1 opacity-0 pointer-events-none",
        ].join(" ")}
        id={menuId}
        role="region"
        aria-label={t("nav.mediaMenu")}
      >
        {dropdownContent}
      </div>
    );

  if (variant === "mobile") {
    return (
      <div>
        <button
          type="button"
          className={`${linkClassName} flex w-full items-center justify-between text-start`}
          onClick={() => setSubOpen((open) => !open)}
          aria-expanded={subOpen}
          aria-controls={menuId}
        >
          <span>{t("nav.media")}</span>
          <i
            className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ease-out ${subOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {dropdownPanel}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={handleDesktopEnter}
      onMouseLeave={handleDesktopLeave}
      onFocusCapture={handleDesktopEnter}
      onBlurCapture={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) {
          handleDesktopLeave();
        }
      }}
    >
      <button
        type="button"
        className={`${linkClassName} inline-flex items-center gap-1.5 pe-2`}
        aria-haspopup="true"
        aria-expanded={desktopOpen}
        aria-controls={menuId}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setDesktopOpen((open) => !open)}
      >
        {t("nav.media")}
        <i
          className={`fa-solid fa-chevron-down text-[0.55rem] opacity-70 transition-transform duration-300 ease-out ${desktopOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {dropdownPanel}
    </div>
  );
}
