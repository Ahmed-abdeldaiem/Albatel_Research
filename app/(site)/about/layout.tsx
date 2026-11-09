import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "مؤسسة باتل عبدالله الباتل للبحوث والدراسات، المشهرة برقم ٤٦٥٠، مؤسسة مصرية للبحوث والتطوير والترجمة من قلب الإسكندرية — تعرّف على رؤيتنا ورسالتنا وأهدافنا وقيمنا.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
