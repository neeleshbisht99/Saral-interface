import React from 'react';
// import logo from '../../../img/logoBlack.svg';
import './index.css';
import Icon from '@mapbox/mr-ui/icon';

function Footer() {
  return (
    <React.Fragment>
      <div className="footer-hr-line"></div>
      <div className="footerContainer">
        <div className="logo">
          <img src="https://www.dropbox.com/s/fbn65gc4jgmmzhv/logoBlack.svg?raw=1" />
          <br />
          We{' '}
          <span className="inline-block color-blue">
            <Icon name="code" inline={true} /> code
          </span>{' '}
          for good.
        </div>
        <div className="para">
          <span className="inline-block color-red">
            <Icon name="flame" inline={true} /> Fire
          </span>{' '}
          dies, but never turns cold.
          <br />I belong to{' '}
          <span className="inline-block color-yellow">
            <Icon name="sun" inline={true} /> sun
          </span>{' '}
          <br />
          <div className="contact">
            <span className="inline-block color-blue">
              <a href="https://www.linkedin.com/in/neelesh-bisht-398061b4/">
                <Icon name="linkedin" inline={false} size={33} />
              </a>
            </span>
            <span className="inline-block color-red">
              <a href="mailto:neeleshbisht99@gmail.com">
                <Icon name="mail" inline={false} size={33} />
              </a>
            </span>
            <span className="inline-block color-blue">
              <a href="https://twitter.com/neeleshbisht99">
                <Icon name="twitter" inline={false} size={33} />
              </a>
            </span>
            <span className="inline-block color-black">
              <a href="https://github.com/neeleshbisht99">
                <Icon name="github" inline={false} size={33} />
              </a>
            </span>
          </div>
        </div>
        <div className="address">
          <span className="reachUs">
            <span className="inline-block color-blue">
              <Icon name="airplane" inline={true} /> Reach
            </span>{' '}
            us at :
          </span>
          <br />
          Earth, Solar System, Orion Spiral Arm,
          <br /> Milky Way Galaxy, Universe
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
