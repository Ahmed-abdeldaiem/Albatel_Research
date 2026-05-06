/**
 * أداة التحقق من رقم الهاتف.
 *
 * تقبل صيغ المستخدمين المصريين الشائعة + بقية الصيغ الدولية الصحيحة:
 *   01067021757            ✓ موبايل مصري (11 رقم — Vodafone/Etisalat/Orange/WE)
 *   +20 10 6702 1757       ✓ موبايل مصري بكود الدولة
 *   00201067021757         ✓ موبايل مصري — صيغة الاتصال الدولي الصفرية
 *   023 456 7890           ✓ أرضي القاهرة
 *   +1 202 555 1234        ✓ رقم دولي عام
 *
 * يُرفض:
 *   123                    ✗ قصير
 *   abc1234                ✗ أحرف
 *   01234                  ✗ ناقص
 *   099 1234 5678          ✗ بادئة موبايل غير معروفة
 */

const STRIP = /[\s\-().]/g;

/** يحوّل بدائل الإدخال (00 → +) ويزيل أحرف التنسيق. */
function normalize(value: string): string {
  let s = value.replace(STRIP, "");
  if (s.startsWith("00")) s = "+" + s.slice(2);
  return s;
}

/** موبايل مصري بأي صيغة (مع/بدون كود الدولة، مع/بدون صفر بادئ). */
const RX_EG_MOBILE = /^(?:\+?20)?0?1[0125]\d{8}$/;

/** أرضي مصري (8-10 أرقام بعد الصفر/كود الدولة، لا تبدأ بـ 1). */
const RX_EG_LANDLINE = /^(?:\+?20)?0?[2-9]\d{6,8}$/;

/** رقم دولي عام بـ "+" متبوعاً برمز دولة + 7 إلى 14 رقماً (إجمالي 8-15). */
const RX_INTL = /^\+\d{8,15}$/;

export function isValidPhone(value: string | undefined | null): boolean {
  if (!value || typeof value !== "string") return false;
  const s = normalize(value);
  if (!s) return false;
  if (RX_EG_MOBILE.test(s)) return true;
  if (RX_EG_LANDLINE.test(s)) return true;
  if (RX_INTL.test(s)) return true;
  return false;
}

/** الحد الأدنى لعدد حروف الرسالة في نموذج التواصل. */
export const MIN_MESSAGE_LENGTH = 10;
