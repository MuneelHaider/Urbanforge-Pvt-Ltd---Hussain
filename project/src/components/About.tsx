import React, { useEffect, useRef } from 'react';
import { Building2, Users, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  
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

    const elements = aboutRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const stats = [
    { 
      icon: <Building2 className="h-10 w-10 text-primary" />,
      count: '15+',
      label: 'Projects Completed'
    },
    { 
      icon: <Users className="h-10 w-10 text-primary" />,
      count: '12+',
      label: 'Team Members'
    },
    { 
      icon: <Clock className="h-10 w-10 text-primary" />,
      count: '1+',
      label: 'Years Experience'
    },
    { 
      icon: <Award className="h-10 w-10 text-primary" />,
      count: '5+',
      label: 'Certifications and Awards'
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in text-5xl">About Urban Forge</h2>
          <p className="section-subtitle fade-in" style={{ transitionDelay: '200ms' }}>
            Crafting exceptional spaces through innovative design and superior craftsmanship since 2024.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in" style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Urban Forge team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">Transforming visions into reality</p>
              </div>
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6">
              UrbanForge Pvt Ltd was born in 2024, not in a boardroom—but in the minds of two passionate civil engineering graduates determined to do things differently. Fueled by friendship, ambition, and a shared vision for the future of construction, we launched UrbanForge right after completing our degrees.
            </p>
            <p className="text-gray-700 mb-8">
              
As young professionals with fresh eyes and bold ideas, we saw the industry not just as it was—but as it could be. We combined technical expertise with a creative edge to redefine what it means to build. Innovation isn't a buzzword for us—it's our blueprint. From concept to completion, we infuse every project with originality, precision, and a relentless drive for excellence.
            </p>
            <p className="text-gray-700 mb-8">
At UrbanForge, we’re not just constructing buildings—we’re crafting experiences, shaping skylines, and forging the future of modern living. As the new generation of engineers, we dare to design differently, and we’re just getting started.
            </p>
            <a href="#services" className="btn btn-primary">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-custom text-center fade-in"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-primary mb-2">{stat.count}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;