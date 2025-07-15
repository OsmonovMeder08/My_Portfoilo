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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'osmonovmeder743@gmail.com', link: 'mailto:osmonovmeder743@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+996 505 14 70 52', link: 'tel:+996505147052' },
    { icon: MapPin, label: 'Location', value: 'Bishkek, Kyrgyzstan', link: '#' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/OsmonovMeder08', color: 'hover:text-gray-600' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-sky-600' },
    { icon: MessageCircle, label: 'Telegram', url: 'https://t.me/@Meder_2008', color: 'hover:text-sky-500' },
    { icon: MessageCircle, label: 'WatsApp', url: 'https://www.whatsapp.com/', color: 'hover:text-green-500' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      emailjs.init('61u2iafAkD7DnQLbC');
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'osmonovmeder743@gmail.com'
      };

      await emailjs.send('service_4j7o3he', 'template_kyalti8', templateParams);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white via-gray-100 to-amber-100 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your project or answer any questions. Let's create something amazing together!
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-pink-500" />
              Send the Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Topic *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Topic Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell us about your project..." className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 resize-none" />
              </div>
              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center text-green-600 bg-green-100 border border-green-200 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 mr-2" /> Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center text-red-600 bg-red-100 border border-red-200 rounded-lg p-3">
                  <AlertCircle className="w-5 h-5 mr-2" /> An error occurred. Please try again.
                </motion.div>
              )}
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-pink-500 to-amber-400 hover:from-pink-600 hover:to-amber-500 disabled:opacity-50 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg">
                {isSubmitting ? (
                  <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div> Sending...</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" /> Send message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a key={info.label} href={info.link} whileHover={{ scale: 1.02 }} className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow group block">
                    <div className="bg-gradient-to-r from-pink-400 to-amber-400 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold mb-6">Social Society</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={`p-4 border border-gray-200 rounded-xl transition-all duration-200 ${social.color}`}>
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-xl font-bold text-green-700">Available for projects</h3>
              </div>
              <p className="text-gray-700 mb-4">I am currently accepting new projects and am ready to start working.</p>
              <div className="flex items-center text-gray-500">
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

export default Contact;
