import type { Locale } from "@/lib/i18n/config";

export interface SeoCopy {
  title: string;
  description: string;
  keywords: readonly string[];
}

export interface AppMessages {
  site: SeoCopy & { name: string };
  nav: {
    home: string; about: string; whoWeAre: string; research: string; blog: string; services: string;
    products: string; clients: string; gallery: string; contact: string; stack: string; puzzle: string; automatic: string;
  };
  common: {
    home: string; openMenu: string; closeMenu: string; expandSection: string; language: string; selected: string;
    goToSlide: string; previousSlide: string; nextSlide: string; comingSoon: string; carSpaces: string; location: string;
    imageDisclaimer: string; summary: string; gallery: string; downloadBrochure: string; scrollTop: string; conjunction: string;
  };
  home: {
    seo: SeoCopy; footprint: string; parkingModels: string;
    taglines: readonly [string, string, string];
    highlights: readonly string[];
  };
  pages: Record<"about" | "research" | "blog" | "services" | "products" | "clients" | "gallery" | "contact", SeoCopy & { heading: string; breadcrumb: string }>;
  clients: { partners: string; trustedBy: string; intro: string; testimonials: string; stories: string; moreReviews: string; video: string };
  footer: { office: string; factory: string; phone: string; email: string; follow: string; copyright: string };
  about: { vision: string; mission: string; sections: string; whyIntro: string };
  services: { step: string; offer: string; question: string; helpText: string; place: string; send: string };
  product: {
    notFoundTitle: string; notFoundDescription: string; parkingSystems: string; contactNow: string; name: string;
    phone: string; email: string; message: string; submit: string; download: string; follow: string; features: string; applications: string; details: string; open: string;
  };
  consent: { title: string; description: string; accept: string; decline: string };
}

const en: AppMessages = {
  site: { name: "STELZ Multiparking", title: "STELZ Multiparking | Engineering Tomorrow’s Parking", description: "Innovative automated parking solutions for modern cities and smart infrastructure.", keywords: ["automated parking", "mechanical parking", "smart parking", "parking systems India"] },
  nav: { home: "Home", about: "About Us", whoWeAre: "Who We Are", research: "R & D", blog: "Blog", services: "Services", products: "Our Products", clients: "Our Clients", gallery: "Gallery", contact: "Contact Us", stack: "Stack Parking", puzzle: "Puzzle Parking", automatic: "Automatic" },
  common: { home: "Home", openMenu: "Open menu", closeMenu: "Close menu", expandSection: "Expand section", language: "Language", selected: "Selected", goToSlide: "Go to slide", previousSlide: "Previous slide", nextSlide: "Next slide", comingSoon: "Coming Soon…", carSpaces: "Car Spaces", location: "Location", imageDisclaimer: "This image is only for representation", summary: "Summary", gallery: "Gallery", downloadBrochure: "Download Brochure", scrollTop: "Scroll to top", conjunction: "and" },
  home: { seo: { title: "STELZ Multiparking | Engineering Tomorrow’s Parking", description: "Space-saving automated and mechanical parking systems engineered for modern cities.", keywords: ["automated parking India", "stack parking", "puzzle parking", "smart parking"] }, footprint: "STELZ Footprint", parkingModels: "Parking Models", taglines: ["Engineering Tomorrow’s Parking", "Architects of Parking Excellence", "Parking. Redefined by STELZ."], highlights: ["Innovative parking systems", "Space optimization", "Smart-city compatibility", "Easy operation", "Quick installation, long-term value"] },
  pages: {
    about: { heading: "About Us", breadcrumb: "Who We Are", title: "About STELZ Multiparking", description: "Learn about STELZ, our vision, engineering philosophy and parking expertise.", keywords: ["about STELZ", "parking company India"] },
    research: { heading: "Research & Development", breadcrumb: "R & D", title: "Research & Development | STELZ", description: "Explore our research and development in automated and mechanical parking.", keywords: ["parking research", "parking innovation"] },
    blog: { heading: "Blog", breadcrumb: "Blog", title: "Parking Insights | STELZ Blog", description: "Insights about parking technology, urban mobility and mechanical parking systems.", keywords: ["parking blog", "smart parking"] },
    services: { heading: "Services", breadcrumb: "Services", title: "Parking Services | STELZ", description: "Consulting, installation and support for automated parking systems.", keywords: ["parking services", "parking installation"] },
    products: { heading: "Products", breadcrumb: "Products", title: "Parking Products | STELZ", description: "Explore stack, puzzle and automatic parking products.", keywords: ["parking products", "stack parking", "puzzle parking"] },
    clients: { heading: "Our Clients", breadcrumb: "Our Clients", title: "Clients | STELZ Multiparking", description: "Organizations that trust STELZ parking solutions.", keywords: ["STELZ clients", "parking partners"] },
    gallery: { heading: "Gallery", breadcrumb: "Gallery", title: "Project Gallery | STELZ", description: "See STELZ parking installations and completed projects.", keywords: ["parking gallery", "parking projects"] },
    contact: { heading: "Contact Us", breadcrumb: "Contact Us", title: "Contact STELZ Multiparking", description: "Contact our team for parking consultations, projects and support.", keywords: ["contact STELZ", "parking consultation"] },
  },
  clients: { partners: "Partners", trustedBy: "Partners Who Trust STELZ", intro: "We collaborate with industry leaders who value reliable, efficient and long-lasting parking solutions.", testimonials: "Testimonials", stories: "Real Stories. Real Satisfaction.", moreReviews: "More Reviews", video: "Testimonial video" },
  footer: { office: "Office Address", factory: "Factory Address", phone: "Phone Number", email: "Email Address", follow: "Follow Us", copyright: "© {year} STELZ MULTIPARKING PVT LTD. All rights reserved." },
  about: { vision: "Our Vision", mission: "Our Mission", sections: "About sections", whyIntro: "We create smart, space-efficient and future-ready parking solutions tailored to modern infrastructure needs." },
  services: { step: "Step", offer: "What We Offer", question: "Have any questions?", helpText: "Tell us about your site and parking requirements. Our team will get back to you.", place: "Your Place Name", send: "Send Message" },
  product: { notFoundTitle: "Product Not Found", notFoundDescription: "The requested product could not be found.", parkingSystems: "Our Parking Systems", contactNow: "Contact Now", name: "Name", phone: "Phone Number", email: "Email", message: "Comment or Message", submit: "Submit", download: "Download datasheet", follow: "Follow Us On", features: "Product Features", applications: "Applications", details: "details", open: "Open" },
  consent: { title: "Analytics preferences", description: "Allow anonymous analytics to help us improve site performance and localization. You can decline without affecting the website.", accept: "Allow analytics", decline: "Decline" },
};

const localized = {
  de: {
    site: { title: "STELZ Multiparking | Parkraum neu gedacht", description: "Innovative automatische Parklösungen für moderne Städte.", keywords: ["automatische Parksysteme", "mechanisches Parken", "Parklösungen Deutschland"] },
    nav: ["Startseite", "Über uns", "Wer wir sind", "Forschung & Entwicklung", "Blog", "Dienstleistungen", "Produkte", "Kunden", "Galerie", "Kontakt", "Stapelparken", "Puzzle-Parken", "Automatisch"],
    common: ["Startseite", "Menü öffnen", "Menü schließen", "Bereich erweitern", "Sprache", "Ausgewählt", "Zu Folie", "Vorherige Folie", "Nächste Folie", "Demnächst…", "Stellplätze", "Standort", "Dieses Bild dient nur zur Veranschaulichung", "Zusammenfassung", "Galerie", "Broschüre herunterladen", "Nach oben", "und"],
    headings: ["Über uns", "Forschung & Entwicklung", "Blog", "Dienstleistungen", "Produkte", "Unsere Kunden", "Galerie", "Kontakt"],
    footprint: "STELZ Referenzen", models: "Parkmodelle", coming: "Demnächst…",
  },
  ar: {
    site: { title: "STELZ لمواقف السيارات | هندسة مواقف المستقبل", description: "حلول مواقف سيارات آلية مبتكرة للمدن الحديثة.", keywords: ["مواقف آلية", "مواقف ميكانيكية", "حلول مواقف السيارات"] },
    nav: ["الرئيسية", "من نحن", "نبذة عنا", "البحث والتطوير", "المدونة", "الخدمات", "منتجاتنا", "عملاؤنا", "المعرض", "اتصل بنا", "مواقف التكديس", "مواقف الألغاز", "آلي"],
    common: ["الرئيسية", "فتح القائمة", "إغلاق القائمة", "توسيع القسم", "اللغة", "محدد", "انتقل إلى الشريحة", "الشريحة السابقة", "الشريحة التالية", "قريبًا…", "أماكن السيارات", "الموقع", "هذه الصورة للتمثيل فقط", "الملخص", "المعرض", "تنزيل الكتيب", "العودة إلى الأعلى", "و"],
    headings: ["من نحن", "البحث والتطوير", "المدونة", "الخدمات", "المنتجات", "عملاؤنا", "المعرض", "اتصل بنا"],
    footprint: "مشاريع STELZ", models: "نماذج المواقف", coming: "قريبًا…",
  },
  hi: {
    site: { title: "STELZ मल्टीपार्किंग | भविष्य की पार्किंग", description: "आधुनिक शहरों के लिए अभिनव स्वचालित पार्किंग समाधान।", keywords: ["स्वचालित पार्किंग", "मैकेनिकल पार्किंग", "भारत पार्किंग समाधान"] },
    nav: ["होम", "हमारे बारे में", "हम कौन हैं", "अनुसंधान एवं विकास", "ब्लॉग", "सेवाएं", "हमारे उत्पाद", "हमारे ग्राहक", "गैलरी", "संपर्क करें", "स्टैक पार्किंग", "पज़ल पार्किंग", "स्वचालित"],
    common: ["होम", "मेनू खोलें", "मेनू बंद करें", "अनुभाग खोलें", "भाषा", "चयनित", "स्लाइड पर जाएं", "पिछली स्लाइड", "अगली स्लाइड", "जल्द आ रहा है…", "कार स्थान", "स्थान", "यह चित्र केवल प्रस्तुतीकरण के लिए है", "सारांश", "गैलरी", "ब्रोशर डाउनलोड करें", "ऊपर जाएं", "और"],
    headings: ["हमारे बारे में", "अनुसंधान एवं विकास", "ब्लॉग", "सेवाएं", "उत्पाद", "हमारे ग्राहक", "गैलरी", "संपर्क करें"],
    footprint: "STELZ की पहुँच", models: "पार्किंग मॉडल", coming: "जल्द आ रहा है…",
  },
  "zh-hant": {
    site: { title: "STELZ 多層停車 | 打造未來停車空間", description: "為現代城市提供創新的自動化停車解決方案。", keywords: ["自動停車", "機械停車", "智慧停車"] },
    nav: ["首頁", "關於我們", "公司介紹", "研究與開發", "部落格", "服務", "產品", "客戶", "圖庫", "聯絡我們", "堆疊式停車", "拼圖式停車", "全自動"],
    common: ["首頁", "開啟選單", "關閉選單", "展開區段", "語言", "已選取", "前往投影片", "上一張", "下一張", "即將推出…", "停車位", "地點", "圖片僅供示意", "摘要", "圖庫", "下載型錄", "回到頂端", "以及"],
    headings: ["關於我們", "研究與開發", "部落格", "服務", "產品", "我們的客戶", "圖庫", "聯絡我們"],
    footprint: "STELZ 專案足跡", models: "停車模式", coming: "即將推出…",
  },
  ko: {
    site: { title: "STELZ 멀티파킹 | 미래 주차를 설계합니다", description: "현대 도시를 위한 혁신적인 자동 주차 솔루션입니다.", keywords: ["자동 주차", "기계식 주차", "스마트 주차"] },
    nav: ["홈", "회사 소개", "회사 개요", "연구개발", "블로그", "서비스", "제품", "고객", "갤러리", "문의", "스택 주차", "퍼즐 주차", "자동"],
    common: ["홈", "메뉴 열기", "메뉴 닫기", "섹션 펼치기", "언어", "선택됨", "슬라이드로 이동", "이전 슬라이드", "다음 슬라이드", "곧 공개됩니다…", "주차 면수", "위치", "이 이미지는 예시용입니다", "요약", "갤러리", "브로슈어 다운로드", "맨 위로", "및"],
    headings: ["회사 소개", "연구개발", "블로그", "서비스", "제품", "고객", "갤러리", "문의"],
    footprint: "STELZ 프로젝트", models: "주차 모델", coming: "곧 공개됩니다…",
  },
  ja: {
    site: { title: "STELZ マルチパーキング | 未来の駐車場を設計", description: "現代都市向けの革新的な自動駐車ソリューションです。", keywords: ["自動駐車", "機械式駐車場", "スマートパーキング"] },
    nav: ["ホーム", "会社概要", "私たちについて", "研究開発", "ブログ", "サービス", "製品", "お客様", "ギャラリー", "お問い合わせ", "スタック式駐車", "パズル式駐車", "自動"],
    common: ["ホーム", "メニューを開く", "メニューを閉じる", "セクションを展開", "言語", "選択中", "スライドへ移動", "前のスライド", "次のスライド", "近日公開…", "駐車台数", "所在地", "画像はイメージです", "概要", "ギャラリー", "パンフレットをダウンロード", "ページ上部へ", "および"],
    headings: ["会社概要", "研究開発", "ブログ", "サービス", "製品", "お客様", "ギャラリー", "お問い合わせ"],
    footprint: "STELZ 導入実績", models: "駐車モデル", coming: "近日公開…",
  },
} as const;

const navKeys: Array<keyof AppMessages["nav"]> = ["home", "about", "whoWeAre", "research", "blog", "services", "products", "clients", "gallery", "contact", "stack", "puzzle", "automatic"];
const commonKeys: Array<keyof AppMessages["common"]> = ["home", "openMenu", "closeMenu", "expandSection", "language", "selected", "goToSlide", "previousSlide", "nextSlide", "comingSoon", "carSpaces", "location", "imageDisclaimer", "summary", "gallery", "downloadBrochure", "scrollTop", "conjunction"];
const pageKeys: Array<keyof AppMessages["pages"]> = ["about", "research", "blog", "services", "products", "clients", "gallery", "contact"];
const footerByLocale: Record<Exclude<Locale, "en">, AppMessages["footer"]> = {
  de: { office: "Büroadresse", factory: "Werksadresse", phone: "Telefonnummer", email: "E-Mail-Adresse", follow: "Folgen Sie uns", copyright: "© {year} STELZ MULTIPARKING PVT LTD. Alle Rechte vorbehalten." },
  ar: { office: "عنوان المكتب", factory: "عنوان المصنع", phone: "رقم الهاتف", email: "البريد الإلكتروني", follow: "تابعنا", copyright: "© {year} STELZ MULTIPARKING PVT LTD. جميع الحقوق محفوظة." },
  hi: { office: "कार्यालय का पता", factory: "कारखाने का पता", phone: "फ़ोन नंबर", email: "ईमेल पता", follow: "हमें फ़ॉलो करें", copyright: "© {year} STELZ MULTIPARKING PVT LTD. सर्वाधिकार सुरक्षित।" },
  "zh-hant": { office: "辦公室地址", factory: "工廠地址", phone: "電話號碼", email: "電子郵件", follow: "關注我們", copyright: "© {year} STELZ MULTIPARKING PVT LTD. 版權所有。" },
  ko: { office: "사무실 주소", factory: "공장 주소", phone: "전화번호", email: "이메일 주소", follow: "팔로우", copyright: "© {year} STELZ MULTIPARKING PVT LTD. 모든 권리 보유." },
  ja: { office: "オフィス住所", factory: "工場住所", phone: "電話番号", email: "メールアドレス", follow: "フォローする", copyright: "© {year} STELZ MULTIPARKING PVT LTD. 無断転載を禁じます。" },
};
const aboutByLocale: Record<Exclude<Locale, "en">, AppMessages["about"]> = {
  de: { vision: "Unsere Vision", mission: "Unsere Mission", sections: "Über-uns-Bereiche", whyIntro: "Wir entwickeln intelligente, platzsparende und zukunftssichere Parklösungen für moderne Infrastruktur." },
  ar: { vision: "رؤيتنا", mission: "مهمتنا", sections: "أقسام من نحن", whyIntro: "نبتكر حلول مواقف ذكية وموفرة للمساحة وجاهزة للمستقبل لتناسب البنية التحتية الحديثة." },
  hi: { vision: "हमारा दृष्टिकोण", mission: "हमारा मिशन", sections: "हमारे बारे में अनुभाग", whyIntro: "हम आधुनिक बुनियादी ढांचे के लिए स्मार्ट, स्थान-कुशल और भविष्य के लिए तैयार पार्किंग समाधान बनाते हैं।" },
  "zh-hant": { vision: "我們的願景", mission: "我們的使命", sections: "關於我們區段", whyIntro: "我們為現代基礎設施設計智慧、節省空間且面向未來的停車解決方案。" },
  ko: { vision: "비전", mission: "미션", sections: "회사 소개 섹션", whyIntro: "현대 인프라에 맞춘 스마트하고 공간 효율적인 미래형 주차 솔루션을 만듭니다." },
  ja: { vision: "ビジョン", mission: "ミッション", sections: "会社概要セクション", whyIntro: "現代のインフラに合わせた、スマートで省スペースな将来対応型駐車ソリューションを提供します。" },
};
const stepByLocale: Record<Exclude<Locale, "en">, string> = { de: "Schritt", ar: "الخطوة", hi: "चरण", "zh-hant": "步驟", ko: "단계", ja: "ステップ" };
const offerByLocale: Record<Exclude<Locale, "en">, string> = { de: "Unsere Leistungen", ar: "ما نقدمه", hi: "हम क्या प्रदान करते हैं", "zh-hant": "我們的服務", ko: "제공 서비스", ja: "提供サービス" };
const serviceFormByLocale: Record<Exclude<Locale, "en">, Pick<AppMessages["services"], "question" | "helpText" | "place" | "send">> = {
  de: { question: "Haben Sie Fragen?", helpText: "Beschreiben Sie uns Ihren Standort und Ihren Parkbedarf. Unser Team meldet sich bei Ihnen.", place: "Standort", send: "Nachricht senden" },
  ar: { question: "هل لديك أسئلة؟", helpText: "أخبرنا عن موقعك واحتياجات مواقف السيارات وسيتواصل معك فريقنا.", place: "اسم المكان", send: "إرسال الرسالة" },
  hi: { question: "क्या आपके कोई प्रश्न हैं?", helpText: "हमें अपने स्थान और पार्किंग आवश्यकताओं के बारे में बताएं। हमारी टीम आपसे संपर्क करेगी।", place: "स्थान का नाम", send: "संदेश भेजें" },
  "zh-hant": { question: "有任何問題嗎？", helpText: "請告訴我們您的場地與停車需求，我們的團隊將與您聯絡。", place: "場地名稱", send: "傳送訊息" },
  ko: { question: "궁금한 점이 있으신가요?", helpText: "현장과 주차 요구 사항을 알려주시면 담당자가 연락드리겠습니다.", place: "장소 이름", send: "메시지 보내기" },
  ja: { question: "ご質問はありますか？", helpText: "敷地と駐車要件をお知らせください。担当者よりご連絡します。", place: "場所の名前", send: "メッセージを送信" },
};
const clientsByLocale: Record<Exclude<Locale, "en">, AppMessages["clients"]> = {
  de: { partners: "Partner", trustedBy: "Partner, die STELZ vertrauen", intro: "Wir arbeiten mit Branchenführern zusammen, die zuverlässige, effiziente und langlebige Parklösungen schätzen.", testimonials: "Kundenstimmen", stories: "Echte Geschichten. Echte Zufriedenheit.", moreReviews: "Weitere Bewertungen", video: "Kundenstimmen-Video" },
  ar: { partners: "الشركاء", trustedBy: "شركاء يثقون في STELZ", intro: "نتعاون مع رواد الصناعة الذين يقدرون حلول مواقف السيارات الموثوقة والفعالة وطويلة الأمد.", testimonials: "آراء العملاء", stories: "قصص حقيقية. رضا حقيقي.", moreReviews: "المزيد من التقييمات", video: "فيديو شهادة عميل" },
  hi: { partners: "साझेदार", trustedBy: "STELZ पर भरोसा करने वाले साझेदार", intro: "हम विश्वसनीय, कुशल और टिकाऊ पार्किंग समाधानों को महत्व देने वाले उद्योग अग्रणियों के साथ काम करते हैं।", testimonials: "प्रशंसापत्र", stories: "सच्ची कहानियां। वास्तविक संतुष्टि।", moreReviews: "और समीक्षाएं", video: "प्रशंसापत्र वीडियो" },
  "zh-hant": { partners: "合作夥伴", trustedBy: "信賴 STELZ 的合作夥伴", intro: "我們與重視可靠、高效且長期耐用停車方案的產業領導者合作。", testimonials: "客戶見證", stories: "真實故事，真實滿意。", moreReviews: "更多評論", video: "客戶見證影片" },
  ko: { partners: "파트너", trustedBy: "STELZ를 신뢰하는 파트너", intro: "신뢰성, 효율성, 장기 가치를 중시하는 업계 리더와 협력합니다.", testimonials: "고객 후기", stories: "실제 이야기. 진정한 만족.", moreReviews: "후기 더 보기", video: "고객 후기 영상" },
  ja: { partners: "パートナー", trustedBy: "STELZを信頼するパートナー", intro: "信頼性、効率性、長期的価値を重視する業界リーダーと協力しています。", testimonials: "お客様の声", stories: "本当のストーリー。本当の満足。", moreReviews: "レビューをもっと見る", video: "お客様の声動画" },
};
const productByLocale: Record<Exclude<Locale, "en">, AppMessages["product"]> = {
  de: { notFoundTitle: "Produkt nicht gefunden", notFoundDescription: "Das gewünschte Produkt wurde nicht gefunden.", parkingSystems: "Unsere Parksysteme", contactNow: "Jetzt kontaktieren", name: "Name", phone: "Telefonnummer", email: "E-Mail", message: "Kommentar oder Nachricht", submit: "Senden", download: "Datenblatt herunterladen", follow: "Folgen Sie uns", features: "Produktmerkmale", applications: "Anwendungen", details: "Details", open: "Öffnen" },
  ar: { notFoundTitle: "المنتج غير موجود", notFoundDescription: "تعذر العثور على المنتج المطلوب.", parkingSystems: "أنظمة مواقف السيارات", contactNow: "اتصل الآن", name: "الاسم", phone: "رقم الهاتف", email: "البريد الإلكتروني", message: "تعليق أو رسالة", submit: "إرسال", download: "تنزيل ورقة البيانات", follow: "تابعنا", features: "ميزات المنتج", applications: "الاستخدامات", details: "التفاصيل", open: "فتح" },
  hi: { notFoundTitle: "उत्पाद नहीं मिला", notFoundDescription: "अनुरोधित उत्पाद नहीं मिला।", parkingSystems: "हमारी पार्किंग प्रणालियां", contactNow: "अभी संपर्क करें", name: "नाम", phone: "फ़ोन नंबर", email: "ईमेल", message: "टिप्पणी या संदेश", submit: "भेजें", download: "डेटाशीट डाउनलोड करें", follow: "हमें फ़ॉलो करें", features: "उत्पाद विशेषताएं", applications: "उपयोग", details: "विवरण", open: "खोलें" },
  "zh-hant": { notFoundTitle: "找不到產品", notFoundDescription: "找不到您要求的產品。", parkingSystems: "我們的停車系統", contactNow: "立即聯絡", name: "姓名", phone: "電話號碼", email: "電子郵件", message: "留言", submit: "送出", download: "下載規格表", follow: "關注我們", features: "產品特色", applications: "應用", details: "詳細資料", open: "開啟" },
  ko: { notFoundTitle: "제품을 찾을 수 없음", notFoundDescription: "요청하신 제품을 찾을 수 없습니다.", parkingSystems: "주차 시스템", contactNow: "문의하기", name: "이름", phone: "전화번호", email: "이메일", message: "메시지", submit: "보내기", download: "데이터시트 다운로드", follow: "팔로우", features: "제품 특징", applications: "적용 분야", details: "상세 정보", open: "열기" },
  ja: { notFoundTitle: "製品が見つかりません", notFoundDescription: "指定された製品が見つかりません。", parkingSystems: "駐車システム", contactNow: "お問い合わせ", name: "お名前", phone: "電話番号", email: "メール", message: "コメントまたはメッセージ", submit: "送信", download: "データシートをダウンロード", follow: "フォローする", features: "製品の特長", applications: "用途", details: "詳細", open: "開く" },
};

const consentByLocale: Record<Exclude<Locale, "en">, AppMessages["consent"]> = {
  de: { title: "Analyse-Einstellungen", description: "Erlauben Sie anonyme Analysen, damit wir Leistung und Lokalisierung verbessern können. Eine Ablehnung schränkt die Website nicht ein.", accept: "Analyse erlauben", decline: "Ablehnen" },
  ar: { title: "تفضيلات التحليلات", description: "اسمح بتحليلات مجهولة لمساعدتنا على تحسين الأداء والتوطين. يمكنك الرفض دون التأثير في الموقع.", accept: "السماح بالتحليلات", decline: "رفض" },
  hi: { title: "एनालिटिक्स प्राथमिकताएँ", description: "प्रदर्शन और स्थानीयकरण सुधारने में मदद के लिए गुमनाम एनालिटिक्स की अनुमति दें। मना करने से वेबसाइट पर कोई प्रभाव नहीं पड़ेगा।", accept: "एनालिटिक्स की अनुमति दें", decline: "मना करें" },
  "zh-hant": { title: "分析偏好設定", description: "允許匿名分析，協助我們改善效能與本地化。拒絕不會影響網站使用。", accept: "允許分析", decline: "拒絕" },
  ko: { title: "분석 환경설정", description: "성능과 현지화 개선을 위해 익명 분석을 허용합니다. 거부해도 웹사이트 이용에는 영향이 없습니다.", accept: "분석 허용", decline: "거부" },
  ja: { title: "アクセス解析の設定", description: "性能とローカライズ改善のため匿名のアクセス解析を許可します。拒否してもサイト利用には影響しません。", accept: "解析を許可", decline: "拒否" },
};

function translated(locale: Exclude<Locale, "en">): AppMessages {
  const value = localized[locale];
  const nav = Object.fromEntries(navKeys.map((key, index) => [key, value.nav[index]])) as unknown as AppMessages["nav"];
  const common = Object.fromEntries(commonKeys.map((key, index) => [key, value.common[index]])) as unknown as AppMessages["common"];
  const pages = Object.fromEntries(pageKeys.map((key, index) => [key, { ...en.pages[key], heading: value.headings[index], breadcrumb: value.headings[index], title: `${value.headings[index]} | STELZ`, description: value.site.description, keywords: value.site.keywords }])) as unknown as AppMessages["pages"];
  return {
    ...en,
    site: { ...en.site, ...value.site }, nav, common, pages,
    home: { ...en.home, seo: { title: value.site.title, description: value.site.description, keywords: value.site.keywords }, footprint: value.footprint, parkingModels: value.models },
    footer: footerByLocale[locale], about: aboutByLocale[locale], services: { step: stepByLocale[locale], offer: offerByLocale[locale], ...serviceFormByLocale[locale] }, clients: clientsByLocale[locale],
    product: productByLocale[locale], consent: consentByLocale[locale],
  };
}

export const MESSAGES: Record<Locale, AppMessages> = {
  en,
  de: translated("de"), ar: translated("ar"), hi: translated("hi"), "zh-hant": translated("zh-hant"), ko: translated("ko"), ja: translated("ja"),
};

export function getMessages(locale: Locale): AppMessages {
  return MESSAGES[locale];
}
