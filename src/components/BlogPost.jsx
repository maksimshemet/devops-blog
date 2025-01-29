// src/components/BlogPost.jsx
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Calendar, BookOpen, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = ({ isDark }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className={`text-2xl ${isDark ? 'text-white' : 'text-gray-800'}`}>Post not found</h2>
        <Link to="/blog" className="text-purple-500 hover:text-purple-600 mt-4 inline-block">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className={isDark ? 'text-gray-100' : 'text-gray-800'}>
        <Link
          to="/blog"
          className={`inline-flex items-center mb-8 ${
            isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to all posts
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-sm mb-8">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            {post.readTime} read
          </div>
          {post.categories.map((category, index) => (
          <span key={`${category}-${index}`} className={`text-sm font-medium px-3 py-1 rounded-full ${
            isDark ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-600'
          }`}>
            {category}
          </span>
          ))}
        </div>

        <div className={`flex items-center flex-col markdown prose ${isDark ? 'prose-invert' : ''} max-w-none `}>
          <ReactMarkdown 
          remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;