import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="mb-32">
      <h3 className="text-3xl font-bold text-primary text-center mb-16 fade-in">
        Our Journey
      </h3>
      
      <div className="timeline fade-in">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-item ${event.position} fade-in`} 
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="timeline-content hover-scale">
              <div className="bg-primary text-white text-center py-1 px-4 rounded inline-block mb-3">
                {event.year}
              </div>
              <h4 className="font-semibold text-xl text-primary mb-2">{event.title}</h4>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;