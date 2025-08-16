import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import CoffeeLoader from '../shared/CoffeeLoader';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <body className="vertical">
      <CoffeeLoader />
      
      <div id="main-container" className="main-container">
        <Header />
        <div className="content-wrapper">
          <div className="content-inner">
            {children}
            <Footer />
            <div className="back-top" style={{ display: 'block' }}>
              <a href="#">
                <i className="fa fa-angle-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default PageLayout;
