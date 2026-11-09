import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "لجنة الترجمة",
  description:
    "لجنة الترجمة والتعريب في مؤسسة الباتل: ترجمة مهنية متخصصة بدقة في المصطلح وأمانة في النص، وتوحيد للمصطلحات العلمية — قدّم طلب ترجمة عبر النموذج الرسمي.",
};

export default function TranslationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
