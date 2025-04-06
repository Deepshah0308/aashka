import React from 'react';
import Section from './Section';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import from react-icons

interface ContactProps {
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, location, linkedin, github }) => {
  return (
    <Section title="Contact" id="contact">
      <div className="space-y-4">
        {location && (
          <div className="flex items-center text-gray-700 group">
            <FaMapMarkerAlt size={18} className="mr-3 text-gray-500 transition-colors duration-200" />
            <span className="text-base md:text-lg">{location}</span>
          </div>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group">
            <FaPhone size={18} className="mr-3 text-gray-500 group-hover:text-indigo-600 transition-colors duration-200" />
            <span className="text-base md:text-lg">{phone}</span>
          </a>
        )}
        <a href={`mailto:${email}`} className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group">
          <FaEnvelope size={18} className="mr-3 text-gray-500 group-hover:text-indigo-600 transition-colors duration-200" />
          <span className="text-base md:text-lg">{email}</span>
        </a>
        {linkedin && (
          <a href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group">
            <FaLinkedin size={18} className="mr-3 text-gray-500 group-hover:text-indigo-600 transition-colors duration-200" />
            <span className="text-base md:text-lg">LinkedIn Profile</span>
          </a>
        )}
        {github && (
          <a href={github.startsWith('http') ? github : `https://${github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200 group">
            <FaGithub size={18} className="mr-3 text-gray-500 group-hover:text-indigo-600 transition-colors duration-200" />
            <span className="text-base md:text-lg">GitHub Profile</span>
          </a>
        )}
      </div>
    </Section>
  );
};

export default Contact;
