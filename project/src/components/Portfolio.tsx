import React, { useState, useEffect, useRef } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const portfolioRef = useRef<HTMLElement>(null);
  
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

    const elements = portfolioRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Riverside Residences',
      category: 'architecture',
      image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern residential complex with riverside views'
    },
    {
      id: 2,
      title: 'Urban Heights Tower',
      category: 'construction',
      image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Commercial skyscraper in downtown business district'
    },
    {
      id: 3,
      title: 'Serene Living Space',
      category: 'interior',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Minimalist apartment interior with sustainable materials'
    },
    {
      id: 4,
      title: 'Glass Pavilion',
      category: 'architecture',
      image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Transparent structure showcasing modern design principles'
    },
    {
      id: 5,
      title: 'Greenview Office Complex',
      category: 'construction',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Sustainable office building with green roof technology'
    },
    {
      id: 6,
      title: 'Luxury Suite Design',
      category: 'interior',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'High-end hotel suite with custom furniture and fixtures'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" ref={portfolioRef} className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Our Portfolio</h2>
          <p className="section-subtitle fade-in" style={{ transitionDelay: '200ms' }}>
            A showcase of our finest work across architecture, construction, and interior design.
          </p>
        </div>

        <div className="flex justify-center mb-12 fade-in" style={{ transitionDelay: '300ms' }}>
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            {['all', 'architecture', 'construction', 'interior'].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-item group bg-white rounded-lg overflow-hidden shadow-custom fade-in"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500"
                />
                <div className="portfolio-overlay absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <span className="inline-block bg-sand text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-primary group-hover:text-secondary transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in" style={{ transitionDelay: '800ms' }}>
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;