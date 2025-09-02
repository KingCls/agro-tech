import React, { useRef } from 'react';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import Header from './components/Header/Header.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import OurProject from './components/OurProject/OurProject.jsx';
import Questions from './components/Questions/Questions.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import SobreEmpresa from "./components/SobreEmpresa/SobreEmpresa";
import FaleConosco from "./components/FaleConosco/FaleConosco";
import TechQuiz from "./components/TechQuiz/TechQuiz";
import { useEffect, useState } from 'react';

function App() {

  const aboutSectionRef = useRef(null);
  const ourProjectSectionRef = useRef(null);
  const questionsSectionRef = useRef(null);
  const sobreempresaRef = useRef(null);
  const faleconoscoRef = useRef(null);
  const quizRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div id='top' className="app-container">
        <div className="landing">
          <Header 
          scrollToAbout={() => scrollToSection(aboutSectionRef)}
          scrollToProject={() => scrollToSection(ourProjectSectionRef)}
          scrollToQuiz={() => scrollToSection(quizRef)}
          scrollToQuestions={() => scrollToSection(questionsSectionRef)}
          scrollToSobreEmpresa={() => scrollToSection(sobreempresaRef)}
          scrollToFaleConosco={() => scrollToSection(faleconoscoRef)}
          />
          <HeroSection /> 
        </div>
        <AboutSection sectionRef={aboutSectionRef}/>
        <OurProject sectionRef={ourProjectSectionRef}/>
        <TechQuiz sectionRef={quizRef}/>
        <SobreEmpresa sectionRef={sobreempresaRef} />
        <FaleConosco sectionRef={faleconoscoRef} />
        <Questions sectionRef={questionsSectionRef}/>
        <BackToTop />
    </div>
    </>
  )
}

export default App;
