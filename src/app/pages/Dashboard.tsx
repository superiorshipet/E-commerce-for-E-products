import { Download, User, ShoppingBag, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

export function Dashboard() {
  const { t } = useLanguage();

  const translations = {
    title: { en: 'My Dashboard', ar: 'لوحة التحكم' },
    welcome: { en: 'Welcome back', ar: 'مرحباً بعودتك' },
    myProducts: { en: 'My Products', ar: 'منتجاتي' },
    accountInfo: { en: 'Account Information', ar: 'معلومات الحساب' },
    orderHistory: { en: 'Order History', ar: 'سجل الطلبات' },
    downloadNow: { en: 'Download Now', ar: 'تحميل الآن' },
    purchaseDate: { en: 'Purchase Date', ar: 'تاريخ الشراء' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    name: { en: 'Name', ar: 'الاسم' },
    memberSince: { en: 'Member Since', ar: 'عضو منذ' },
    editProfile: { en: 'Edit Profile', ar: 'تعديل الملف الشخصي' },
    totalOrders: { en: 'Total Orders', ar: 'إجمالي الطلبات' },
    totalSpent: { en: 'Total Spent', ar: 'إجمالي الإنفاق' },
    products: { en: 'Products', ar: 'المنتجات' }
  };

  // Mock user data
  const userData = {
    name: 'Ahmed Mohammed',
    email: 'ahmed@example.com',
    memberSince: 'January 2026',
    totalOrders: 12,
    totalSpent: 1247.88,
    purchasedProducts: [
      { ...products[0], purchaseDate: '2026-02-05' },
      { ...products[1], purchaseDate: '2026-02-03' },
      { ...products[2], purchaseDate: '2026-01-28' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t(translations.title)}
          </h1>
          <p className="text-gray-600 text-lg">
            {t(translations.welcome)}, {userData.name}!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t(translations.totalOrders)}</p>
                <p className="text-2xl font-bold">{userData.totalOrders}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t(translations.products)}</p>
                <p className="text-2xl font-bold">{userData.purchasedProducts.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">$</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t(translations.totalSpent)}</p>
                <p className="text-2xl font-bold">${userData.totalSpent}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">{t(translations.myProducts)}</h2>
              </div>
              <div className="divide-y">
                {userData.purchasedProducts.map((product) => (
                  <div key={product.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img
                        src={product.image}
                        alt={t(product.title)}
                        className="w-full sm:w-32 h-32 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {t(product.title)}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {t(translations.purchaseDate)}: {product.purchaseDate}
                        </p>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          {t(translations.downloadNow)}
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-blue-600">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">{t(translations.accountInfo)}</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  {t(translations.editProfile)}
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{userData.name}</p>
                    <p className="text-sm text-gray-600">{userData.email}</p>
                  </div>
                </div>
                <div className="border-t pt-4 space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">{t(translations.name)}</p>
                    <p className="font-medium">{userData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t(translations.email)}</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t(translations.memberSince)}</p>
                    <p className="font-medium">{userData.memberSince}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
