import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroImages = [
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  // Replaced with interior office/home shots
  'https://images.pexels.com/photos/271800/pexels-photo-271800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // modern interior living
  'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // office interior
];

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
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Image Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="absolute inset-0 z-0"
      >
        {heroImages.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(26, 58, 58, 0.8), rgba(26, 58, 58, 0.4)), url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Foreground Content (Unchanged) */}
      <div className="container z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 fade-in">
            Building Your Vision, <br />
            <span className="text-sand">Forging Your Future</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 fade-in" style={{ transitionDelay: '200ms' }}>
            Urban Forge brings your architectural dreams to life with expert construction, 
            innovative architecture, and stunning interior design services.
          </p>
          <div className="flex flex-wrap gap-6 fade-in" style={{ transitionDelay: '400ms' }}>
            <a href="/#services" className="btn btn-secondary text-base md:text-lg">
              Our Services
            </a>
            <a href="/#portfolio" className="btn bg-transparent text-white border border-white hover:bg-white hover:text-primary group text-base md:text-lg">
              View Our Work
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </div>
      </div>


      <div className="absolute bottom-10 left-0 right-3 flex justify-center md:justify-center md:left-0 md:right-0 px-4 z-10">
        <a
          href="AboutUs"
          className="text-white animate-bounce md:ml-0 ml-auto"
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
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Hero;
