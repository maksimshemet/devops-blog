import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, BookOpen, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

const BlogList = ({ isDark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(posts.map(post => post.categories).flat())];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
        <div className={`relative flex-1 max-w-md ${isDark ? 'text-white' : 'text-gray-800'}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } border focus:ring-2 focus:ring-purple-500 outline-none`}
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={`px-4 py-2 rounded-lg ${
            isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'
          } border focus:ring-2 focus:ring-purple-500 outline-none`}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
            } transition-colors duration-200 shadow-lg`}
          >
            
            <div className="mb-4">
            {post.categories.map((category,index) => (
              <span key={`${category}-${index}`} className={`text-sm font-medium px-3 py-1 rounded-full ${
                isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-600'
              }`}>
                {category}
              </span>
            ))}
            </div>
            <Link to={`/blog/${post.id}`}>
              <h2 className={`text-2xl font-bold mb-3 ${
                isDark ? 'text-white hover:text-purple-300' : 'text-gray-800 hover:text-purple-600'
              } transition-colors`}>
                {post.title}
              </h2>
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
    </div>
  );
};

export default BlogList;