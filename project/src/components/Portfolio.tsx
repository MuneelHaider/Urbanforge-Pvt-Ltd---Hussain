import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Pakistan Naval Farms",
      category: "construction",
      client: "Musarat Naqvi",
      cost: "PKR 43 million",
      images: [
        "/projects/Pakistan_Naval_Farms/1.jpg",
        "/projects/Pakistan_Naval_Farms/2.jpg",
        "/projects/Pakistan_Naval_Farms/3.jpg",
        "/projects/Pakistan_Naval_Farms/4.jpg",
        "/projects/Pakistan_Naval_Farms/5.jpg",
        "/projects/Pakistan_Naval_Farms/6.jpg",
        "/projects/Pakistan_Naval_Farms/7.jpg",
        "/projects/Pakistan_Naval_Farms/8.jpg",
      ],
      description:
        "Farmhouse construction project including boundary wall and residential unit. The site included grading, foundation work, and landscaping. Delivered with high-quality finish and on-time execution.",
    },
    {
      id: 2,
      title: "Commercial Hub Jand",
      category: "architecture",
      client: "Malik Sheheryar Jamshaid",
      cost: "PKR 60 million",
      images: [
        "/projects/Commercial_Hub_Jand/1.jpg",
        "/projects/Commercial_Hub_Jand/2.jpg",
        "/projects/Commercial_Hub_Jand/3.jpg",
      ],
      description:
        "Architectural design of a commercial market and bus terminal in Jand & Attock. The concept aimed to maximize flow of vendors and commuters. We used sustainable materials and modern façade elements. The project includes designated parking and waiting areas. Space optimization was key in layout planning.",
    },
    {
      id: 3,
      title: "House Renovation – Minister Enclave",
      category: "construction",
      client: "N/A",
      cost: "PKR 28 million",
      images: [
        "/projects/House_Renovation_Miniter_Enclave/1.jpg",
        "/projects/House_Renovation_Miniter_Enclave/2.jpg",
        "/projects/House_Renovation_Miniter_Enclave/3.jpg",
        "/projects/House_Renovation_Miniter_Enclave/4.jpg",
      ],
      description:
        "Complete house renovation at Minister Enclave for the Pakistan Railway Minister. The scope included structural upgrades and interior redesign. We handled flooring, ceilings, lighting, and paint. Attention to privacy, security, and finish was critical. All changes were made with minimal disruption to government operations.",
    },
    {
      id: 4,
      title: "Tile Work – G-16",
      category: "interior",
      client: "Sardar Ahmed",
      cost: "PKR 1 million",
      images: [
        "/projects/tile_work_G-16/1.jpg",
        "/projects/tile_work_G-16/2.jpg",
      ],
      description:
        "Professional tile work project executed in G-16 Islamabad. Installed premium ceramic tiles in living, kitchen, and bathroom areas. Alignment and grouting were handled with strict quality checks. Project also included surface levelling and waterproofing. Client was highly satisfied with the durability and polish.",
    },
    {
      id: 5,
      title: "House Renovation – Residence",
      category: "interior",
      client: "Syed Daniyal",
      cost: "PKR 1 million",
      images: [
        "/projects/house_renovation_daniyal/1.jpg",
        "/projects/house_renovation_daniyal/2.jpg",
      ],
      description:
        "Residential interior and renovation project with minimal disruption. Renovation included repainting, fixture replacement, and floor repair. Our team worked around the client's schedule to maintain comfort. Budget-friendly yet durable materials were selected. Design kept a clean, modern aesthetic.",
    },
    {
      id: 6,
      title: "Faysal Bank – B17",
      category: "interior",
      client: "Faysal Bank",
      cost: "N/A",
      images: [
        "/projects/Faysal_Bank_B17/1.jpg",
        "/projects/Faysal_Bank_B17/2.jpg",
        "/projects/Faysal_Bank_B17/3.jpg",
        "/projects/Faysal_Bank_B17/4.jpg",
        "/projects/Faysal_Bank_B17/5.jpg",
        "/projects/Faysal_Bank_B17/6.jpg",
      ],
      description:
        "Renovation and interior upgrade at Faysal Bank branch in B17. We enhanced customer areas with new partitions, lighting, and signage. The secure vault and server room were also refurbished. Compliance with bank security and safety protocols was ensured. Final delivery aligned with corporate branding standards.",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = portfolioRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => {
      el.classList.remove("appear");
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <section id="portfolio" ref={portfolioRef} className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in text-5xl">Our Portfolio</h2>
          <p
            className="section-subtitle fade-in"
            style={{ transitionDelay: "200ms" }}
          >
            A showcase of our finest work across architecture, construction, and
            interior design.
          </p>
        </div>

        {/* Filter Selector */}
        <div
          className="flex justify-center mb-12 fade-in"
          style={{ transitionDelay: "300ms" }}
        >
          {/* Mobile Dropdown */}
          <div className="md:hidden w-full max-w-xs">
            <select
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-700 shadow-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {["all", "architecture", "construction", "interior"].map(
                (category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            {["all", "architecture", "construction", "interior"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item group bg-white rounded-lg overflow-hidden shadow-custom fade-in"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500"
                />
                <div className="portfolio-overlay absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <span className="inline-block bg-sand text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="font-bold text-xl mb-2 text-primary group-hover:text-secondary transition-colors duration-300 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center fade-in"
          style={{ transitionDelay: "800ms" }}
        >
          <a href="/#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
            >
              <X size={28} />
            </button>

            <div className="p-10 pt-14 grid md:grid-cols-2 gap-10 items-center bg-white rounded-xl">
  {/* Text Section */}
  <div className="space-y-4 md:space-y-6">
    <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
      {selectedProject.title}
    </h2>

    <div className="text-sm md:text-lg space-y-1">
      <p>
        <span className="font-semibold text-gray-800">Client:</span>{" "}
        {selectedProject.client ?? "N/A"}
      </p>
      <p>
        <span className="font-semibold text-gray-800">Cost:</span>{" "}
        <span className="text-primary">{selectedProject.cost}</span>
      </p>
    </div>

    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
      {selectedProject.description}
    </p>
  </div>

  {/* Carousel Section */}
  <div className="relative group rounded-xl overflow-hidden shadow-xl">
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
      spaceBetween={10}
      slidesPerView={1}
    >
      {selectedProject.images.map((img: string, i: number) => (
        <SwiperSlide
          key={i}
          className="flex items-center justify-center min-h-[300px] md:min-h-[400px] bg-white border-none"
        >
          <img
            src={img}
            alt={`Slide ${i}`}
            className="object-contain max-h-[300px] md:max-h-[400px] w-auto block"
            style={{ border: "none", margin: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Arrows */}
    <button
      className="swiper-prev absolute top-1/2 left-2 -translate-y-1/2 bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md hover:bg-white hover:text-primary flex items-center justify-center transition z-10"
      aria-label="Previous"
    >
      ←
    </button>
    <button
      className="swiper-next absolute top-1/2 right-2 -translate-y-1/2 bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md hover:bg-white hover:text-primary flex items-center justify-center transition z-10"
      aria-label="Next"
    >
      →
    </button>
  </div>
</div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
