'use client'
import { FC } from 'react';
import { useEffect } from "react";
import PageLayout from './components/layout/PageLayout';
import HomeSection from './components/sections/home/HomeSection';
import AboutSection from './components/sections/about/AboutSection';
import SkillsSection from './components/sections/skills/SkillsSection';
import ExperienceSection from './components/sections/experience/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

import { portfolioData } from './data/portfolio';
import CupsSection from './components/sections/cups/CupsSection';
import InterestsSection from './components/sections/interests/InterestsSection';


const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true; // Still load the file async, but wait for it to finish
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.appendChild(script);
  });
}; 

const scriptUrls = [
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js",
  "https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.6/dist/lazyload.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jScrollPane/2.0.0beta11/script/jquery.jscrollpane.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.6/jquery.mixitup.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js",
  "js/newsticker.min.js",
  "js/wow.min.js",
  "js/script-vertical.js",
  "js/data.js",
  "js/loader.js"
];

export default function Home() {

  useEffect(() => {
    const loadScripts = async () => {
      console.log("Loading scripts...");
      try {
        for (const url of scriptUrls) {
          console.log(`Loading script: ${url}`);
          await loadScript(url);
        }
        console.log("All scripts loaded successfully.");
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts(); // Now correctly called outside the function definition
  }, []);


  return (
    <>
      <HomeSection loves={portfolioData.loves} socialLinks={portfolioData.socialLinks} />
      <AboutSection info={portfolioData.infos} profiFile={portfolioData.profiFile} />
      <CupsSection numbers={portfolioData.numbersData} />
      <SkillsSection skills={portfolioData.cards} />
      <ExperienceSection jobs={portfolioData.jobs} />
      <InterestsSection interestsIntro={portfolioData.interestsIntro} interestsData={portfolioData.interestsData} />
      {/* <ExperienceSection experiences={portfolioData.experiences} />
        <EducationSection education={portfolioData.education} />
        <PortfolioSection items={portfolioData.portfolioItems} /> */}
      {/* <ContactSection 
          contactInfo={portfolioData.contactInfo}
          onContactSubmit={handleContactSubmit}
        /> */}
    </>
  );
}
