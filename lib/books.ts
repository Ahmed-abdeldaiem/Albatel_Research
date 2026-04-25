import type { Locale } from "@/lib/i18n";
import { boardMembers } from "@/lib/board";
import {
  BOOK_GALLERY_CAIRO,
  BOOK_GALLERY_JARIR,
  BOOK_GALLERY_RIYADH,
  MEMBER_FILES,
} from "@/lib/public-assets";

export type BookSlug = "football-economics" | "internal-audit" | "corruption";

export type BookAuthorKey = keyof typeof MEMBER_FILES;

export type BookRecord = {
  slug: BookSlug;
  /** غلاف الإصدار تحت `/public/Books/` */
  cover: string;
  status: "published" | "coming_soon";
  /** يطابق مفاتيح `pub.*` في ملفات الترجمة */
  i18nKey: "football" | "internal" | "corruption";
  referenceUrl: string;
  authorKeys: BookAuthorKey[];
  galleries: {
    cairo: string[];
    riyadh: string[];
    jarir: string[];
  };
};

export const BOOKS: BookRecord[] = [
  {
    slug: "football-economics",
    cover: "/Books/Book1.JPG",
    status: "published",
    i18nKey: "football",
    referenceUrl: "https://www.albatelcpa.com/publications/football-economics",
    authorKeys: ["batil", "mohamed", "walid"],
    galleries: {
      cairo: [...BOOK_GALLERY_CAIRO],
      riyadh: [...BOOK_GALLERY_RIYADH],
      jarir: [...BOOK_GALLERY_JARIR],
    },
  },
  {
    slug: "internal-audit",
    cover: "/Books/Book2.jfif",
    status: "published",
    i18nKey: "internal",
    referenceUrl: "https://www.albatelcpa.com/publications/internal-audit",
    authorKeys: ["batil", "mohamed", "walid"],
    galleries: {
      cairo: [...BOOK_GALLERY_CAIRO],
      riyadh: [...BOOK_GALLERY_RIYADH],
      /** جرير: الإصدار الأول (اقتصاديات كرة القدم) فقط — لا يُعرض هذا الكتاب في جرير */
      jarir: [],
    },
  },
  {
    slug: "corruption",
    cover: "/Books/Book3.jpeg",
    status: "coming_soon",
    i18nKey: "corruption",
    referenceUrl: "https://www.albatelcpa.com/publications",
    authorKeys: ["batil", "mohamed", "walid"],
    galleries: { cairo: [], riyadh: [], jarir: [] },
  },
];

export const BOOK_SLUGS = BOOKS.map((b) => b.slug);

export function getBook(slug: string): BookRecord | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export function publishedBooks(): BookRecord[] {
  return BOOKS.filter((b) => b.status === "published");
}

export function bookAuthors(
  locale: Locale,
  keys: BookAuthorKey[],
): { name: string; role: string; image: string; imagePlaceholder?: boolean }[] {
  const list = boardMembers[locale];
  return keys
    .map((key) => {
      const path = MEMBER_FILES[key];
      const m = list.find((x) => x.image === path);
      return m
        ? { name: m.name, role: m.role, image: m.image, imagePlaceholder: m.imagePlaceholder }
        : null;
    })
    .filter(Boolean) as {
    name: string;
    role: string;
    image: string;
    imagePlaceholder?: boolean;
  }[];
}
