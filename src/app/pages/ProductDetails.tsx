import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Download, Shield, RefreshCcw, Check } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t({ en: 'Product not found', ar: 'المنتج غير موجود' })}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {t({ en: 'Go Home', ar: 'العودة للرئيسية' })}
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const translations = {
    addToCart: { en: 'Add to Cart', ar: 'أضف إلى السلة' },
    buyNow: { en: 'Buy Now', ar: 'اشترِ الآن' },
    features: { en: 'Key Features', ar: 'المميزات الرئيسية' },
    includes: { en: "What's Included", ar: 'ما يتضمنه' },
    description: { en: 'Description', ar: 'الوصف' },
    trustBadges: {
      instant: { en: 'Instant Download', ar: 'تنزيل فوري' },
      secure: { en: 'Secure Payment', ar: 'دفع آمن' },
      guarantee: { en: 'Money-Back Guarantee', ar: 'ضمان استرداد الأموال' }
    },
    related: { en: 'You May Also Like', ar: 'قد يعجبك أيضاً' },
    reviews: { en: 'reviews', ar: 'تقييم' }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Details */}
        <div className="bg-white rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={t(product.title)}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t(product.title)}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-gray-600">
                  ({product.reviewCount} {t(translations.reviews)})
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Short Description */}
              <p className="text-lg text-gray-700 mb-6">
                {t(product.shortDescription)}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t(translations.addToCart)}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                >
                  {t(translations.buyNow)}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t(translations.trustBadges.instant)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t(translations.trustBadges.secure)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCcw className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t(translations.trustBadges.guarantee)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="border-t p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {t(translations.description)}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t(product.longDescription)}
                </p>
              </div>

              {/* Features & Includes */}
              <div className="space-y-6">
                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t(translations.features)}
                  </h3>
                  <ul className="space-y-2">
                    {product.features[t === ((text: any) => text.en) ? 'en' : 'ar'].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t(translations.includes)}
                  </h3>
                  <ul className="space-y-2">
                    {product.includes[t === ((text: any) => text.en) ? 'en' : 'ar'].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t(translations.related)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
