import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLElement>(null);
  
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

    const elements = testimonialsRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const testimonials = [
    {
      quote: "Urban Forge transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, responsive, and a pleasure to work with.",
      name: "Sarah",
      title: "Homeowner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a developer, I've worked with many construction firms, but Urban Forge stands out for their precision, timeliness, and innovation. They've become our go-to partner for all our architectural and construction needs.",
      name: "Hussain Malik",
      title: "Real Estate Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The interior design team at Urban Forge has an incredible eye for detail. They transformed our office space into a modern, functional environment that perfectly represents our brand and enhances our team's productivity.",
      name: "Muneel Haider",
      title: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  return (
    <section id="testimonials" ref={testimonialsRef} className="section bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 fade-in">Client Testimonials</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 fade-in" style={{ transitionDelay: '200ms' }}>
            What our clients say about working with Urban Forge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-white text-gray-800 rounded-lg p-8 fade-in"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <Quote className="h-10 w-10 text-sand mb-6" />
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;