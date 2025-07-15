import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Database,
  Code,
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
  {
    id: 1,
    title: 'Qoranify',
    description: 'Исламский сайт с сурой Корана, хадисами и красивым дизайном.',
    image: 'https://cdn.pixabay.com/photo/2017/04/12/22/51/quran-2224623_1280.jpg',
    technologies: ['React', 'TailwindCSS', 'Vite'],
    category: 'web',
    liveUrl: 'https://qoranify.vercel.app/',
    githubUrl: 'https://github.com/OsmonovMeder08/typoi',
    features: ['Коран', 'Хадисы', 'Плеер', 'Современный UI'],
  },
  {
    id: 2,
    title: 'Instagram Clone',
    description: 'Клон Instagram с возможностью постов, лайков и подписок.',
    image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/instagram-1958322_1280.jpg',
    technologies: ['React', 'FastAPI', 'SQLite'],
    category: 'web',
    liveUrl: 'https://meder-flax.vercel.app/',
    githubUrl: 'https://github.com/OsmonovMeder08/tajic',
    features: ['Публикации', 'Лайки', 'Подписки', 'Профили'],
  },
  {
    id: 3,
    title: 'Islamic App',
    description: 'Приложение для прослушивания Корана и чтения хадисов.',
    image: 'https://cdn.pixabay.com/photo/2019/11/04/07/14/islam-4593152_1280.jpg',
    technologies: ['React', 'TailwindCSS', 'Audio Player'],
    category: 'web',
    liveUrl: 'https://islamicapp-kappa.vercel.app/',
    githubUrl: 'https://github.com/OsmonovMeder08/urod',
    features: ['Аудио Корана', 'Хадисы', 'Мультиязык'],
  },
  {
    id: 4,
    title: 'Fashion Store',
    description: 'Магазин модной одежды с современным дизайном.',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/fashion-1866574_1280.jpg',
    technologies: ['React', 'Tailwind', 'Mock API'],
    category: 'web',
    liveUrl: 'https://fashionstore-pink.vercel.app/',
    githubUrl: 'https://github.com/OsmonovMeder08/balbes',
    features: ['Категории', 'Карточки товаров', 'Адаптивный дизайн'],
  },
  {
    id: 5,
    title: 'Course_App',
    description: 'Course_app .',
    image: 'https://cdn.pixabay.com/photo/2017/06/20/18/15/adult-2425124_1280.jpg',
    technologies: ['React', 'Tailwind', 'Mock API'],
    category: 'web',
    liveUrl: 'https://course-app-red.vercel.app/',
    githubUrl: 'https://github.com/OsmonovMeder08/shelban',
    features: ['Категории', 'запись к курсу', 'Адаптивный дизайн'],
  },
  {
    id: 6,
    title: 'ChatBot',
    description: 'ChatBot.',
    image: 'https://cdn.pixabay.com/photo/2019/11/10/21/56/artificial-intelligence-4617752_1280.jpg',
    technologies: ['React', 'Tailwind', 'Mock API'],
    category: 'web',
    liveUrl: 'https://chat-bot-pi-lake.vercel.app/',
    githubUrl: 'https://github.com/OsmonovMeder08/balbes',
    features: ['Категории', 'ChatBot', 'Адаптивный дизайн'],
  },
];

  const filters = [
    { key: 'all', label: 'All projects', icon: Globe },
    { key: 'web', label: 'WeB-App', icon: Code },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'api', label: 'API', icon: Database },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-800 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A modern showcase of my work. Clean UI, smooth interactions, fully responsive.
          </p>
        </motion.section>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 border backdrop-blur-md shadow-sm ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-pink-600 to-purple-700 text-white border-transparent shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300 border-gray-600'
              }`}
            >
              <filter.icon className="w-5 h-5" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 15px 25px rgba(255, 105, 180, 0.6)' }}
                className="group rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-purple-800 border border-purple-700 backdrop-blur-md overflow-hidden shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-colors duration-500 flex justify-end p-4 space-x-3 rounded-t-3xl">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600/80 hover:bg-pink-500 p-3 rounded-full shadow-lg transition-colors"
                    >
                      <ExternalLink className="text-white w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600/80 hover:bg-purple-500 p-3 rounded-full shadow-lg transition-colors"
                    >
                      <Github className="text-white w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-pink-900/40 text-pink-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-700/40 border border-purple-600 text-purple-300 px-4 py-1 rounded-full text-xs font-semibold"
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

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 bg-purple-900/30 border border-purple-700/20 rounded-3xl p-12 shadow-inner"
        >
          <h2 className="text-3xl font-bold mb-4 text-pink-400">
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
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Discuss the project
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
