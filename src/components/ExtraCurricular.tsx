import React from 'react';
import Section from './Section';
import { FaUsers } from 'react-icons/fa'; // Import from react-icons

interface ExtraCurricularProps {
  items: string[];
}

const ExtraCurricular: React.FC<ExtraCurricularProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section title="Extra-Curricular Activities" id="extra-curricular" icon={<FaUsers size={20} />}>
      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Section>
  );
};

export default ExtraCurricular;
