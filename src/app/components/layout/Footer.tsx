import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="copyright text-center">
              <p>
                foxbites © copyright{' '}
                <span id="cpyear">{new Date().getFullYear()}</span>. All Rights Reserved.{' '}
                <span id="appversion"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
