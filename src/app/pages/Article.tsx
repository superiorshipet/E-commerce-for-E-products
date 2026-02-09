import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/products';

export function Article() {
  const { articleId } = useParams();
  const { t } = useLanguage();

  const article = blogPosts.find(p => p.id === articleId) || blogPosts[0];

  const translations = {
    backToBlog: { en: 'Back to Blog', ar: 'العودة إلى المدونة' },
    shareArticle: { en: 'Share Article', ar: 'مشاركة المقالة' },
    relatedArticles: { en: 'Related Articles', ar: 'مقالات ذات صلة' },
    readMore: { en: 'Read More', ar: 'اقرأ المزيد' }
  };

  // Mock article content
  const articleContent = {
    en: `
      <p>Digital products have revolutionized the way we consume and share knowledge. In this comprehensive guide, we'll explore the essential elements that make digital products successful in today's competitive marketplace.</p>
      
      <h2>Understanding Your Audience</h2>
      <p>The first step in creating successful digital products is understanding your target audience. Who are they? What problems are they trying to solve? What motivates them to make a purchase?</p>
      
      <p>Research shows that customers in the Middle East market have specific preferences when it comes to digital products. They value quality, authenticity, and excellent customer support.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>In the digital marketplace, quality always wins. Whether you're creating an e-book, online course, or design template, focus on delivering exceptional value to your customers.</p>
      
      <ul>
        <li>Create comprehensive, well-researched content</li>
        <li>Ensure professional design and presentation</li>
        <li>Test your products thoroughly before launch</li>
        <li>Provide excellent customer support</li>
      </ul>
      
      <h2>Marketing Your Digital Products</h2>
      <p>Even the best digital products need effective marketing. Here are some proven strategies:</p>
      
      <ol>
        <li><strong>Build an email list:</strong> Email marketing remains one of the most effective ways to reach potential customers.</li>
        <li><strong>Leverage social media:</strong> Platforms like Instagram, LinkedIn, and Twitter can help you reach a wider audience.</li>
        <li><strong>Create valuable content:</strong> Blog posts, videos, and tutorials can attract potential customers and establish your expertise.</li>
        <li><strong>Offer promotions:</strong> Strategic discounts and limited-time offers can drive sales and create urgency.</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Success in the digital product marketplace requires a combination of quality products, effective marketing, and excellent customer service. By following these guidelines and continuously improving your offerings, you can build a thriving digital product business.</p>
    `,
    ar: `
      <p>لقد أحدثت المنتجات الرقمية ثورة في الطريقة التي نستهلك بها المعرفة ونشاركها. في هذا الدليل الشامل، سنستكشف العناصر الأساسية التي تجعل المنتجات الرقمية ناجحة في سوق اليوم التنافسي.</p>
      
      <h2>فهم جمهورك</h2>
      <p>الخطوة الأولى في إنشاء منتجات رقمية ناجحة هي فهم جمهورك المستهدف. من هم؟ ما المشاكل التي يحاولون حلها؟ ما الذي يحفزهم على الشراء؟</p>
      
      <p>تظهر الأبحاث أن العملاء في سوق الشرق الأوسط لديهم تفضيلات محددة عندما يتعلق الأمر بالمنتجات الرقمية. إنهم يقدرون الجودة والأصالة ودعم العملاء الممتاز.</p>
      
      <h2>الجودة أهم من الكمية</h2>
      <p>في السوق الرقمي، الجودة دائماً تفوز. سواء كنت تنشئ كتاباً إلكترونياً أو دورة عبر الإنترنت أو قالب تصميم، ركز على تقديم قيمة استثنائية لعملائك.</p>
      
      <ul>
        <li>إنشاء محتوى شامل ومبحوث جيداً</li>
        <li>ضمان التصميم والعرض الاحترافي</li>
        <li>اختبر منتجاتك بدقة قبل الإطلاق</li>
        <li>تقديم دعم عملاء ممتاز</li>
      </ul>
      
      <h2>تسويق منتجاتك الرقمية</h2>
      <p>حتى أفضل المنتجات الرقمية تحتاج إلى تسويق فعال. إليك بعض الاستراتيجيات المثبتة:</p>
      
      <ol>
        <li><strong>بناء قائمة بريدية:</strong> يظل التسويق عبر البريد الإلكتروني أحد أكثر الطرق فعالية للوصول إلى العملاء المحتملين.</li>
        <li><strong>الاستفادة من وسائل التواصل الاجتماعي:</strong> يمكن أن تساعدك منصات مثل Instagram و LinkedIn و Twitter في الوصول إلى جمهور أوسع.</li>
        <li><strong>إنشاء محتوى قيم:</strong> يمكن أن تجذب منشورات المدونة ومقاطع الفيديو والبرامج التعليمية العملاء المحتملين وتؤسس خبرتك.</li>
        <li><strong>تقديم العروض الترويجية:</strong> يمكن للخصومات الاستراتيجية والعروض محدودة الوقت أن تدفع المبيعات وتخلق الإلحاح.</li>
      </ol>
      
      <h2>الخلاصة</h2>
      <p>يتطلب النجاح في سوق المنتجات الرقمية مزيجاً من المنتجات عالية الجودة والتسويق الفعال وخدمة العملاء الممتازة. باتباع هذه الإرشادات والتحسين المستمر لعروضك، يمكنك بناء عمل تجاري مزدهر للمنتجات الرقمية.</p>
    `
  };

  const relatedArticles = blogPosts.filter(p => p.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t(translations.backToBlog)}
          </Link>
          <div className="inline-flex items-center gap-2 text-sm mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full">
              {t(article.category)}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t(article.title)}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{t(article.author)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img
            src={article.image}
            alt={t(article.title)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl p-8 md:p-12 mb-12 shadow-sm">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-700 prose-li:my-2
              prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ 
              __html: t({ 
                en: articleContent.en, 
                ar: articleContent.ar 
              }) 
            }}
          />
        </div>

        {/* Share Buttons */}
        <div className="bg-white rounded-xl p-6 mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-semibold text-lg">{t(translations.shareArticle)}</h3>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-blue-400 hover:bg-blue-500 text-white flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h2 className="text-3xl font-bold mb-8">{t(translations.relatedArticles)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((post) => (
              <Link
                key={post.id}
                to={`/article/${post.id}`}
                className="group bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {t(post.title)}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {t(post.excerpt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
