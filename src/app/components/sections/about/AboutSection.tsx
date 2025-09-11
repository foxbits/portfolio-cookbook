import { FC } from 'react';

interface AboutSectionProps {
  info: {
    title: string;
    value: string;
  }[];
  profile: {
    description: string;
    links: {
      title: string;
      link: string;
    }[];
  };
}

const AboutSection: FC<AboutSectionProps> = ({info, profile}) => {
  return (
    <section className="content backgrounded" id="about-me">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section-title">
              <h1>About Me</h1>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="basic-info-left panel-box wow fadeInLeft">
              <h2>Basic Information</h2>
              <ul className="basic-info">
                {info.map((item, index) => (
                  <li key={index}>
                    <span>{item.title}:</span>
                    <span className="info" dangerouslySetInnerHTML={{ __html: item.value }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="panel-box professional-profile wow fadeInRight basic-info-right">
              <h2>Professional Profile</h2>
              <p dangerouslySetInnerHTML={{ __html: profile.description }} />
              <div className="btn-group">
                <a className='btn btn-primary dropdown-toggle' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Resume <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" style={{ zIndex: 9999, fontSize: '12px' }}>
                  {profile.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
