import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  const translations = {
    company: { en: 'Company', ar: 'الشركة' },
    about: { en: 'About Us', ar: 'من نحن' },
    blog: { en: 'Blog', ar: 'المدونة' },
    careers: { en: 'Careers', ar: 'الوظائف' },
    press: { en: 'Press', ar: 'الصحافة' },
    support: { en: 'Support', ar: 'الدعم' },
    faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    contact: { en: 'Contact', ar: 'اتصل بنا' },
    help: { en: 'Help Center', ar: 'مركز المساعدة' },
    legal: { en: 'Legal', ar: 'القانونية' },
    terms: { en: 'Terms of Service', ar: 'شروط الخدمة' },
    privacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    cookies: { en: 'Cookie Policy', ar: 'سياسة ملفات تعريف الارتباط' },
    follow: { en: 'Follow Us', ar: 'تابعنا' },
    newsletter: { en: 'Subscribe to our newsletter', ar: 'اشترك في نشرتنا الإخبارية' },
    emailPlaceholder: { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' },
    subscribe: { en: 'Subscribe', ar: 'اشترك' },
    copyright: { 
      en: '© 2026 DigiStore. All rights reserved.', 
      ar: '© 2026 المتجر الرقمي. جميع الحقوق محفوظة.' 
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-xl text-white">
                {language === 'en' ? 'DigiStore' : 'المتجر الرقمي'}
              </span>
            </div>
            <p className="text-sm mb-4">
              {language === 'en' 
                ? 'Your trusted marketplace for premium digital products. Instant downloads, secure payments, 24/7 support.' 
                : 'السوق الموثوق به للمنتجات الرقمية المتميزة. تنزيلات فورية ومدفوعات آمنة ودعم على مدار الساعة.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t(translations.company)}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t(translations.about)}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  {t(translations.blog)}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t(translations.careers)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t(translations.press)}
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t(translations.support)}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t(translations.faq)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t(translations.contact)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t(translations.help)}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t(translations.newsletter)}</h4>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={t(translations.emailPlaceholder)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                {t(translations.subscribe)}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">{t(translations.copyright)}</p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="hover:text-white transition-colors">
              {t(translations.terms)}
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              {t(translations.privacy)}
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              {t(translations.cookies)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
