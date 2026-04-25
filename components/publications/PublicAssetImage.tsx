"use client";

import { useState } from "react";
import { SECTION_IMAGES } from "@/lib/public-assets";

const FALLBACK = SECTION_IMAGES[2];

/**
 * صور محلية من `public/` (غلاف كتب، معارض `.jfif`).
 * لا نستخدم `next/image` هنا: محسّن Vercel/Sharp غالباً لا يخدم `.jfif` فيُفشل التحميل
 * فيُستبدل الكل بنفس الصورة الاحتياطية. `<img>` يخدم الملف كما هو من `/…`.
 */
type Props = {
  src: string;
  alt: string;
  className?: string;
  /** متوافق مع الاستدعاءات القديمة — لا يُستخدم مع `<img>` */
  sizes?: string;
  priority?: boolean;
};

export function PublicAssetImage({
  src,
  alt,
  className = "",
  priority,
}: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const effective = useFallback ? FALLBACK : src;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- `.jfif` من `public/`؛ محسّن `next/image` يفشل على Vercel
    <img
      src={effective}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      onError={() => setUseFallback(true)}
    />
  );
}
