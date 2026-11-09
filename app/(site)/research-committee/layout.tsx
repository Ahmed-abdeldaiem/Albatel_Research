import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "لجنة البحوث",
  alternates: { canonical: "/research-committee" },
  description:
    "لجنة البحوث والدراسات في مؤسسة الباتل: منصة بحثية متعددة التخصصات تُعِدّ دراسات تطبيقية وإصدارات رصينة بمنهجية علمية — قدّم طلب بحث أو دراسة عبر النموذج الرسمي.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
