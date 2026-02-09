import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

type SortOption = 'newest' | 'bestselling' | 'price-low' | 'price-high' | 'rating';

export function Category() {
  const { categoryId } = useParams();
  const { t, language } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<SortOption>('bestselling');

  const translations = {
    title: { en: 'All Products', ar: 'جميع المنتجات' },
    filters: { en: 'Filters', ar: 'التصفية' },
    clearFilters: { en: 'Clear Filters', ar: 'مسح الفلاتر' },
    sortBy: { en: 'Sort by', ar: 'الترتيب حسب' },
    newest: { en: 'Newest', ar: 'الأحدث' },
    bestselling: { en: 'Best Selling', ar: 'الأكثر مبيعاً' },
    priceLowHigh: { en: 'Price: Low to High', ar: 'السعر: من الأقل للأعلى' },
    priceHighLow: { en: 'Price: High to Low', ar: 'السعر: من الأعلى للأقل' },
    rating: { en: 'Highest Rated', ar: 'الأعلى تقييماً' },
    priceRangeLabel: { en: 'Price Range', ar: 'نطاق السعر' },
    minRating: { en: 'Minimum Rating', ar: 'التقييم الأدنى' },
    category: { en: 'Category', ar: 'الفئة' },
    allCategories: { en: 'All Categories', ar: 'جميع الفئات' },
    results: { en: 'products found', ar: 'منتج' },
    noProducts: { en: 'No products found', ar: 'لم يتم العثور على منتجات' },
    tryAdjusting: { en: 'Try adjusting your filters', ar: 'حاول تعديل الفلاتر' }
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (categoryId && categoryId !== 'all') {
      filtered = filtered.filter(p => p.category === categoryId);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by rating
    if (selectedRating > 0) {
      filtered = filtered.filter(p => p.rating >= selectedRating);
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        // In a real app, you'd sort by date
        filtered.reverse();
        break;
      case 'bestselling':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [categoryId, priceRange, selectedRating, sortBy]);

  const currentCategory = categories.find(c => c.id === categoryId);
  const pageTitle = currentCategory ? t(currentCategory.name) : t(translations.title);

  const handleClearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedRating(0);
    setSortBy('bestselling');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-gray-600">
            {filteredProducts.length} {t(translations.results)}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl border p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-lg">{t(translations.filters)}</h2>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  {t(translations.clearFilters)}
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">{t(translations.category)}</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        cat.id === categoryId
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {t(cat.name)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">{t(translations.priceRangeLabel)}</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-semibold mb-3">{t(translations.minRating)}</h3>
                <div className="space-y-2">
                  {[0, 3, 4, 4.5].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="text-blue-600"
                      />
                      <span className="text-sm">
                        {rating === 0 
                          ? (language === 'en' ? 'All' : 'الكل')
                          : `${rating}+ ⭐`
                        }
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Toggle & Sort */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-5 h-5" />
                {t(translations.filters)}
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label className="text-sm font-medium whitespace-nowrap">
                  {t(translations.sortBy)}:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="flex-1 sm:flex-none px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="bestselling">{t(translations.bestselling)}</option>
                  <option value="newest">{t(translations.newest)}</option>
                  <option value="price-low">{t(translations.priceLowHigh)}</option>
                  <option value="price-high">{t(translations.priceHighLow)}</option>
                  <option value="rating">{t(translations.rating)}</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <X className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">{t(translations.noProducts)}</h3>
                <p className="text-gray-600">{t(translations.tryAdjusting)}</p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {t(translations.clearFilters)}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
