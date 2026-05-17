"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ORG_WHATSAPP_URL } from "@/lib/org-contact";

/**
 * زر واتساب عائم ثابت في أسفل يسار الشاشة (إحداثيات فيزيائية) لجميع صفحات الموقع.
 */
export function WhatsAppFloat() {
  const { t, locale } = useLanguage();
  const label = t("footer.whatsappFloat");

  return (
    <a
      href={ORG_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      lang={locale === "en" ? "en" : "ar"}
      className="print:hidden fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] left-5 z-[68] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#128C7E] to-[#25D366] text-[1.65rem] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.55)] ring-2 ring-white/45 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_14px_36px_-8px_rgba(37,211,102,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 dark:ring-white/20 sm:bottom-7 sm:left-7 sm:h-16 sm:w-16 sm:text-[1.85rem]"
    >
      <i className="fa-brands fa-whatsapp drop-shadow-sm" aria-hidden />
    </a>
  );
}
