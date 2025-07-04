import React from 'react';
// Импортируем компоненты для роутинга из react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импортируем шапку, подвал и страницы
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    // Router оборачивает всё приложение, чтобы управлять URL и навигацией
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Шапка сайта, обычно меню навигации */}
        <Header />

        {/* Основное содержимое, с отступом сверху (например, чтобы шапка не перекрывала) */}
        <main className="pt-16">
          {/* Здесь определяем маршруты (страницы) */}
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Home />} />

            {/* Страница "О себе" */}
            <Route path="/about" element={<About />} />

            {/* Портфолио */}
            <Route path="/portfolio" element={<Portfolio />} />

            {/* Контакты */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Подвал сайта */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
