import React from 'react';
import Section from './Section';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaCode, FaBuilding } from 'react-icons/fa'; // Import more icons
import { IconType } from 'react-icons';

interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExperienceProps {
  experienceData: ExperienceItem[];
}

// Define a type for the icon map
const iconMap: { [key: string]: IconType } = {
  "Fulfillment Associate": FaBriefcase,
  "Human Resources Assistant": FaBuilding,
  "Postgraduate Certificate": FaGraduationCap,
  "Bachelor’s Degree": FaGraduationCap,
  "Customer Experience Simulation": FaCode,
  "Retail Service Optimization": FaCode,
  // Add more mappings as needed
};

const Experience: React.FC<ExperienceProps> = ({ experienceData }) => {
  if (!experienceData || experienceData.length === 0) {
    return <div className="text-gray-500">No experience data available.</div>;
  }

  const sortedExperience = [...experienceData].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // MM
    const year = date.getFullYear(); // YYYY
    return `${month}/${year}`;
  };

  return (
    <Section title="Experience" id="experience" icon={<FaBriefcase size={20} />}>
      <VerticalTimeline layout="1-column-left">
        {sortedExperience.map((item, index) => {
          const startDateFormatted = formatDate(item.startDate);
          const endDateFormatted = item.endDate === "Present" ? "Present" : formatDate(item.endDate);
          const IconComponent = iconMap[item.title] || FaBriefcase; // Default icon

          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={`${startDateFormatted} - ${endDateFormatted}`}
              dateClassName="date-position" // Add class for date positioning
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<IconComponent />}
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
          );
        })}
      </VerticalTimeline>
    </Section>
  );
};

export default Experience;
