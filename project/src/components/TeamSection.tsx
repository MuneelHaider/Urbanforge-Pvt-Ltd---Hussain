import React, { useState, useEffect } from "react";

const team = [
  { name: "Engr. Samir Shahid", title: "CEO / Civil Engineer", img: "", category: "Leadership", gender: "male" },
  { name: "Engr. Hussain Muzaffar", title: "Managing Director / Civil Engineer", img: "/team/hussain.jpg", category: "Leadership", gender: "male" },
  { name: "Zain Idrees", title: "Architect / Interior Designer", img: "", category: "Design", gender: "male" },
  { name: "Engr. Rayan Ali", title: "Project Manager", img: "", category: "Engineering", gender: "male" },
  { name: "Unzillah Najeeb", title: "Marketing Head", img: "", category: "Marketing", gender: "female" },
  { name: "Ahmed Saqib", title: "Client Relations", img: "", category: "Marketing", gender: "male" },
  { name: "Engr. Khansa Shakeel", title: "Electrical Engineer", img: "", category: "Engineering", gender: "female" },
  { name: "Engr. Shamama Sehar", title: "Estimator", img: "", category: "Engineering", gender: "female" },
  { name: "Engr. Ali Chohan", title: "Mechanical Engineer", img: "", category: "Engineering", gender: "male" },
  { name: "Hassan Raza", title: "CFO", img: "", category: "Finance", gender: "male" },
  { name: "Abdur Rahim", title: "GM", img: "", category: "Leadership", gender: "male" },
  { name: "Asma Wahid", title: "Accountant", img: "", category: "Finance", gender: "female" }
];

const TeamSection: React.FC = () => {
  const [filteredTeam, setFilteredTeam] = useState(team);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFilteredTeam(
          team.filter((member) =>
            ['ceo', 'managing', 'marketing', 'cfo'].some(role =>
              member.title.toLowerCase().includes(role)
            )
          )
        );
      } else {
        setFilteredTeam(team);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-gray-300 py-24 text-black">
      <div className="container">
        <h2 className="font-sans text-5xl font-bold text-center mb-8">
          Meet the <span className="text-primary">Team</span>
        </h2>
        <br /><br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
          {filteredTeam.map((member, index) => (
            <div key={index} className="text-center mx-auto">
              <div className="group text-center bg-white hover:bg-gray-200 rounded-lg p-4 transition-all duration-300 w-72">
                <div className="w-48 aspect-square mx-auto overflow-hidden border-primary rounded-full group-hover:rounded-none transition-all duration-300">
                  <img
                    src={(member.img && member.img.trim() !== "") ? member.img : (member.gender === "female" ? "/team/default-2.jpg" : "/team/default.jpg")}
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
  );
};

export default TeamSection;
