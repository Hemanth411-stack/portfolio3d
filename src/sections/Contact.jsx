import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2fqi7k8",
        "template_dg3kawi",
        {
          from_name: form.name,
          to_name: 'Hemanth',
          from_email: form.email,
          to_email: 'nagalahemanth411@gmail.com',
          message: form.message,
        },
        "Cezd1cx9KrFpCNj5-",
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="relative sm:px-10 px-5 py-20 min-h-screen" id="contact">
      {alert.show && <Alert {...alert} />}
  
      {/* Background image */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        
      </div>
  
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl bg-gray-950 bg-opacity-75 p-6 sm:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Let's talk
          </h3>
          <p className="text-base sm:text-lg text-white mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
  
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-12 flex flex-col space-y-5 sm:space-y-7"
          >
            <label className="space-y-2 sm:space-y-3">
              <span className="text-base sm:text-lg text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-black-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg placeholder:text-gray-400 text-base sm:text-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="ex., John Doe"
              />
            </label>
  
            <label className="space-y-2 sm:space-y-3">
              <span className="text-base sm:text-lg text-white">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-black-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg placeholder:text-gray-400 text-base sm:text-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>
  
            <label className="space-y-2 sm:space-y-3">
              <span className="text-base sm:text-lg text-white">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg placeholder:text-gray-400 text-base sm:text-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
  
            <button
              className="bg-gray-800 px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-base sm:text-lg text-white flex justify-center items-center gap-2 sm:gap-3 hover:bg-gray-900 transition-colors"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img src="./assets/arrow-up.png" alt="arrow-up" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;