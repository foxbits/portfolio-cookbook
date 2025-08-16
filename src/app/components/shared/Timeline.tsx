import { FC } from 'react';

interface Timeline {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  items: Timeline[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <ul className="timeline">
      {items.map((item, index) => (
        <li key={index} className="wow fadeInUp">
          <div className="timeline-badge">
            <a><i className="fa fa-circle"></i></a>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>{item.date}</h4>
            </div>
            <div className="timeline-body">
              <div className="timeline-desc">
                <h4>{item.title}</h4>
                <h5>{item.subtitle}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
