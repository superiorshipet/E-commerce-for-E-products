import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState<'account' | 'billing' | 'payment'>('account');
  const [guestCheckout, setGuestCheckout] = useState(false);

  const translations = {
    title: { en: 'Checkout', ar: 'إتمام الشراء' },
    stepAccount: { en: 'Account', ar: 'الحساب' },
    stepBilling: { en: 'Billing', ar: 'الفواتير' },
    stepPayment: { en: 'Payment', ar: 'الدفع' },
    login: { en: 'Login', ar: 'تسجيل الدخول' },
    guestCheckout: { en: 'Continue as Guest', ar: 'متابعة كضيف' },
    email: { en: 'Email', ar: 'البريد الإلكتروني' },
    password: { en: 'Password', ar: 'كلمة المرور' },
    fullName: { en: 'Full Name', ar: 'الاسم الكامل' },
    address: { en: 'Address', ar: 'العنوان' },
    city: { en: 'City', ar: 'المدينة' },
    country: { en: 'Country', ar: 'الدولة' },
    postalCode: { en: 'Postal Code', ar: 'الرمز البريدي' },
    phone: { en: 'Phone', ar: 'الهاتف' },
    paymentMethod: { en: 'Payment Method', ar: 'طريقة الدفع' },
    creditCard: { en: 'Credit/Debit Card', ar: 'بطاقة ائتمان/خصم' },
    cardNumber: { en: 'Card Number', ar: 'رقم البطاقة' },
    expiryDate: { en: 'Expiry Date', ar: 'تاريخ الانتهاء' },
    cvv: { en: 'CVV', ar: 'CVV' },
    orderSummary: { en: 'Order Summary', ar: 'ملخص الطلب' },
    subtotal: { en: 'Subtotal', ar: 'المجموع الفرعي' },
    tax: { en: 'Tax', ar: 'الضريبة' },
    total: { en: 'Total', ar: 'المجموع' },
    placeOrder: { en: 'Place Order', ar: 'تأكيد الطلب' },
    secureCheckout: { en: 'Secure Checkout', ar: 'دفع آمن' },
    next: { en: 'Next', ar: 'التالي' },
    back: { en: 'Back', ar: 'رجوع' }
  };

  const handlePlaceOrder = () => {
    // In a real app, this would process the payment
    clearCart();
    navigate('/order-success');
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  // Redirect to cart if empty - using useEffect to avoid setState during render
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart.length, navigate]);

  // Don't render the form if cart is empty
  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {t(translations.title)}
        </h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {['account', 'billing', 'payment'].map((s, index) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === s
                      ? 'bg-blue-600 text-white'
                      : index < ['account', 'billing', 'payment'].indexOf(step)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index < ['account', 'billing', 'payment'].indexOf(step) ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < 2 && (
                  <div
                    className={`w-16 h-1 ${
                      index < ['account', 'billing', 'payment'].indexOf(step)
                        ? 'bg-green-600'
                        : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 md:p-8">
              {/* Step 1: Account */}
              {step === 'account' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {t(translations.stepAccount)}
                  </h2>
                  {!guestCheckout ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t(translations.email)}
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t(translations.password)}
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="••••••••"
                        />
                      </div>
                      <button
                        onClick={() => setStep('billing')}
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        {t(translations.login)}
                      </button>
                      <div className="text-center">
                        <button
                          onClick={() => setGuestCheckout(true)}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {t(translations.guestCheckout)}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t(translations.email)}
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <button
                        onClick={() => setStep('billing')}
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        {t(translations.next)}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Billing */}
              {step === 'billing' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {t(translations.stepBilling)}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        {t(translations.fullName)}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        {t(translations.address)}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t(translations.city)}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t(translations.country)}
                      </label>
                      <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>United Arab Emirates</option>
                        <option>Saudi Arabia</option>
                        <option>Egypt</option>
                        <option>Jordan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t(translations.postalCode)}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t(translations.phone)}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setStep('account')}
                      className="px-6 py-3 border rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      {t(translations.back)}
                    </button>
                    <button
                      onClick={() => setStep('payment')}
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      {t(translations.next)}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 'payment' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {t(translations.stepPayment)}
                  </h2>
                  <div className="space-y-6">
                    {/* Payment Method Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        {t(translations.paymentMethod)}
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="payment" defaultChecked className="text-blue-600" />
                          <CreditCard className="w-5 h-5" />
                          <span className="font-medium">{t(translations.creditCard)}</span>
                        </label>
                        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="payment" className="text-blue-600" />
                          <span className="font-medium">PayPal</span>
                        </label>
                        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="payment" className="text-blue-600" />
                          <span className="font-medium">Apple Pay</span>
                        </label>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t(translations.cardNumber)}
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t(translations.expiryDate)}
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t(translations.cvv)}
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep('billing')}
                        className="px-6 py-3 border rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        {t(translations.back)}
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <Lock className="w-5 h-5" />
                        {t(translations.placeOrder)}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h2 className="font-bold text-xl mb-6">
                {t(translations.orderSummary)}
              </h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.image}
                      alt={t(item.product.title)}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-2">
                        {t(item.product.title)}
                      </p>
                      <p className="text-sm text-gray-600">
                        x{item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t(translations.subtotal)}</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t(translations.tax)}</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold mt-6">
                <span>{t(translations.total)}</span>
                <span className="text-blue-600">${total.toFixed(2)}</span>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Lock className="w-4 h-4" />
                <span>{t(translations.secureCheckout)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}