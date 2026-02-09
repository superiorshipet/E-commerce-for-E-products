import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/products';

export function Blog() {
  const { t } = useLanguage();

  const translations = {
    title: { en: 'Blog & Articles', ar: 'المدونة والمقالات' },
    subtitle: { 
      en: 'Tips, insights, and guides to help you succeed', 
      ar: 'نصائح وأفكار وأدلة لمساعدتك على النجاح' 
    },
    readMore: { en: 'Read More', ar: 'اقرأ المزيد' },
    by: { en: 'By', ar: 'بواسطة' }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t(translations.title)}
          </h1>
          <p className="text-xl text-gray-600">
            {t(translations.subtitle)}
          </p>
        </div>

        {/* Featured Post */}
        <Link
          to={`/article/${blogPosts[0].id}`}
          className="block mb-12 group"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={t(blogPosts[0].title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold mb-4">
                  <span className="px-3 py-1 bg-blue-100 rounded-full">
                    {t(blogPosts[0].category)}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {t(blogPosts[0].title)}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {t(blogPosts[0].excerpt)}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{t(blogPosts[0].author)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                  {t(translations.readMore)}
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/article/${post.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.title)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 text-xs text-blue-600 font-semibold mb-3">
                    <span className="px-2 py-1 bg-blue-100 rounded-full">
                      {t(post.category)}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {t(post.title)}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {t(post.excerpt)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{t(post.author)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
