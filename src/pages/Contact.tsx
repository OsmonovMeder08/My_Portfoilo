// Импорт React и хуков для работы с состоянием
import React, { useState } from 'react';

// Импорт компонентов для анимаций из библиотеки framer-motion
import { motion } from 'framer-motion';

// Импорт иконок из lucide-react
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

// Импорт библиотеки emailjs для отправки email через форму
import emailjs from '@emailjs/browser';

// Функциональный компонент Contact — страница "Контакты"
const Contact = () => {
  // Хук useState для хранения данных формы: имя, email, тема и сообщение
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Стейт, показывающий, отправляется ли сейчас форма (для блокировки кнопки)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Стейт для статуса отправки: idle (ничего не происходит), success (успех), error (ошибка)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Контактная информация с иконками, текстом и ссылками
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'osmonovmeder743@gmail.com',
      link: 'mailto:osmonovmeder743@gmail.com'  // mailto-ссылка для почты
    },
    {
      icon: Phone,
      label: 'phone',
      value: '+996 505 14 70 52',
      link: 'tel:+996505147052'  // Телефонный звонок
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bishkek, Kyrgyzstan',
      link: '#'  // Можно заменить на карту или что-то другое
    }
  ];

  // Социальные ссылки с иконками и цветом при наведении
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/OsmonovMeder08',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      url: 'https://t.me/@Meder_2008',
      color: 'hover:text-blue-500'
    },
    {
      icon: MessageCircle,
      label: 'WatsApp',
      url: 'https://www.whatsapp.com/',
      color: 'hover:text-blue-500'
    }
  ];

  // Обработчик изменения в инпутах и textarea — обновляет состояние formData
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Предотвращает перезагрузку страницы при отправке
    setIsSubmitting(true);  // Включает состояние загрузки кнопки
    setSubmitStatus('idle');  // Сбрасываем статус

try {
  // Инициализация EmailJS (один раз, лучше делать это вне функции, но можно и здесь)
  emailjs.init('61u2iafAkD7DnQLbC'); // ← замени на свой публичный ключ из EmailJS

  // Данные, которые пойдут в письмо
  const templateParams = {
    from_name: formData.name,        // имя отправителя
    from_email: formData.email,      // email отправителя
    subject: formData.subject,       // тема письма
    message: formData.message,       // текст письма
    to_email: 'osmonovmeder743@gmail.com'  // твой email, куда придёт письмо
  };

  // Отправка письма (укажи свой сервис ID и шаблон ID)
  await emailjs.send(
    'service_4j7o3he',     // ← сюда вставь свой Service ID из EmailJS
    'template_kyalti8',    // ← сюда вставь Template ID
    templateParams         // ← это данные, которые попадут в письмо
  );

      setSubmitStatus('success');  // Отправка успешна
      setFormData({ name: '', email: '', subject: '', message: '' });  // Очищаем форму
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');  // Ошибка при отправке
    } finally {
      setIsSubmitting(false);  // Выключаем индикатор загрузки
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">

        {/* Заголовок и описание */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your project or answer any questions.
            Let's create something amazing together!
          </p>
        </motion.section>

        {/* Основная сетка с формой и контактной информацией */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-purple-400" />
              Send the Message
            </h2>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя и Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Тема */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Topic *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Topic Messages"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project or ask a question..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Статусы отправки */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! I will reply shortly.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  An error has occurred. Please try again or contact us directly.
                </motion.div>
              )}

              {/* Кнопка отправки */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Блок с контактной информацией и соцсетями */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Контактные данные */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-200 group block"
                  >
                    <div className={`bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Социальные сети */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Social Society</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-700/50 rounded-xl transition-all duration-200 ${social.color} hover:bg-gray-700`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Блок доступности */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {/* Зеленый пульсирующий кружок */}
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-bold text-green-400">Available for projects</h3>
              </div>
              <p className="text-gray-300 mb-4">
               I am currently accepting new projects and am ready to start working.
              </p>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">I usually respond within 24 hours.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Экспорт компонента Contact
export default Contact;
