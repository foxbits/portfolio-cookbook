import { FC } from 'react';
import Timeline, { TimelineProps } from '../../shared/timeline/Timeline';

const EducationSection: FC<TimelineProps> = ({ timeline }) => {
  return (
    <section className="content backgrounded" id="education">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section-title">
              <h1>Education</h1>
            </div>
          </div>

          <Timeline timeline={timeline} />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
