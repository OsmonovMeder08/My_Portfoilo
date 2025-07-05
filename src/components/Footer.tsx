// Импорт React, необходим для создания компонента
import React from 'react';

// Импорт иконок из библиотеки lucide-react
// Github — логотип GitHub
// Linkedin — логотип LinkedIn
// Mail — иконка письма
// Heart — иконка сердца (не используется здесь, можно удалить)
// Moon — иконка луны (используется в "Сделано в 2025")
import { Github, Linkedin, Mail, Heart, Moon } from 'lucide-react';

// Функциональный компонент Footer (подвал сайта)
const Footer = () => {
  return (
    // Обертка для всего футера с фоном, отступами и рамкой сверху
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Левая часть — имя и профессия */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Osmonov Meder
            </h3>
            <p className="text-gray-400">Full Stack Developer</p> {/* Fullstack Developer на арабском */}
          </div>

          {/* Центральная часть — ссылки на соцсети */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {/* GitHub ссылка */}
            <a
              href="https://github.com/OsmonovMeder08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>

            {/* LinkedIn ссылка (можно заменить на реальный профиль) */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            {/* Почта — нужно добавить mailto: чтобы работала как ссылка на почтовый клиент */}
            <a
              href="mailto:osmonovmeder743@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Правая часть — подпись "Сделано в 2025" */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made <Moon className="w-4 h-4 mx-1 text-red-500" /> in 2025
              {/* "Сделано 🌙 в 2025 году" на арабском */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
