import { DateBasedObject, toDisplayableDates } from '@/app/extensions/DateExtensions';
import { FC, useState, useEffect } from 'react';

export interface TimelineEntry extends DateBasedObject {
    title: string;
    location: string;
    description: string;
    tags: string[];
}

export interface TimelineProps {
    timeline: TimelineEntry[];
}


const Timeline: FC<TimelineProps> = ({ timeline }) => {
    const [processedTimeline, setProcessedTimeline] = useState(() => toDisplayableDates(timeline));

    useEffect(() => {
        setProcessedTimeline(toDisplayableDates(timeline));
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
