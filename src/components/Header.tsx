import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import download icon

interface HeaderProps {
  name: string;
  headline: string;
}

const Header: React.FC<HeaderProps> = ({ name, headline }) => {
  // Define the path to the resume file in the public directory
  const resumePath = '/resume/Akangsha_Shah_Resume.pdf'; // Assuming you save it as PDF

  return (
    // Apply the new gradient and adjust text colors
    <header className="bg-gradient-to-br from-[#1E3C72] to-[#2A5298] text-white py-16 md:py-24 text-center shadow-md relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">{name}</h1>
        <p className="text-xl md:text-2xl font-light text-gray-200 mb-6">{headline}</p>
        {/* Download Resume Button - Adjusted for light background */}
        <a
          href={resumePath}
          download // Suggests the browser download the file
          target="_blank" // Open in new tab as fallback
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300 group"
        >
          <FaDownload size={18} className="mr-2" />
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
