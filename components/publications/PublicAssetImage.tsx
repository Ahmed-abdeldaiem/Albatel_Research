"use client";

import Image from "next/image";
import { useState } from "react";
import { SECTION_IMAGES } from "@/lib/public-assets";

const FALLBACK = SECTION_IMAGES[2];

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function PublicAssetImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 400px",
  priority,
}: Props) {
  const [useFallback, setUseFallback] = useState(false);
  const effective = useFallback ? FALLBACK : src;

  return (
    <Image
      src={effective}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setUseFallback(true)}
    />
  );
}
