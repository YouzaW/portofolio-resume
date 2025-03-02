import React from 'react';
import { resumeData } from './data/resumeData';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import './styles.css';
import ChatBot from './components/ChatBot';


function App() {
  return (
    <div className="container">
      <Header data={resumeData} />
      <Skills skills={resumeData.skills} />
      <Experience experience={resumeData.experience} />
      <Education education={resumeData.education} />
      <Projects projects={resumeData.projects} />
      <ChatBot />
    </div>
  );
}

export default App;