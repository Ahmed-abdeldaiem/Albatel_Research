"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKS } from "@/lib/books";

type PublicationsNavMenuProps = {
  variant: "desktop" | "mobile";
  linkClassName: string;
  isActive: boolean;
  onNavigate?: () => void;
};

export function PublicationsNavMenu({
  variant,
  linkClassName,
  isActive,
  onNavigate,
}: PublicationsNavMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const suppressOpenRef = useRef(false);
  const [subOpen, setSubOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);

  const isPublicationsPath =
    pathname === "/publications" || pathname.startsWith("/publications/");

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

  const closeMenus = () => {
    setSubOpen(false);
    setDesktopOpen(false);
  };

  const handleNavigate = () => {
    closeMenus();
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

  const bookLinks = BOOKS.map((book) => {
    const pk = book.i18nKey;
    const href = `/publications/${book.slug}`;
    const active = pathname === href;

    return (
      <li key={book.slug}>
        <Link
          href={href}
          className={[
            "group/item flex items-start gap-3 rounded-xl p-2.5 transition-[background-color,box-shadow,transform] duration-200 ease-out",
            active
              ? "bg-brand-50 ring-1 ring-brand-200/80 dark:bg-brand-500/10 dark:ring-brand-400/25"
              : "hover:bg-slate-50 hover:shadow-sm dark:hover:bg-white/5",
          ].join(" ")}
          onClick={handleNavigate}
        >
          <span className="relative h-16 w-[4.25rem] shrink-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-ink-900 dark:ring-white/10">
            <Image
              src={book.navCover}
              alt=""
              fill
              className="object-contain p-0.5 transition duration-500 group-hover/item:scale-[1.03]"
              sizes="68px"
            />
          </span>
          <span className="min-w-0 flex-1 text-start">
            <span className="mb-1 inline-flex rounded-full bg-brand-100/90 px-2 py-0.5 text-[10px] font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
              {t(`pub.${pk}.badge`)}
            </span>
            <span className="mt-1 block text-sm font-bold leading-snug text-slate-900 dark:text-white">
              {t(`pub.${pk}.title`)}
            </span>
            <span className="mt-0.5 block line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {t(`pub.${pk}.subtitle`)}
            </span>
          </span>
        </Link>
      </li>
    );
  });

  const dropdownContent = (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/60 dark:border-white/10 dark:bg-ink-950 dark:shadow-black/40 dark:ring-white/10"
    >
      <ul className="space-y-1 p-2">{bookLinks}</ul>
      <div className="border-t border-slate-200/80 p-2 dark:border-white/10">
        <Link
          href="/publications"
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-bold text-brand-700 transition hover:bg-brand-50 dark:bg-white/5 dark:text-brand-300 dark:hover:bg-brand-500/10"
          onClick={handleNavigate}
        >
          {t("nav.viewAllPublications")}
          <i className="fa-solid fa-arrow-left text-xs rtl:rotate-180" aria-hidden />
        </Link>
      </div>
    </div>
  );

  const dropdownPanel =
    variant === "desktop" ? (
      <div
        className={[
          "absolute top-full z-[120] w-[min(calc(100vw-2rem),22rem)] origin-top pt-2.5 start-0 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          desktopOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        ].join(" ")}
        id={menuId}
        role="region"
        aria-label={t("nav.publicationsMenu")}
      >
        {dropdownContent}
      </div>
    ) : (
      <div
        className={[
          "mt-2 overflow-hidden transition-[opacity,transform,visibility,max-height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          subOpen
            ? "visible max-h-[28rem] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-1 opacity-0 pointer-events-none",
        ].join(" ")}
        id={menuId}
        role="region"
        aria-label={t("nav.publicationsMenu")}
      >
        {dropdownContent}
      </div>
    );

  if (variant === "mobile") {
    return (
      <div>
        <div className="flex items-stretch gap-1">
          <Link
            href="/publications"
            className={`${linkClassName} flex-1`}
            onClick={handleNavigate}
            aria-current={isPublicationsPath ? "page" : undefined}
          >
            {t("nav.publications")}
          </Link>
          <button
            type="button"
            className={[
              "flex w-12 shrink-0 items-center justify-center rounded-xl border transition-[background-color,transform] duration-200 ease-out active:scale-[0.98]",
              isPublicationsPath || subOpen
                ? "border-brand-500/30 bg-brand-600 text-white dark:bg-brand-500 dark:text-ink-950"
                : "border-slate-200/90 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-ink-900/90 dark:text-slate-300 dark:hover:bg-white/10",
            ].join(" ")}
            onClick={() => setSubOpen((open) => !open)}
            aria-expanded={subOpen}
            aria-controls={menuId}
            aria-label={t("nav.publicationsMenuToggle")}
          >
            <i
              className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ease-out ${subOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </div>
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
      <Link
        href="/publications"
        className={`${linkClassName} inline-flex items-center gap-1.5 pe-2`}
        aria-current={isActive ? "page" : undefined}
        aria-haspopup="true"
        aria-expanded={desktopOpen}
        aria-controls={menuId}
        onClick={handleNavigate}
      >
        {t("nav.publications")}
        <i
          className={`fa-solid fa-chevron-down text-[0.55rem] opacity-70 transition-transform duration-300 ease-out ${desktopOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </Link>
      {dropdownPanel}
    </div>
  );
}