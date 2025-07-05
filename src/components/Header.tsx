// Импортирует библиотеку React и хуки useState и useEffect
import React, { useState, useEffect } from 'react';

// Импорт из React Router:
// Link — заменяет <a> и позволяет навигацию без перезагрузки
// useLocation — узнаёт текущий путь (для подсветки активной страницы)
import { Link, useLocation } from 'react-router-dom';

// Импорт иконок из библиотеки Lucide React
// Menu — иконка меню "бургер"
// X — крестик (закрытие меню)
// Code и Filter — декоративные иконки
import { Menu, X, Code, Filter, Book, BaggageClaim, BadgeDollarSign, Brain, Cat, Bird, LucideBone, Home, Notebook, NotebookIcon, BookA, BookMarked, BookImage, BookAIcon } from 'lucide-react';

// Импорт анимаций из Framer Motion
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio from '../pages/Portfolio';

// Функциональный компонент Header
const Header = () => {
  // Состояние: открыто ли мобильное меню (бургер)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Состояние: был ли скролл страницы
  const [scrolled, setScrolled] = useState(false);

  // Хук для отслеживания текущего маршрута (страницы)
  const location = useLocation();

  // useEffect отслеживает скролл и меняет состояние scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // true, если прокрутили вниз больше 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Навигационные пункты — путь и подпись на арабском
  const navItems = [
    { path: '/', label: 'Home' },     // Главная
    { path: '/about', label: 'About' },   // Обо мне
    { path: '/portfolio', label: 'Portfoilo' }, // Портфолио
    { path: '/contact', label: 'Contact' } // Контакты
  ];

  return (
    // Хедер с анимацией появления сверху
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'  // При скролле добавляем фон
          : 'bg-transparent'  // Без скролла — прозрачный
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип / Название сайта */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
              <BookAIcon className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Osmonov Meder
            </span>
          </Link>

          {/* Навигация для больших экранов */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 px-4 transition-colors duration-200 hover:text-purple-400 ${
                  location.pathname === item.path
                    ? 'text-purple-400' // Подсветка активного пункта
                    : 'text-gray-300'
                }`}
              >
                {item.label}
                {/* Анимация подчеркивания для активной страницы */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Кнопка мобильного меню (бургер) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Мобильная навигация — появляется с анимацией */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 mb-4"
            >
              <div className="p-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)} // Закрываем меню после клика
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-gray-700 ${
                      location.pathname === item.path
                        ? 'text-purple-400 bg-gray-700'
                        : 'text-gray-300'
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

// Экспортируем компонент, чтобы его можно было использовать в других файлах
export default Header;
