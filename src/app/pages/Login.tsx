import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Login() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const translations = {
    login: { en: 'Login', ar: 'تسجيل الدخول' },
    signUp: { en: 'Sign Up', ar: 'إنشاء حساب' },
    welcomeBack: { en: 'Welcome Back', ar: 'مرحباً بعودتك' },
    createAccount: { en: 'Create Account', ar: 'إنشاء حساب جديد' },
    loginSubtitle: { 
      en: 'Login to access your digital products', 
      ar: 'سجّل الدخول للوصول إلى منتجاتك الرقمية' 
    },
    signUpSubtitle: { 
      en: 'Join thousands of satisfied customers', 
      ar: 'انضم إلى آلاف العملاء الراضين' 
    },
    email: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    password: { en: 'Password', ar: 'كلمة المرور' },
    fullName: { en: 'Full Name', ar: 'الاسم الكامل' },
    confirmPassword: { en: 'Confirm Password', ar: 'تأكيد كلمة المرور' },
    forgotPassword: { en: 'Forgot Password?', ar: 'نسيت كلمة المرور؟' },
    rememberMe: { en: 'Remember me', ar: 'تذكرني' },
    noAccount: { en: "Don't have an account?", ar: 'ليس لديك حساب؟' },
    haveAccount: { en: 'Already have an account?', ar: 'لديك حساب بالفعل؟' },
    orContinue: { en: 'Or continue with', ar: 'أو متابعة مع' },
    terms: { 
      en: 'By signing up, you agree to our Terms of Service and Privacy Policy', 
      ar: 'بالتسجيل، فإنك توافق على شروط الخدمة وسياسة الخصوصية' 
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
            </Link>
            <h1 className="text-3xl font-bold mb-2">
              {isSignUp ? t(translations.createAccount) : t(translations.welcomeBack)}
            </h1>
            <p className="text-gray-600">
              {isSignUp ? t(translations.signUpSubtitle) : t(translations.loginSubtitle)}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t(translations.fullName)}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">
                {t(translations.email)}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t(translations.password)}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t(translations.confirmPassword)}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    required
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm">{t(translations.rememberMe)}</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  {t(translations.forgotPassword)}
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              {isSignUp ? t(translations.signUp) : t(translations.login)}
            </button>

            {isSignUp && (
              <p className="text-xs text-gray-600 text-center">
                {t(translations.terms)}
              </p>
            )}
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  {t(translations.orContinue)}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/>
                </svg>
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-gray-600"
            >
              {isSignUp ? t(translations.haveAccount) : t(translations.noAccount)}{' '}
              <span className="text-blue-600 hover:text-blue-700 font-medium">
                {isSignUp ? t(translations.login) : t(translations.signUp)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
