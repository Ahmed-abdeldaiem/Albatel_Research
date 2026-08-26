import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetail } from "@/components/news/NewsDetail";
import { mediaLocalesAr } from "@/lib/media-locales";
import { getNews, NEWS_SLUGS } from "@/lib/news";
import { SITE_URL } from "@/lib/site-url";

// =============================================================================
// صفحة تفاصيل خبر — /news/[slug]
// نصوص الـ metadata تُقرأ من النسخة العربية مباشرةً (لغة الموقع الافتراضية)
// لأن ترجمة العميل غير متاحة على الخادم.
// =============================================================================

export function generateStaticParams() {
  return NEWS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = getNews(slug);
  if (!news) return { title: mediaLocalesAr.news.title };

  const item = mediaLocalesAr.news.items[news.i18nKey];
  const title = item.title;
  const description = item.seoDescription;
  const path = `/news/${news.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      publishedTime: news.date,
      images: [{ url: news.cover, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [news.cover] },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = getNews(slug);
  if (!news) notFound();

  const item = mediaLocalesAr.news.items[news.i18nKey];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.seoDescription,
    datePublished: news.date,
    inLanguage: "ar",
    image: [`${SITE_URL}${news.cover}`],
    mainEntityOfPage: `${SITE_URL}/news/${news.slug}`,
    publisher: {
      "@type": "Organization",
      name: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo1_1.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsDetail slug={news.slug} />
    </>
  );
}
