import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <div className="bg-gradient-to-r from-fuchsia-400 to-pink-400 p-2 rounded-lg shadow-md">
              <Code className="w-6 h-6 text-yellow-100" />
            </div>
            <span className="bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent">
              Osmonov Meder
            </span>
          </Link>

          {/* Навигация для больших экранов */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 px-4 rounded-full transition duration-300 hover:bg-orange-200 hover:text-pink-700 ${
                  location.pathname === item.path
                    ? 'bg-pink-200 text-orange-700 font-semibold'
                    : 'text-purple-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Бургер-меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-pink-200 hover:bg-pink-300 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-orange-700" /> : <Menu className="w-6 h-6 text-purple-700" />}
          </button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 mb-4 bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 rounded-xl shadow-md"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg text-sm transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-pink-300 text-orange-900 font-semibold'
                        : 'text-purple-700 hover:bg-orange-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
