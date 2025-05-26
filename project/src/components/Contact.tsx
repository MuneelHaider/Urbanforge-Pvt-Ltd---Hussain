import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a frontend-only demo, so no message was actually sent.');
  };

  return (
    <section id="contact" ref={contactRef} className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Contact Us</h2>
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
                  <p className="text-gray-600">contact@urbanforge.com</p>
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
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="contact@urbanforge.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+92 3088828430"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select
                    id="service"
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
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
