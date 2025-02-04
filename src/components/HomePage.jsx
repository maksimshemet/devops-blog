import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, BookOpen, ArrowRight } from 'lucide-react';

const HomePage = ({ isDark }) => {
  const recentPosts = posts.slice(0, 3); // Show latest 3 posts

  return (
    <div className="container mx-auto px-4 py-12">
      <div >
        <h1 className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Welcome to DevBlog</h1>
        <p className={`prose ${isDark ? 'text-white' : 'text-gray-800'} max-w-none mb-12`}>Exploring technology, one post at a time.</p>
      </div>

      <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Recent Posts
      </h2>

      <div className="grid gap-8">
        {recentPosts.map((post, index) => (
          <article 
            key={`${post.id}-${index}`} 
            className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
            } transition-colors duration-200 shadow-lg`}
          >
            <div className="flex flex-row flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <span key={`${category}-${index}`} className={`text-sm font-medium px-3 py-1 rounded-full ${
                  isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-600'
                }`}>
                  {category}
                </span>
              ))}
            </div>
            <Link to={`/blog/${post.id}`}>
              <h3 className={`text-2xl font-bold mb-3 ${
                isDark ? 'text-white hover:text-purple-300' : 'text-gray-800 hover:text-purple-600'
              } transition-colors`}>
                {post.title}
              </h3>
            </Link>
            
            <div className={`flex items-center gap-4 text-sm mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen size={14} />
                {post.readTime} read
              </div>
            </div>

            <p className={`leading-relaxed mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {post.excerpt}
            </p>

            <Link 
              to={`/blog/${post.id}`}
              className={`inline-flex items-center text-sm font-medium ${
                isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
              }`}
            >
              Read more
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </article>
        ))}
      </div>

      <Link
        to="/blog"
        className={`inline-block mt-8 px-6 py-3 rounded-lg ${
          isDark ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
        } text-white font-medium transition-colors`}
      >
        View all posts
      </Link>
    </div>
  );
};

export default HomePage;