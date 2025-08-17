import React from 'react';

export interface InterestSectionProps {
    interestsIntro: {
        description: string;
        caption: string;
    },
    interestsData: {
        title: string;
        link: string;
        icon: string;
    }[];
}

const InterestsSection: React.FC<InterestSectionProps> = ( {interestsIntro, interestsData }) => {
    return (
        <section className="content backgrounded" id="the-interests">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="my-interests panel-box wow fadeInUp" 
                        style={ { paddingBottom: "40px;" } }>
                            <h2>My Interests</h2>
                            {/* <!-- Container for Interests --> */}
                            <p id="interests-description"> {interestsIntro.description}</p>
                            <p id="interests-caption" style={{ textAlign: "right" }}>{interestsIntro.caption}</p>
                            <ul id="interests-container">
                                {interestsData.map((interest, index) => (
                                    <li key={index}>
                                        <a href={interest.link} target="_blank">
                                            <i className={`fa ${interest.icon}`}></i>
                                            <span>{interest.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;