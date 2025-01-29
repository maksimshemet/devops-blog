import { Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => (
  <nav className={`border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          DevBlog
        </h1>
        <div className="flex items-center gap-6">
          <a href="/" className={`${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`}>Home</a>
          <a href="/blog" className={`${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-500`}>Blog</a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-600'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;