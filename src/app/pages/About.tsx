import { CheckCircle, Users, Award, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const translations = {
    title: { en: 'About DigiStore', ar: 'عن المتجر الرقمي' },
    subtitle: { 
      en: 'Your trusted marketplace for premium digital products', 
      ar: 'السوق الموثوق به للمنتجات الرقمية المتميزة' 
    },
    mission: { en: 'Our Mission', ar: 'مهمتنا' },
    missionText: {
      en: 'To empower creators and professionals in the Middle East by providing a secure, accessible platform for buying and selling digital products. We believe in quality, transparency, and customer satisfaction.',
      ar: 'تمكين المبدعين والمحترفين في الشرق الأوسط من خلال توفير منصة آمنة ويمكن الوصول إليها لشراء وبيع المنتجات الرقمية. نحن نؤمن بالجودة والشفافية ورضا العملاء.'
    },
    values: { en: 'Our Values', ar: 'قيمنا' },
    quality: { en: 'Quality First', ar: 'الجودة أولاً' },
    qualityDesc: {
      en: 'Every product is carefully reviewed to ensure premium quality',
      ar: 'تتم مراجعة كل منتج بعناية لضمان الجودة المتميزة'
    },
    trust: { en: 'Trust & Security', ar: 'الثقة والأمان' },
    trustDesc: {
      en: 'Secure payments and instant delivery you can rely on',
      ar: 'دفع آمن وتسليم فوري يمكنك الاعتماد عليه'
    },
    support: { en: 'Customer Support', ar: 'دعم العملاء' },
    supportDesc: {
      en: '24/7 dedicated support team ready to help',
      ar: 'فريق دعم متخصص على مدار الساعة جاهز للمساعدة'
    },
    community: { en: 'Community', ar: 'المجتمع' },
    communityDesc: {
      en: 'Building a thriving community of creators and learners',
      ar: 'بناء مجتمع مزدهر من المبدعين والمتعلمين'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t(translations.title)}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            {t(translations.subtitle)}
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {t(translations.mission)}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t(translations.missionText)}
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t(translations.values)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(translations.quality)}</h3>
              <p className="text-gray-600">{t(translations.qualityDesc)}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(translations.trust)}</h3>
              <p className="text-gray-600">{t(translations.trustDesc)}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(translations.support)}</h3>
              <p className="text-gray-600">{t(translations.supportDesc)}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(translations.community)}</h3>
              <p className="text-gray-600">{t(translations.communityDesc)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
