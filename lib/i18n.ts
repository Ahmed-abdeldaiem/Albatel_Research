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
    scrollToTop: "العودة لأعلى الصفحة",
  },
  homeLanding: {
    explore: "استكشف المؤسسة",
    exploreKicker: "أقسام المؤسسة",
    exploreTitle: "بوابات المعرفة في مؤسسة الباتل",
    intro:
      "بوابة المعرفة من قلب عروس المتوسط إلى العالم — حيث تلتقي عراقة البحث العلمي بآفاق المستقبل.",
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
      "خبرة أكاديمية، ورؤية استشرافية، ومنهجية عالمية.. هنا نصنع الفارق.",
    valuesKicker: "لماذا نحن؟",
    valuesTitle: "لأننا نؤمن أن التنمية الحقيقية تبدأ من قاعدة بحثية صلبة",
    v1t: "بحث يقود القرار",
    v1d: "البحث العلمي عندنا ليس مجرد أرقام، بل رؤى تخدم المجتمع وتصنع القرار.",
    v2t: "ترجمة بمعايير مهنية",
    v2d: "الدقة، الأمانة، والروح النصية — ثوابتنا في تقريب المسافات بين الثقافات.",
    v3t: "أثر مجتمعي",
    v3d: "شراكات وبرامج تدعم التنمية المهنية والمعرفية في المحيط المصري والعربي.",
    split1Title: "منظومة البحث والإصدار",
    split1Body:
      "نحن لا ننقل المعرفة، بل نصيغها بمنهجية رصينة وأدوات تحليلية متطورة. نلتزم بالدقة الأكاديمية لنقدّم دراسات تشكّل مرجعًا موثوقًا للباحثين وصنّاع السياسات.",
    split2Title: "الترجمة كمنصة معرفة",
    split2Body:
      "نترجم لا لنقل الكلمات، بل لنقل الحضارات وتوطين المعرفة. نمنح المعرفة لسانًا عالميًا، ونبني جسور التواصل الفكري وراء الحدود.",
    bannerQuote:
      "المعرفة الرصينة قرار حضاري — من منارة الإسكندرية قديمًا، نواصل إضاءة دروب المعرفة حديثًا.",
    bannerCaption: "نقرأ الماضي، نحلل الحاضر، ونرسم معالم المستقبل",
    homeContactKicker: "معًا نصنع الفارق",
    homeContactTitle: "حدّثنا عمّا تفكّرون فيه",
    homeContactBody:
      "انضم إلى رحلتنا المعرفية في الإسكندرية، حيث الفكر لا يعرف حدودًا. للاستفسارات أو طلبات التعاون: استخدم البطاقات أدناه أو انتقل إلى صفحة التواصل لإرسال رسالة مفصّلة.",
    homeContactCta: "فتح صفحة التواصل والنموذج",
    publicationsBandKicker: "إصداراتنا",
    publicationsBandTitle: "بصمة فكرية تُثري المكتبة العربية",
    publicationsBandBody:
      "كتابنا ليس مجرد ورق، بل هو رحلة بحثية مغلّفة بالمنطق والتحليل — من اقتصاديات كرة القدم إلى مراجع الرقابة الداخلية وفق إطار COSO، نقدّم إصدارات مهنية من تأليف وتعريب فريق متخصص، مع إمكانية طلب النسخ عبر المؤسسة داخل مصر.",
    publicationsBandCta: "استكشف المؤلفات وطلب النسخ",
    scrollHint: "اكتشف المزيد",
  },
  boardPage: {
    kicker: "الحوكمة",
    title: "تشكيل مجلس الأمناء",
    subtitle:
      "مجلس أمناء يجمع نخبة من الخبرات الأكاديمية والمهنية في المحاسبة والاستشارات والتطوير، يضبط الاستراتيجية ويشرف على أداء المؤسسة بمعايير الحوكمة الرشيدة.",
    membersKicker: "هيكل القيادة",
    membersTitle: "أعضاء مجلس الأمناء",
    membersIntro:
      "خبرات متراكمة وشهادات مهنية دولية، تجتمع لخدمة رسالة المؤسسة في البحث والتطوير والترجمة.",
    chairBadge: "رئيس المجلس",
    qualificationsLabel: "أبرز المؤهّلات والخبرات",
    showDetails: "عرض المؤهّلات",
    hideDetails: "إخفاء المؤهّلات",
    bioComingSoon: "السيرة الذاتية ستُضاف قريبًا",

    // ───── ميثاق المجلس (closing pledge) ─────
    pledgeKicker: "ميثاقنا",
    pledgeTitle: "التزاماتنا أمام المؤسسة والمجتمع",
    pledgeIntro:
      "أربعة التزامات يضعها مجلس الأمناء على عاتقه أمام كل باحث ومهتم بمسيرة المؤسسة.",
    p1T: "حوكمة رشيدة",
    p1D: "قرارات جماعية مدروسة وفق معايير علمية وأخلاقية، بشفافية في كل تصويت ومداولة.",
    p2T: "رقابة استراتيجية",
    p2D: "متابعة دائمة لرسالة المؤسسة وأهدافها، ومراقبة الأداء على المدى البعيد.",
    p3T: "شفافية الإنجاز",
    p3D: "مكاشفة منتظمة مع المجتمع المهني والأكاديمي بشأن نتائج الأعمال والإصدارات.",
    p4T: "التميّز المؤسسي",
    p4D: "معايير جودة عالمية في كل ما يصدر عن المؤسسة، دون تنازل أو اختصار.",
    pledgeSeal: "مجلس أمناء مؤسسة الباتل",
    pledgeSealNote: "قيادة جماعية في خدمة المعرفة",
  },
  researchPage: {
    // ───── Page Hero ─────
    kicker: "لجان متخصصة",
    title: "لجنة البحوث والدراسات",
    subtitle:
      "منصّة بحثية متعددة التخصصات تجمع نخبةً من الخبرات الأكاديمية المصرية والمهنية السعودية لإثراء المكتبة العربية بإصدارات رصينة في كافة العلوم الإنسانية والتطبيقية.",

    // ───── Highlights (4 cards) ─────
    b1t: "منهجية رصينة",
    b1d: "أطر علمية واضحة لكل ميدان بحثي، تنسجم مع المعايير الأكاديمية الدولية.",
    b2t: "إصدارات مهنية",
    b2d: "تقارير وورقات سياسات ودراسات معرفية تدعم صنّاع القرار في الوطن العربي.",
    b3t: "شراكات معرفية",
    b3d: "تعاون مع مراكز الأبحاث والجامعات في مصر والمملكة العربية السعودية والدول العربية.",
    b4t: "حوكمة الجودة",
    b4d: "مراجعة الأدلة والمراجع وتحكيم علمي مستقل قبل النشر أو التسليم.",

    // ───── Manifesto ─────
    manifestoKicker: "بيان منهجيتنا",
    manifestoTitle: "نحن لا ننقل المعرفة، بل نصيغها",
    manifestoBody:
      "البحث العلمي عندنا ليس مجرد أرقام، بل رؤى تخدم المجتمع وتصنع القرار. لجنة البحوث منصّة معرفية متعددة التخصصات تحتضن الباحثين من مصر والمملكة العربية السعودية والوطن العربي، وتنفتح على كافة ميادين العلوم — الإنسانية والاجتماعية والاقتصادية والقانونية والتربوية والإعلامية والشرعية واللغوية — لتُثري المكتبة العربية بإصدارات رصينة تشكّل مرجعًا موثوقًا للباحثين وصنّاع السياسات.",

    // ───── Reach indicators (Egyptian–Saudi–Arab) ─────
    reachT1: "خبرات مصرية وسعودية",
    reachD1: "كادر أكاديمي ومهني يجمع عراقة الجامعات المصرية وانضباط المؤسسات السعودية.",
    reachT2: "إثراء المكتبة العربية",
    reachD2: "إصدارات بحثية وعلمية تخدم القارئ والباحث في كل بلد عربي.",
    reachT3: "شراكات عربية ممتدة",
    reachD3: "تعاون أكاديمي مع جامعات ومراكز أبحاث على امتداد الوطن العربي.",

    // ───── Methodology Timeline (5 steps) ─────
    methodologyKicker: "كيف نعمل؟",
    methodologyTitle: "مسار البحث في المؤسسة",
    methodologyIntro:
      "خمس مراحل دقيقة، تبدأ من فكرة وتنتهي بإصدار يحمل قيمة معرفية حقيقية.",
    step1T: "تصميم الإطار البحثي",
    step1D: "تحديد السؤال البحثي والأهداف والمنهج، وضبط حدود الدراسة.",
    step2T: "جمع البيانات والتحليل",
    step2D: "اعتماد أدوات تحليلية متطورة وفق طبيعة كل تخصص ومجاله.",
    step3T: "التحكيم العلمي",
    step3D: "مراجعة من قِبَل أقران متخصصين لضمان الدقة والأصالة العلمية.",
    step4T: "التحرير والصياغة",
    step4D: "ضبط لغوي وأسلوبي يحترم خصوصية اللغة العربية والمصطلحات المعتمدة.",
    step5T: "النشر والتوصيات",
    step5D: "نشر النتائج بصيغة مهنية تخدم القارئ المتخصص والممارس على حدٍّ سواء.",

    // ───── Research Areas (8 multidisciplinary domains) ─────
    areasKicker: "آفاق البحث",
    areasTitle: "مجالات اهتمامنا البحثي",
    areasIntro:
      "نُرحِّب بالمقترحات البحثية في طيف واسع من التخصصات، يخدم تنوّع المجتمع المعرفي العربي.",
    area1T: "العلوم الإنسانية والاجتماعية",
    area1D: "الفلسفة، التاريخ، علم الاجتماع، علم النفس، والأنثروبولوجيا.",
    area2T: "العلوم الاقتصادية والإدارية",
    area2D: "الاقتصاد، الإدارة، المحاسبة، التمويل، والتسويق.",
    area3T: "القانون والتشريعات",
    area3D: "القانون العام والخاص، الأنظمة القضائية، والدراسات التنظيمية.",
    area4T: "التربية والتعليم",
    area4D: "المناهج، طرائق التدريس، التعليم العالي، والتكنولوجيا التعليمية.",
    area5T: "الإعلام والاتصال",
    area5D: "الصحافة، الإعلام الرقمي، الاتصال المؤسسي، والرأي العام.",
    area6T: "الدراسات الإسلامية والشرعية",
    area6D: "الفقه، أصول الفقه، الدراسات القرآنية، والتراث الإسلامي.",
    area7T: "الترجمة واللسانيات",
    area7D: "علوم اللغة، الترجمة المتخصصة، والمعجمية.",
    area8T: "التراث والحضارة العربية",
    area8D: "الأدب، الحضارة، الدراسات التاريخية، والنقد الأدبي.",

    // ───── Participation Form ─────
    formKicker: "شاركنا",
    formTitle: "شاركنا رحلة المعرفة",
    formIntro:
      "للباحثين والأساتذة والمؤسسات الراغبة في التعاون البحثي معنا — خصّص دقائق لتعبئة النموذج وسنرد عليك خلال أيام العمل الرسمية.",
    formAffiliation: "الجهة / الانتماء الأكاديمي",
    formAffiliationHint: "اختياري — مثل: جامعة، مركز بحثي، أو شركة",
    formRequestType: "نوع الطلب",
    formRequestTypeHint: "اختر نوعًا واحدًا يناسب طلبك",
    type1T: "مقترح بحث للنشر",
    type1D: "مشروع جاهز للمراجعة والنشر",
    type2T: "طلب مراجعة علمية",
    type2D: "تحكيم علمي لبحث منجز",
    type3T: "شراكة بحثية مؤسسية",
    type3D: "تعاون بين جهات أو مراكز",
    type4T: "استشارة منهجية",
    type4D: "أسئلة عن المنهج أو الأدوات",
    type5T: "إشراف / تحكيم",
    type5D: "للماجستير أو الدكتوراه",
    formArea: "المجال البحثي",
    formAreaPlaceholder: "اختر التخصص الأقرب لمقترحك",
    formAreaOther: "تخصص آخر / متعدد التخصصات",
    formProposalTitle: "عنوان المقترح أو الموضوع",
    formSummary: "ملخص الفكرة",
    formSummaryHint: "اكتب ملخصًا واضحًا للفكرة (الحد الأدنى 50 حرفًا)",
    formAttachment: "رابط مرفق (اختياري)",
    formAttachmentHint: "DOI، Google Drive، موقع أكاديمي، أو رابط ملف",
    formSubmit: "إرسال الطلب إلى لجنة البحوث",
    formSubmitting: "جارٍ الإرسال…",
    formSuccess: "تم استلام طلبك بنجاح. سنتواصل معكم قريبًا.",
    formError: "تعذّر إرسال الطلب. حاول مرة أخرى لاحقاً.",
    formErrType: "يرجى اختيار نوع الطلب",
    formErrArea: "يرجى اختيار المجال البحثي",
    formErrProposalTitle: "يرجى إدخال عنوان المقترح",
    formErrSummary: "اكتب ملخصًا لا يقل عن 50 حرفًا",
    formErrAttachmentUrl: "الرابط غير صالح",

    // ───── FAQ ─────
    faqKicker: "أسئلة متكررة",
    faqTitle: "إجابات تتوقّعها",
    faq1Q: "كيف أقدّم مقترح بحث للنشر؟",
    faq1A: "عبر تعبئة النموذج أعلاه واختيار «مقترح بحث للنشر»، مع إرفاق رابط الملخص أو الورقة الكاملة. ستراجع اللجنة المقترح وتتواصل معك بالخطوات التالية.",
    faq2Q: "ما هو وقت الرد المتوقّع؟",
    faq2A: "نلتزم بالرد على المقترحات خلال 7 إلى 14 يوم عمل من تاريخ الاستلام، حسب طبيعة المقترح وحجم الدراسة.",
    faq3Q: "هل توجد تكلفة مالية للنشر؟",
    faq3A: "لا توجد رسوم نشر للمقترحات المقبولة، باستثناء حالات خاصة (طبع كميات تجارية أو تصاميم خاصة) وتُناقَش مع الباحث صراحةً قبل البدء.",
    faq4Q: "ما اللغات المقبولة في البحث؟",
    faq4A: "نقبل المقترحات باللغة العربية أساسًا، ونرحّب بالأبحاث باللغة الإنجليزية مع توفير ملخص عربي متكامل.",
    faq5Q: "كيف يتم اختيار البحوث للنشر؟",
    faq5A: "تعتمد اللجنة معايير الأصالة العلمية، الدقة المنهجية، الإسهام المعرفي، وأهمية الموضوع للمجتمع المهني والأكاديمي العربي.",
    faq6Q: "هل أستطيع إعادة نشر بحث منشور سابقًا؟",
    faq6A: "نقبل البحوث الأصلية حصرًا، ولكن يمكن قبول الأعمال المطوّرة جوهريًا بإذن النشر السابق ومع توضيح الإضافة الجديدة.",

    // ───── Closing Quote ─────
    closingQuote: "المعرفة لا تُكتب لتُنشر فحسب، بل لتُغيِّر",
    closingCaption: "هذه قناعتنا، وعلى أساسها تنبني كل دراسة نُصدرها.",
  },
  translationPage: {
    // ───── Page Hero ─────
    kicker: "لجان متخصصة",
    title: "لجنة الترجمة والتعريب",
    subtitle:
      "نافذتكم على الفكر العالمي، وبوابتنا لنشر النتاج العربي بلغات شتى — دقة في المصطلح، أمانة في النص، وروحٌ تُقرّب بين الثقافات.",

    // ───── Highlights (4 cards) ─────
    b1t: "توحيد المصطلحات",
    b1d: "قواميس مرجعية متخصصة لكل ميدان معرفي تضمن الاتساق العلمي.",
    b2t: "مراجعة لغوية مزدوجة",
    b2d: "طبقات تحرير دقيقة لضمان الوضوح والسياق وانضباط الأسلوب.",
    b3t: "إخراج مهني",
    b3d: "تنسيق أنيق وهوية بصرية احترافية للوثائق المترجَمة.",
    b4t: "سياق ثقافي عربي",
    b4d: "مراعاة الجمهور العربي والمصري في الصياغة والمصطلحات.",

    // ───── Manifesto ─────
    manifestoKicker: "بيان منهجيتنا",
    manifestoTitle: "نترجم لا لنقل الكلمات، بل لنقل الحضارات",
    manifestoBody:
      "لجنة الترجمة في مؤسسة الباتل ليست خدمة لغوية فحسب، بل جسر معرفي يربط بين الثقافات. نحن نُمكّن النصّ العربي من الانطلاق إلى آفاق العالمية، ونُعيد إلى المكتبة العربية روائع الفكر الإنساني بدقة لغوية وأمانة نصية. الدقة، الأمانة، والروح النصيّة — ثوابتنا في تقريب المسافات بين الثقافات وبناء جسور التواصل الفكري وراء الحدود.",

    // ───── Reach indicators ─────
    reachT1: "من العربية إلى لغات شتى",
    reachD1: "نُسهم في نشر النتاج العربي بلغات أوروبية وآسيوية ليصل إلى القارئ العالمي.",
    reachT2: "من الفكر العالمي إلى العربية",
    reachD2: "ننقل أمهات الكتب والدراسات الحديثة إلى العربية بأمانة وعمق.",
    reachT3: "شراكات نشر متعددة",
    reachD3: "تعاون مع دور النشر الأكاديمية في مصر والدول العربية لتوسيع نطاق الإصدارات.",

    // ───── Methodology Timeline (5 steps) ─────
    methodologyKicker: "كيف نترجم؟",
    methodologyTitle: "مسار الترجمة في المؤسسة",
    methodologyIntro:
      "خمس مراحل مدروسة، تبدأ من النص الأصلي وتنتهي بترجمة تحفظ روح الكاتب وتُلامس عقل القارئ.",
    step1T: "استلام النص وتحليله",
    step1D: "دراسة الأسلوب، الجمهور المستهدف، وطبيعة المصطلحات.",
    step2T: "بناء قاموس المصطلحات",
    step2D: "اعتماد قائمة موحّدة للمصطلحات قبل الشروع في الترجمة.",
    step3T: "الترجمة الدقيقة",
    step3D: "ترجمة احترافية بلغة سليمة تحفظ روح النص الأصلي.",
    step4T: "المراجعة اللغوية المزدوجة",
    step4D: "تدقيق نحوي وأسلوبي ومراجعة من قِبَل مختصّ ثانٍ.",
    step5T: "الإخراج والتسليم",
    step5D: "تنسيق نهائي وتسليم بصيغة مهنية جاهزة للنشر.",

    // ───── Translation Services (8 domains) ─────
    areasKicker: "تخصصاتنا",
    areasTitle: "مجالات الترجمة لدينا",
    areasIntro:
      "نُغطّي طيفًا واسعًا من المجالات بفريق متخصص في كل ميدان لضمان دقة المصطلحات وجودة المحتوى.",
    area1T: "الترجمة الأكاديمية والعلمية",
    area1D: "الأبحاث، الأطروحات، المجلات العلمية، والكتب المنهجية.",
    area2T: "الترجمة القانونية والتشريعية",
    area2D: "العقود، الأنظمة، الفتاوى القضائية، والوثائق الرسمية.",
    area3T: "الترجمة الاقتصادية والإدارية",
    area3D: "التقارير المالية، دراسات السوق، والمستندات الإدارية.",
    area4T: "الترجمة الأدبية والثقافية",
    area4D: "الروايات، القصص، الشعر، والمقالات الفكرية.",
    area5T: "الترجمة الإسلامية والشرعية",
    area5D: "الفتاوى، الكتب الفقهية، والدراسات الإسلامية.",
    area6T: "الترجمة الطبية والصحية",
    area6D: "الأبحاث الطبية، النشرات الدوائية، والأدلة الإرشادية.",
    area7T: "الترجمة التقنية والمعلوماتية",
    area7D: "الأدلة التقنية، الكتيبات، وتوطين البرمجيات.",
    area8T: "ترجمة عامة ومتعددة",
    area8D: "وثائق متنوّعة لا تنتمي لتخصص واحد أو مشاريع متعددة.",

    // ───── Translation Form ─────
    formKicker: "اطلب الترجمة",
    formTitle: "اطلب خدمة الترجمة الآن",
    formIntro:
      "للأفراد والمؤسسات الراغبة في خدمات الترجمة المهنية — املأ النموذج وسنتواصل معك خلال أيام العمل الرسمية.",
    formAffiliation: "الجهة / المؤسسة",
    formAffiliationHint: "اختياري — مثل: جامعة، شركة، أو دار نشر",
    formServiceType: "نوع الخدمة",
    formServiceTypeHint: "اختر الخدمة المناسبة لطلبك",
    type1T: "ترجمة كاملة",
    type1D: "ترجمة نص أو وثيقة من الصفر",
    type2T: "مراجعة ترجمة",
    type2D: "تدقيق ترجمة منجزة",
    type3T: "توطين معرفي",
    type3D: "تكييف المحتوى للسياق العربي",
    type4T: "استشارة لغوية",
    type4D: "أسئلة عن المصطلحات أو الأسلوب",
    type5T: "شراكة نشر",
    type5D: "تعاون مع دور النشر",
    formDomain: "المجال المتخصص",
    formDomainPlaceholder: "اختر المجال الأقرب",
    formDomainOther: "مجال آخر / متعدد",
    formSourceLang: "لغة المصدر",
    formTargetLang: "لغة الهدف",
    formLangPlaceholder: "اختر اللغة",
    langAr: "العربية",
    langEn: "الإنجليزية",
    langFr: "الفرنسية",
    langEs: "الإسبانية",
    langDe: "الألمانية",
    langTr: "التركية",
    langOther: "لغة أخرى",
    formDocTitle: "عنوان الوثيقة أو الموضوع",
    formDescription: "وصف الطلب",
    formDescriptionHint: "اكتب وصفًا واضحًا للطلب (الحد الأدنى 50 حرفًا)",
    formWordCount: "عدد الكلمات تقريبًا",
    formWordCountHint: "اختياري — يساعد في تقدير الوقت والتكلفة",
    formAttachment: "رابط الوثيقة (اختياري)",
    formAttachmentHint: "Google Drive، DOI، أو رابط ملف",
    formSubmit: "إرسال الطلب إلى لجنة الترجمة",
    formSubmitting: "جارٍ الإرسال…",
    formSuccess: "تم استلام طلبك بنجاح. سنتواصل معكم قريبًا.",
    formError: "تعذّر إرسال الطلب. حاول مرة أخرى لاحقاً.",
    formErrType: "يرجى اختيار نوع الخدمة",
    formErrDomain: "يرجى اختيار المجال المتخصص",
    formErrSourceLang: "يرجى اختيار لغة المصدر",
    formErrTargetLang: "يرجى اختيار لغة الهدف",
    formErrSameLang: "لغة المصدر والهدف يجب أن تكون مختلفة",
    formErrDocTitle: "يرجى إدخال عنوان الوثيقة",
    formErrDescription: "اكتب وصفًا لا يقل عن 50 حرفًا",
    formErrAttachmentUrl: "الرابط غير صالح",

    // ───── FAQ ─────
    faqKicker: "أسئلة متكررة",
    faqTitle: "إجابات تتوقّعها",
    faq1Q: "كم تستغرق ترجمة وثيقة عادة؟",
    faq1A: "تختلف المدة حسب طول الوثيقة والمجال المتخصص. الوثائق الصغيرة (أقل من 5000 كلمة) تستغرق 5-7 أيام عمل، أما المشاريع الكبيرة فتُحدَّد جدولها الزمني بعد دراسة طبيعة الطلب.",
    faq2Q: "ما اللغات التي تترجمون منها وإليها؟",
    faq2A: "نتعامل أساسًا مع العربية والإنجليزية، ونوفّر — حسب توفّر المختصّين — الفرنسية والإسبانية والألمانية والتركية. للغات الأخرى يُرجى التواصل معنا لاستكشاف الإمكانية.",
    faq3Q: "هل هناك رسوم على خدمات الترجمة؟",
    faq3A: "تُحدَّد التكلفة بناءً على عدد الكلمات، التخصص، والمدة المطلوبة. نُقدّم عرض سعر مجاني خلال 48 ساعة من استلام الطلب، دون أي التزام منك.",
    faq4Q: "كيف تحافظون على سرية المحتوى؟",
    faq4A: "نلتزم بأعلى معايير السرية. يمكن توقيع اتفاقية عدم إفصاح (NDA) قبل البدء بأي مشروع، ويتعامل مع وثيقتك عدد محدود جدًا من المختصّين الموثوقين.",
    faq5Q: "ما معايير الجودة المعتمدة لديكم؟",
    faq5A: "نتبع منهجية المراجعة المزدوجة (مترجم رئيسي + مراجع مستقل) مع قاموس مصطلحات موحّد لكل مشروع، ومراجعة لغوية وأسلوبية نهائية قبل التسليم.",
    faq6Q: "هل تتعاملون مع المشاريع الكبيرة كالكتب الكاملة؟",
    faq6A: "نعم — نتعامل مع ترجمة الكتب الأكاديمية والإصدارات المتخصصة، ولدينا خبرة في التعاون مع دور النشر العربية والعالمية لإنتاج ترجمات بمعايير عالية الجودة.",

    // ───── Closing Quote ─────
    closingQuote: "نمنح المعرفة لسانًا عالميًا، ونبني جسور التواصل الفكري وراء الحدود",
    closingCaption: "هذه قناعتنا، وعلى أساسها تُبنى كل ترجمة نُصدرها.",
  },
  form: {
    title: "أرسل رسالتك",
    subtitle:
      "يُرسل النموذج مباشرةً إلى البريد الرسمي للمؤسسة. يمكنكم الرد على بريد المرسل من صندوق الوارد لديكم.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    submit: "إرسال إلى المؤسسة",
    submitting: "جاري الإرسال…",
    hint: "لن يُطلب منك فتح تطبيق بريد على جهازك — الإرسال يتم من الموقع.",
    errName: "يرجى إدخال الاسم",
    errEmail: "يرجى إدخال بريد صالح",
    errSubject: "يرجى إدخال موضوع مختصر",
    errMessage: "يرجى كتابة رسالة لا تقل عن ١٠ حروف",
    errPhone: "يرجى إدخال رقم الهاتف",
    errPhoneInvalid: "يرجى إدخال رقم هاتف صالح",
    toastOk: "تم إرسال رسالتك إلى المؤسسة بنجاح.",
    toastErr: "تعذّر إرسال الرسالة. حاول مرة أخرى لاحقاً.",
    toastErrConfig:
      "خدمة البريد غير مهيأة على الخادم. يرجى التواصل مع مسؤول الموقع لتفعيل SMTP.",
    toastValidate: "يرجى مراجعة الحقول المطلوبة قبل الإرسال.",
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
    stat1t: "العمق العلمي",
    stat1s: "نصوغ المعرفة بمنهجية رصينة وأدوات تحليلية متطورة",
    stat2t: "الجسر الثقافي",
    stat2s: "نترجم الحضارات لا الكلمات، ونوطّن المعرفة بدقة لغوية",
    stat3t: "بصمة فكرية",
    stat3s: "ننتقي ما ننشر — زادًا فكريًا يليق بطموحات قرّائنا",
  },
  about: {
    heroSubtitle:
      "مؤسسة بحثية وفكرية من قلب الإسكندرية — تجمع عراقة المنارة بآفاق الحاضر، وتسعى لتقديم معرفة رصينة تخدم المجتمع المهني والأكاديمي.",
    kicker: "هويّتنا",
    title: "من نحن",
    p1a: "مؤسسة باتل عبدالله الباتل للبحوث والدراسات",
    p1b:
      "هي مؤسسة مصرية للبحوث والتطوير والترجمة، تعمل من قلب الإسكندرية، وتستهدف مجموعة من الأهداف الرئيسية التي تخدم المجتمع المهني والأكاديمي على حد سواء.",
    p2:
      "البحث العلمي عندنا ليس مجرد أرقام، بل رؤى تخدم المجتمع وتصنع القرار. نسعى لإثراء المشهد المهني والأكاديمي بإصدارات وبرامج تطوير في كافة التخصصات — خدمةً للمعرفة وللممارسين في جمهورية مصر العربية والمحيط العربي.",
    li1: "نصوغ المعرفة بمنهجية رصينة، فنقدم دراسات تطبيقية تدعم القرار في القطاعين العام والخاص.",
    li2: "نترجم الحضارات لا الكلمات، فنُقرّب المسافات بين الثقافات بدقة لغوية وأمانة نصية.",
    li3: "نطوّر القدرات المهنية ببرامج وورش متخصصة تنسجم مع احتياجات سوق العمل المصري.",

    // ───── ما يميّزنا (3 بطاقات) ─────
    diffKicker: "ما يميّزنا",
    diffTitle: "خبرة أكاديمية، رؤية استشرافية، ومنهجية عالمية",
    diffIntro:
      "ثلاث ركائز تجعل من الباتل خياراً موثوقاً للباحثين والمؤسسات في مصر والوطن العربي.",
    diff1T: "خبرة مصرية–سعودية متكاملة",
    diff1D:
      "كادر يجمع عراقة الجامعات المصرية بانضباط المؤسسات السعودية، ويحوّل التكامل بين المعرفتين إلى قيمة مضافة لكل بحث ندخله.",
    diff2T: "منهج متعدد التخصصات",
    diff2D:
      "نُرحّب بالأبحاث في كافة فروع المعرفة — من العلوم الإنسانية والاجتماعية إلى القانون والتربية والإعلام — لإثراء المكتبة العربية بإصدارات شاملة.",
    diff3T: "ربط الأكاديميا بالمجتمع المهني",
    diff3D:
      "نحوّل النتائج النظرية إلى أدوات عملية وتوصيات قابلة للتطبيق تخدم صنّاع القرار والممارسين على أرض الواقع.",

    // ───── قيمنا الأساسية (6 بطاقات) ─────
    valuesKicker: "قيمنا",
    valuesTitle: "قيمٌ نلتزم بها في كل بحث",
    valuesIntro:
      "ست قيم تشكّل بوصلتنا الداخلية وتصبغ كل ما نُصدره ونقدّمه.",
    val1T: "النزاهة العلمية",
    val1D: "أمانة منهجية وموضوعية في عرض النتائج وتوثيق المصادر.",
    val2T: "الجودة والإتقان",
    val2D: "معايير صارمة في التحرير والمراجعة قبل أي إصدار.",
    val3T: "الأصالة والابتكار",
    val3D: "نقدّم ما يضيف، لا ما يكرر — مع شجاعة طرح الأسئلة الجديدة.",
    val4T: "التعاون والشراكة",
    val4D: "نؤمن بأن المعرفة تُبنى جماعيًا، فنفتح أبوابنا للباحثين والمؤسسات.",
    val5T: "المسؤولية المجتمعية",
    val5D: "بحوث تُلامس قضايا المجتمع وتُسهم في تطوير سياساته.",
    val6T: "التطوير المستمر",
    val6D: "نُحدّث أدواتنا ومناهجنا باستمرار لمواكبة المعرفة العالمية.",

    // ───── نشاطاتنا في لمحة (4 بطاقات روابط) ─────
    actKicker: "ماذا نفعل",
    actTitle: "نشاطاتنا في لمحة",
    actIntro:
      "أربعة محاور رئيسية يلتقي فيها فريقنا لخدمة الباحث والممارس في الوطن العربي.",
    act1T: "لجنة البحوث والدراسات",
    act1D: "بحوث وتقارير وورقات سياسات في كافة التخصصات.",
    act1Cta: "استكشف اللجنة",
    act2T: "لجنة الترجمة",
    act2D: "نقل المعرفة بدقة وأمانة بين العربية واللغات الأخرى.",
    act2Cta: "استكشف اللجنة",
    act3T: "الإصدارات والنشر",
    act3D: "كتب ومراجع تُثري المكتبة العربية بإسهامات نوعية.",
    act3Cta: "تصفّح الإصدارات",
    act4T: "مجلس الأمناء",
    act4D: "نخبة من الخبراء والأكاديميين يقودون مسيرة المؤسسة.",
    act4Cta: "تعرّف على المجلس",

    // ───── الموقع ─────
    locKicker: "أين نحن",
    locTitle: "موقعنا في قلب الإسكندرية",
    locIntro:
      "من قلب باب شرق، ونحديد على طريق الحرية — نواصل إضاءة دروب المعرفة.",
    locAddressLabel: "العنوان الكامل",
    locAddressVal: "٨٤ طريق الحرية، باب شرق، الإسكندرية، جمهورية مصر العربية",
    locEmailLabel: "البريد الرسمي",
    locDirectionsCta: "احصل على الاتجاهات",
    locContactCta: "تواصل معنا",
    locMapTitle: "موقع مؤسسة الباتل على خريطة جوجل",

    // ───── دعوة ختامية ─────
    ctaKicker: "ابدأ معنا",
    ctaTitle: "هل تبحث عن شريك بحثي موثوق؟",
    ctaSubtitle:
      "تواصل معنا للحصول على استشارة، أو اكتشف إصداراتنا الأخيرة، أو انضم إلى رحلتنا المعرفية.",
    ctaPrimary: "تواصل مع الفريق",
    ctaSecondary: "تصفّح الإصدارات",
  },
  vision: {
    kicker: "استراتيجيتنا",
    title: "نحو ماذا نتطلّع، ولأجل ماذا نعمل",
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
    title: "ما نصبو إليه",
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
    scrollToTop: "Back to top",
  },
  homeLanding: {
    explore: "Explore the foundation",
    exploreKicker: "Foundation sections",
    exploreTitle: "Gateways of knowledge at Albatel Foundation",
    intro:
      "The gateway to knowledge from the heart of the Mediterranean bride to the world — where the legacy of scholarly research meets the horizons of the future.",
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
      "Academic expertise, a forward-looking vision, and a global methodology — this is where we make the difference.",
    valuesKicker: "Why us?",
    valuesTitle: "Because real development starts from a solid research foundation",
    v1t: "Research that informs decisions",
    v1d: "Our science is not mere figures — it is insight that serves society and shapes decisions.",
    v2t: "Professional-grade translation",
    v2d: "Precision, fidelity, and textual spirit — our constants in bridging cultures.",
    v3t: "Societal impact",
    v3d: "Partnerships and programmes supporting professional and knowledge development across Egypt and the Arab region.",
    split1Title: "Research & publishing system",
    split1Body:
      "We do not merely transfer knowledge — we craft it with rigorous methodology and advanced analytical tools. Academic precision is our commitment to producing studies that serve as a trusted reference for researchers and policymakers.",
    split2Title: "Translation as a knowledge platform",
    split2Body:
      "We translate not just words but civilizations — localizing knowledge and giving it a global voice while building bridges of intellectual exchange beyond borders.",
    bannerQuote:
      "Sound knowledge is a civilized decision — from the ancient lighthouse of Alexandria, we continue to illuminate the paths of knowledge in modern times.",
    bannerCaption: "We read the past, analyze the present, and chart the course for the future.",
    homeContactKicker: "Together, we make the difference",
    homeContactTitle: "Tell us what is on your mind",
    homeContactBody:
      "Join our knowledge journey in Alexandria, where thought knows no boundaries. For inquiries or collaboration, use the cards below or visit the contact page to send a detailed message.",
    homeContactCta: "Go to contact & form",
    publicationsBandKicker: "Publications",
    publicationsBandTitle: "An intellectual imprint that enriches the Arabic library",
    publicationsBandBody:
      "Our books are not mere paper — they are research journeys wrapped in logic and analysis. From football economics to internal audit under the COSO framework, our team produces professional authored and adapted titles, with copy requests available through the foundation in Egypt.",
    publicationsBandCta: "Browse publications & order",
    scrollHint: "Discover more",
  },
  boardPage: {
    kicker: "Governance",
    title: "Board of trustees",
    subtitle:
      "A board uniting distinguished academic and professional expertise across accounting, advisory, and development — steering strategy and overseeing performance with sound governance standards.",
    membersKicker: "Leadership structure",
    membersTitle: "Board members",
    membersIntro:
      "Accumulated experience and international professional credentials, gathered to serve the foundation's mission in research, development, and translation.",
    chairBadge: "Chairman",
    qualificationsLabel: "Key qualifications & experience",
    showDetails: "View qualifications",
    hideDetails: "Hide qualifications",
    bioComingSoon: "Biography to be added soon",

    // ───── Board's Pledge (closing) ─────
    pledgeKicker: "Our pledge",
    pledgeTitle: "Our commitments to the foundation and community",
    pledgeIntro:
      "Four commitments the Board of Trustees holds itself to before every researcher and stakeholder of the foundation.",
    p1T: "Sound governance",
    p1D: "Collective, deliberate decisions based on scientific and ethical standards, with transparency in every vote and deliberation.",
    p2T: "Strategic oversight",
    p2D: "Continuous stewardship of the foundation's mission and goals, with long-term performance monitoring.",
    p3T: "Transparent achievement",
    p3D: "Regular disclosure to the professional and academic community on outcomes and publications.",
    p4T: "Institutional excellence",
    p4D: "Global quality standards in everything the foundation publishes — without compromise or shortcut.",
    pledgeSeal: "Board of Trustees · Albatel Foundation",
    pledgeSealNote: "Collective leadership in service of knowledge",
  },
  researchPage: {
    // ───── Page Hero ─────
    kicker: "Specialized committees",
    title: "Research & Studies Committee",
    subtitle:
      "A multidisciplinary research platform uniting Egyptian academic and Saudi professional expertise — enriching the Arabic library with rigorous publications across all human and applied sciences.",

    // ───── Highlights ─────
    b1t: "Rigorous methodology",
    b1d: "Clear scientific frameworks aligned with international academic standards across every research domain.",
    b2t: "Professional publications",
    b2d: "Reports, policy briefs, and knowledge studies that support decision-makers across the Arab region.",
    b3t: "Knowledge partnerships",
    b3d: "Collaboration with research centres and universities in Egypt, Saudi Arabia, and the Arab world.",
    b4t: "Quality governance",
    b4d: "Independent peer review and evidence verification prior to release or delivery.",

    // ───── Manifesto ─────
    manifestoKicker: "Our methodology statement",
    manifestoTitle: "We do not transfer knowledge — we craft it",
    manifestoBody:
      "Our science is not mere figures, but insight that serves society and shapes decisions. The Research Committee is a multidisciplinary knowledge platform that welcomes researchers from Egypt, Saudi Arabia, and the wider Arab world, opening to all fields of science — humanities, social, economic, legal, educational, media, Islamic, and linguistic studies — to enrich the Arabic library with rigorous publications that serve as a trusted reference for researchers and policymakers.",

    // ───── Reach indicators ─────
    reachT1: "Egyptian–Saudi expertise",
    reachD1: "An academic and professional cadre uniting the legacy of Egyptian universities with the discipline of Saudi institutions.",
    reachT2: "Enriching the Arabic library",
    reachD2: "Research and scholarly publications serving readers and researchers across every Arab country.",
    reachT3: "Extended Arab partnerships",
    reachD3: "Academic collaboration with universities and research centres throughout the Arab world.",

    // ───── Methodology ─────
    methodologyKicker: "How we work",
    methodologyTitle: "The research journey at the foundation",
    methodologyIntro:
      "Five precise stages, from idea to publication that carries genuine knowledge value.",
    step1T: "Designing the research framework",
    step1D: "Defining the research question, objectives, methodology, and study boundaries.",
    step2T: "Data collection & analysis",
    step2D: "Adopting advanced analytical tools tailored to each discipline and its domain.",
    step3T: "Scientific peer review",
    step3D: "Specialized peer review to ensure scientific accuracy and originality.",
    step4T: "Editing & drafting",
    step4D: "Linguistic and stylistic refinement honoring the Arabic language and approved terminology.",
    step5T: "Publication & recommendations",
    step5D: "Publishing results in a professional format that serves both specialists and practitioners.",

    // ───── Research Areas ─────
    areasKicker: "Research horizons",
    areasTitle: "Our research areas",
    areasIntro:
      "We welcome research proposals across a broad spectrum of disciplines, serving the diversity of the Arab knowledge community.",
    area1T: "Humanities & Social Sciences",
    area1D: "Philosophy, history, sociology, psychology, and anthropology.",
    area2T: "Economic & Administrative Sciences",
    area2D: "Economics, management, accounting, finance, and marketing.",
    area3T: "Law & Legislation",
    area3D: "Public and private law, judicial systems, and regulatory studies.",
    area4T: "Education & Pedagogy",
    area4D: "Curricula, teaching methods, higher education, and educational technology.",
    area5T: "Media & Communication",
    area5D: "Journalism, digital media, corporate communication, and public opinion.",
    area6T: "Islamic & Sharia Studies",
    area6D: "Fiqh, principles of jurisprudence, Quranic studies, and Islamic heritage.",
    area7T: "Translation & Linguistics",
    area7D: "Linguistic sciences, specialized translation, and lexicography.",
    area8T: "Arab Heritage & Civilization",
    area8D: "Literature, civilization, historical studies, and literary criticism.",

    // ───── Form ─────
    formKicker: "Join us",
    formTitle: "Join our knowledge journey",
    formIntro:
      "For researchers, professors, and institutions seeking research collaboration with us — take a few minutes to fill out the form, and we will get back to you within official working days.",
    formAffiliation: "Affiliation",
    formAffiliationHint: "Optional — e.g. university, research centre, or company",
    formRequestType: "Request type",
    formRequestTypeHint: "Choose the option that best fits your request",
    type1T: "Research proposal",
    type1D: "A project ready for review and publication",
    type2T: "Peer review request",
    type2D: "Scientific review of a completed work",
    type3T: "Institutional partnership",
    type3D: "Collaboration between bodies or centres",
    type4T: "Methodological consultation",
    type4D: "Questions on methodology or tools",
    type5T: "Supervision / examination",
    type5D: "For master's or doctoral works",
    formArea: "Research area",
    formAreaPlaceholder: "Pick the closest discipline to your proposal",
    formAreaOther: "Other / Multidisciplinary",
    formProposalTitle: "Proposal title or subject",
    formSummary: "Idea summary",
    formSummaryHint: "Write a clear summary (minimum 50 characters)",
    formAttachment: "Attachment link (optional)",
    formAttachmentHint: "DOI, Google Drive, academic profile, or file URL",
    formSubmit: "Send to the Research Committee",
    formSubmitting: "Sending…",
    formSuccess: "Your request was received successfully. We will reach out to you soon.",
    formError: "Could not send the request. Please try again later.",
    formErrType: "Please select a request type",
    formErrArea: "Please select a research area",
    formErrProposalTitle: "Please enter a proposal title",
    formErrSummary: "Please write at least 50 characters",
    formErrAttachmentUrl: "Invalid URL",

    // ───── FAQ ─────
    faqKicker: "Frequently asked",
    faqTitle: "Answers you expect",
    faq1Q: "How can I submit a research proposal?",
    faq1A: "Fill out the form above and select \"Research proposal\", attaching the abstract or full paper link. The committee will review and follow up with the next steps.",
    faq2Q: "What is the expected response time?",
    faq2A: "We commit to responding to proposals within 7 to 14 working days, depending on the proposal nature and study scope.",
    faq3Q: "Are there any publication fees?",
    faq3A: "No publication fees apply for accepted proposals, except for special cases (commercial print runs or custom designs), which are openly discussed with the researcher in advance.",
    faq4Q: "Which languages are accepted?",
    faq4A: "We primarily accept proposals in Arabic, and welcome English-language research provided that a comprehensive Arabic abstract is included.",
    faq5Q: "How are research works selected for publication?",
    faq5A: "The committee evaluates scientific originality, methodological precision, knowledge contribution, and topic relevance to the Arab professional and academic community.",
    faq6Q: "Can I republish a previously published work?",
    faq6A: "We accept original research exclusively. However, substantially developed works can be considered with prior publisher permission and clear articulation of new contributions.",

    // ───── Closing Quote ─────
    closingQuote: "Knowledge is not written merely to be published — it is written to change",
    closingCaption: "This is our conviction, and on it every study we publish is built.",
  },
  translationPage: {
    // ───── Page Hero ─────
    kicker: "Specialized committees",
    title: "Translation & Localization Committee",
    subtitle:
      "Your window to global thought, our gateway for Arab thought to reach the world — precision in terminology, fidelity to the text, and a spirit that bridges cultures.",

    // ───── Highlights ─────
    b1t: "Terminology alignment",
    b1d: "Specialized reference glossaries for every knowledge domain to ensure scientific consistency.",
    b2t: "Double linguistic review",
    b2d: "Precise layered editing to guarantee clarity, context, and stylistic discipline.",
    b3t: "Professional delivery",
    b3d: "Elegant formatting and professional visual identity for every translated document.",
    b4t: "Arabic cultural context",
    b4d: "Phrasing and terminology mindful of the Arab and Egyptian audience.",

    // ───── Manifesto ─────
    manifestoKicker: "Our methodology statement",
    manifestoTitle: "We translate not words — but civilizations",
    manifestoBody:
      "The Translation Committee at Albatel is not just a linguistic service, but a knowledge bridge connecting cultures. We empower the Arabic text to reach global horizons, and bring back to the Arabic library masterpieces of human thought with linguistic precision and textual fidelity. Precision, fidelity, and textual spirit — these are our constants for bridging cultures and building intellectual connections beyond borders.",

    // ───── Reach ─────
    reachT1: "Arabic to many languages",
    reachD1: "We help Arab thought reach global readers in European and Asian languages.",
    reachT2: "Global thought into Arabic",
    reachD2: "We bring foundational works and contemporary studies into Arabic with depth and fidelity.",
    reachT3: "Diverse publishing partnerships",
    reachD3: "Collaboration with academic publishers across Egypt and the Arab world.",

    // ───── Methodology ─────
    methodologyKicker: "How we translate",
    methodologyTitle: "The translation journey at the foundation",
    methodologyIntro:
      "Five thoughtful stages, from the original text to a translation that preserves the author's spirit and reaches the reader's mind.",
    step1T: "Receiving & analyzing the text",
    step1D: "Studying style, target audience, and the nature of the terminology.",
    step2T: "Building the glossary",
    step2D: "Adopting a unified terminology list before commencing translation.",
    step3T: "Precise translation",
    step3D: "Professional translation in sound language preserving the original spirit.",
    step4T: "Double linguistic review",
    step4D: "Grammatical, stylistic, and second-specialist review.",
    step5T: "Layout & delivery",
    step5D: "Final formatting and professional delivery ready for publishing.",

    // ───── Translation Services ─────
    areasKicker: "Our specialties",
    areasTitle: "Our translation domains",
    areasIntro:
      "We cover a broad spectrum of fields with a specialized team in each area to ensure terminological accuracy and content quality.",
    area1T: "Academic & Scientific",
    area1D: "Research, theses, scientific journals, and academic textbooks.",
    area2T: "Legal & Regulatory",
    area2D: "Contracts, regulations, judicial fatwas, and official documents.",
    area3T: "Economic & Administrative",
    area3D: "Financial reports, market studies, and administrative documents.",
    area4T: "Literary & Cultural",
    area4D: "Novels, short stories, poetry, and intellectual essays.",
    area5T: "Islamic & Sharia",
    area5D: "Fatwas, fiqh books, and Islamic studies.",
    area6T: "Medical & Health",
    area6D: "Medical research, drug leaflets, and clinical guidelines.",
    area7T: "Technical & IT",
    area7D: "Technical manuals, brochures, and software localization.",
    area8T: "General & Multidisciplinary",
    area8D: "Diverse documents not belonging to a single domain or multi-domain projects.",

    // ───── Form ─────
    formKicker: "Request translation",
    formTitle: "Request a translation service",
    formIntro:
      "For individuals and institutions seeking professional translation services — fill out the form, and we'll get back to you within official working days.",
    formAffiliation: "Affiliation",
    formAffiliationHint: "Optional — e.g. university, company, or publishing house",
    formServiceType: "Service type",
    formServiceTypeHint: "Choose the option that suits your request",
    type1T: "Full translation",
    type1D: "Translating a text or document from scratch",
    type2T: "Proofreading",
    type2D: "Reviewing a completed translation",
    type3T: "Localization",
    type3D: "Adapting content for the Arab context",
    type4T: "Linguistic consultation",
    type4D: "Questions on terminology or style",
    type5T: "Publishing partnership",
    type5D: "Collaboration with publishing houses",
    formDomain: "Specialized domain",
    formDomainPlaceholder: "Pick the closest field",
    formDomainOther: "Other / Multi-domain",
    formSourceLang: "Source language",
    formTargetLang: "Target language",
    formLangPlaceholder: "Choose a language",
    langAr: "Arabic",
    langEn: "English",
    langFr: "French",
    langEs: "Spanish",
    langDe: "German",
    langTr: "Turkish",
    langOther: "Other language",
    formDocTitle: "Document title or subject",
    formDescription: "Request description",
    formDescriptionHint: "Write a clear description (minimum 50 characters)",
    formWordCount: "Approximate word count",
    formWordCountHint: "Optional — helps estimate time and cost",
    formAttachment: "Document link (optional)",
    formAttachmentHint: "Google Drive, DOI, or file link",
    formSubmit: "Send to the Translation Committee",
    formSubmitting: "Sending…",
    formSuccess: "Your request was received successfully. We will reach out to you soon.",
    formError: "Could not send the request. Please try again later.",
    formErrType: "Please select a service type",
    formErrDomain: "Please select a specialized domain",
    formErrSourceLang: "Please select a source language",
    formErrTargetLang: "Please select a target language",
    formErrSameLang: "Source and target languages must be different",
    formErrDocTitle: "Please enter a document title",
    formErrDescription: "Please write at least 50 characters",
    formErrAttachmentUrl: "Invalid URL",

    // ───── FAQ ─────
    faqKicker: "Frequently asked",
    faqTitle: "Answers you expect",
    faq1Q: "How long does translating a document usually take?",
    faq1A: "It varies depending on document length and specialized domain. Small documents (under 5,000 words) take 5-7 working days, while larger projects have their timeline determined after assessing the request's nature.",
    faq2Q: "Which languages do you translate from and to?",
    faq2A: "We primarily handle Arabic and English, and offer — based on specialist availability — French, Spanish, German, and Turkish. For other languages, please contact us to explore the possibility.",
    faq3Q: "Are there fees for translation services?",
    faq3A: "Cost is determined based on word count, specialty, and required timeframe. We provide a free quote within 48 hours of receiving your request, with no obligation.",
    faq4Q: "How do you maintain content confidentiality?",
    faq4A: "We adhere to the highest confidentiality standards. A non-disclosure agreement (NDA) can be signed before any project begins, and only a very limited number of trusted specialists handle your document.",
    faq5Q: "What quality standards do you follow?",
    faq5A: "We follow the double-review methodology (lead translator + independent reviewer) with a unified glossary for each project, and a final linguistic and stylistic review before delivery.",
    faq6Q: "Do you handle large projects like full books?",
    faq6A: "Yes — we handle academic books and specialized publications, and have experience collaborating with Arab and international publishers to produce high-quality translations.",

    // ───── Closing Quote ─────
    closingQuote: "We give knowledge a global tongue, and build bridges of intellectual exchange beyond borders",
    closingCaption: "This is our conviction, and on it every translation we deliver is built.",
  },
  form: {
    title: "Send a message",
    subtitle:
      "The form is sent directly to the foundation’s official inbox. You can reply to the sender’s address from your mail.",
    name: "Full name",
    email: "Email address",
    phone: "Phone number",
    subject: "Subject",
    message: "Message",
    submit: "Send to the foundation",
    submitting: "Sending…",
    hint: "No mail app is required on your device — sending happens from the website.",
    errName: "Please enter your name",
    errEmail: "Please enter a valid email",
    errSubject: "Please enter a short subject",
    errMessage: "Please write at least 10 characters",
    errPhone: "Please enter your phone number",
    errPhoneInvalid: "Please enter a valid phone number",
    toastOk: "Your message was sent to the foundation successfully.",
    toastErr: "Could not send the message. Please try again later.",
    toastErrConfig:
      "Mail is not configured on the server. Ask the site administrator to enable SMTP.",
    toastValidate: "Please review the required fields before sending.",
  },
  lang: { ar: "العربية", en: "English", switch: "Change language" },
  theme: { light: "Light mode", dark: "Dark mode", toggle: "Toggle theme" },
  hero: {
    badge: "Arab Republic of Egypt — Alexandria",
    titleLead: "",
    titleAccent: "Batel Abdullah Al-Batel",
    titleRest: "Foundation for Research & Studies",
    subtitle:
      "An Egyptian hub for scholarly research, professional development, and precise translation — we enrich the professional and academic landscape with rigorous outputs for decision-makers and society.",
    ctaContact: "Contact us",
    ctaAbout: "About the foundation",
    stat1t: "Scientific depth",
    stat1s: "We craft knowledge with rigorous methodology and advanced analytical tools",
    stat2t: "Cultural bridge",
    stat2s: "We translate civilizations, not just words — localizing knowledge with linguistic care",
    stat3t: "Intellectual imprint",
    stat3s: "We curate what we publish — substance worthy of our readers’ aspirations",
  },
  about: {
    heroSubtitle:
      "A research and intellectual foundation from the heart of Alexandria — bridging the legacy of the lighthouse with the horizons of today, delivering rigorous knowledge that serves professional and academic communities.",
    kicker: "Our identity",
    title: "Who we are",
    p1a: "The Batel Abdullah Al-Batel Foundation for Research and Studies",
    p1b:
      "is an Egyptian institution for research, development, and translation, based in Alexandria, pursuing key objectives that serve both professional and academic communities.",
    p2:
      "Our science is not mere figures — it is insight that serves society and shapes decisions. We seek to enrich the professional and academic landscape with publications and development programmes across all disciplines — in service of knowledge and practitioners in Egypt and the wider Arab region.",
    li1: "We craft knowledge with rigorous methodology, delivering applied studies that support decisions in public and private sectors.",
    li2: "We translate civilizations, not just words — bridging cultures with linguistic precision and textual fidelity.",
    li3: "We grow professional capacities through targeted programmes and workshops aligned with the Egyptian labour market.",

    // ───── What sets us apart ─────
    diffKicker: "What sets us apart",
    diffTitle: "Academic depth, forward-looking vision, global methodology",
    diffIntro:
      "Three pillars that make Albatel a trusted choice for researchers and institutions across Egypt and the Arab world.",
    diff1T: "Egyptian–Saudi expertise",
    diff1D:
      "A cadre uniting the legacy of Egyptian universities with the discipline of Saudi institutions, turning that synergy into added value for every research project we undertake.",
    diff2T: "Multidisciplinary approach",
    diff2D:
      "We welcome research across all knowledge domains — from humanities and social sciences to law, education, and media — to enrich the Arabic library with comprehensive publications.",
    diff3T: "Bridging academia & practice",
    diff3D:
      "We translate theoretical findings into practical tools and actionable recommendations that serve decision-makers and practitioners on the ground.",

    // ───── Core values ─────
    valuesKicker: "Our values",
    valuesTitle: "Values we uphold in every research work",
    valuesIntro:
      "Six values that form our internal compass and shape everything we publish and deliver.",
    val1T: "Scientific integrity",
    val1D: "Methodological honesty and objectivity in presenting findings and citing sources.",
    val2T: "Quality & excellence",
    val2D: "Rigorous standards in editing and review prior to any publication.",
    val3T: "Originality & innovation",
    val3D: "We deliver what adds, not what repeats — with the courage to ask new questions.",
    val4T: "Collaboration & partnership",
    val4D: "We believe knowledge is built collectively — opening our doors to researchers and institutions.",
    val5T: "Social responsibility",
    val5D: "Research that touches social issues and contributes to policy development.",
    val6T: "Continuous improvement",
    val6D: "We constantly update our tools and methodologies to keep pace with global knowledge.",

    // ───── Activities at a glance ─────
    actKicker: "What we do",
    actTitle: "Our activities at a glance",
    actIntro:
      "Four core pillars where our team converges to serve researchers and practitioners across the Arab world.",
    act1T: "Research & Studies Committee",
    act1D: "Research, reports, and policy briefs across all disciplines.",
    act1Cta: "Explore the committee",
    act2T: "Translation Committee",
    act2D: "Conveying knowledge with precision and fidelity between Arabic and other languages.",
    act2Cta: "Explore the committee",
    act3T: "Publications & Press",
    act3D: "Books and references that enrich the Arabic library with substantive contributions.",
    act3Cta: "Browse publications",
    act4T: "Board of Trustees",
    act4D: "An elite of experts and academics leading the foundation's journey.",
    act4Cta: "Meet the board",

    // ───── Location ─────
    locKicker: "Where we are",
    locTitle: "Our location in the heart of Alexandria",
    locIntro:
      "From Bab Sharqi, on the historic El-Horreya Road — we continue illuminating the paths of knowledge.",
    locAddressLabel: "Full address",
    locAddressVal: "84 El-Horreya Road, Bab Sharqi, Alexandria, Arab Republic of Egypt",
    locEmailLabel: "Official email",
    locDirectionsCta: "Get directions",
    locContactCta: "Contact us",
    locMapTitle: "Albatel Foundation location on Google Maps",

    // ───── Closing CTA ─────
    ctaKicker: "Start with us",
    ctaTitle: "Looking for a trusted research partner?",
    ctaSubtitle:
      "Reach out for a consultation, explore our latest publications, or join our knowledge journey.",
    ctaPrimary: "Contact our team",
    ctaSecondary: "Browse publications",
  },
  vision: {
    kicker: "Our strategy",
    title: "What we aspire to, and why we work",
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
    title: "What we aspire to",
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
    org: "Batel Abdullah Al-Batel Foundation for Research and Studies",
    country: "Arab Republic of Egypt — Alexandria",
    rights: "All rights reserved.",
    followUs: "Follow us on",
    rightsLine:
      "All rights reserved — Batel Abdullah Al-Batel Foundation for Research and Studies",
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
    name: "مؤسسة باتل عبدالله الباتل ",
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
