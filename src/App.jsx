import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';


const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <Routes>
          <Route path="/" element={<HomePage isDark={isDark} />} />
          <Route path="/blog" element={<BlogList isDark={isDark} />} />
          <Route path="/blog/:id" element={<BlogPost isDark={isDark} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App
