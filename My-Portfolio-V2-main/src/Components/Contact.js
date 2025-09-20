import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ContactUs = () => {
  const form = useRef();
  const [feedback, setFeedback] = useState('');

  // Intersection Observer setup
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,     // 20% in view triggers animation
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i22rob3', 
        'template_ar5xivj', 
        form.current, 
        { publicKey: 'WXC3xBDi7RYZEpm2d' }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setFeedback('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFeedback('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="p-8 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto m-12">
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="max-w-lg mx-auto mt-6 bg-white bg-opacity-10 p-8 rounded-xl shadow-lg border border-gray-600"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-4 border rounded-lg mb-6 opacity-90" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-4 border rounded-lg mb-6 opacity-90" 
            required 
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            className="w-full p-6 border rounded-lg mb-6 opacity-90" 
            required
          ></textarea>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>
        {feedback && (
          <p 
            className="mt-4 text-center font-medium"
            style={{ color: feedback.includes('successfully') ? 'green' : 'red' }}
          >
            {feedback}
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default ContactUs;
