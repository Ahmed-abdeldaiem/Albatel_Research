import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تشكيل المجلس",
  description: "أعضاء مجلس الأمناء وهيكل الحوكمة.",
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
