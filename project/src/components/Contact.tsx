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
    // This would typically connect to a backend
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
                  <p className="text-gray-600">123 Architecture Avenue, Design District, City</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email Us</h4>
                  <p className="text-gray-600">info@urbanforge.com</p>
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
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* This would be a map in a real implementation */}
                <img 
                  src="https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Map" 
                  className="w-full h-full object-cover"
                />
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
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
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