import React from 'react';

interface SectionProps {
  title: string;
  id?: string;
  icon?: React.ReactNode; // Accept ReactNode for icons
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, icon, children }) => {
  return (
    <section id={id} className="py-8 md:py-12 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center mb-6">
        {icon && <span className="text-indigo-600 mr-3">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default Section;
