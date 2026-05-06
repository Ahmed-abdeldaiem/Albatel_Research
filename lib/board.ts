import type { Locale } from "@/lib/i18n";
import { MEMBER_FILES, MEMBER_PLACEHOLDER } from "@/lib/public-assets";

// =============================================================================
// نوع بيانات عضو مجلس الأمناء
// كل عضو يحمل:
//   - name: الاسم كما يظهر على البطاقة
//   - role: الدور داخل المجلس (رئيس / نائب / أمين عام / أمين صندوق / عضو)
//   - title: اللقب المهني الإجمالي (يظهر كـ subtitle تحت الاسم)
//   - image: مسار الصورة الشخصية
//   - imagePlaceholder: عند عدم وجود صورة، يُستخدم شعار المؤسسة بشكل contain
//   - bio: السيرة المختصرة (فقرة قصيرة)
//   - qualifications: قائمة المؤهلات والخبرات (تظهر داخل <details> قابل للتوسيع)
//   - featured: عضو يحصل على بطاقة كبيرة (Featured) — رئيس المجلس فقط
// =============================================================================
export type BoardMember = {
  name: string;
  role: string;
  title: string;
  image: string;
  imagePlaceholder?: boolean;
  bio?: string;
  qualifications?: string[];
  featured?: boolean;
};

// =============================================================================
// أعضاء المجلس — النسخة العربية
// =============================================================================
const arMembers: BoardMember[] = [
  // (1) رئيس مجلس الأمناء — البطاقة المميزة
  {
    name: "أ. باتل عبدالله الباتل",
    role: "رئيس مجلس الأمناء",
    title: "محاسب قانوني معتمد — الشريك المؤسس والرئيس التنفيذي",
    image: MEMBER_FILES.batil,
    featured: true,
    bio:
      "محاسب قانوني معتمد من الهيئة السعودية للمراجعين والمحاسبين (SOCPA)، وحاصل على ماجستير في المحاسبة من جامعة ميامي – فلوريدا. يمتلك خبرة تزيد عن عشرين عامًا في المحاسبة والاستشارات المالية والمراجعة وإدارة الأنظمة المالية، وتولّى مناصب قيادية في عدد من كبرى الشركات بالمملكة العربية السعودية. له سجل حافل في الاستشارات المالية، وإدارة المخاطر، وتحليل الأداء المالي، وتطوير الأنظمة المحاسبية، وقيادة الفرق متعددة التخصصات، وضمان الامتثال للمعايير المحاسبية، إلى جانب إسهامات واسعة في البرامج التدريبية وبناء الحلول المؤسسية المبتكرة.",
    qualifications: [
      "الشريك المؤسس والرئيس التنفيذي — شركة الباتل وشركاؤه للاستشارات المهنية (منذ 2006)",
      "الشريك المؤسس والرئيس التنفيذي — شركة الباتل للاستشارات، القاهرة",
      "مدير مركز بتيل الإتقان للتدريب",
      "مدرب سابق في معهد الإدارة العامة لمدة تسع سنوات",
      "زمالة الهيئة السعودية للمحاسبين والمراجعين (SOCPA)",
      "ماجستير المحاسبة — جامعة ميامي، فلوريدا، الولايات المتحدة (2000)",
      "بكالوريوس المحاسبة — جامعة الإمام محمد بن سعود الإسلامية",
      "مستشار مالي معتمد (CFC)",
      "مدير أعمال معتمد (CBA)",
      "محكم معتمد من وزارة العدل في المعاملات المالية والمحاسبية",
      "عضو منتسب — الهيئة السعودية للمقيّمين المعتمدين",
      "مستشار وقف معتمد — الجمعية العلمية القضائية السعودية",
      "مستشار للجمعيات الخيرية (جمعية رعاية الأيتام، ومؤسسة سليمان الراجحي الخيرية)",
      "رخصة مزاولة المحاسبة والمراجعة المعتمدة — وزارة التجارة",
    ],
  },

  // (2) نائب رئيس المجلس — لا توجد بيانات بعد
  {
    name: "د. عبدالله هلال",
    role: "نائب رئيس مجلس الأمناء",
    title: "السيرة الذاتية ستُضاف قريبًا",
    image: MEMBER_PLACEHOLDER,
    imagePlaceholder: true,
  },

  // (3) أمين عام المؤسسة
  {
    name: "أ. وليد منير",
    role: "أمين عام المؤسسة",
    title: "خبير الضرائب وتسعير المعاملات — ماجستير في المالية العامة والضرائب",
    image: MEMBER_FILES.walid,
    bio:
      "خبير في الضرائب وتسعير المعاملات (Transfer Pricing)، ومدير التدريب والتطوير بمركز بتيل الإتقان للتدريب. حاصل على الماجستير في المالية العامة والضرائب، ويشغل عضوية ومناصب قيادية في كبرى الجمعيات المهنية المحلية والدولية في مجالات المحاسبة والمراجعة والضرائب.",
    qualifications: [
      "شريك الضرائب ورئيس قسم تسعير المعاملات (Transfer Pricing) — UHY",
      "ماجستير في المالية العامة والضرائب",
      "دبلوم في الضرائب والمحاسبة والمالية",
      "شهادة المعايير الدولية للمحاسبة في القطاع العام (CIPSAS) — ACCA",
      "زميل جمعية الضرائب المصرية (Fellow EAT)",
      "زميل الجمعية المصرية للمالية العامة والضرائب (Fellow EAPFT)",
      "أمين عام ومؤسس جمعية المحاسبين والمدققين الداخليين (AAIA)",
      "مدرب معتمد من مؤسسة التمويل الدولية (IFC) — مجموعة البنك الدولي",
      "عضو اتحاد المحاسبين والمراجعين العرب (M.AFAA)",
      "عضو رابطة محترفي الضرائب الأمريكية (M.NATP)",
      "مدير التدريب والتطوير — مركز بتيل الإتقان للتدريب",
    ],
  },

  // (4) أمين صندوق المؤسسة
  {
    name: "أ. محمد عرفة",
    role: "أمين صندوق المؤسسة",
    title: "محاسب قانوني ومراجع معتمد — Certified IPSASB",
    image: MEMBER_FILES.mohamed,
    bio:
      "خبير مهني في المراجعة والامتثال، وخبير في التدريب المهني وتطوير الكفاءات في مجالَي المحاسبة والمراجعة، ومدير التشغيل والعمليات بمركز بتيل الإتقان للتدريب. يحمل عضويات في كبرى الجمعيات المهنية المحلية والعربية، وله إسهامات في البحث والتطوير والتدريب المهني المعتمد دوليًا.",
    qualifications: [
      "شريك المراجعة في UHY العالمية",
      "عضو جمعية المحاسبين القانونيين",
      "عضو اتحاد المحاسبين والمراجعين العرب",
      "حاصل على شهادة المعايير الدولية للقطاع العام (IPSAS) من ACCA",
      "أمين صندوق جمعية المحاسبين والمدققين الداخليين (AAIA)",
      "أمين عام لجنة البحث والتطوير بـ AAIA",
      "مدرب مهني معتمد من مؤسسة التمويل الدولية (IFC) — مجموعة البنك الدولي",
      "مدير التشغيل والعمليات — مركز بتيل الإتقان للتدريب",
    ],
  },

  // (5) عضو مجلس الأمناء — د. وفاء صلاح
  {
    name: "د. وفاء صلاح محمد",
    role: "عضو مجلس الأمناء",
    title: "أستاذ المحاسبة — كلية إدارة الأعمال والاقتصاد والعلوم السياسية، الجامعة البريطانية في مصر",
    image: MEMBER_FILES.wafa,
    bio:
      "أستاذ المحاسبة بكلية إدارة الأعمال والاقتصاد والعلوم السياسية في الجامعة البريطانية في مصر (BUE). حاصلة على دكتوراه المحاسبة من جامعة القاهرة، ولها إسهامات بحثية مميزة عبر منشورات في مجلات دولية محكّمة. اهتماماتها البحثية في المحاسبة الدولية والمحاسبة المالية. زميلة الأكاديمية البريطانية للتعليم العالي (FHEA) منذ 2022، وترأس منذ 2020 لجنة الابتكار والتعلّم بالتقنيات الحديثة بالكلية.",
    qualifications: [
      "أستاذ المحاسبة — الجامعة البريطانية في مصر (منذ 2025)",
      "دكتوراه المحاسبة — جامعة القاهرة (2014)",
      "زميلة الأكاديمية البريطانية للتعليم العالي (FHEA — UK, 2022)",
      "دكتوراه عملية في تحليل البيانات — جامعة القاهرة (2026)",
      "ماجستير عملي في تحليل البيانات — جامعة القاهرة (2021)",
      "ماجستير المحاسبة — جامعة القاهرة",
      "بكالوريوس المحاسبة بمرتبة الشرف — جامعة القاهرة، قسم اللغة الإنجليزية",
      "رئيس لجنة التعلم الإلكتروني بالكلية (2024 — حتى الآن)",
      "رئيس لجنة الابتكار والتعلّم بالتقنيات الحديثة (2020 — حتى الآن)",
      "مراجع في الهيئة القومية لضمان جودة التعليم (NAQAAE) منذ 2024",
      "مراجع في لجنة فولبرايت الثنائية في مصر منذ 2023",
      "مراجع في عدد من المجلات الدولية المحكّمة (Scopus-indexed)",
      "باحث سابق في وزارة المالية المصرية (2013 — 2014)",
    ],
  },
];

// =============================================================================
// أعضاء المجلس — النسخة الإنجليزية
// =============================================================================
const enMembers: BoardMember[] = [
  {
    name: "Mr. Batil Abdullah Al-Batil",
    role: "Chairman of the Board of Trustees",
    title: "Certified Public Accountant — Founding Partner & CEO",
    image: MEMBER_FILES.batil,
    featured: true,
    bio:
      "A Saudi Certified Public Accountant (SOCPA) and holder of a Master's degree in Accounting from the University of Miami, Florida. He brings over twenty years of experience in accounting, financial advisory, audit, and financial systems management, having held leadership positions at several major corporations in Saudi Arabia. His record spans financial advisory, risk management, performance analysis, accounting systems development, multidisciplinary team leadership, and compliance assurance, alongside extensive contributions to professional training and innovative institutional solutions.",
    qualifications: [
      "Founding Partner & CEO — Al-Batil & Partners Professional Consulting (since 2006)",
      "Founding Partner & CEO — Al-Batil Consulting, Cairo",
      "Director — Batel Al-Itqan Training Center",
      "Former trainer at the Institute of Public Administration for nine years",
      "Fellow of the Saudi Organization for Certified Public Accountants (SOCPA)",
      "M.Sc. in Accounting — University of Miami, Florida, USA (2000)",
      "B.Sc. in Accounting — Imam Muhammad Bin Saud Islamic University",
      "Certified Financial Consultant (CFC)",
      "Certified Business Administrator (CBA)",
      "Certified Arbitrator — Ministry of Justice, specialized in financial and accounting transactions",
      "Affiliate Member — Saudi Authority for Accredited Valuers",
      "Certified Endowment Consultant — Saudi Judicial Sciences Society",
      "Consultant for charitable organizations (Orphan Care Society, Sulaiman Al-Rajhi Charity Foundation)",
      "Licensed accounting & audit practitioner — Ministry of Commerce",
    ],
  },
  {
    name: "Dr. Abdullah Hilal",
    role: "Vice Chairman of the Board of Trustees",
    title: "Biography to be added soon",
    image: MEMBER_PLACEHOLDER,
    imagePlaceholder: true,
  },
  {
    name: "Mr. Walid Munir",
    role: "Secretary General of the Foundation",
    title: "Tax & Transfer Pricing Expert — M.Sc. in Public Finance & Taxation",
    image: MEMBER_FILES.walid,
    bio:
      "An expert in taxation and Transfer Pricing, and Director of Training & Development at Batel Al-Itqan Training Center. He holds a Master's degree in Public Finance and Taxation, and serves on leading professional associations across accounting, audit, and taxation locally and internationally.",
    qualifications: [
      "Tax Partner & Head of Transfer Pricing — UHY",
      "M.Sc. in Public Finance & Taxation",
      "Diploma in Taxation, Accounting & Finance",
      "Certificate in International Public Sector Accounting Standards (CIPSAS) — ACCA",
      "Fellow — Egyptian Association of Taxation (Fellow EAT)",
      "Fellow — Egyptian Society of Public Finance & Taxation (Fellow EAPFT)",
      "Secretary General & Founder — Association of Accountants & Internal Auditors (AAIA)",
      "Certified Trainer — International Finance Corporation (IFC), World Bank Group",
      "Member — Arab Federation of Accountants & Auditors (M.AFAA)",
      "Member — National Association of Tax Professionals, USA (M.NATP)",
      "Director of Training & Development — Batel Al-Itqan Training Center",
    ],
  },
  {
    name: "Mr. Mohamed Arafa",
    role: "Treasurer of the Foundation",
    title: "Certified Public Accountant & Auditor — Certified IPSASB",
    image: MEMBER_FILES.mohamed,
    bio:
      "A professional expert in audit and compliance, specialized in professional training and competency development in accounting and audit, and Director of Operations at Batel Al-Itqan Training Center. He holds memberships across major local and Arab professional associations, with contributions to research, development, and internationally accredited professional training.",
    qualifications: [
      "Audit Partner — UHY International",
      "Member — Egyptian Society of Certified Accountants",
      "Member — Arab Federation of Accountants & Auditors",
      "Holder of IPSAS Certificate — ACCA",
      "Treasurer — Association of Accountants & Internal Auditors (AAIA)",
      "Secretary General of the R&D Committee — AAIA",
      "Certified Professional Trainer — International Finance Corporation (IFC), World Bank Group",
      "Director of Operations — Batel Al-Itqan Training Center",
    ],
  },
  {
    name: "Prof. Wafaa Salah Mohamed",
    role: "Member of the Board of Trustees",
    title: "Professor of Accounting — Faculty of Business, Economics & Political Science, BUE",
    image: MEMBER_FILES.wafa,
    bio:
      "Professor of Accounting at the Faculty of Business Administration, Economics, and Political Science, The British University in Egypt (BUE). She earned her Doctorate in Accounting from Cairo University and has made significant contributions through publications in peer-reviewed international journals. Her research focuses on international and financial accounting. A Fellow of the UK Higher Education Academy (FHEA) since 2022, she has chaired the Innovation & Technology-Enabled Learning Committee since 2020.",
    qualifications: [
      "Professor of Accounting — The British University in Egypt (since 2025)",
      "Ph.D. in Accounting — Cairo University (2014)",
      "Fellow of the UK Higher Education Academy (FHEA, 2022)",
      "Practical Ph.D. in Data Analysis — Cairo University (2026)",
      "Practical M.Sc. in Data Analysis — Cairo University (2021)",
      "M.Sc. in Accounting — Cairo University",
      "B.Sc. in Accounting (Honors) — Cairo University, English Section",
      "Head of E-Learning Committee (2024 — present)",
      "Head of Innovation & Technology-Enabled Learning Committee (2020 — present)",
      "Reviewer at NAQAAE (National Authority for Quality Assurance) since 2024",
      "Reviewer at the Binational Fulbright Commission in Egypt since 2023",
      "Reviewer in numerous Scopus-indexed international journals",
      "Former Researcher at the Egyptian Ministry of Finance (2013 — 2014)",
    ],
  },
];

export const boardMembers: Record<Locale, BoardMember[]> = {
  ar: arMembers,
  en: enMembers,
};
