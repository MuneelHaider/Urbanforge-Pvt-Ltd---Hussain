import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  
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

    const elements = heroRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(26, 58, 58, 0.8), rgba(26, 58, 58, 0.4)), url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            Building Your Vision, <br />
            <span className="text-sand">Forging Your Future</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 fade-in" style={{ transitionDelay: '200ms' }}>
            Urban Forge brings your architectural dreams to life with expert construction, 
            innovative architecture, and stunning interior design services.
          </p>
          <div className="flex flex-wrap gap-4 fade-in" style={{ transitionDelay: '400ms' }}>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
            <a href="#portfolio" className="btn bg-transparent text-white border border-white hover:bg-white hover:text-primary group">
              View Our Work
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about"
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;