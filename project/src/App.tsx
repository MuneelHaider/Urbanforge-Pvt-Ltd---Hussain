import React from 'react';
import { ScrollToTop } from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <a
  href="https://wa.me/923440105540"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-13 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:px-5 md:py-3 rounded-full flex items-center gap-2 text-lg font-semibold shadow-lg transition"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-7 h-7"
  />
  <span className="hidden md:inline">WhatsApp</span>
</a>

      <Footer />
    </div>
  );
}

export default App;