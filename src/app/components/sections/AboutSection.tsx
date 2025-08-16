import { FC } from 'react';

interface AboutSectionProps {
  basicInfo: {
    label: string;
    value: string;
  }[];
  professionalProfile: string;
}

const AboutSection: FC<AboutSectionProps> = ({ basicInfo, professionalProfile }) => {
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
                {basicInfo.map((info, index) => (
                  <li key={index}>
                    <span className="label">{info.label}:</span>
                    <span className="value">{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="panel-box professional-profile wow fadeInRight basic-info-right">
              <h2>Professional Profile</h2>
              <p>{professionalProfile}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
