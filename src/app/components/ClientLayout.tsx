'use client'

import Header from './layout/Header';
import Footer from './layout/Footer';
import CoffeeLoader from './shared/CoffeeLoader';
import { portfolioData } from '../data/portfolio';
import { dosis, raleway } from '../fonts';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <>
            <head>
                {/* External CSS */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
                <link href="css/jquery.jscrollpane.custom.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/card.css" rel="stylesheet" />
                <link href="css/tagcloud.css" rel="stylesheet" />
            </head>

            <body className={`vertical ${dosis.className} ${raleway.className}`}>
                <CoffeeLoader />

                <div id="main-container" className="main-container">
                    <Header />
                    <div className="content-wrapper">
                        <div className="content-inner">
                            {children}
                            <Footer {...portfolioData.metaData} />
                            <div className="back-top" style={{ display: 'block' }}>
                                <a href="#">
                                    <i className="fa fa-angle-up"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden-images">
                </div>
                <div className="commercial-images">
                    <img src="img/portraits/portrait4.png" alt="Marian Focsa CV" />
                </div>
            </body>
        </>
    );
}
