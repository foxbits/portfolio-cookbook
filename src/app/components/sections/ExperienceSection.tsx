import { FC } from 'react';
import Timeline from '../shared/Timeline';

interface ExperienceSectionProps {
  experiences: {
    date: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="content backgrounded" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section-title">
              <h1>Experience</h1>
            </div>
          </div>

          <div className="col-xs-12">
            <Timeline items={experiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
