import React from 'react';
import { Github, Linkedin, Mail, Moon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 border-t border-purple-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Левая часть */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-orange-500">
              Osmonov Meder
            </h3>
            <p className="text-purple-700 text-sm">FullStack Developer</p>
          </div>

          {/* Социальные иконки */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/OsmonovMeder08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-900 transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:osmonovmeder743@gmail.com"
              className="text-pink-600 hover:text-pink-800 transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Подпись */}
          <div className="text-center md:text-right">
            <p className="text-pink-700 flex items-center justify-center md:justify-end text-sm">
              Made with <Moon className="w-4 h-4 mx-1 text-indigo-600" /> in 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
