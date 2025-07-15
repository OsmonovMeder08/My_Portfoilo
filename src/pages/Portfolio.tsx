import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Database,
  Code
} from 'lucide-react';

const Portfolio = () => {
  // Хук состояния для выбранного фильтра проектов
  const [activeFilter, setActiveFilter] = useState('all');

  // Массив с проектами, каждый проект — объект с разными полями
  const projects = [
    {
      id: 1,
      title: 'Qoranify',
      description: 'Исламский сайт с сурой Корана, хадисами и красивым дизайном.',
      image: 'https://www.wish.hr/wp-content/uploads/2012/01/islam.jpg',
      technologies: ['React', 'TailwindCSS', 'Vite'],
      category: 'web',
      liveUrl: 'https://qoranify.vercel.app/',
      githubUrl: 'https://github.com/OsmonovMeder08/typoi',
      features: ['Коран', 'Хадисы', 'Плеер', 'Современный UI']
    },
    {
      id: 2,
      title: 'Instagram Clone',
      description: 'Клон Instagram с возможностью постов, лайков и подписок.',
      image: 'https://pac-audit.by/images/imgonline-com-ua-Resize-Z6GQA4tFD6pvLvKK.jpg',
      technologies: ['React', 'FastAPI', 'SQLite'],
      category: 'web',
      liveUrl: 'https://meder-flax.vercel.app/',
      githubUrl: 'https://github.com/OsmonovMeder08/tajic',
      features: ['Публикации', 'Лайки', 'Подписки', 'Профили']
    },
    {
      id: 3,
      title: 'Islamic App',
      description: 'Приложение для прослушивания Корана и чтения хадисов.',
      image: 'https://thumbs.dreamstime.com/b/beautiful-illuminated-mosque-night-under-crescent-moon-starry-sky-perfect-ramadan-celebrations-islamic-art-projects-357849158.jpg',
      technologies: ['React', 'TailwindCSS', 'Audio Player'],
      category: 'web',
      liveUrl: 'https://islamicapp-kappa.vercel.app/',
      githubUrl: 'https://github.com/OsmonovMeder08/urod',
      features: ['Аудио Корана', 'Хадисы', 'Мультиязык']
    },
    {
      id: 4,
      title: 'Fashion Store',
      description: 'Магазин модной одежды с современным дизайном.',
      image: 'https://image1.jdomni.in/preview-theme/4/2/4/974b34f9-0e0e-491f-8529-5bbd04ee05fa.jpeg',
      technologies: ['React', 'Tailwind', 'Mock API'],
      category: 'web',
      liveUrl: 'https://fashionstore-pink.vercel.app/',
      githubUrl: 'https://github.com/OsmonovMeder08/balbes',
      features: ['Категории', 'Карточки товаров', 'Адаптивный дизайн']
    },
     {
      id: 4,
      title: 'Course_App',
      description: 'Course_app .',
      image: 'https://img.freepik.com/free-photo/couple-making-heart-from-hands-sea-shore_23-2148019887.jpg?semt=ais_hybrid&w=740',
      technologies: ['React', 'Tailwind', 'Mock API'],
      category: 'web',
      liveUrl: 'https://course-app-red.vercel.app/',
      githubUrl: 'https://github.com/OsmonovMeder08/shelban',
      features: ['Категории', 'запись к курсу', 'Адаптивный дизайн']
    },
     {
      id: 5,
      title: 'ChatBot',
      description: 'ChatBot.',
      image: 'https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?semt=ais_hybrid&w=740',
      technologies: ['React', 'Tailwind', 'Mock API'],
      category: 'web',
      liveUrl: 'https://chat-bot-pi-lake.vercel.app/',
      githubUrl: 'https://github.com/OsmonovMeder08/balbes',
      features: ['Категории', 'ChatBot', 'Адаптивный дизайн']
    }
  ];

  // Массив фильтров проектов с иконками
  const filters = [
    { key: 'all', label: 'All projects', icon: Globe },
    { key: 'web', label: 'WeB-App', icon: Code },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'api', label: 'API', icon: Database }
  ];

  // Отфильтрованные проекты в зависимости от выбранного фильтра
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        {/* Заголовок и описание страницы */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}  // анимация появления (из ниоткуда снизу)
          animate={{ opacity: 1, y: 0 }}   // конечное состояние — полностью видимый, на месте
          transition={{ duration: 0.8 }}   // длительность анимации 0.8 сек
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {/* Градиентный текст */}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my best works in the field of web development, mobile applications and API. Each project is created with attention to detail and modern standards.
          </p>
        </motion.section>

        {/* Кнопки фильтров проектов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}  // при клике меняем фильтр
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' // активный фильтр
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700' // неактивный
              }`}
            >
              <filter.icon className="w-4 h-4" /> {/* иконка фильтра */}
              <span>{filter.label}</span> {/* название фильтра */}
            </button>
          ))}
        </motion.div>

        {/* Сетка проектов с анимацией */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter} // перезапускаем анимацию при смене фильтра
            initial={{ opacity: 0, y: 20 }}  // старт анимации
            animate={{ opacity: 1, y: 0 }}    // конечное состояние
            exit={{ opacity: 0, y: -20 }}     // анимация ухода
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}            // анимация появления каждого проекта с задержкой
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }} // задержка по индексу для последовательности
                whileHover={{ y: -5 }}                      // подъем карточки при наведении
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Изображение проекта с эффектом масштабирования при наведении */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Появляющийся градиент иконок ссылки при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Контент проекта */}
                <div className="p-6">
                  {/* Заголовок проекта */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Особенности проекта */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Технологии, использованные в проекте */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Призыв к действию — обсудить проект */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold mb-4">
            Do you have an idea for my projects?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I am always open to discussing new projects and interesting challenges.
            Let's create something amazing together!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Discuss the project
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
