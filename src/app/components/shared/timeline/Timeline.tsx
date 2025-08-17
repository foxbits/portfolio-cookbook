import { FC, useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

export interface TimelineEntry {
    title: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    duration?: string;
    displayString?: string;
    description: string;
    tags: string[];
}

export interface TimelineProps {
    timeline: TimelineEntry[];
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
    if (startStr === endStr) {
        return `${startStr} (${duration})`;
    }

    return `${startStr} - ${endStr} (${duration})`;
}

// Map jobs to experiences with calculated duration
const postProcessJobs = (jobs: TimelineProps['timeline']) =>
    jobs.map(job => ({
        ...job,
        duration: getDurationString(job.startDate, job.endDate),
        displayString: getDisplayString(job.startDate, job.endDate, getDurationString(job.startDate, job.endDate)),
    }));

const Timeline: FC<TimelineProps> = ({ timeline }) => {
    const [processedTimeline, setProcessedTimeline] = useState(() => postProcessJobs(timeline));

    useEffect(() => {
        setProcessedTimeline(postProcessJobs(timeline));
    }, [timeline]);

    return (
        <div className="col-xs-12">
            <ul id="work-timeline" className="timeline">
                {processedTimeline.map((job, index) => (
                    <li
                        key={index}
                        className={`${(index - 1) % 2 === 0 ? "timeline-inverted " : ""}wow fadeIn`}
                    >
                        <div className="timeline-badge">
                            <i className="fa fa-circle"></i>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h2>{job.title}</h2>
                                <h3 dangerouslySetInnerHTML={{ __html: job.location }} />
                                <span className="date"><i>{job.displayString}</i></span>
                            </div>
                            <div
                                className="timeline-body"
                                dangerouslySetInnerHTML={{ __html: job.description }}
                            />
                            <div className="tagcloud">
                                <ul>
                                    {job.tags.map((tag, tagIndex) => (
                                        <li key={tagIndex}>
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                <span>{tag}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
