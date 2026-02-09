import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, GraduationCap, Palette, Code, RefreshCcw, 
  Download, Shield, Clock, Star, ArrowRight, CheckCircle 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products, categories, testimonials } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useState, useEffect, useRef } from 'react';

export function Home() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const translations = {
    hero: {
      title: { 
        en: 'Premium Digital Products at Your Fingertips', 
        ar: 'منتجات رقمية متميزة في متناول يدك' 
      },
      subtitle: { 
        en: 'Discover thousands of e-books, courses, design assets, and software. Instant download, secure payment, lifetime access.', 
        ar: 'اكتشف الآلاف من الكتب الإلكترونية والدورات وأدوات التصميم والبرمجيات. تنزيل فوري، دفع آمن، وصول مدى الحياة.' 
      },
      shopNow: { en: 'Shop Now', ar: 'اشترِ الآن' },
      browse: { en: 'Browse Products', ar: 'تصفح المنتجات' }
    },
    categories: {
      title: { en: 'Explore Categories', ar: 'استكشف الفئات' },
      subtitle: { en: 'Find exactly what you need', ar: 'اعثر على ما تحتاجه بالضبط' }
    },
    bestSellers: {
      title: { en: 'Best Selling Products', ar: 'المنتجات الأكثر مبيعاً' },
      subtitle: { en: 'Top-rated products loved by our customers', ar: 'المنتجات الأعلى تقييماً والمفضلة لدى عملائنا' },
      viewAll: { en: 'View All Products', ar: 'عرض جميع المنتجات' }
    },
    benefits: {
      title: { en: 'Why Choose DigiStore?', ar: 'لماذا تختار المتجر الرقمي؟' },
      instant: { en: 'Instant Download', ar: 'تنزيل فوري' },
      instantDesc: { 
        en: 'Get immediate access to your products after purchase', 
        ar: 'احصل على وصول فوري لمنتجاتك بعد الشراء' 
      },
      secure: { en: 'Secure Payment', ar: 'دفع آمن' },
      secureDesc: { 
        en: '256-bit SSL encryption protects all transactions', 
        ar: 'تشفير SSL 256 بت يحمي جميع المعاملات' 
      },
      support: { en: '24/7 Support', ar: 'دعم 24/7' },
      supportDesc: { 
        en: 'Our team is always ready to help you', 
        ar: 'فريقنا دائماً جاهز لمساعدتك' 
      }
    },
    seo: {
      title: { en: 'The Complete Digital Marketplace', ar: 'السوق الرقمي الكامل' },
      subtitle: { 
        en: 'Everything you need to grow your skills and business', 
        ar: 'كل ما تحتاجه لتطوير مهاراتك وأعمالك' 
      },
      quality: { en: 'Premium Quality', ar: 'جودة متميزة' },
      qualityDesc: { 
        en: 'All products are carefully curated and verified by experts', 
        ar: 'جميع المنتجات منتقاة بعناية ومعتمدة من قبل الخبراء' 
      },
      variety: { en: 'Wide Variety', ar: 'تنوع واسع' },
      varietyDesc: { 
        en: 'Thousands of digital products across multiple categories', 
        ar: 'آلاف المنتجات الرقمية عبر فئات متعددة' 
      },
      updates: { en: 'Regular Updates', ar: 'تحديثات منتظمة' },
      updatesDesc: { 
        en: 'Get free updates and new content for purchased products', 
        ar: 'احصل على تحديثات مجانية ومحتوى جديد للمنتجات المشتراة' 
      },
      license: { en: 'Flexible Licensing', ar: 'ترخيص مرن' },
      licenseDesc: { 
        en: 'Personal and commercial licenses available for most products', 
        ar: 'تراخيص شخصية وتجارية متاحة لمعظم المنتجات' 
      }
    },
    newsletter: {
      title: { en: 'Get Exclusive Deals', ar: 'احصل على عروض حصرية' },
      subtitle: { 
        en: 'Subscribe to our newsletter and get 10% off your first purchase', 
        ar: 'اشترك في نشرتنا الإخبارية واحصل على خصم 10٪ على أول عملية شراء' 
      },
      placeholder: { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' },
      button: { en: 'Subscribe Now', ar: 'اشترك الآن' }
    },
    testimonials: {
      title: { en: 'What Our Customers Say', ar: 'ماذا يقول عملاؤنا' },
      subtitle: { en: 'Join thousands of satisfied customers', ar: 'انضم إلى آلاف العملاء الراضين' }
    }
  };

  const bestSellingProducts = products.filter(p => p.isBestSeller);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'en' ? 'Thanks for subscribing!' : 'شكراً على الاشتراك!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t(translations.hero.title)}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t(translations.hero.subtitle)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/category/all')}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                {t(translations.hero.shopNow)}
              </button>
              <button
                onClick={() => navigate('/category/all')}
                className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white/20"
              >
                {t(translations.hero.browse)}
              </button>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(translations.categories.title)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(translations.categories.subtitle)}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon === 'BookOpen' ? BookOpen :
                                   category.icon === 'GraduationCap' ? GraduationCap :
                                   category.icon === 'Palette' ? Palette :
                                   category.icon === 'Code' ? Code : RefreshCcw;
              
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group relative aspect-square rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <img
                    src={category.image}
                    alt={t(category.name)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-4">
                    <IconComponent className="w-8 h-8 mb-2 text-white" />
                    <h3 className="font-semibold text-white text-center">
                      {t(category.name)}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(translations.bestSellers.title)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(translations.bestSellers.subtitle)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/category/all"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              {t(translations.bestSellers.viewAll)}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(translations.benefits.title)}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(translations.benefits.instant)}
              </h3>
              <p className="text-gray-600">
                {t(translations.benefits.instantDesc)}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(translations.benefits.secure)}
              </h3>
              <p className="text-gray-600">
                {t(translations.benefits.secureDesc)}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(translations.benefits.support)}
              </h3>
              <p className="text-gray-600">
                {t(translations.benefits.supportDesc)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(translations.seo.title)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(translations.seo.subtitle)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: translations.seo.quality, desc: translations.seo.qualityDesc },
              { icon: Star, title: translations.seo.variety, desc: translations.seo.varietyDesc },
              { icon: RefreshCcw, title: translations.seo.updates, desc: translations.seo.updatesDesc },
              { icon: Shield, title: translations.seo.license, desc: translations.seo.licenseDesc }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-lg transition-all">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{t(item.title)}</h3>
                <p className="text-gray-600 text-sm">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t(translations.testimonials.title)}
            </h2>
            <p className="text-xl text-gray-600">
              {t(translations.testimonials.subtitle)}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={t(testimonials[currentTestimonial].name)}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl mb-6 text-gray-700">
                  "{t(testimonials[currentTestimonial].text)}"
                </p>
                <h4 className="font-semibold text-lg">
                  {t(testimonials[currentTestimonial].name)}
                </h4>
                <p className="text-gray-600">
                  {t(testimonials[currentTestimonial].role)}
                </p>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(translations.newsletter.title)}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t(translations.newsletter.subtitle)}
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t(translations.newsletter.placeholder)}
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t(translations.newsletter.button)}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
