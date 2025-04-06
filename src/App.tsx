import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Experience from './components/Experience'; // Import Experience
import './index.css'; // Ensure Tailwind styles are loaded

// Updated CvData interface
interface CvData {
  name: string;
  headline: string;
  about: string;
  education: Array<{ degree: string; institution: string; duration: string }>;
  skills: { [key: string]: string[] } | string[];
  projects: Array<{ title: string; description: string }>;
  extraCurricular: string[];
  leadership: string[];
  contact: {
    email: string;
    phone?: string;
    location?: string;
    linkedin?: string;
    github?: string;
  };
  experienceTimeline: Array<{
    title: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
}

function App() {
  const [data, setData] = useState<CvData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(fetchError => {
        console.error("Failed to load CV data:", fetchError);
        setError("Failed toload CV data. Please check data.json and ensure the server is running.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600 bg-red-100 p-4">{error}</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">No data available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header name={data.name} headline={data.headline} />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
        {/* Sections */}
        <About content={data.about} />
        <Experience experienceData={data.experienceTimeline} /> {/* Render Experience */}
        <Education items={data.education} />
        <Skills skills={data.skills} />
        <Projects items={data.projects} />
        <ExtraCurricular items={data.extraCurricular} />
        <Leadership items={data.leadership} />
        <Contact {...data.contact} />
      </main>
      <footer className="text-center py-6 mt-12 bg-gray-100 text-gray-500 text-sm border-t border-gray-200">
        Built with React & Tailwind CSS by {data.name}
      </footer>
    </div>
  );
}

export default App;
