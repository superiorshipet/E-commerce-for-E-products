import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Globe, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export function Header() {
  const { getCartCount } = useCart();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const translations = {
    home: { en: 'Home', ar: 'الرئيسية' },
    categories: { en: 'Categories', ar: 'الفئات' },
    blog: { en: 'Blog', ar: 'المدونة' },
    about: { en: 'About', ar: 'من نحن' },
    contact: { en: 'Contact', ar: 'اتصل بنا' },
    cart: { en: 'Cart', ar: 'السلة' },
    account: { en: 'Account', ar: 'الحساب' }
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">
              {language === 'en' ? 'DigiStore' : 'المتجر الرقمي'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              {t(translations.home)}
            </Link>
            <Link to="/category/all" className="hover:text-blue-600 transition-colors">
              {t(translations.categories)}
            </Link>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">
              {t(translations.blog)}
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              {t(translations.about)}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button 
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(translations.home)}
              </Link>
              <Link 
                to="/category/all" 
                className="hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(translations.categories)}
              </Link>
              <Link 
                to="/blog" 
                className="hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(translations.blog)}
              </Link>
              <Link 
                to="/about" 
                className="hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(translations.about)}
              </Link>
              <Link 
                to="/dashboard" 
                className="hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(translations.account)}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
