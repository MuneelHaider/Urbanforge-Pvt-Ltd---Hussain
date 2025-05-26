import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logo} alt="Urban Forge" className="h-12 mb-6" />
            <p className="text-gray-300 mb-6">
              Creating exceptional spaces through innovative design and superior craftsmanship since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576456100102" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/urbanforge.constructors/profilecard/?igsh=MWNzYnJvNWg3Mm1rbA==" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a> */}
              
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Construction
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Interior Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Project Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="https://www.google.com/maps/place/Green+Trust+Tower%D8%8C+Service+Road,+Blue+Area,+Jinnah+Ave,+F+6%2F1+Blue+Area,+Islamabad,+44000,+Pakistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Off 1: Suite No. 1003 (A), 10th Floor, Green Trust Tower, Jinnah Avenue, Islamabad
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/Adam+Plaza/@33.6387246,73.0678147,17z/data=!3m1!4b1!4m6!3m5!1s0x38df950038553acb:0x1726d64cdd3a7ddd!8m2!3d33.6387246!4d73.0678147!16s%2Fg%2F11y2rkx662" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Off 2: 5th Road Commercial Market Rd, ADAM Plaza, 4th Floor, D Block, Satellite Town, Rawalpindi, Pakistan
                </a>
              </li>
              <li>contact@urbanforge.com</li>
              <li>+92 3440105540</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Urban Forge Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
