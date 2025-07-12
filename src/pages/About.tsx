// Импорт React — для создания компонентов
import React from 'react';

// Импорт motion из framer-motion — для анимаций элементов
import { motion } from 'framer-motion';

// Импорт иконок из lucide-react — для визуальных элементов в блоках
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Zap,
  Award,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

// Функциональный компонент About — "Обо мне"
const About = () => {
  // Массив с навыками (категории, иконки, цвета, технологии)
  const skills = [
    {
      category: 'Frontend',               // Название категории
      icon: Code,                        // Иконка для категории
      color: 'from-blue-500 to-cyan-500',  // Градиент цвета для иконки
      technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS'] // Технологии
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      technologies: ['AWS', 'Google Cloud', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx']
    }
  ];

  // Массив с достижениями (иконка, заголовок, описание)
  const achievements = [
    {
      icon: Award,
      title: '4+ Projects',
      description: 'Successfully completed projects'  // "Успешно завершённые проекты" на арабском
    },
    {
      icon: Users,
      title: '5 Clients',
      description: 'Satisfied customers'          // "Довольные клиенты"
    },
    {
      icon: Clock,
      title: '1+ Years',
      description: 'Development experience'          // "Опыт разработки"
    },
    {
      icon: CheckCircle,
      title: '99%',
      description: 'meeting deadlines' // "Соблюдение сроков"
    }
  ];

  // Массив с опытом работы (период, позиция, компания, описание, технологии)
  const experience = [
    {
      period: '2025 - Настоящее время',
      position: 'begginer Fullstack Developer',
      company: 'TechCorp',
      description: 'Developing scalable web applications using a modern technology stack. Managing a team of developers and architectural planning.',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      period: '2026 - 2027',
      position: 'Junior Fullstack Developer',
      company: 'Digital Agency',
      description: 'Create interactive user interfaces and optimize web application performance.',
      technologies: ['Vue.js', 'TypeScript', 'SASS', 'Webpack']
    },
    {
      period: '2027 - 2028',
      position: 'Middle FUllstack Developer',
      company: 'StartupTech',
      description: 'Participation in the development of MVP products and study of modern web development technologies.',
      technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB']
    }
  ];

  return (
    // Контейнер для всей страницы About с отступами сверху/снизу
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        {/* Секция приветствия / hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}       // Начальное состояние анимации (прозрачность и смещение по Y)
          animate={{ opacity: 1, y: 0 }}        // Конечное состояние анимации
          transition={{ duration: 0.10 }}        // Время анимации
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
               About
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am  Osmonov Meder, an experienced full-stack software developer with a passion for creating innovative solutions.
            I specialize in modern web technologies and mobile app development.
            i  am 17 year old and i live in Kyrgzstan at capital of Bishkek.  And my favourite sport it is football and right now i study at Salymbekov University. 
            And my big dream  visiting and live Mecca or Madinah 
            {/* Краткое описание себя на арабском */}
          </p>
        </motion.section>
        {/* Секция навыков */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}   // Задержка для плавного появления после предыдущей секции
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical skills{/* "Навыки" на арабском */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Перебор навыков и рендер карточек */}
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                whileHover={{ scale: 1.02 }}      // Увеличение при наведении
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-xl mr-4`}>
                    {/* Иконка категории */}
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Название категории */}
                  <h3 className="text-2xl font-semibold">{skill.category}</h3>
                </div>
                {/* Технологии в категории */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Секция достижений */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
               Achievements {/* "Достижения" */}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Иконка достижения */}
                <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Секция опыта */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
              Experience {/* "Опыт" */}
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div
                key={exp.company}
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                  </div>
                  <span className="text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Призыв к действию */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20"
        >
          {/* Иконка телефона */}
          <Smartphone className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
           Ready to face new challenges {/* Готов к новым вызовам */}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have an interesting project or are looking for a reliable developer for your team, let's discuss collaboration possibilities.
            {/* Если у тебя есть интересный проект или ты ищешь надежного разработчика, давай обсудим сотрудничество */}
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Me{/* Связаться со мной */}
          </motion.a>
        </motion.section>

      </div>
    </div>
  );
};

// Экспортируем компонент, чтобы использовать его в приложении
export default About;
