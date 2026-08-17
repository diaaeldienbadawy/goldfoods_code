import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // NavBar
    home: "Home",
    factory: "Factory",
    product: "Product",
    aboutUs: "About us",
    contact: "Contact",
    
    // Footer
    footerDesc: "Premium frozen seafood and meats, carefully imported with exceptional quality.",
    contactUs: "Contact us",
    products: "Products",
    resources: "Resources",
    rightsReserved: "© 2025 Gold Foods. All rights reserved.",
    
    // Features Section
    ourFeatures: "Our Features",
    featuresTitle: "Quality is Our First Priority",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Efficient logistics and cold chain management",
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Sourced from the best suppliers worldwide",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc: "Rigorous quality control at every step",
    expertSupport: "Expert Support",
    expertSupportDesc: "Dedicated team for your business needs",
    
    // Seed El Balad Section
    subBrand: "Premium Sub-Brand",
    brandTitle: "SEED EL BALAD",
    authenticEgyptianHerring: "Authentic Egyptian Smoked Herring",
    brandStory: "Our flagship brand, SEED EL BALAD, represents the pinnacle of smoked herring craftsmanship. Sourced from the cold, clean waters of the Atlantic, our herring is processed daily at the Gold Foods factory using traditional salting techniques and slowly smoked over premium, chemical-free oak and beechwood. This ensures a rich, authentic flavor profile and a tender texture that Egyptians have loved for generations.",
    originalQuality: "Original Quality",
    noAdditives: "100% natural smoking process. No artificial additives or colors.",
    exploreProcess: "Explore Production Process",
    pureOakSmoked: "Pure Oak Smoked",
    
    // Seed El Balad Showcase
    productRange: "Product Range",
    varietiesTitle: "SEED EL BALAD Packagings & Varieties",
    pouchTitle: "Smoked Herring Pouch",
    pouchDesc: "Stand-up zipper pouches containing premium smoked herring. Sealed to preserve natural oils and smokiness with clear nutrition facts.",
    pouchTag: "Best Seller",
    filletTitle: "Fresh Fillet Slices",
    filletDesc: "Skinless and boneless premium smoked herring fillets sliced and vacuum-sealed in pouches. Easy, clean, and ready to serve.",
    filletTag: "Fillet Slices",
    jarsTitle: "Gourmet Paste Jars",
    jarsDesc: "Rich, smooth smoked herring paste blended with premium spices, packed in glass jars and nestled on ice inside premium boxes.",
    jarsTag: "Gourmet Paste",
    vacuumTitle: "Vacuum Sealed Boxes",
    vacuumDesc: "Whole golden-smoked herrings vacuum-sealed in heavy food-grade film, packed in sturdy blue brand cartons for bulk export and retail.",
    vacuumTag: "Vacuum Pack",
    cannedTitle: "Canned Herring",
    cannedDesc: "Easy-open cans containing smoked herring chunks in high-quality vegetable oil. Highly durable packaging for long-term storage.",
    cannedTag: "Canned Food",

    // Home Products
    importedVarieties: "Imported Varieties",
    ourProducts: "Our Premium Products",
    mackerelTitle: "Frozen Mackerel",
    mackerelDesc: "Premium quality whole frozen Mackerel, directly imported from the clean, cold Atlantic waters. Ideal for grilling, smoking, and baking.",
    poultryTitle: "Frozen Poultry",
    poultryDesc: "Premium frozen chicken portions and whole birds. Carefully selected and processed under strict food safety conditions.",
    meatTitle: "Frozen Meat Cuts",
    meatDesc: "Exceptional cuts of frozen beef and meats. Sourced from certified international farms ensuring top tenderness and taste.",
    viewDetails: "View Details",

    // Home Factory Slider
    manufacturingHub: "Manufacturing Hub",
    insideFactory: "Inside Gold Foods Factory",
    factoryDesc1: "Our factory utilizes the latest high-tech processing lines to prepare, salt, smoke, and pack premium food items under strict hygienic control.",
    factoryDesc2: "We maintain temperature-controlled zones, high-capacity freezing tunnels, and modern storage to preserve absolute freshness from production to distribution.",
    visitOurFactory: "Visit Our Factory Page",

    // Home Suppliers
    globalNetwork: "Global Network",
    trustedPartners: "Our Trusted Suppliers",
    suppliersDesc: "We partner with leading global fisheries, vessels, and certified farms in Northern Europe and South America to source premium fish and meats.",

    // Home Animated Fish Section (Herring details)
    exploreSpecs: "Explore Specifications",
    factsTitle: "Authentic Smoked Herring Facts",
    fact1: "Natural beechwood smoked",
    fact2: "Lightly salted to perfection",
    fact3: "Authentic traditional taste",

    // Partners
    ourBrandPartners: "Our Brand Partners",
    trustedBrands: "Trusted Brands & Collaborations",

    // About Us Page
    aboutUsTitle: "About Gold Foods",
    aboutUsSub: "Pioneering Premium Food Import & Processing in Egypt",
    aboutUsPara1: "Gold Foods is a leader in importing and processing premium frozen seafood and meats in Egypt. Founded with a vision to bring the highest quality food standards to Egyptian consumers, we operate a state-of-the-art facility located in the Al-Sharqia Governorate.",
    aboutUsPara2: "Through our flagship brand SEED EL BALAD, we have redefined the smoked herring market, combining traditional, natural wood smoking with European food safety protocols. We stand committed to consistency, quality, and exceptional taste.",
    ourMission: "Our Mission",
    ourMissionDesc: "To enrich every Egyptian dining table with premium, healthy, and sustainably sourced seafood and meat products, maintaining absolute transparency and safety in our supply chain.",
    ourVision: "Our Vision",
    ourVisionDesc: "To be the most trusted and preferred food importer and manufacturing partner in the Middle East, leading with innovation and strict compliance to food safety standards.",

    // Factory Page
    factoryTitle: "Our Production Facility",
    factorySub: "High-Tech Smoking, Processing & Frozen Food Storage",
    factoryPara1: "The Gold Foods factory is engineered to meet top global hygiene and efficiency standards. Located in the Madinah Monawarah Industrial Zone, Belbeis, our facility handles heavy daily volumes of seafood smoking, processing, and cold storage.",
    factoryPara2: "Equipped with advanced European smoking houses, computerized temperature monitoring, and quick-freezing tunnels, we ensure that every single product retains its natural nutritional value, flavor profile, and absolute safety.",
    productionCapacity: "Production Capacity",
    productionCapacityDesc: "Over 50 tons of premium smoked herring and processed seafood daily, distributed across local and international markets.",
    qualityCertificates: "Quality Certificates",
    qualityCertificatesDesc: "Fully compliant with ISO 22000, HACCP standards, and certified by the National Food Safety Authority (NFSA) of Egypt.",
    factoryLocation: "Factory Location",

    // Contact Us Page
    contactTitle: "Get in Touch",
    contactSub: "Have a business inquiry? Contact our team today.",
    factoryAddress: "Factory Address",
    officeAddress: "Office Address",
    emailUs: "Email Us",
    callUs: "Call Us",
    phoneNum: "+201032033302",
    officeDetails: "Building No. 39, Gold Tower, Prime District, 15th of May City, Cairo, Egypt.",
    factoryDetails: "Madinah Monawarah Industrial Zone Plot No. C/197 Belbeis - Al Sharqia Governorate",

    allProducts: "All Products",
    privacyPolicy: "Privacy Policy",
    cookieMessage: "We use cookies to improve your browsing experience, analyze site traffic, and deliver personalized content.",
    cookieAccept: "Accept All",
    cookieDecline: "Decline",
    cookieReadMore: "Learn More",

    // Parent Company Section
    parentCompanyTitle: "Our Parent Company",
    parentCompanySubtitle: "Seed El Balad: Direct from Our Factory to Your Table",
    parentCompanyDesc1: "Seed El Balad is more than just a brand; it is the proud flagship of Gold Foods. As the sole owner and operator, Gold Foods manages every stage of the journey—from sourcing and expert smoking techniques to quality control and distribution.",
    parentCompanyDesc2: "By keeping our operations in-house, we eliminate the middleman and deliver factory-fresh quality directly to our customers. When you choose Seed El Balad, you are choosing the direct output of Gold Foods’ commitment to excellence and culinary integrity.",
    parentLabel: "Parent Company & Factory",
    brandLabel: "Flagship Premium Brand"
  },
  ar: {
    // NavBar
    home: "الرئيسية",
    factory: "المصنع",
    product: "المنتجات",
    aboutUs: "من نحن",
    contact: "اتصل بنا",
    
    // Footer
    footerDesc: "أجود أنواع المأكولات البحرية واللحوم المجمدة، المستوردة بعناية وبأعلى مستويات الجودة.",
    contactUs: "اتصل بنا",
    products: "المنتجات",
    resources: "أقسام الموقع",
    rightsReserved: "© 2025 جولد فودز. جميع الحقوق محفوظة.",
    
    // Features Section
    ourFeatures: "مميزاتنا",
    featuresTitle: "الجودة هي أولويتنا الأولى",
    fastDelivery: "توصيل سريع",
    fastDeliveryDesc: "خدمات لوجستية فعالة وإدارة ممتازة لسلسلة التبريد",
    premiumQuality: "جودة فائقة",
    premiumQualityDesc: "مستوردة من أفضل الموردين حول العالم",
    qualityAssurance: "ضمان الجودة",
    qualityAssuranceDesc: "رقابة صارمة على الجودة في كل خطوة",
    expertSupport: "دعم الخبراء",
    expertSupportDesc: "فريق مخصص بالكامل لخدمة احتياجات عملك",
    
    // Seed El Balad Section
    subBrand: "العلامة الفاخرة المميزة",
    brandTitle: "سيد البلد SEED EL BALAD",
    authenticEgyptianHerring: "رنجة مصرية مدخنة أصيلة",
    brandStory: "تمثل علاماتنا الرائدة، سيد البلد SEED EL BALAD، قمة الحرفية في إنتاج الرنجة المدخنة. حيث يتم استيراد الأسماك من مياه المحيط الأطلسي الباردة والنقية، وتجهيزها يومياً في مصنع جولد فودز باستخدام تقنيات التمليح التقليدية الموزونة وتدخينها ببطء تحت أخشاب الزان والبلوط الطبيعية الخالية تماماً من الكيماويات. هذا يضمن الحصول على طعم أصيل وقوام طري لطالما أحبه المصريون لأجيال.",
    originalQuality: "الجودة الأصلية",
    noAdditives: "عملية تدخين طبيعية 100% بدون أي ألوان أو إضافات صناعية.",
    exploreProcess: "استكشف مراحل الإنتاج",
    pureOakSmoked: "مدخن بخشب البلوط الصافي",
    
    // Seed El Balad Showcase
    productRange: "مجموعة منتجاتنا",
    varietiesTitle: "عبوات وأنواع سيد البلد SEED EL BALAD",
    pouchTitle: "رنجة مدخنة (ظرف)",
    pouchDesc: "أظرف قائمة بسحاب إغلاق محكم تحتوي على رنجة مدخنة فاخرة. مغلفة بدقة لحفظ الزيوت الطبيعية والمذاق المدخن مع جدول القيمة الغذائية.",
    pouchTag: "الأكثر مبيعاً",
    filletTitle: "شرائح فيليه طازجة",
    filletDesc: "شرائح فيليه رنجة مدخنة فاخرة بدون جلد أو شوك، مقطعة وجاهزة ومغلفة بالتفريغ الهوائي في أظرف سهلة ونظيفة ومستعدة للتقديم المباشر.",
    filletTag: "شرائح فيليه",
    jarsTitle: "معجون رنجة فاخر (برطمانات)",
    jarsDesc: "معجون رنجة مدخنة ناعم وغني وممزوج بالتوابل الفاخرة، معبأ في برطمانات زجاجية محفوظة على الجليد داخل علب فاخرة.",
    jarsTag: "معجون رنجة فاخر",
    vacuumTitle: "رنجة مغلفة حرارياً",
    vacuumDesc: "أسماك رنجة ذهبية كاملة مدخنة ومغلفة حرارياً بغشاء سميك مخصص للأغذية، ومحفوظة في كراتين زرقاء قوية للتصدير وتجارة التجزئة.",
    vacuumTag: "تغليف حراري",
    cannedTitle: "رنجة معلبة سهلة الفتح",
    cannedDesc: "علب سهلة الفتح تحتوي على قطع رنجة مدخنة مغمورة في زيت نباتي عالي الجودة. عبوة متينة جداً ومناسبة للتخزين طويل المدى.",
    cannedTag: "أغذية معلبة",

    // Home Products
    importedVarieties: "أصناف مستوردة",
    ourProducts: "منتجاتنا المتميزة الفاخرة",
    mackerelTitle: "سمك ماكريل مجمد",
    mackerelDesc: "سمك ماكريل كامل مجمد عالي الجودة، مستورد مباشرة من المياه الأطلسية الباردة والنقية. مثالي للشوي والتدخين والطهي بالفرن.",
    poultryTitle: "دواجن مجمدة",
    poultryDesc: "أجزاء دجاج كاملة وقطع مجمدة ممتازة. مختارة ومعالجة بعناية تحت شروط صارمة لسلامة وصحة الأغذية.",
    meatTitle: "قطع لحم مجمد",
    meatDesc: "قطع استثنائية من لحوم البقر والماشية المجمدة. مستوردة من مزارع دولية معتمدة تضمن اللذاذة والطراوة.",
    viewDetails: "عرض التفاصيل",

    // Home Factory Slider
    manufacturingHub: "مركز التصنيع والإنتاج",
    insideFactory: "داخل مصنع جولد فودز",
    factoryDesc1: "يستخدم مصنعنا أحدث خطوط المعالجة التكنولوجية لتجهيز وتمليح وتدخين وتعبئة المواد الغذائية الفاخرة تحت رقابة صحية صارمة للغاية.",
    factoryDesc2: "نحافظ على مناطق مبردة ومحكمة الحرارة، وأنفاق تجميد سريعة ذات سعة عالية، ومخازن حديثة للحفاظ على الطزاجة المطلقة من الإنتاج إلى التوزيع.",
    visitOurFactory: "زيارة صفحة المصنع",

    // Home Suppliers
    globalNetwork: "شبكة عالمية",
    trustedPartners: "موردونا المعتمدون",
    suppliersDesc: "نحن نشارك كبرى مصايد الأسماك العالمية وأساطيل الصيد والمزارع المعتمدة في شمال أوروبا وأمريكا الجنوبية لاستيراد أفضل اللحوم والأسماك.",

    // Home Animated Fish Section (Herring details)
    exploreSpecs: "استكشف التفاصيل الفنية",
    factsTitle: "حقائق رنجة سيد البلد الأصيلة",
    fact1: "مدخن بخشب الزان الطبيعي",
    fact2: "تمليح خفيف موزون ومثالي",
    fact3: "طعم أصيل وتقليدي ممتاز",

    // Partners
    ourBrandPartners: "شركاء النجاح",
    trustedBrands: "علامات تجارية نعتز بالتعاون معها",

    // About Us Page
    aboutUsTitle: "عن جولد فودز",
    aboutUsSub: "رواد استيراد وتصنيع المواد الغذائية الفاخرة في مصر",
    aboutUsPara1: "تعد شركة جولد فودز رائدة في استيراد وتصنيع اللحوم والمأكولات البحرية المجمدة الفاخرة في مصر. تأسست برؤية تهدف لنقل أعلى معايير الجودة الغذائية للمستهلك المصري، ونقوم بتشغيل منشأتنا المتطورة بالكامل في محافظة الشرقية.",
    aboutUsPara2: "من خلال علامتنا التجارية الرائدة سيد البلد SEED EL BALAD، أعدنا تعريف سوق الرنجة المدخنة، بالجمع بين التدخين الطبيعي التقليدي والالتزام التام ببروتوكولات سلامة الغذاء الأوروبية. نحن ملتزمون دائماً بالجودة والثبات والمذاق الفريد.",
    ourMission: "مهمتنا",
    ourMissionDesc: "إثراء كل مائدة مصرية بمنتجات لحوم ومأكولات بحرية ممتازة وصحية ومستدامة، مع الحفاظ على الشفافية والأمان المطلق في سلسلة التوريد الخاصة بنا.",
    ourVision: "رؤيتنا",
    ourVisionDesc: "أن نكون شريك استيراد وتصنيع المواد الغذائية الأكثر ثقة وتفضيلاً في الشرق الأوسط، من خلال ريادتنا بالابتكار والامتثال التام لمعايير سلامة الأغذية.",

    // Factory Page
    factoryTitle: "منشأتنا الإنتاجية",
    factorySub: "أحدث تقنيات التدخين والمعالجة وتخزين الأغذية المجمدة",
    factoryPara1: "تم تصميم مصنع جولد فودز لتلبية أعلى معايير النظافة والكفاءة العالمية. يقع في المنطقة الصناعية بمدينة بلبيس بمحافظة الشرقية، ويقوم المصنع بمعالجة وتدخين كميات ضخمة يومياً من المأكولات البحرية وتخزينها بالتبريد.",
    factoryPara2: "مجهز ببيوت تدخين أوروبية متقدمة، ومراقبة محوسبة لدرجات الحرارة، وأنفاق تجميد سريع، لنضمن أن يحتفظ كل منتج بقيمته الغذائية ونكهته الطبيعية وأمانه الصحي التام.",
    productionCapacity: "الطاقة الإنتاجية",
    productionCapacityDesc: "أكثر من 50 طناً يومياً من الرنجة المدخنة الفاخرة والمأكولات البحرية المصنعة، الموزعة في الأسواق المحلية والدولية.",
    qualityCertificates: "شهادات الجودة والسلامة",
    qualityCertificatesDesc: "متوافق تماماً مع معايير ISO 22000 و HACCP، ومعتمد من الهيئة القومية لسلامة الغذاء (NFSA) في مصر.",
    factoryLocation: "موقع المصنع على الخريطة",

    // Contact Us Page
    contactTitle: "تواصل معنا",
    contactSub: "هل لديك استفسار تجاري؟ اتصل بفريقنا اليوم.",
    factoryAddress: "عنوان المصنع",
    officeAddress: "عنوان المكتب الرئيسي",
    emailUs: "أرسل لنا بريداً إلكترونياً",
    callUs: "اتصل بنا هاتفياً",
    phoneNum: "+201032033302",
    officeDetails: "مبنى رقم 39، برج جولد، المنطقة المتميزة، مدينة 15 مايو، القاهرة، مصر.",
    factoryDetails: "المنطقة الصناعية بمدينة بلبيس، قطعة رقم C/197 - محافظة الشرقية، مصر",

    allProducts: "كل المنتجات",
    privacyPolicy: "سياسة الخصوصية",
    cookieMessage: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتحليل حركة مرور الموقع، وتقديم محتوى مخصص.",
    cookieAccept: "موافق على الكل",
    cookieDecline: "رفض",
    cookieReadMore: "اقرأ المزيد",

    // Parent Company Section
    parentCompanyTitle: "الشركة الأم",
    parentCompanySubtitle: "سيد البلد: مباشرة من مصنعنا إلى طاولتك",
    parentCompanyDesc1: "سيد البلد هي أكثر من مجرد علامة تجارية؛ إنها العلامة الرائدة والفخورة لشركة جولد فودز. بصفتها المالك والمشغل الوحيد، تدير جولد فودز كل مرحلة من مراحل الرحلة - بدءاً من الاستيراد وتقنيات التدخين الاحترافية إلى مراقبة الجودة والتوزيع.",
    parentCompanyDesc2: "من خلال إبقاء عملياتنا داخل الشركة بالكامل، فإننا نلغي الوسيط ونقدم جودة طازجة مباشرة من المصنع إلى عملائنا. عندما تختار سيد البلد، فإنك تختار الناتج المباشر لالتزام جولد فودز بالتميز والنزاهة الغذائية.",
    parentLabel: "الشركة الأم والمصنع",
    brandLabel: "العلامة التجارية الرائدة"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('goldfoods_lang');
    if (savedLang) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('goldfoods_lang', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
