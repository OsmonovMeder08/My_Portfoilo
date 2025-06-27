import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Osmonov Meder
            </h3>
            <p className="text-gray-400">Fullstack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/OsmonovMeder08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="osmonovmeder743@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made <Heart className="w-4 h-4 mx-1 text-red-500" /> in 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;