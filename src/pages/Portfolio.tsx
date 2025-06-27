import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Database,
  Filter,
  Code
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Islamic_app',
      description: 'Это приложение где можешь слушать коран и читать хадисыы.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Responsive Design', 'Payment Integration', 'Admin Dashboard', 'Real-time Updates']
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Безопасное мобильное приложение для банковских операций с биометрической аутентификацией.',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Biometric Auth', 'Real-time Transactions', 'Secure API', 'Push Notifications']
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Аналитическая панель для SaaS продукта с интерактивными графиками и отчетами в реальном времени.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'MongoDB', 'Docker'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Data Visualization', 'Real-time Analytics', 'Custom Reports', 'API Integration']
    },
    {
      id: 4,
      title: 'Food Delivery App',
      description: 'Мобильное приложение для доставки еды с геолокацией, отслеживанием заказов и интеграцией платежей.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Google Maps', 'Firebase', 'Stripe'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      features: ['GPS Tracking', 'Real-time Orders', 'Payment Gateway', 'Push Notifications']
    },
    {
      id: 5,
      title: 'Cloud Storage API',
      description: 'RESTful API для облачного хранилища файлов с системой авторизации и управлением доступом.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'AWS S3', 'JWT', 'PostgreSQL', 'Redis'],
      category: 'api',
      liveUrl: '#',
      githubUrl: '#',
      features: ['File Management', 'Access Control', 'API Documentation', 'Rate Limiting']
    },
    {
      id: 6,
      title: 'Social Media Platform',
      description: 'Социальная сеть с возможностью публикации контента, чатами и системой уведомлений.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Cloudinary'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time Chat', 'Media Upload', 'Social Features', 'Responsive Design']
    }
  ];

  const filters = [
    { key: 'all', label: 'All projects', icon: Globe },
    { key: 'web', label: 'WeB-App', icon: Code },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'api', label: 'API', icon: Database }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my best works in the field of web development, mobile applications and API. Each project is created with attention to detail and modern standards.
          </p>
        </motion.section>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
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

                  {/* Technologies */}
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

        {/* Call to Action */}
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
            Обсудить проект
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;