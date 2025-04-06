import React from 'react';
import Section from './Section';
import { FaProjectDiagram } from 'react-icons/fa'; // Import from react-icons

interface ProjectItem {
  title: string;
  description: string;
}

interface ProjectsProps {
  items: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section title="Projects" id="projects" icon={<FaProjectDiagram size={20} />}>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
