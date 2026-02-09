export interface Product {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  longDescription: {
    en: string;
    ar: string;
  };
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  features: {
    en: string[];
    ar: string[];
  };
  includes: {
    en: string[];
    ar: string[];
  };
  fileTypes?: string[];
  isBestSeller?: boolean;
}

export const categories = [
  {
    id: 'ebooks',
    name: { en: 'E-Books', ar: 'الكتب الإلكترونية' },
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGRpZ2l0YWwlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDU5MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'courses',
    name: { en: 'Online Courses', ar: 'الدورات التدريبية' },
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1762330918491-f4288a62adb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzA1OTM0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'design',
    name: { en: 'Design Assets', ar: 'أدوات التصميم' },
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1759156990928-0a30e0fe1bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZW1wbGF0ZSUyMGdyYXBoaWNzfGVufDF8fHx8MTc3MDU5MzQ1NHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'software',
    name: { en: 'Software & Keys', ar: 'البرمجيات والمفاتيح' },
    icon: 'Code',
    image: 'https://images.unsplash.com/photo-1658274474851-fda40d4c309d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzcwNTkzNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'subscriptions',
    name: { en: 'Subscriptions', ar: 'الاشتراكات' },
    icon: 'RefreshCcw',
    image: 'https://images.unsplash.com/photo-1762330469789-cab18158504f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJzY3JpcHRpb24lMjBkaWdpdGFsJTIwc2VydmljZXxlbnwxfHx8fDE3NzA1OTM0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export const products: Product[] = [
  {
    id: '1',
    title: {
      en: 'Complete Digital Marketing Masterclass',
      ar: 'دورة شاملة في التسويق الرقمي'
    },
    shortDescription: {
      en: 'Master digital marketing with 12+ hours of video content',
      ar: 'إتقان التسويق الرقمي مع أكثر من 12 ساعة من محتوى الفيديو'
    },
    longDescription: {
      en: 'This comprehensive course covers everything you need to know about digital marketing, from SEO and social media to email campaigns and analytics. Perfect for beginners and professionals alike.',
      ar: 'تغطي هذه الدورة الشاملة كل ما تحتاج لمعرفته حول التسويق الرقمي، من تحسين محركات البحث ووسائل التواصل الاجتماعي إلى حملات البريد الإلكتروني والتحليلات. مثالية للمبتدئين والمحترفين على حد سواء.'
    },
    price: 149.99,
    originalPrice: 299.99,
    category: 'courses',
    image: 'https://images.unsplash.com/photo-1762330918491-f4288a62adb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzA1OTM0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviewCount: 342,
    isBestSeller: true,
    features: {
      en: ['12+ hours of HD video', 'Lifetime access', 'Certificate of completion', 'Money-back guarantee'],
      ar: ['أكثر من 12 ساعة من الفيديو عالي الدقة', 'وصول مدى الحياة', 'شهادة إتمام', 'ضمان استرداد الأموال']
    },
    includes: {
      en: ['Video lessons (MP4)', 'Downloadable resources', 'Quiz and assignments', 'Community access'],
      ar: ['دروس فيديو (MP4)', 'موارد قابلة للتحميل', 'اختبارات وواجبات', 'الوصول إلى المجتمع']
    }
  },
  {
    id: '2',
    title: {
      en: 'Modern Web Design Template Pack',
      ar: 'حزمة قوالب تصميم الويب الحديثة'
    },
    shortDescription: {
      en: '50+ premium templates for your next project',
      ar: '50+ قالب متميز لمشروعك القادم'
    },
    longDescription: {
      en: 'A collection of modern, responsive web design templates perfect for agencies, portfolios, and businesses. Includes HTML/CSS versions.',
      ar: 'مجموعة من قوالب تصميم الويب الحديثة والمتجاوبة مثالية للوكالات والمحافظ والشركات. تشمل إصدارات HTML/CSS.'
    },
    price: 79.99,
    originalPrice: 159.99,
    category: 'design',
    image: 'https://images.unsplash.com/photo-1759156990928-0a30e0fe1bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZW1wbGF0ZSUyMGdyYXBoaWNzfGVufDF8fHx8MTc3MDU5MzQ1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviewCount: 189,
    isBestSeller: true,
    fileTypes: ['HTML', 'CSS'],
    features: {
      en: ['50+ unique templates', 'Fully responsive', 'Easy to customize', 'Regular updates'],
      ar: ['أكثر من 50 قالبًا فريدًا', 'متجاوب بالكامل', 'سهل التخصيص', 'تحديثات منتظمة']
    },
    includes: {
      en: ['HTML/CSS code', 'Documentation', 'Commercial license'],
      ar: ['كود HTML/CSS', 'التوثيق', 'ترخيص تجاري']
    }
  },
  {
    id: '3',
    title: {
      en: 'The Art of Productivity E-Book',
      ar: 'كتاب فن الإنتاجية الإلكتروني'
    },
    shortDescription: {
      en: 'Transform your life with proven productivity techniques',
      ar: 'حول حياتك مع تقنيات إنتاجية مثبتة'
    },
    longDescription: {
      en: 'Discover the secrets of highly productive people and learn practical strategies to maximize your time and achieve your goals. 250+ pages of actionable insights.',
      ar: 'اكتشف أسرار الأشخاص الأكثر إنتاجية وتعلم استراتيجيات عملية لتعظيم وقتك وتحقيق أهدافك. أكثر من 250 صفحة من الأفكار القابلة للتنفيذ.'
    },
    price: 29.99,
    category: 'ebooks',
    image: 'https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGRpZ2l0YWwlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDU5MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewCount: 567,
    isBestSeller: true,
    fileTypes: ['PDF', 'EPUB', 'MOBI'],
    features: {
      en: ['250+ pages', 'Illustrated guide', 'Practical exercises', 'Bonus worksheets'],
      ar: ['أكثر من 250 صفحة', 'دليل مصور', 'تمارين عملية', 'أوراق عمل إضافية']
    },
    includes: {
      en: ['PDF version', 'EPUB for e-readers', 'MOBI for Kindle', 'Bonus templates'],
      ar: ['نسخة PDF', 'EPUB للقراء الإلكترونيين', 'MOBI لأجهزة Kindle', 'قوالب إضافية']
    }
  },
  {
    id: '4',
    title: {
      en: 'Adobe Creative Cloud 1-Year Subscription',
      ar: 'اشتراك Adobe Creative Cloud لمدة سنة'
    },
    shortDescription: {
      en: 'Access all Adobe apps for one year',
      ar: 'الوصول إلى جميع تطبيقات Adobe لمدة عام'
    },
    longDescription: {
      en: 'Get unlimited access to Photoshop, Illustrator, Premiere Pro, and 20+ creative apps. Perfect for designers and content creators.',
      ar: 'احصل على وصول غير محدود إلى Photoshop و Illustrator و Premiere Pro وأكثر من 20 تطبيقًا إبداعيًا. مثالي للمصممين ومنشئي المحتوى.'
    },
    price: 599.99,
    category: 'subscriptions',
    image: 'https://images.unsplash.com/photo-1762330469789-cab18158504f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJzY3JpcHRpb24lMjBkaWdpdGFsJTIwc2VydmljZXxlbnwxfHx8fDE3NzA1OTM0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviewCount: 423,
    features: {
      en: ['20+ creative apps', 'Cloud storage 100GB', 'Premium fonts', 'Mobile apps included'],
      ar: ['أكثر من 20 تطبيقًا إبداعيًا', 'مساحة تخزين سحابية 100 جيجابايت', 'خطوط متميزة', 'تطبيقات الهاتف المحمول مشمولة']
    },
    includes: {
      en: ['1-year license key', 'Instant activation', 'Multi-device support', '24/7 support'],
      ar: ['مفتاح ترخيص لمدة عام', 'تفعيل فوري', 'دعم متعدد الأجهزة', 'دعم 24/7']
    }
  },
  {
    id: '5',
    title: {
      en: 'Python Programming Complete Course',
      ar: 'دورة برمجة بايثون الكاملة'
    },
    shortDescription: {
      en: 'From beginner to advanced Python developer',
      ar: 'من مبتدئ إلى مطور بايثون متقدم'
    },
    longDescription: {
      en: 'Learn Python programming from scratch with hands-on projects and real-world applications. Covers data science, web development, and automation.',
      ar: 'تعلم برمجة بايثون من الصفر مع مشاريع عملية وتطبيقات واقعية. يغطي علم البيانات وتطوير الويب والأتمتة.'
    },
    price: 89.99,
    originalPrice: 199.99,
    category: 'courses',
    image: 'https://images.unsplash.com/photo-1762330918491-f4288a62adb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzA1OTM0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviewCount: 891,
    isBestSeller: true,
    features: {
      en: ['15+ hours of content', '50+ coding exercises', 'Real-world projects', 'Lifetime updates'],
      ar: ['أكثر من 15 ساعة من المحتوى', 'أكثر من 50 تمرينًا برمجيًا', 'مشاريع واقعية', 'تحديثات مدى الحياة']
    },
    includes: {
      en: ['Video tutorials', 'Source code', 'Certificate', 'Private community'],
      ar: ['دروس فيديو', 'الكود المصدري', 'شهادة', 'مجتمع خاص']
    }
  },
  {
    id: '6',
    title: {
      en: 'Professional Logo Templates Bundle',
      ar: 'حزمة قوالب شعارات احترافية'
    },
    shortDescription: {
      en: '100+ customizable logo templates',
      ar: '100+ قالب شعار قابل للتخصيص'
    },
    longDescription: {
      en: 'A massive collection of professional logo templates for various industries. Fully editable in Adobe Illustrator.',
      ar: 'مجموعة ضخمة من قوالب الشعارات الاحترافية لمختلف الصناعات. قابلة للتحرير بالكامل في Adobe Illustrator.'
    },
    price: 49.99,
    category: 'design',
    image: 'https://images.unsplash.com/photo-1759156990928-0a30e0fe1bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZW1wbGF0ZSUyMGdyYXBoaWNzfGVufDF8fHx8MTc3MDU5MzQ1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviewCount: 234,
    fileTypes: ['AI', 'SVG'],
    features: {
      en: ['100+ templates', 'Vector format', 'Easy customization', 'Free updates'],
      ar: ['أكثر من 100 قالب', 'صيغة متجهة', 'تخصيص سهل', 'تحديثات مجانية']
    },
    includes: {
      en: ['AI files', 'SVG exports', 'Extended license'],
      ar: ['ملفات AI', 'تصدير SVG', 'ترخيص موسع']
    }
  },
  {
    id: '7',
    title: {
      en: 'Windows 11 Pro License Key',
      ar: 'مفتاح ترخيص Windows 11 Pro'
    },
    shortDescription: {
      en: 'Genuine Windows 11 Pro activation key',
      ar: 'مفتاح تنشيط Windows 11 Pro أصلي'
    },
    longDescription: {
      en: 'Authentic Windows 11 Pro license key with instant delivery. Lifetime activation for one device.',
      ar: 'مفتاح ترخيص Windows 11 Pro الأصلي مع التسليم الفوري. تنشيط مدى الحياة لجهاز واحد.'
    },
    price: 39.99,
    originalPrice: 199.99,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1658274474851-fda40d4c309d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzcwNTkzNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviewCount: 1234,
    features: {
      en: ['Genuine Microsoft key', 'Instant delivery', 'Lifetime activation', '100% money-back'],
      ar: ['مفتاح Microsoft أصلي', 'تسليم فوري', 'تنشيط مدى الحياة', '100٪ استرداد']
    },
    includes: {
      en: ['Product key', 'Activation guide', 'Email support', 'Warranty included'],
      ar: ['مفتاح المنتج', 'دليل التنشيط', 'دعم البريد الإلكتروني', 'الضمان متضمن']
    }
  },
  {
    id: '8',
    title: {
      en: 'Financial Freedom E-Book',
      ar: 'كتاب الحرية المالية الإلكتروني'
    },
    shortDescription: {
      en: 'Practical guide to wealth building',
      ar: 'دليل عملي لبناء الثروة'
    },
    longDescription: {
      en: 'Learn proven strategies for building wealth, investing wisely, and achieving financial independence. Written by certified financial advisors.',
      ar: 'تعلم استراتيجيات مثبتة لبناء الثروة والاستثمار بحكمة وتحقيق الاستقلال المالي. من تأليف مستشارين ماليين معتمدين.'
    },
    price: 24.99,
    category: 'ebooks',
    image: 'https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGRpZ2l0YWwlMjBwcm9kdWN0fGVufDF8fHx8MTc3MDU5MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviewCount: 412,
    fileTypes: ['PDF', 'EPUB'],
    features: {
      en: ['180+ pages', 'Investment strategies', 'Budget templates', 'Case studies'],
      ar: ['أكثر من 180 صفحة', 'استراتيجيات الاستثمار', 'قوالب الميزانية', 'دراسات الحالة']
    },
    includes: {
      en: ['PDF version', 'EPUB version', 'Excel templates', 'Bonus checklist'],
      ar: ['نسخة PDF', 'نسخة EPUB', 'قوالب Excel', 'قائمة مرجعية إضافية']
    }
  }
];

export const testimonials = [
  {
    id: '1',
    name: { en: 'Sarah Ahmed', ar: 'سارة أحمد' },
    role: { en: 'Graphic Designer', ar: 'مصممة جرافيك' },
    image: 'https://images.unsplash.com/photo-1769071167136-f25178b607dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWRkbGUlMjBlYXN0ZXJuJTIwcGVyc29ufGVufDF8fHx8MTc3MDU5MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    text: {
      en: 'Amazing quality templates! Saved me hours of work. The instant download feature is perfect.',
      ar: 'قوالب ذات جودة مذهلة! وفرت لي ساعات من العمل. ميزة التنزيل الفوري مثالية.'
    },
    rating: 5
  },
  {
    id: '2',
    name: { en: 'Mohammed Ali', ar: 'محمد علي' },
    role: { en: 'Digital Marketer', ar: 'مسوق رقمي' },
    image: 'https://images.unsplash.com/photo-1446501356021-84cf6b450d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzcwNTM2Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    text: {
      en: 'The courses are incredibly detailed and practical. Best investment I made this year!',
      ar: 'الدورات مفصلة وعملية بشكل لا يصدق. أفضل استثمار قمت به هذا العام!'
    },
    rating: 5
  },
  {
    id: '3',
    name: { en: 'Fatima Hassan', ar: 'فاطمة حسن' },
    role: { en: 'Content Creator', ar: 'منشئة محتوى' },
    image: 'https://images.unsplash.com/photo-1769071167136-f25178b607dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWRkbGUlMjBlYXN0ZXJuJTIwcGVyc29ufGVufDF8fHx8MTc3MDU5MzQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    text: {
      en: 'Secure payment and instant access to products. The support team is very responsive!',
      ar: 'دفع آمن ووصول فوري للمنتجات. فريق الدعم متجاوب جدًا!'
    },
    rating: 5
  }
];

export const blogPosts = [
  {
    id: '1',
    title: {
      en: '10 Essential Design Trends for 2026',
      ar: '10 اتجاهات تصميم أساسية لعام 2026'
    },
    excerpt: {
      en: 'Discover the latest design trends that will dominate the creative industry this year.',
      ar: 'اكتشف أحدث اتجاهات التصميم التي ستهيمن على الصناعة الإبداعية هذا العام.'
    },
    image: 'https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwYXJ0aWNsZSUyMHdyaXRpbmd8ZW58MXx8fHwxNzcwNTkzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2026-02-05',
    author: { en: 'Design Team', ar: 'فريق التصميم' },
    category: { en: 'Design', ar: 'التصميم' }
  },
  {
    id: '2',
    title: {
      en: 'How to Build a Successful Online Business',
      ar: 'كيفية بناء عمل تجاري ناجح عبر الإنترنت'
    },
    excerpt: {
      en: 'A comprehensive guide to starting and scaling your digital business from scratch.',
      ar: 'دليل شامل لبدء وتوسيع نطاق أعمالك الرقمية من الصفر.'
    },
    image: 'https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwYXJ0aWNsZSUyMHdyaXRpbmd8ZW58MXx8fHwxNzcwNTkzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2026-02-03',
    author: { en: 'Business Team', ar: 'فريق الأعمال' },
    category: { en: 'Business', ar: 'الأعمال' }
  },
  {
    id: '3',
    title: {
      en: 'Top 5 Programming Languages to Learn in 2026',
      ar: 'أفضل 5 لغات برمجة للتعلم في 2026'
    },
    excerpt: {
      en: 'Stay ahead of the curve by mastering these in-demand programming languages.',
      ar: 'ابق في الطليعة من خلال إتقان لغات البرمجة المطلوبة هذه.'
    },
    image: 'https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwYXJ0aWNsZSUyMHdyaXRpbmd8ZW58MXx8fHwxNzcwNTkzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2026-02-01',
    author: { en: 'Tech Team', ar: 'الفريق التقني' },
    category: { en: 'Technology', ar: 'التكنولوجيا' }
  }
];
