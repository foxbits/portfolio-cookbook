import { FC } from 'react';
import PageLayout from '../app/components/layout/PageLayout';
import HomeSection from '../app/components/sections/home/HomeSection';
import AboutSection from '../app/components/sections/AboutSection';
import SkillsSection from '../app/components/sections/SkillsSection';
import ExperienceSection from '../app/components/sections/ExperienceSection';
import EducationSection from '../app/components/sections/EducationSection';
import PortfolioSection from '../app/components/sections/PortfolioSection';
import ContactSection from '../app/components/sections/ContactSection';

// TODO: Import your data from a separate file
import { portfolioData } from '../data/portfolio';

const HomePage: FC = () => {
  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    // TODO: Implement contact form submission
    console.log('Contact form submitted:', data);
  };

  return (
    <PageLayout>
      <HomeSection />
      <AboutSection 
        basicInfo={portfolioData.basicInfo}
        professionalProfile={portfolioData.professionalProfile}
      />
      <SkillsSection skills={portfolioData.skills} />
      <ExperienceSection experiences={portfolioData.experiences} />
      <EducationSection education={portfolioData.education} />
      <PortfolioSection items={portfolioData.portfolioItems} />
      <ContactSection 
        contactInfo={portfolioData.contactInfo}
        onContactSubmit={handleContactSubmit}
      />
    </PageLayout>
  );
};

export default HomePage;
