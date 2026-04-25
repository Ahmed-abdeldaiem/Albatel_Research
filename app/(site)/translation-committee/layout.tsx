import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "لجنة الترجمة",
  description: "مهام لجنة الترجمة وجودة المخرجات اللغوية.",
};

export default function TranslationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
