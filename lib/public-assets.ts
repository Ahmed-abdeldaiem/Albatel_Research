/** Local files under `/public` — update if filenames change */
export const LOGO_NAVBAR = "/Logo_trans.png";
export const MEMBER_PLACEHOLDER = "/Logo_trans.png";

export const MEMBER_FILES = {
  batil: "/members/Batel.jpeg",
  walid: "/members/Walid.jpeg",
  mohamed: "/members/Mohamed.jpeg",
  wafa: "/wafa.png",
} as const;

export const SECTION_IMAGES = [
  "/Section_Images/1.jpg",
  "/Section_Images/2.jpg",
  "/Section_Images/Board_of_Trustees.jpg",
  "/Section_Images/4.jpg",
] as const;

/**
 * أصول الكتب والمعارض: ضع الملفات في **جذر** `public/` (مثل `public/Book1.JPG`)
 * حتى تعمل على الاستضافة الحساسة لحالة الأحرف (Linux) — وليس داخل `public/Books/` إلا إن نسختها هناك.
 */
export const BOOKS_HOME_PROMO_IMAGE = "/Books2.png";

/** معرض القاهرة — `public/Cairo*.jfif` */
export const BOOK_GALLERY_CAIRO = [
  "/Cairo1.jfif",
  "/Cairo2.jfif",
  "/Cairo3.jfif",
  "/Cairo4.jfif",
] as const;

/** معرض الرياض — `public/Riyad*.jfif` */
export const BOOK_GALLERY_RIYADH = [
  "/Riyad1.jfif",
  "/Riyad2.jfif",
  "/Riyad3.jfif",
  "/Riyad4.jfif",
  "/Riyad5.jfif",
] as const;

/** جرير — `public/Jarir.jfif` */
export const BOOK_GALLERY_JARIR = ["/Jarir.jfif"] as const;

export const BOOK_COVER_FOOTBALL = "/Book1.JPG";
export const BOOK_COVER_INTERNAL = "/Book2.jfif";
export const BOOK_COVER_CORRUPTION = "/Book3.jpeg";
