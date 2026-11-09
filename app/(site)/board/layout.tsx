import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تشكيل المجلس",
  alternates: { canonical: "/board" },
  description:
    "تشكيل مجلس أمناء مؤسسة باتل عبدالله الباتل للبحوث والدراسات: نخبة من الخبرات الأكاديمية والمهنية في المحاسبة والاستشارات والتطوير، وهيكل الحوكمة الذي يضبط استراتيجية المؤسسة.",
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
