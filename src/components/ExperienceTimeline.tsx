import React from 'react';
import Section from './Section';
import { FaHistory } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExperienceTimelineProps {
  experienceData: ExperienceItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experienceData }) => {
  if (!experienceData || experienceData.length === 0) {
    return <div className="text-gray-500">No experience data available.</div>;
  }

  const sortedExperience = [...experienceData].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Section title="Experience Timeline" id="experience-timeline" icon={<FaHistory size={20} />}>
      <VerticalTimeline>
        {sortedExperience.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={`${new Date(item.startDate).toLocaleDateString()} - ${item.endDate === "Present" ? "Present" : new Date(item.endDate).toLocaleDateString()}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaHistory />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company} {item.location ? `- ${item.location}` : ''}</h4>
            {item.description && item.description.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-white pl-4">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default ExperienceTimeline;
