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

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
        to_email: 'osmonovmeder748@gmail.com'
      };

      await emailjs.send('service_2uo46zi', 'template_kyalti8', templateParams);
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
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#f7fafc] via-[#e3fcec] to-[#c6f6d5] text-gray-900">
      <div className="container mx-auto px-4">
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
            Contact Me
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Reach out for collaborations or any project inquiries.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-green-600">
              <Send className="w-6 h-6 mr-3" />
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email Address" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subject" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Your Message" className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
              {submitStatus === 'success' && (
                <div className="text-green-700 bg-green-100 border border-green-300 rounded-lg p-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" /> Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-700 bg-red-100 border border-red-300 rounded-lg p-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" /> Failed to send message.
                </div>
              )}
              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl shadow p-8">
              <h3 className="text-xl font-bold mb-4 text-green-600">Contact Information</h3>
              {contactInfo.map((info) => (
                <a key={info.label} href={info.link} className="flex items-center p-3 mb-3 rounded-lg hover:bg-green-50 transition">
                  <info.icon className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-gray-800 font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow p-8">
              <h3 className="text-xl font-bold mb-4 text-green-600">Find Me On</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 border border-gray-200 rounded-xl shadow-sm transition-all ${social.color}`}>
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping mr-2"></div>
                <h4 className="text-green-700 font-bold">Available for work</h4>
              </div>
              <p className="text-sm text-gray-700">Currently accepting freelance or full-time opportunities.</p>
              <div className="flex items-center mt-2 text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">Replies within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;