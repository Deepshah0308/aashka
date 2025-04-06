import React from 'react';
import Section from './Section';
import { FaTools } from 'react-icons/fa'; // Import from react-icons

interface SkillsProps {
  skills: { [key: string]: string[] } | string[]; // Allow both object and array format
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || (Array.isArray(skills) && skills.length === 0) || (!Array.isArray(skills) && Object.keys(skills).length === 0)) {
    return null;
  }

  // Handle the object format (preferred)
  if (typeof skills === 'object' && !Array.isArray(skills)) {
    return (
      <Section title="Skills" id="skills" icon={<FaTools size={20} />}>
        <div className="space-y-5">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h4 className="text-md font-semibold text-gray-700 mb-2">{category}:</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  // Handle the original array format (fallback)
  if (Array.isArray(skills)) {
    return (
      <Section title="Skills" id="skills" icon={<FaTools size={20} />}>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </Section>
    );
  }

  return null; // Should not happen with the checks above
};

export default Skills;
