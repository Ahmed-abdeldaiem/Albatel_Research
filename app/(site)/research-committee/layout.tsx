import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "لجنة البحوث",
  description: "مهام لجنة البحوث ومعايير الجودة.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
