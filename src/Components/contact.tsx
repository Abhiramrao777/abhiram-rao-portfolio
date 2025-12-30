// src/components/Contact.tsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Connect With Me!
        </h2>
        <p className="text-center text-3xl mb-2">🚀</p>
        <p className="text-center text-gray-400 mb-12">
          Feel free to reach out for collaborations, opportunities, or just to say hi!
        </p>

        <div className="card">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="email"
              name="user_email"           // ← must match template variable
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-gray-800 border border-[rgba(147,51,234,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              required
            />

            <input
              type="text"
              name="user_name"            // ← must match template variable
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-gray-800 border border-[rgba(147,51,234,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-purple-500)] transition"
              required
            />

            <input
              type="text"
              name="subject"              // ← optional, add to template if needed
              placeholder="Subject"
              className="w-full px-5 py-4 bg-gray-800 border border-[rgba(147,51,234,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-purple-500)] transition"
            />

            <textarea
              name="message"              // ← must match template variable
              placeholder="Message"
              rows={5}
              className="w-full px-5 py-4 bg-gray-800 border border-[rgba(147,51,234,0.2)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-purple-500)] transition resize-none"
              required
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 glow-purple
                ${status === 'sending' ? 'bg-gray-600 cursor-not-allowed' : 'bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400'}`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Simple feedback messages */}
            {status === 'success' && (
              <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
