'use client'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CoffeeLoader from './components/shared/CoffeeLoader';

import "./styles/globals.css";
import { portfolioData } from './data/portfolio';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="marian focsa, marian focșa, marian fx, marian.focsa@outlook.com, marian.focsa, marian.fx, marian focsa cv, cv, .net developer, software developer, technical lead, foxbites, foxbites.net, contact@foxbites.net" />
        <meta name="author" content="foxbites"/>
        <meta name="title" content="Marian Focșa (FX) - Professional Profile Page | CV | Portfolio" />
        <meta name="description" content="Who is Marian Focșa? View the CV, Portfolio and Professional Profile Page" />
        
        {/* External CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Dosis:400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet" />
        <link href="css/jquery.jscrollpane.custom.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/card.css" rel="stylesheet" />
        <link href="css/tagcloud.css" rel="stylesheet" />
      </head>

      <body className="vertical">
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
    </html>
  );
}
