import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoDark from '../assets/logo.png';
import logoWhite from '../assets/logoWhite.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="z-10">
          <img
            src={isScrolled ? logoDark : logoWhite}
            alt="Urban Forge"
            className="h-12 md:h-16"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link text-sm uppercase tracking-wider transition-colors duration-300 ${
                activeSection === item.href.substring(1) ? 'active' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-sm uppercase tracking-wider">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="z-10 md:hidden text-primary"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white transition-all duration-300 flex flex-col items-center justify-center ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1) ? 'text-primary' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary mt-4"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
