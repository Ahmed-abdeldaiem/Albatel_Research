/**
 * محافظات جمهورية مصر العربية (٢٧ محافظة).
 * - `value` يُخزَّن ويُرسَل في طلبات الكتب (نص عربي مقروء بسهولة في البريد).
 * - `ar` و `en` للعرض في واجهة الفورم بحسب لغة الموقع.
 * مرتّبة بالترتيب الأبجدي العربي.
 */
export type EgyptGovernorate = {
  /** القيمة المُرسَلة (الاسم بالعربية) */
  value: string;
  ar: string;
  en: string;
};

export const EGYPT_GOVERNORATES: readonly EgyptGovernorate[] = [
  { value: "الإسكندرية", ar: "الإسكندرية", en: "Alexandria" },
  { value: "الإسماعيلية", ar: "الإسماعيلية", en: "Ismailia" },
  { value: "الأقصر", ar: "الأقصر", en: "Luxor" },
  { value: "البحر الأحمر", ar: "البحر الأحمر", en: "Red Sea" },
  { value: "البحيرة", ar: "البحيرة", en: "Beheira" },
  { value: "الجيزة", ar: "الجيزة", en: "Giza" },
  { value: "الدقهلية", ar: "الدقهلية", en: "Dakahlia" },
  { value: "السويس", ar: "السويس", en: "Suez" },
  { value: "الشرقية", ar: "الشرقية", en: "Sharqia" },
  { value: "الغربية", ar: "الغربية", en: "Gharbia" },
  { value: "الفيوم", ar: "الفيوم", en: "Fayoum" },
  { value: "القاهرة", ar: "القاهرة", en: "Cairo" },
  { value: "القليوبية", ar: "القليوبية", en: "Qalyubia" },
  { value: "المنوفية", ar: "المنوفية", en: "Monufia" },
  { value: "المنيا", ar: "المنيا", en: "Minya" },
  { value: "الوادي الجديد", ar: "الوادي الجديد", en: "New Valley" },
  { value: "أسوان", ar: "أسوان", en: "Aswan" },
  { value: "أسيوط", ar: "أسيوط", en: "Asyut" },
  { value: "بني سويف", ar: "بني سويف", en: "Beni Suef" },
  { value: "بورسعيد", ar: "بورسعيد", en: "Port Said" },
  { value: "جنوب سيناء", ar: "جنوب سيناء", en: "South Sinai" },
  { value: "دمياط", ar: "دمياط", en: "Damietta" },
  { value: "سوهاج", ar: "سوهاج", en: "Sohag" },
  { value: "شمال سيناء", ar: "شمال سيناء", en: "North Sinai" },
  { value: "قنا", ar: "قنا", en: "Qena" },
  { value: "كفر الشيخ", ar: "كفر الشيخ", en: "Kafr El Sheikh" },
  { value: "مطروح", ar: "مطروح", en: "Matrouh" },
] as const;

export const EGYPT_GOVERNORATE_VALUES: ReadonlySet<string> = new Set(
  EGYPT_GOVERNORATES.map((g) => g.value),
);
