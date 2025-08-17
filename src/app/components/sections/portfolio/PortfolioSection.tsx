import { DateBasedObject, toDisplayableDates } from '@/app/extensions/DateExtensions';
import { FC, useEffect, useState } from 'react';

export enum PortfolioItemCategory {
  All = 'all',
  WorkProjects = 'work-projects',
  SideProjects = 'side-projects',
  UniProjects = 'uni-projects'
};

interface PortfolioItem extends DateBasedObject {
  id: number;
  category: PortfolioItemCategory;
  status: string;
  title: string;
  description: string;
  url: {
    title: string;
  };
  image: string;
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ items }) => {
  
  const [processedItems, setProcessedTimeline] = useState(() => toDisplayableDates(items));

  useEffect(() => {
    setProcessedTimeline(toDisplayableDates(items));
  }, [items]);

  return (
    <section className="content" id="portfolio">
      <div className="info" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul id="filter-list">
                <li className="filter" data-filter="all">ALL</li>
                <li className="filter" data-filter=".work-projects">Work Projects</li>
                <li className="filter" data-filter=".side-projects">Side Projects</li>
                <li className="filter" data-filter=".uni-projects">University Projects</li>
              </ul>
            </div>
          </div>

          <div className="row" style={{ padding: '20px', paddingTop: '0px' }}>
            <ul className="portfolio_items">
              {processedItems.map((item, index) => (
                <li key={index} id={`project-${item.id}`} className={`full-card card ${item.category} col-xs-12 col-sm-6 col-md-4 mix`}>
                  <div className="wrapper" style={{ background: `url(${item.image}) center/cover no-repeat;` }}>
                    <div className="header">
                      <div className="date">
                        <span className="year">{item.displayString}</span>
                      </div>
                    </div>
                    <div className="data">
                      <div className="content">
                        <span className="author">{item.status}</span>
                        <h2 className="title">
                          <a href="#">{item.title}</a>
                        </h2>
                        <p className="text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <a href="#" onClick={(e) => e.preventDefault()} className="button">{ item.url.title }</a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
