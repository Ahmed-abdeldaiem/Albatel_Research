import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookDetail } from "@/components/publications/BookDetail";
import { BOOK_SLUGS, getBook, type BookSlug } from "@/lib/books";
import { pubLocalesAr } from "@/lib/pub-locales";

export function generateStaticParams() {
  return BOOK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return { title: "إصداراتنا" };
  const pk = book.i18nKey;
  const title = pubLocalesAr[pk].title as string;
  const description = `${pubLocalesAr[pk].subtitle as string} — ${pubLocalesAr[pk].authors as string}`;
  const path = `/publications/${book.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "book",
      title,
      description,
      url: path,
      images: [{ url: book.cover, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [book.cover] },
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!BOOK_SLUGS.includes(slug as BookSlug)) notFound();
  return <BookDetail slug={slug as BookSlug} />;
}
