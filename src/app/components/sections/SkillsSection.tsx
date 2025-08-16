import { FC } from 'react';

interface SkillsSectionProps {
  skills: {
    category: string;
    items: {
      name: string;
      level: number;
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
          
          {skills.map((category, index) => (
            <div key={index} className="col-xs-12 col-sm-6">
              <div className="panel-box">
                <h2>{category.category}</h2>
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <h3>{skill.name}</h3>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                      >
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
