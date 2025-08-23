import React from 'react';

export interface StatsSectionProps {
    stats: {
        title: string,
        count: number | undefined
    }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
    return (
        <section className="content backgrounded smaller-padding" id="the-cups">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {/* <!-- Side-info counts contained here --> */}
                        <div id="side-data-container" className="row">
                            {stats.map((item, index) => (
                                <div key={index} className="col-xs-6 col-sm-6">
                                    <div className="service-info">
                                        <span className="counter">{item.count}</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;