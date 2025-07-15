import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  // Навыки с иконками и цветами — приглушённые средние тона
  const skills = [
    { icon: Code, name: 'Frontend Development', color: 'text-teal-400' },
    { icon: Database, name: 'Backend Development', color: 'text-yellow-400' },
    { icon: Globe, name: 'Full Stack Solutions', color: 'text-rose-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-600">
      {/* Главный раздел - Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фоновый градиент с приглушёнными средними тонами */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500"></div>
        
        {/* Анимированные элементы фона */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-700/30 via-indigo-700/30 to-blue-700/30 blur-3xl"
              animate={{
                x: [0, 80, 0],
                y: [0, -80, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${25 + i * 25}%`,
                top: `${25 + i * 15}%`,
              }}
            />
          ))}
        </div>

        {/* Основной контейнер с контентом */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-gray-200">
            {/* Заголовок */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                {/* Градиентный текст из средних оттенков */}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Osmonov Meder
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
                Fullstack developer
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
                I build modern web applications using the latest technologies. I specialize in React, Node.js, and cloud computing solutions.
              </p>
            </motion.div>

            {/* Кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to="/portfolio"
                className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-gray-100 shadow-md hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center"
              >
                Show business
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://my-portfoilo-one-olive.vercel.app/my cv.pdf"
                download
                className="group border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-gray-100 px-8 py-4 rounded-full font-semibold shadow-sm hover:shadow-md transition transform hover:scale-105 flex items-center justify-center"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </a>
            </motion.div>

            {/* Навыки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700/70 backdrop-blur-md border border-gray-600 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {/* Иконка навыка */}
                  <skill.icon className={`w-14 h-14 ${skill.color} mb-5 mx-auto`} />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-200">{skill.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
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
