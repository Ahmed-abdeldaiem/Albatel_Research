import type { Locale } from "@/lib/i18n";
import { boardMembers } from "@/lib/board";
import {
  BOOK_COVER_CORRUPTION,
  BOOK_COVER_FOOTBALL,
  BOOK_COVER_INTERNAL,
  BOOK_GALLERY_CAIRO,
  BOOK_GALLERY_JARIR,
  BOOK_GALLERY_RIYADH,
  MEMBER_FILES,
} from "@/lib/public-assets";

export type BookSlug = "football-economics" | "internal-audit" | "corruption";

export type BookAuthorKey = keyof typeof MEMBER_FILES;

export type BookRecord = {
  slug: BookSlug;
  /** غلاف الإصدار — مسار من جذر `public/` (مثل `/Book1.JPG`) */
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
  /** معرّف فيديو يوتيوب اختياري (الجزء بعد `youtu.be/` أو `?v=`) — يُعرض في صفحة الكتاب إن وُجد */
  youtubeId?: string;
};

export const BOOKS: BookRecord[] = [
  {
    slug: "football-economics",
    cover: BOOK_COVER_FOOTBALL,
    status: "published",
    i18nKey: "football",
    referenceUrl: "https://www.albatelcpa.com/publications/football-economics",
    authorKeys: ["batil", "mohamed", "walid"],
    galleries: {
      cairo: [...BOOK_GALLERY_CAIRO],
      riyadh: [...BOOK_GALLERY_RIYADH],
      jarir: [...BOOK_GALLERY_JARIR],
    },
    youtubeId: "PSjkFpmO0x8",
  },
  {
    slug: "internal-audit",
    cover: BOOK_COVER_INTERNAL,
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
    cover: BOOK_COVER_CORRUPTION,
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
