// src/components/Contact.tsx
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Automatically hide toast after 4 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_o7k05ng',      // ← from EmailJS
        'template_jqj2qjb',     // ← from EmailJS
        form.current,
        'TECieCeX5aUntInqR'       // ← from EmailJS
      )
      .then(
        () => {
          setStatus('success');
          form.current?.reset(); // clear form
        },
        (error) => {
          console.error(error);
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-linear-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">GET IN TOUCH</h2>

          <p className="text-center text-purple-600 dark:text-purple-500 mb-6">
            Let's build something amazing together
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-10"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none font-medium"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full group relative flex items-center justify-center gap-2 py-4 px-8 rounded-xl text-white font-semibold text-lg transition-all duration-300 bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Frame Motion Custom Toast Notification */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10 ${status === 'success'
              ? 'bg-green-600/95 text-white'
              : 'bg-red-600/95 text-white'
              }`}
          >
            {status === 'success' ? (
              <CheckCircle2 className="w-6 h-6 shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 shrink-0" />
            )}
            <div>
              <p className="font-semibold">
                {status === 'success' ? 'Message Sent!' : 'Oops!'}
              </p>
              <p className="text-sm opacity-90">
                {status === 'success'
                  ? 'Thanks for reaching out, I will get back to you soon.'
                  : 'Something went wrong. Please try again later.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
