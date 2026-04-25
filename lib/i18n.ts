import { pubLocalesAr, pubLocalesEn } from "@/lib/pub-locales";

export type Locale = "ar" | "en";

const ar = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    board: "تشكيل المجلس",
    research: "لجنة البحوث",
    translation: "لجنة الترجمة",
    publications: "إصداراتنا",
    contact: "تواصل معنا",
    label: "التنقل الرئيسي",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  homeLanding: {
    explore: "استكشف المؤسسة",
    intro:
      "بوابة موجزة إلى مجالات عملنا: الحوكمة، البحث العلمي، الترجمة المتخصصة، وقنوات التواصل — مع محتوى قابل للتطوير لاحقاً.",
    cardAbout: "من نحن",
    cardAboutDesc: "رؤيتنا، رسالتنا، وأهدافنا في خدمة المعرفة والمجتمع المهني.",
    cardBoard: "مجلس الأمناء",
    cardBoardDesc: "تشكيل المجلس وهيكل الحوكمة المؤسسي.",
    cardResearch: "لجنة البحوث",
    cardResearchDesc: "معايير البحث، الاستشارات، والإصدارات العلمية.",
    cardTranslation: "لجنة الترجمة",
    cardTranslationDesc: "جودة اللغة والمصطلحات عبر التخصصات.",
    cardPublications: "إصداراتنا",
    cardPublicationsDesc:
      "مؤلفات وموسوعات مهنية في الاقتصاد الرياضي والرقابة الداخلية — مع طلب النسخ عبر المؤسسة.",
    cardContact: "تواصل معنا",
    cardContactDesc: "نموذج مراسلة مباشر إلى البريد الرسمي للمؤسسة.",
    ctaPages: "انتقل إلى الصفحة",
    introExtra:
      "نعمل من الإسكندرية على دعم الباحثين والمؤسسات بإصدارات مهنية، وترجمة دقيقة، وتجارب تدريبية تنسجم مع احتياجات سوق العمل في مصر — وهذه الصفحة تلخص مساراتنا وتربطكم بأقسام التفاصيل.",
    valuesTitle: "لماذا المؤسسة؟",
    v1t: "بحث يقود القرار",
    v1d: "دراسات تطبيقية تساعد الجهات على ترسيخ السياسات والممارسات المهنية.",
    v2t: "ترجمة بمعايير مهنية",
    v2d: "جسر لغوي بين المصادر العالمية والجمهور العربي مع مراعاة المصطلحات.",
    v3t: "أثر مجتمعي",
    v3d: "شراكات وبرامج تدعم التنمية المهنية والمعرفية في المحيط المصري.",
    split1Title: "منظومة البحث والإصدار",
    split1Body:
      "نصوغ مسارات بحثية واضحة، من تصميم الإطار وحتى مراجعة الجودة، مع إبراز الأدلة والمراجع — ويمكنكم لاحقاً إضافة مشاريع وإصدارات فعلية في هذه المساحة.",
    split2Title: "الترجمة كمنصة معرفة",
    split2Body:
      "نعامل الترجمة كعملية إنتاج معرفي: توحيد المصطلحات، مراجعة الطبقات اللغوية، وضبط أسلوب التسليم بما يلائم الجهة المستهدفة والسياق المصري.",
    bannerQuote:
      "«المعرفة الرصينة قرار حضاري — والمؤسسة مساحة لبناء هذا القرار مع شركائنا.»",
    bannerCaption: "رسالة توجيهية — يمكن استبدالها لاحقاً بنص رسمي من المؤسسة.",
    homeContactTitle: "تواصل معنا",
    homeContactBody:
      "للاستفسارات أو طلبات التعاون: استخدم البطاقات أدناه أو انتقل إلى صفحة التواصل لإرسال رسالة مفصّلة عبر بريدك الإلكتروني.",
    homeContactCta: "فتح صفحة التواصل والنموذج",
    publicationsBandKicker: "إصداراتنا",
    publicationsBandTitle: "مؤلفات وموسوعات تُثري المكتبة العربية",
    publicationsBandBody:
      "من اقتصاديات كرة القدم إلى مراجع الرقابة الداخلية وفق إطار COSO، نقدّم إصدارات مهنية من تأليف وتعريب فريق متخصص — مع إمكانية طلب النسخ عبر المؤسسة داخل مصر.",
    publicationsBandCta: "استكشف المؤلفات وطلب النسخ",
  },
  boardPage: {
    kicker: "الحوكمة",
    title: "تشكيل مجلس الأمناء",
    subtitle:
      "مجلس أمناء يجمع خبرات أكاديمية ومهنية لضبط الاستراتيجية والإشراف على أداء المؤسسة — المحتوى التفصيلي قابل للتحديث لاحقاً.",
    membersTitle: "أعضاء المجلس",
  },
  researchPage: {
    kicker: "لجان متخصصة",
    title: "لجنة البحوث",
    subtitle:
      "تضع معايير الجودة للمشاريع البحثية، وتقيّم المخرجات العلمية، وتدعم الشراكات الأكاديمية — نصوص تعريفية أولية يمكن تعزيزها لاحقاً.",
    b1t: "منهجية رصينة",
    b1d: "أطر علمية واضحة للدراسات الميدانية والتطبيقية.",
    b2t: "إصدارات مهنية",
    b2d: "تقارير وورقات سياسات تدعم صناع القرار.",
    b3t: "شراكات معرفية",
    b3d: "تعاون مع مراكز أبحاث ومؤسسات تعليمية.",
    b4t: "حوكمة الجودة",
    b4d: "مراجعة الأدلة والمراجع قبل النشر أو التسليم.",
  },
  translationPage: {
    kicker: "لجان متخصصة",
    title: "لجنة الترجمة",
    subtitle:
      "تركز على دقة المصطلحات، وتوحيد الأسلوب، وجودة الإخراج اللغوي للوثائق والمراجع العلمية — محتوى أولي جاهز للتوسعة.",
    b1t: "توحيد المصطلحات",
    b1d: "قوائم مرجعية للتخصصات العلمية والمهنية.",
    b2t: "مراجعة لغوية",
    b2d: "طبقات تحرير لضمان الوضوح والسياق.",
    b3t: "أنماط التسليم",
    b3d: "معايير للتنسيق والهوية البصرية للوثائق.",
    b4t: "سياق ثقافي",
    b4d: "مراعاة الجمهور العربي والمصري في الصياغة.",
  },
  form: {
    title: "أرسل رسالتك",
    subtitle:
      "يُرسل النموذج مباشرةً إلى البريد الرسمي للمؤسسة. يمكنكم الرد على بريد المرسل من صندوق الوارد لديكم.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف (اختياري)",
    subject: "الموضوع",
    message: "الرسالة",
    submit: "إرسال إلى المؤسسة",
    submitting: "جاري الإرسال…",
    hint: "لن يُطلب منك فتح تطبيق بريد على جهازك — الإرسال يتم من الموقع.",
    errName: "يرجى إدخال الاسم",
    errEmail: "يرجى إدخال بريد صالح",
    errSubject: "يرجى إدخال موضوع مختصر",
    errMessage: "يرجى كتابة رسالة لا تقل عن ٢٠ حرفاً",
    toastOk: "تم إرسال رسالتك إلى المؤسسة بنجاح.",
    toastErr: "تعذّر إرسال الرسالة. حاول مرة أخرى لاحقاً.",
    toastErrConfig:
      "خدمة البريد غير مهيأة على الخادم. يرجى التواصل مع مسؤول الموقع لتفعيل SMTP.",
  },
  lang: { ar: "عربي", en: "English", switch: "تغيير اللغة" },
  theme: { light: "الوضع الفاتح", dark: "الوضع الداكن", toggle: "تبديل السمة" },
  hero: {
    badge: "جمهورية مصر العربية — الإسكندرية",
    titleLead: "مؤسسة",
    titleAccent: "باتل عبدالله الباتل",
    titleRest: "للبحوث والدراسات",
    subtitle:
      "منصة مصرية متخصصة في البحث العلمي، التطوير المهني، والترجمة الدقيقة — نسهم في إثراء المشهد المهني والأكاديمي بإصدارات رصينة تخدم صناع القرار والمجتمع.",
    ctaContact: "تواصل معنا",
    ctaAbout: "تعرف على المؤسسة",
    stat1t: "بحث رصين",
    stat1s: "منهجيات علمية دقيقة",
    stat2t: "ترجمة متخصصة",
    stat2s: "مصطلحات مهنية موثوقة",
    stat3t: "أثر مجتمعي",
    stat3s: "من مصر إلى المحيط العربي",
  },
  about: {
    heroSubtitle:
      "قصة المؤسسة، أهدافها الاستراتيجية، ومسارات عملها في البحث والترجمة والتطوير المهني.",
    kicker: "تعريف عام",
    title: "من نحن؟",
    p1a: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    p1b:
      "هي مؤسسة مصرية للبحوث والتطوير والترجمة، تعمل من قلب الإسكندرية — باب شرق، وتستهدف مجموعة من الأهداف الرئيسية التي تخدم المجتمع المهني والأكاديمي على حد سواء.",
    p2:
      "نسعى إلى إثراء المجتمع المهني ببحوث وتطوير في مختلف الإصدارات العلمية والمهنية، في كافة التخصصات — هدفٌ مجتمعي ومهني يعزز جودة المعرفة ويدعم الممارسين والمؤسسات في جمهورية مصر العربية وفي المحيط العربي الأوسع.",
    li1: "بحوث تطبيقية ورصينة تدعم اتخاذ القرار في القطاعين العام والخاص.",
    li2: "ترجمة متخصصة تربط المصادر العالمية بالجمهور العربي بدقة مصطلحات.",
    li3: "برامج تطوير مهني وورش عمل تنسجم مع احتياجات سوق العمل المصري.",
  },
  vision: {
    kicker: "استراتيجيتنا",
    title: "الرؤية والرسالة",
    intro:
      "نؤمن بأن البحث الجيد قرارٌ حضاري — ونضع رؤيتنا ورسالتنا في قلب كل مشروع ننفذه.",
    visionK: "رؤيتنا",
    visionT: "الرؤية",
    visionB:
      "أن نكون مرجعاً مهنياً موثوقاً في البحث والدراسات والترجمة في مصر والعالم العربي، يُعتمد عليه في بناء المعرفة الرصينة وتطوير الممارسات.",
    missionK: "مهمتنا",
    missionT: "الرسالة",
    missionB:
      "تقديم بحوث منهجية، وترجمة دقيقة، وخدمات تطوير مهني تلائم السياق المصري والعربي، بمعايير جودة عالية وفريق متخصص يلتزم بالموضوعية والشفافية.",
  },
  goals: {
    kicker: "أهدافنا",
    title: "ما نسعى لتحقيقه",
    intro:
      "أهداف متكاملة تربط بين البحث الأكاديمي، الاحتياج المهني، والأثر المجتمعي في مصر.",
    g1t: "إثراء المشهد المهني",
    g1d: "دعم الإنتاج المعرفي عبر دراسات وإصدارات علمية ومهنية متنوعة.",
    g2t: "جسر المعرفة",
    g2d: "ترجمة متخصصة تخدم الباحثين والمؤسسات والقطاعات التنظيمية.",
    g3t: "تعزيز الجودة",
    g3d: "رفع كفاءة الممارسين من خلال برامج تدريبية وتطويرية موجهة.",
    g4t: "خدمة المجتمع",
    g4d: "مساهمة مجتمعية ومهنية تنسجم مع أولويات التنمية في مصر.",
  },
  contact: {
    kicker: "تواصل معنا",
    title: "نرحب باستفساراتكم",
    body:
      "لطلبات التعاون البحثي، الترجمة، أو الدراسات المخصصة، يمكنكم التواصل عبر القنوات التالية. نلتزم بالرد في أقرب وقت ممكن خلال أيام العمل الرسمية في مصر.",
    email: "البريد الرسمي",
    website: "الموقع الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    addressVal:
      "٨٤ طريق الحرية، باب شرق، الإسكندرية، جمهورية مصر العربية",
    send: "إرسال بريد",
    call: "اتصال",
  },
  footer: {
    org: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    country: "جمهورية مصر العربية — الإسكندرية",
    rights: "جميع الحقوق محفوظة.",
    followUs: "تابعنا على",
    rightsLine:
      "جميع الحقوق محفوظة — مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    developedBy: "تطوير",
    devName: "Ahmed Abdeldaiem",
    socialSoon: "روابط التواصل الاجتماعي قريباً",
    devGmail: "بريد المطوّر",
    devLinkedIn: "حساب المطوّر على لينكد إن",
    navQuick: "روابط سريعة",
  },
  pub: pubLocalesAr,
  brand: {
    short: "Albatel Research",
    name: "مؤسسة باتل عبدالله الباتل",
  },
} as const;

const en = {
  nav: {
    home: "Home",
    about: "About us",
    board: "Board of trustees",
    research: "Research committee",
    translation: "Translation committee",
    publications: "Publications",
    contact: "Contact",
    label: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  homeLanding: {
    explore: "Explore the foundation",
    intro:
      "A concise gateway to our workstreams: governance, research, specialized translation, and contact channels — placeholder narrative you can refine later.",
    cardAbout: "About us",
    cardAboutDesc: "Vision, mission, and goals serving knowledge and the professional community.",
    cardBoard: "Board of trustees",
    cardBoardDesc: "Board composition and governance structure.",
    cardResearch: "Research committee",
    cardResearchDesc: "Research standards, advisory outputs, and scholarly publications.",
    cardTranslation: "Translation committee",
    cardTranslationDesc: "Language quality and terminology across disciplines.",
    cardPublications: "Publications",
    cardPublicationsDesc:
      "Professional books in sports economics and internal audit — order copies through the foundation.",
    cardContact: "Contact",
    cardContactDesc: "A messaging form routed to the foundation’s official email.",
    ctaPages: "Open page",
    introExtra:
      "From Alexandria, we support researchers and institutions with professional publications, precise translation, and training experiences aligned with Egypt’s labour market — this page summarizes our pathways and links to deeper sections.",
    valuesTitle: "Why the foundation?",
    v1t: "Research that informs decisions",
    v1d: "Applied studies that help organizations strengthen policies and professional practice.",
    v2t: "Professional-grade translation",
    v2d: "A linguistic bridge between global sources and Arabic audiences with terminological care.",
    v3t: "Societal impact",
    v3d: "Partnerships and programmes supporting professional and knowledge development in Egypt.",
    split1Title: "Research & publishing system",
    split1Body:
      "We shape clear research pathways—from framing through quality review—with emphasis on evidence and references. You can later showcase real projects and publications here.",
    split2Title: "Translation as a knowledge platform",
    split2Body:
      "We treat translation as knowledge production: harmonizing terminology, layered linguistic review, and delivery tone suited to the audience and Egyptian context.",
    bannerQuote:
      "“Sound knowledge is a civilizational choice — the foundation is a space to build that choice with our partners.”",
    bannerCaption: "Guiding line — replace later with an official foundation statement.",
    homeContactTitle: "Contact us",
    homeContactBody:
      "For inquiries or collaboration: use the cards below or visit the contact page to send a detailed message via your email client.",
    homeContactCta: "Go to contact & form",
    publicationsBandKicker: "Publications",
    publicationsBandTitle: "Books and encyclopaedias for the Arabic library",
    publicationsBandBody:
      "From football economics to internal audit under the COSO framework, our team produces professional authored and adapted titles — request copies in Egypt through the foundation.",
    publicationsBandCta: "Browse publications & order",
  },
  boardPage: {
    kicker: "Governance",
    title: "Board of trustees",
    subtitle:
      "A board that blends academic and professional expertise to steer strategy and institutional performance — details can be expanded later.",
    membersTitle: "Board members",
  },
  researchPage: {
    kicker: "Specialized committees",
    title: "Research committee",
    subtitle:
      "Sets quality standards for research projects, evaluates scientific outputs, and supports academic partnerships — introductory copy ready for enrichment.",
    b1t: "Rigorous methodology",
    b1d: "Clear scientific frameworks for applied and field studies.",
    b2t: "Professional publications",
    b2d: "Reports and policy briefs for decision-makers.",
    b3t: "Knowledge partnerships",
    b3d: "Collaboration with research centres and educational institutions.",
    b4t: "Quality governance",
    b4d: "Evidence and reference review prior to release or delivery.",
  },
  translationPage: {
    kicker: "Specialized committees",
    title: "Translation committee",
    subtitle:
      "Focuses on terminological accuracy, stylistic consistency, and linguistic quality for scientific documents — initial narrative ready to extend.",
    b1t: "Terminology alignment",
    b1d: "Reference glossaries for scientific and professional domains.",
    b2t: "Linguistic review",
    b2d: "Layered editing for clarity and context.",
    b3t: "Delivery standards",
    b3d: "Formatting and document identity guidelines.",
    b4t: "Cultural context",
    b4d: "Audience-aware phrasing for Arabic and Egyptian readers.",
  },
  form: {
    title: "Send a message",
    subtitle:
      "The form is sent directly to the foundation’s official inbox. You can reply to the sender’s address from your mail.",
    name: "Full name",
    email: "Email address",
    phone: "Phone (optional)",
    subject: "Subject",
    message: "Message",
    submit: "Send to the foundation",
    submitting: "Sending…",
    hint: "No mail app is required on your device — sending happens from the website.",
    errName: "Please enter your name",
    errEmail: "Please enter a valid email",
    errSubject: "Please enter a short subject",
    errMessage: "Please write at least 20 characters",
    toastOk: "Your message was sent to the foundation successfully.",
    toastErr: "Could not send the message. Please try again later.",
    toastErrConfig:
      "Mail is not configured on the server. Ask the site administrator to enable SMTP.",
  },
  lang: { ar: "العربية", en: "English", switch: "Change language" },
  theme: { light: "Light mode", dark: "Dark mode", toggle: "Toggle theme" },
  hero: {
    badge: "Arab Republic of Egypt — Alexandria",
    titleLead: "",
    titleAccent: "Batil Abdullah Al-Batil",
    titleRest: "Foundation for Research & Studies",
    subtitle:
      "An Egyptian hub for scholarly research, professional development, and precise translation — we enrich the professional and academic landscape with rigorous outputs for decision-makers and society.",
    ctaContact: "Contact us",
    ctaAbout: "About the foundation",
    stat1t: "Rigorous research",
    stat1s: "Sound scientific methods",
    stat2t: "Specialized translation",
    stat2s: "Reliable terminology",
    stat3t: "Community impact",
    stat3s: "From Egypt to the Arab region",
  },
  about: {
    heroSubtitle:
      "The foundation’s story, strategic aims, and pathways in research, translation, and professional development.",
    kicker: "Overview",
    title: "Who we are",
    p1a: "The Batil Abdullah Al-Batil Foundation for Research and Studies",
    p1b:
      "is an Egyptian institution for research, development, and translation, based in Alexandria — Bab Sharqi, pursuing key objectives that serve both professional and academic communities.",
    p2:
      "We seek to enrich the professional community through research and development across scientific and professional publications in all disciplines — a societal and professional goal that strengthens knowledge quality and supports practitioners and institutions in Egypt and the wider Arab sphere.",
    li1: "Applied, evidence-informed research supporting decision-making in public and private sectors.",
    li2: "Specialized translation connecting global sources with Arabic audiences with terminological accuracy.",
    li3: "Professional development programs and workshops aligned with the Egyptian labour market.",
  },
  vision: {
    kicker: "Our strategy",
    title: "Vision & mission",
    intro:
      "We believe excellent research is a civilizational choice — our vision and mission anchor every project we deliver.",
    visionK: "Our vision",
    visionT: "Vision",
    visionB:
      "To be a trusted professional reference in research, studies, and translation in Egypt and the Arab world, relied upon for building sound knowledge and advancing practice.",
    missionK: "Our mission",
    missionT: "Mission",
    missionB:
      "Deliver methodical research, accurate translation, and professional development services suited to Egyptian and Arab contexts, with high quality standards and a specialized team committed to objectivity and transparency.",
  },
  goals: {
    kicker: "Our goals",
    title: "What we pursue",
    intro:
      "Integrated goals linking academic research, professional needs, and societal impact in Egypt.",
    g1t: "Enriching the professional landscape",
    g1d: "Supporting knowledge production through diverse scientific and professional studies and publications.",
    g2t: "A bridge for knowledge",
    g2d: "Specialized translation serving researchers, institutions, and regulatory sectors.",
    g3t: "Raising quality",
    g3d: "Improving practitioners’ capabilities through targeted training and development programs.",
    g4t: "Serving society",
    g4d: "Professional and societal contributions aligned with Egypt’s development priorities.",
  },
  contact: {
    kicker: "Contact",
    title: "We welcome your inquiries",
    body:
      "For research collaboration, translation, or tailored studies, please reach us through the channels below. We aim to respond promptly during official working days in Egypt.",
    email: "Official email",
    website: "Website",
    phone: "Phone",
    address: "Address",
    addressVal:
      "84 El-Horreya Road, Bab Sharqi, Alexandria, Arab Republic of Egypt",
    send: "Send email",
    call: "Call",
  },
  footer: {
    org: "Batil Abdullah Al-Batil Foundation for Research and Studies",
    country: "Arab Republic of Egypt — Alexandria",
    rights: "All rights reserved.",
    followUs: "Follow us on",
    rightsLine:
      "All rights reserved — Batil Abdullah Al-Batil Foundation for Research and Studies",
    developedBy: "Developed by",
    devName: "Ahmed Abdeldaiem",
    socialSoon: "Social links coming soon",
    devGmail: "Developer email",
    devLinkedIn: "Developer on LinkedIn",
    navQuick: "Quick links",
  },
  pub: pubLocalesEn,
  brand: {
    short: "Albatel Research",
    name: "Batil Abdullah Al-Batil Foundation",
  },
} as const;

type MessageTree = typeof ar;

export const messages = { ar, en } as unknown as Record<Locale, MessageTree>;

export function createT(locale: Locale) {
  return function t(key: string): string {
    const parts = key.split(".");
    let cur: unknown = messages[locale] as unknown;
    for (const p of parts) {
      cur = (cur as Record<string, unknown>)?.[p];
    }
    return typeof cur === "string" ? cur : key;
  };
}
