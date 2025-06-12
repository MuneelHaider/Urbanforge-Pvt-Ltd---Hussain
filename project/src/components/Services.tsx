import React, { useEffect, useRef } from 'react';
import { Compass, Home, PaintBucket } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  
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

    const elements = servicesRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Compass className="h-12 w-12 text-primary" />,
      title: 'Architecture',
      description: 'Our architectural services blend creativity, functionality, and sustainability to create buildings that inspire. From concept development to detailed design, we work closely with clients to bring their vision to life.',
      features: [
        'Custom Residential & Commercial Design',
        'Sustainable & Green Architecture',
        'Space Planning & Optimization',
        'Regulatory Compliance & Permitting'
      ]
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: 'Construction',
      description: 'With a commitment to quality and precision, our construction services transform architectural designs into reality. Our experienced team ensures that projects are completed on time, within budget, and to the highest standards.',
      features: [
        'New Construction & Renovations',
        'Project Management & Coordination',
        'Quality Control & Assurance',
        'Specialized Commercial Construction'
      ]
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-primary" />,
      title: 'Interior Design',
      description: 'Our interior design services create functional and aesthetically pleasing spaces that reflect our clients\' personalities and meet their needs. We balance form and function to craft environments that delight.',
      features: [
        'Residential & Commercial Interiors',
        'Custom Furniture & Fixture Design',
        'Material & Finish Selection',
        'Lighting Design & Space Planning'
      ]
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-primary" />,
      title: 'Renovation',
      description: "Our renovation services breathe new life into existing spaces while preserving their character and integrity. Whether it's a full-scale remodel or targeted upgrades, we collaborate closely with clients to enhance functionality, value, and aesthetics with minimal disruption.",
      features: [
        "Residential & Commercial Remodeling",
        "Kitchen & Bathroom Upgrades",
        "Structural & Layout Modifications",
      ]
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Our Services</h2>
          <p className="section-subtitle fade-in" style={{ transitionDelay: '200ms' }}>
            Comprehensive solutions for all your building and design needs under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-200 rounded-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg fade-in"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in" style={{ transitionDelay: '600ms' }}>
          <a href="/#contact" className="btn btn-primary">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;