import type { Locale } from "@/lib/i18n";
import { MEMBER_FILES, MEMBER_PLACEHOLDER } from "@/lib/public-assets";

export type BoardMember = {
  name: string;
  role: string;
  image: string;
  /** Use contain + neutral background when no dedicated portrait */
  imagePlaceholder?: boolean;
};

const arMembers: BoardMember[] = [
  {
    name: "أ / باتل",
    role: "رئيس مجلس الأمناء",
    image: MEMBER_FILES.batil,
  },
  {
    name: "د / عبدالله هلال",
    role: "نائب رئيس مجلس الأمناء",
    image: MEMBER_PLACEHOLDER,
    imagePlaceholder: true,
  },
  {
    name: "أ / وليد منير",
    role: "أمين عام المؤسسة",
    image: MEMBER_FILES.walid,
  },
  {
    name: "أ / محمد عرفة",
    role: "أمين صندوق المؤسسة",
    image: MEMBER_FILES.mohamed,
  },
  {
    name: "د / وفاء صلاح",
    role: "عضو مجلس الأمناء",
    image: MEMBER_PLACEHOLDER,
    imagePlaceholder: true,
  },
];

const enMembers: BoardMember[] = [
  {
    name: "Mr. Batil",
    role: "Chair of the Board of Trustees",
    image: MEMBER_FILES.batil,
  },
  {
    name: "Dr. Abdullah Hilal",
    role: "Vice Chair of the Board of Trustees",
    image: MEMBER_PLACEHOLDER,
    imagePlaceholder: true,
  },
  {
    name: "Mr. Walid Munir",
    role: "Secretary General",
    image: MEMBER_FILES.walid,
  },
  {
    name: "Mr. Mohamed Arafa",
    role: "Treasurer",
    image: MEMBER_FILES.mohamed,
  },
  {
    name: "Dr. Wafaa Salah",
    role: "Member of the Board of Trustees",
    image: MEMBER_PLACEHOLDER,
    imagePlaceholder: true,
  },
];

export const boardMembers: Record<Locale, BoardMember[]> = {
  ar: arMembers,
  en: enMembers,
};
