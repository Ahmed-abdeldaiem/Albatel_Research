/** القيمة الافتراضية إذا لم يُضبط `NEXT_PUBLIC_SITE_URL` في البيئة (مثلاً على Vercel). */
const DEFAULT_SITE_URL = "https://www.albatel-research.org";

function normalizeOrigin(url: string): string {
  const u = url.trim().replace(/\/+$/, "");
  const parsed = new URL(u);
  return parsed.origin;
}

/**
 * عنوان الموقع العلني — يُستخدم في metadata و sitemap و robots وروابط مطلقة.
 *
 * **عند الرفع:** عيّن في بيئة البناء/الإنتاج:
 * `NEXT_PUBLIC_SITE_URL=https://www.example.com`
 * (بدون شرطة مائلة في النهاية). إن لم يُضبط، يُستخدم العنوان الافتراضي أعلاه.
 */
export const SITE_URL: string = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return normalizeOrigin(raw);
  } catch {
    return DEFAULT_SITE_URL;
  }
})();
