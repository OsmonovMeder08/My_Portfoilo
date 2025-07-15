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
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS']
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-emerald-500 to-teal-400',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-400',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-yellow-400 to-orange-500',
      technologies: ['AWS', 'Google Cloud', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: '4+ Projects',
      description: 'Successfully completed projects'
    },
    {
      icon: Users,
      title: '5 Clients',
      description: 'Satisfied customers'
    },
    {
      icon: Clock,
      title: '1+ Years',
      description: 'Development experience'
    },
    {
      icon: CheckCircle,
      title: '99%',
      description: 'Meeting deadlines'
    }
  ];

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
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-slate-100 to-slate-200 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am Osmonov Meder, a 17-year-old full-stack developer from Kyrgyzstan, passionate about creating beautiful and functional apps. I study at Salymbekov University and dream of living in Mecca or Madinah.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-200 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-xl mr-4`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-700">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all"
              >
                <achievement.icon className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <motion.div
                key={exp.company}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl shadow border border-gray-200 p-8 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-1">{exp.position}</h3>
                    <h4 className="text-lg text-gray-800 mb-2">{exp.company}</h4>
                  </div>
                  <span className="text-gray-500 bg-gray-100 px-4 py-2 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-sm text-indigo-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-200"
        >
          <Smartphone className="w-16 h-16 text-indigo-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to face new challenges
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have an interesting project or are looking for a reliable developer for your team, let's discuss collaboration possibilities.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 shadow hover:shadow-lg"
          >
            Contact Me
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
