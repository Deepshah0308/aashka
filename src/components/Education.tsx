import React from 'react';
import Section from './Section';
import { FaGraduationCap } from 'react-icons/fa'; // Import from react-icons

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

interface EducationProps {
  items: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section title="Education" id="education" icon={<FaGraduationCap size={22} />}>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{item.degree}</h3>
            <p className="text-md font-medium text-indigo-600">{item.institution}</p>
            <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
