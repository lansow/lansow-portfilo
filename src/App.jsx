import { useRef } from 'react';
import './assets/styles/App.css'
import Nav from './components/Nav'
import Hero from './components/Hero';
import VisualSection from './components/VisualSection';
import Info from './components/Info';
import Projects from './components/Projects';
import SocialIcons from './components/SocialIcons';

function App() {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <>
    <Hero />
    <VisualSection />
    <Info />
    <Projects />
    <SocialIcons />
      <div className="nav">
        <Nav sectionRefs={sectionRefs} />
      </div>
    </>
  )
}

export default App
