import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Blog } from './pages/Blog';
import { Article } from './pages/Article';
import { About } from './pages/About';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/article/:articleId" element={<Article />} />
                <Route path="/about" element={<About />} />
                {/* Placeholder routes */}
                <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
                <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}

// Placeholder page for simple routes
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-12 text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 text-lg">
            This page is coming soon. Check back later for more information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;