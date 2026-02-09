import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const translations = {
    title: { en: 'Shopping Cart', ar: 'سلة التسوق' },
    empty: { en: 'Your cart is empty', ar: 'سلتك فارغة' },
    startShopping: { en: 'Start Shopping', ar: 'ابدأ التسوق' },
    product: { en: 'Product', ar: 'المنتج' },
    price: { en: 'Price', ar: 'السعر' },
    quantity: { en: 'Quantity', ar: 'الكمية' },
    total: { en: 'Total', ar: 'المجموع' },
    subtotal: { en: 'Subtotal', ar: 'المجموع الفرعي' },
    discount: { en: 'Discount', ar: 'الخصم' },
    tax: { en: 'Tax (estimated)', ar: 'الضريبة (تقديرية)' },
    grandTotal: { en: 'Grand Total', ar: 'المجموع الإجمالي' },
    discountCode: { en: 'Discount Code', ar: 'رمز الخصم' },
    apply: { en: 'Apply', ar: 'تطبيق' },
    proceedToCheckout: { en: 'Proceed to Checkout', ar: 'المتابعة للدفع' },
    continueShopping: { en: 'Continue Shopping', ar: 'متابعة التسوق' }
  };

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === 'SAVE10') {
      setAppliedDiscount(0.1);
      alert(t({ en: '10% discount applied!', ar: 'تم تطبيق خصم 10٪!' }));
    } else {
      alert(t({ en: 'Invalid discount code', ar: 'رمز خصم غير صالح' }));
    }
  };

  const subtotal = getCartTotal();
  const discountAmount = subtotal * appliedDiscount;
  const tax = (subtotal - discountAmount) * 0.1; // 10% tax
  const grandTotal = subtotal - discountAmount + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-400" />
          <h2 className="text-2xl font-bold mb-4">{t(translations.empty)}</h2>
          <Link
            to="/category/all"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {t(translations.startShopping)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {t(translations.title)}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.product.id} className="bg-white rounded-xl p-6 flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0"
                >
                  <img
                    src={item.product.image}
                    alt={t(item.product.title)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
                      {t(item.product.title)}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(item.product.shortDescription)}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border hover:bg-gray-50 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border hover:bg-gray-50 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-xl text-blue-600">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h2 className="font-bold text-xl mb-6">
                {t({ en: 'Order Summary', ar: 'ملخص الطلب' })}
              </h2>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  {t(translations.discountCode)}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="SAVE10"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleApplyDiscount}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                  >
                    {t(translations.apply)}
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t(translations.subtotal)}</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>{t(translations.discount)}</span>
                    <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">{t(translations.tax)}</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6">
                <span>{t(translations.grandTotal)}</span>
                <span className="text-blue-600">${grandTotal.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigate('/checkout')}
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4"
              >
                {t(translations.proceedToCheckout)}
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/category/all"
                className="block text-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {t(translations.continueShopping)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
