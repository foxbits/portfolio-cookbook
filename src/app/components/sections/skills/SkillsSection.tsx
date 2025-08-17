import { FC } from 'react';

interface SkillsSectionProps {
  skills: {
    title: string;
    data: {
      title: string;
      value: number;
      tooltip?: string;
    }[];
  }[];
}

const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="content" id="skills">
      <div className="container">
        <div id="skills-container" className="row">
          <div className="col-xs-12">
            <div className="section-title">
              <h1>Skills</h1>
            </div>
          </div>

          {skills.map((skill, index) => (
            <div key={index} className="col-xs-12 col-sm-3">
              <div className="panel-box">
                <h2>{skill.title}</h2>

                <div className="progress-block wow fadeInLeft">
                  {skill.data.map((item, itemIndex) => (
                    <div key={itemIndex} className="single-progressbar">

                      <div
                        className={"skill-text" + (item.tooltip ? ' interestingcursor' : '')}
                        {...(item.tooltip ? { "data-toggle": "tooltip", "data-placement": "bottom", title: item.tooltip } : {})}
                      >
                        <span>{item.title}</span>
                        <span className="skill-per"></span>
                      </div>

                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={item.value} aria-valuemin={0} aria-valuemax={100} style={{ "width": "0%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
