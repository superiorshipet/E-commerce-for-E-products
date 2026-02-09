import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function OrderSuccess() {
  const { t } = useLanguage();

  const translations = {
    title: { en: 'Order Successful!', ar: 'تم الطلب بنجاح!' },
    subtitle: { 
      en: 'Thank you for your purchase. Your digital products are ready to download.', 
      ar: 'شكراً لك على الشراء. منتجاتك الرقمية جاهزة للتنزيل.' 
    },
    orderNumber: { en: 'Order Number', ar: 'رقم الطلب' },
    confirmationEmail: { 
      en: 'A confirmation email has been sent to your email address with download links.', 
      ar: 'تم إرسال بريد إلكتروني تأكيدي إلى عنوان بريدك الإلكتروني مع روابط التنزيل.' 
    },
    yourProducts: { en: 'Your Products', ar: 'منتجاتك' },
    download: { en: 'Download', ar: 'تحميل' },
    viewDashboard: { en: 'View Dashboard', ar: 'عرض لوحة التحكم' },
    continueShopping: { en: 'Continue Shopping', ar: 'متابعة التسوق' }
  };

  // Mock order data
  const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const mockProducts = [
    { name: 'Complete Digital Marketing Masterclass', format: 'MP4, PDF' },
    { name: 'Modern Web Design Template Pack', format: 'HTML' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t(translations.title)}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t(translations.subtitle)}
          </p>

          {/* Order Number */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">
              {t(translations.orderNumber)}
            </p>
            <p className="text-2xl font-bold font-mono">
              {orderNumber}
            </p>
          </div>

          {/* Products List */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{t(translations.yourProducts)}</h2>
            <div className="space-y-3">
              {mockProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="text-left">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.format}</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {t(translations.download)}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmation Message */}
          <p className="text-gray-600 mb-8">
            {t(translations.confirmationEmail)}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/dashboard"
              className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {t(translations.viewDashboard)}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/category/all"
              className="flex-1 px-6 py-4 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-semibold transition-colors"
            >
              {t(translations.continueShopping)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
