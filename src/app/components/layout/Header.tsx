import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <aside className="menu" id="menu">
      <a href="#" className="mobile-menu-opener">
        <i className="fa fa-bars"></i>
      </a>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="logo">
          <Link href="/" className="navbar-brand">
            <img src="/img/logos/logo2.png" alt="Logo" />
          </Link>
        </div>
        <div id="navbar" style={{ textAlign: 'center' }}>
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <Link className="page-scroll" href="#home">Home</Link>
            </li>
            <li>
              <Link className="page-scroll" href="#about-me">About me</Link>
            </li>
            <li>
              <Link className="page-scroll" href="#skills">Skills</Link>
            </li>
            <li>
              <Link className="page-scroll" href="#experience">Experience</Link>
            </li>
            <li>
              <Link className="page-scroll" href="#education">Education</Link>
            </li>
            <li>
              <Link className="page-scroll" href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className="page-scroll" href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Header;
