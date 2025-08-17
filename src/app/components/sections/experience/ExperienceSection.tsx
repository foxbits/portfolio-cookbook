import { FC, useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

interface ExperienceSectionProps {
  jobs: {
    title: string;
    employer: string;
    startDate: Date;
    endDate?: Date;
    duration?: string;
    displayString?: string;
    description: string;
    tags: string[];
  }[];
}

// Helper to calculate duration string using date-fns
function getDurationString(startDate: Date, endDate?: Date): string {
  const end = endDate ?? new Date();
  return formatDistance(end, startDate);
}

function getDisplayString(startDate: Date, endDate?: Date, duration?: string): string {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).replace(' ', '. ');
  };

  const startStr = formatDate(startDate);
  const endStr = endDate ? formatDate(endDate) : 'Present';
  return `${startStr} - ${endStr} (${duration})`;
}

// Map jobs to experiences with calculated duration
const postProcessJobs = (jobs: ExperienceSectionProps['jobs']) =>
  jobs.map(job => ({
    ...job,
    duration: getDurationString(job.startDate, job.endDate),
    displayString: getDisplayString(job.startDate, job.endDate, getDurationString(job.startDate, job.endDate)),
  }));

const ExperienceSection: FC<ExperienceSectionProps> = ({ jobs }) => {
  const [jobsWithDuration, setJobsWithDuration] = useState(() => postProcessJobs(jobs));

  useEffect(() => {
    setJobsWithDuration(postProcessJobs(jobs));
  }, [jobs]);

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
            {/* <!-- Container for work timeline --> */}
            <ul id="work-timeline" className="timeline">
              {
                jobsWithDuration.map((job, index) => (
                  <li key={index} className={((index - 1) % 2 === 0 ? "timeline-inverted " : "") + "wow fadeIn"}>
                    <div className="timeline-badge">
                      <i className="fa fa-circle"></i>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h2>{job.title}</h2>
                        <h3>{job.employer}</h3>
                        <span className="date"><i>{job.displayString}</i></span>
                      </div>
                        <div className="timeline-body" dangerouslySetInnerHTML={{ __html: job.description }}>
                        </div>
                      <div className="tagcloud">
                        <ul>
                          {job.tags.map((tag, tagIndex) => (
                            <li key={tagIndex}>
                              <a href="javascript:void()"><span>{tag}</span></a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
