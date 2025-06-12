import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    position: string;
    image: string;
    social: {
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
  };
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, delay }) => {
  return (
    <div 
      className="team-card fade-in" 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-80 object-cover object-center"
      />
      <div className="team-info text-white">
        <h4 className="font-semibold text-lg">{member.name}</h4>
        <p className="text-white text-opacity-90 text-sm">{member.position}</p>
        
        <div className="team-social">
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="text-white hover:text-secondary transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} className="text-white hover:text-secondary transition-colors">
              <Twitter size={18} />
            </a>
          )}
          {member.social.instagram && (
            <a href={member.social.instagram} className="text-white hover:text-secondary transition-colors">
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;