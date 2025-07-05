import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  // Навыки с иконками и цветами для визуального выделения
  const skills = [
    { icon: Code, name: 'Frontend Development', color: 'text-blue-400' },
    { icon: Database, name: 'Backend Development', color: 'text-green-400' },
    { icon: Globe, name: 'Full Stack Solutions', color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Главный раздел - Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фоновый градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        
        {/* Анимированные элементы фона */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
              animate={{
                x: [0, 100, 0],       // движение влево-вправо
                y: [0, -100, 0],      // движение вверх-вниз
                scale: [1, 1.2, 1],   // увеличение и уменьшение
              }}
              transition={{
                duration: 10 + i * 2, // длительность анимации растёт для каждого круга
                repeat: Infinity,     // бесконечное повторение
                ease: "easeInOut",    // плавность анимации
              }}
              style={{
                left: `${20 + i * 30}%`, // позиция слева (разная для каждого круга)
                top: `${20 + i * 20}%`,  // позиция сверху (разная)
              }}
            />
          ))}
        </div>

        {/* Основной контейнер с контентом */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Заголовок с плавным появлением */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {/* Имя с градиентной заливкой текста */}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Osmonov Meder
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Fullstack developer
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                     I build modern web applications using the latest technologies. I specialize in React, Node.js, and cloud computing solutions.              </p>
            </motion.div>

            {/* Кнопки "Портфолио" и "Скачать резюме" с анимацией */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                to="/portfolio"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Show business
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/My CV.pdf"
                className="group border-2 border-purple-500 hover:bg-purple-500 px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center transform hover:scale-105"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </a>
            </motion.div>

            {/* Предварительный просмотр навыков */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Иконка навыка */}
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4 mx-auto`} />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">
                       Professional development using modern technologies                  
                   </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
