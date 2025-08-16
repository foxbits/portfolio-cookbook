import { FC } from 'react';
import SocialLinks, { SocialLinksProps } from './SocialLinks';
import Loves, { LovesEntry } from './Loves';

interface HomeSectionProps {
  loves: LovesEntry[],
  socialLinks: SocialLinksProps['links'];
}

const HomeSection: FC<HomeSectionProps> = (props) => {
  return (
    <section className="content backgrounded" id="home">
      <div className="banner lazy">
        <div className="caption-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="caption-info-inner">
                  <h1>I am Marian Focșa</h1>
                  <Loves loves={props.loves} />
                  <SocialLinks links={props.socialLinks} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
