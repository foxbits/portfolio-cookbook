import { FC } from 'react';

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  description: string;
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ items }) => {
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
              {items.map((item, index) => (
                <li key={index} className={`portfolio-item mix ${item.category}`}>
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio_item_hover">
                    <div className="item_info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
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
