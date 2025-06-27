import React from 'react';
import { motion } from 'framer-motion';
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

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS']
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

  const achievements = [
    {
      icon: Award,
      title: '50+ projects',
      description: 'Successfully completed projects'
    },
    {
      icon: Users,
      title: '30+ Klients',
      description: 'Satisfied customers'
    },
    {
      icon: Clock,
      title: '5+ Years',
      description: 'Experience in development'
    },
    {
      icon: CheckCircle,
      title: '99%',
      description: 'Meeting deadlines'
    }
  ];

  const experience = [
    {
      period: '2022 - Настоящее время',
      position: 'Senior Fullstack Developer',
      company: 'TechCorp',
      description: 'Developing scalable web applications using a modern technology stack. Managing a team of developers and architectural planning.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      period: '2020 - 2022',
      position: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Create interactive user interfaces and optimize web application performance.',
      technologies: ['Vue.js', 'TypeScript', 'SASS', 'Webpack']
    },
    {
      period: '2019 - 2020',
      position: 'Junior Developer',
      company: 'StartupTech',
      description: 'Participation in the development of MVP products and study of modern web development technologies.',
      technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
             About
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am Meder Osmonov, an experienced fullstack developer with a passion for creating innovative solutions. I specialize in modern web technologies and mobile development.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${skill.color} p-3 rounded-xl mr-4`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{skill.category}</h3>
                </div>
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

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
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

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20"
        >
          <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Ready for new challenges
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have an interesting project or are looking for a reliable developer for your team, let's discuss the possibilities of cooperation.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact me
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default About;