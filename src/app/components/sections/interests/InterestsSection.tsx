import React from 'react';

export interface InterestSectionProps {
    interests: {
        description: string;
        caption: string;
        data: {
            title: string;
            link: string;
            icon: string;
        }[]
    };
}

const InterestsSection: React.FC<InterestSectionProps> = ( {interests }) => {
    return (
        <section className="content backgrounded" id="the-interests">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="my-interests panel-box wow fadeInUp" 
                        style={ { paddingBottom: "40px;" } }>
                            <h2>My Interests</h2>
                            {/* <!-- Container for Interests --> */}
                            <p id="interests-description"> {interests.description}</p>
                            <p id="interests-caption" style={{ textAlign: "right" }}>{interests.caption}</p>
                            <ul id="interests-container">
                                {interests.data.map((interest, index) => (
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