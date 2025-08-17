import { FC } from 'react';

export interface FooterProps {
  appVersion: string;
  copyrightYear: number;
}

const Footer: FC<FooterProps> = ({ appVersion, copyrightYear }) => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="copyright text-center">
              <p>
                copyright © foxbites {' '}
                <span id="cpyear">{copyrightYear}</span>. all rights reserved.{' '}
                <span id="appversion">{`v${appVersion}`}</span>
              </p>
                <p>
                  built with ❤️ & <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> on 
                <a href="https://github.com/foxbits/portfolio-cookbook" target="_blank" rel="noopener noreferrer"> GitHub</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
