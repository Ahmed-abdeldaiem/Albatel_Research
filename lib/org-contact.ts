/** رقم الجوال المحلي — مصر */
export const ORG_PHONE_DISPLAY = "01555582174";

/** رابط فتح محادثة واتساب (E.164 بدون +) */
export const ORG_WHATSAPP_URL = "https://wa.me/201555582174";

/** إحداثيات مقرّ المؤسسة — من الملف التجاري على خرائط جوجل */
export const ORG_GEO = { lat: 31.1998027, lng: 29.9105059 } as const;

/** رابط الملف التجاري للمؤسسة على خرائط جوجل (يُفتح بالاسم والتقييمات) */
export const ORG_MAPS_URL = "https://maps.app.goo.gl/aeQcf8qDWYd3tUEt7";

/** رابط الاتجاهات إلى المقرّ مباشرةً */
export const ORG_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ORG_GEO.lat},${ORG_GEO.lng}`;

/**
 * خريطة مضمّنة على دبوس المؤسسة نفسه (معرّف المكان + الاسم) — بلا مفتاح API.
 * عند تغيير المقرّ: من خرائط جوجل ← مشاركة ← تضمين خريطة، وانسخ قيمة `src`.
 */
export const ORG_MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700!2d${ORG_GEO.lng}!3d${ORG_GEO.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c300712c88fd%3A0x708e548174e57c53!2z2YXYpNiz2LPYqSDYqNin2KrZhCDYudio2K_Yp9mE2YTZhyDYp9mE2KjYp9iq2YQg2YTZhNio2K3ZiNirINmI2KfZhNiv2LHYp9iz2KfYqg!5e0!3m2!1sar!2seg!4v1762700000000!5m2!1sar!2seg`;
