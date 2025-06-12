import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Building2, Users, Clock, Award } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

const heroImages = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  "https://images.pexels.com/photos/271800/pexels-photo-271800.jpeg",
  "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
];

const AboutUs: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const stats = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      count: "15+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      count: "12+",
      label: "Team Members",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      count: "1+",
      label: "Years Experience",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      count: "5+",
      label: "Certifications and Awards",
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Building Your Team",
      description: "We brought together engineers, designers & marketers.",
    },
    {
      year: "2023",
      title: "Developing Your Brand",
      description: "UrbanForge became a trusted name in the twin cities.",
    },
    {
      year: "2024",
      title: "Generating Leads",
      description: "With transparency and trust, our client base grew fast.",
    },
    {
      year: "2025",
      title: "Closing Sales",
      description: "Secured large commercial and public infrastructure deals.",
    },
    {
      year: "2026",
      title: "Growing Business",
      description: "Expanded into full-scale design + build operations.",
    },
  ];

  const team = [
    {
      name: "Engr. Samir Shahid",
      title: "CEO / Civil Engineer",
      img: "",
      category: "Leadership",
    },
    {
      name: "Engr. Hussain Muzaffar",
      title: "MD / Civil Engineer",
      img: "/team/hussain.jpg",
      category: "Leadership",
    },
    {
      name: "Zain Idrees",
      title: "Architect / Interior Designer",
      img: "",
      category: "Design",
    },
    {
      name: "Engr. Rayan Ali",
      title: "Project Manager",
      img: "",
      category: "Engineering",
    },
    {
      name: "Unzillah Najeeb",
      title: "Marketing Head",
      img: "",
      category: "Marketing",
    },
    {
      name: "Ahmed Saqib",
      title: "Client Relations",
      img: "",
      category: "Marketing",
    },
    {
      name: "Engr. Khansa Shakeel",
      title: "Electrical Engineer",
      img: "",
      category: "Engineering",
    },
    {
      name: "Engr. Shamama Sehar",
      title: "Estimator",
      img: "",
      category: "Engineering",
    },
    {
      name: "Engr. Ali Chohan",
      title: "Mechanical Engineer",
      img: "",
      category: "Engineering",
    },
    {
      name: "Hassan Raza",
      title: "CFO",
      img: "",
      category: "Finance",
    },
    {
      name: "Abdur Rahim",
      title: "GM",
      img: "",
      category: "Leadership",
    },
    {
      name: "Asma Wahid",
      title: "Accountant",
      img: "",
      category: "Finance",
    },
  ];

  const visibleTeam =
    activeFilter === "All"
      ? team
      : team.filter((m) => m.category === activeFilter);

  return (
    <>
      {/* Swiper Background Section */}
      <section className="relative min-h-screen py-20 overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop
          className="absolute inset-0 z-0"
        >
          {heroImages.map((url, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(26, 58, 58, 0.85), rgba(26, 58, 58, 0.5)), url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <br />
        <br />

        <div className="relative container z-10 text-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">About Urban Forge</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Crafting exceptional spaces through innovative design and superior
              craftsmanship since 2024.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
                alt="Team at work"
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">
                  Transforming visions into reality
                </p>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Story</h3>
              <p className="text-gray-700 mb-6">
                UrbanForge Pvt Ltd was born in 2024, not in a boardroom, but in
                the minds of two passionate civil engineering graduates
                determined to do things differently. Fueled by friendship,
                ambition, and a shared vision for the future of construction, we
                launched UrbanForge right after completing our degrees.
              </p>
              <p className="text-gray-700 mb-8">
                As young professionals with fresh eyes and bold ideas, we saw
                the industry not just as it was, but as it could be. We combined
                technical expertise with a creative edge to redefine what it
                means to build. Innovation isn't a buzzword for us, it's our
                blueprint. From concept to completion, we infuse every project
                with originality, precision, and a relentless drive for
                excellence.
              </p>
              <p className="text-gray-700 mb-8">
                At UrbanForge, we’re not just constructing buildings, we’re
                crafting experiences, shaping skylines, and forging the future
                of modern living. As the new generation of engineers, we dare to
                design differently, and we’re just getting started.
              </p>
              <a
                href="/#services"
                className="btn btn-secondary bg-gray-800 text-white px-6 py-2 rounded inline-block"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 p-8 rounded-lg shadow-custom text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h4 className="text-3xl font-bold text-primary mb-2">
                  {stat.count}
                </h4>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-gray-200 pt-24 pb-8 text-black">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16">Our Journey</h2>
          <br />
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`mb-2 flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 px-4 ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-gray-600 p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 font-bold">
                        {i + 1}
                      </div>
                      <h4 className="font-bold text-2xl text-gray-100">
                        {item.year} — {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-100">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="bg-white py-20">
  <div className="container">
    <h2 className="text-5xl font-bold text-center mb-12">Our Clients</h2><br />

    {/* Hidden overflow and animated loop */}
    <div className="overflow-hidden relative">
      <div className="flex space-x-24 min-w-max animate-[scroll_30s_linear_infinite]">
        {[
  { name: "Faysal Bank", url: "/clients/faysal2.png", link: "https://www.faysalbank.com/" },
  { name: "Bank Al Habib", url: "/clients/alhabib.png", link: "https://www.bankalhabib.com/" },
  { name: "GTV Network", url: "/clients/gtv1.jpg", link: "https://gtvnewshd.com/" },
  { name: "Naval Farms", url: "/clients/pnf2.png", link: "https://www.facebook.com/NavalFarmsIslamabad/" },
  { name: "Paradise Complex", url: "/clients/paradise.png", link: "https://theparadise.pk/" }
]
  .concat([
    { name: "Faysal Bank", url: "/clients/faysal2.png", link: "https://www.faysalbank.com/" },
    { name: "Bank Al Habib", url: "/clients/alhabib.png", link: "https://www.bankalhabib.com/" },
    { name: "GTV Network", url: "/clients/gtv1.jpg", link: "https://gtvnewshd.com/" },
    { name: "Naval Farms", url: "/clients/pnf2.png", link: "https://www.facebook.com/NavalFarmsIslamabad/" },
    { name: "Paradise Complex", url: "/clients/paradise.png", link: "https://theparadise.pk/" }
  ])
  .map((client, i) => (
    <a
      key={i}
      href={client.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img
        src={client.url}
        alt={client.name}
        className="h-40 w-auto hover:grayscale transition duration-300"
      />
    </a>
  ))}

      </div>
    </div>
  </div>

  {/* Scroll Animation */}
  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</section>


      {/* TEAM SECTION */}
      <section className="bg-gray-100 py-24 text-black">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-8">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <br />
          <br />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {visibleTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="group text-center bg-white hover:bg-gray-200 rounded-lg p-4 transition-all duration-300">
                  <div className="w-48 aspect-square mx-auto overflow-hidden border-primary rounded-full group-hover:rounded-none transition-all duration-300">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold mt-4">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
