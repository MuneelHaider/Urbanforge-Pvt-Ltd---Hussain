import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successAnimateIn, setSuccessAnimateIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      // enforce desired defaults
      data.set('_cc', 'sales@urbanforgeconstructors.com');
      data.set('_subject', 'New contact form submission - Urban Forge');
      data.set('_template', 'table');

      const res = await fetch('https://formsubmit.co/ajax/managingdirector@urbanforgeconstructors.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Failed to submit');

      setShowSuccess(true);
      // trigger enter animation on next tick
      setTimeout(() => setSuccessAnimateIn(true), 10);
      // auto close after 2s with exit animation
      setTimeout(() => {
        setSuccessAnimateIn(false);
        setTimeout(() => setShowSuccess(false), 250);
      }, 2000);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={contactRef} className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in text-5xl">Contact Us</h2>
          <p className="section-subtitle fade-in" style={{ transitionDelay: '200ms' }}>
            Ready to start your project? Get in touch with our team for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    <a
                      href="https://www.google.com/maps/place/Green+Trust+Tower%D8%8C+Service+Road,+Blue+Area,+Jinnah+Ave,+F+6%2F1+Blue+Area,+Islamabad,+44000,+Pakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Off 1: Suite No. 1003 (A), 10th Floor, Green Trust Tower, Islamabad, Pakistan
                    </a>
                  </p>
                  <br />
                  <p className="text-gray-600">
                    <a
                      href="https://www.google.com/maps/place/Adam+Plaza/@33.6387246,73.0678147,17z/data=!3m1!4b1!4m6!3m5!1s0x38df950038553acb:0x1726d64cdd3a7ddd!8m2!3d33.6387246!4d73.0678147!16s%2Fg%2F11y2rkx662"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Off 2: 5th Road Commercial Market Rd, ADAM Plaza, 4th Floor, D Block, Satellite Town, Rawalpindi, Pakistan
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-gray-600">+92 3440105540</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email Us</h4>
                  <p className="text-gray-600">sales@urbanforgeconstructors.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Our Location</h4>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.052981164244!2d73.0761074!3d33.7226318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8304e8b2af%3A0x20f16a7847ba4048!2sGreen%20Trust%20Tower%2C%20Service%20Road%2C%20Blue%20Area%2C%20Jinnah%20Ave%2C%20F%206%2F1%20Blue%20Area%2C%20Islamabad%2C%2044000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716465201234!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '400ms' }}>
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_cc" value="sales@urbanforgeconstructors.com" />
                <input type="hidden" name="_subject" value="New contact form submission - Urban Forge" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_template" value="table" />
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Hussain Malik"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="sales@urbanforgeconstructors.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+92 3440105540"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="architecture">Architecture</option>
                    <option value="construction">Construction</option>
                    <option value="interior">Interior Design</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full btn btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showSuccess && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 ${successAnimateIn ? 'bg-black/50' : 'bg-black/0'} transition-colors duration-300`} 
          onClick={() => {
            setSuccessAnimateIn(false);
            setTimeout(() => setShowSuccess(false), 200);
          }}
          role="presentation"
        >
          <div
            className={`relative w-full max-w-sm sm:max-w-md ${successAnimateIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-95'} transition-all duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl shadow-2xl bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-emerald-500 p-5 sm:p-6 text-white text-center">
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4 12 14.01l-3-3" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold">Message sent!</h4>
                <p className="text-white/90 text-sm sm:text-base">Thank you for contacting Urban Forge.</p>
              </div>
              <div className="p-4 sm:p-5 text-center">
                <p className="text-gray-700 text-sm sm:text-base">We'll get back to you shortly.</p>
                <button
                  type="button"
                  className="mt-4 inline-flex w-full sm:w-auto justify-center rounded-md bg-primary px-5 py-2 text-white hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    setSuccessAnimateIn(false);
                    setTimeout(() => setShowSuccess(false), 200);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
