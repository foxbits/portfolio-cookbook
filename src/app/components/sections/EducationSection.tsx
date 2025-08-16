import { FC } from 'react';
import Timeline from '../shared/Timeline';

interface EducationSectionProps {
  education: {
    date: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
}

const EducationSection: FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="content backgrounded" id="education">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section-title">
              <h1>Education</h1>
            </div>
          </div>

          <div className="col-xs-12">
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
