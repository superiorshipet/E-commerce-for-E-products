import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const addToCartText = { en: 'Add to Cart', ar: 'أضف إلى السلة' };
  const bestSellerText = { en: 'Best Seller', ar: 'الأكثر مبيعاً' };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl border hover:shadow-lg transition-all overflow-hidden">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={t(product.title)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isBestSeller && (
            <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {t(bestSellerText)}
            </div>
          )}
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {t(product.title)}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {t(product.shortDescription)}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-sm">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-xl text-blue-600">
                ${product.price}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-gray-400 line-through">
                  ${product.originalPrice}
                </div>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">{t(addToCartText)}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
