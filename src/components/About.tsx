import React from 'react';
import Section from './Section';
import { FaUserAlt } from 'react-icons/fa'; // Import from react-icons

interface AboutProps {
  content: string;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section title="About Me" id="about" icon={<FaUserAlt size={20} />}>
      <p className="text-base md:text-lg">{content}</p>
    </Section>
  );
};

export default About;
