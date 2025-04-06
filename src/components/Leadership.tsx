import React from 'react';
import Section from './Section';
import { FaAward } from 'react-icons/fa'; // Import from react-icons

interface LeadershipProps {
  items: string[];
}

const Leadership: React.FC<LeadershipProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section title="Leadership" id="leadership" icon={<FaAward size={20} />}>
      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Section>
  );
};

export default Leadership;
