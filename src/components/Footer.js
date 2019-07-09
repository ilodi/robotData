import React from 'react';

const Footer = ({ title, date, logo }) => (
  <footer>
    <div className="decoradoFooter">
      <div className="item">
        <h3>{title}</h3>
      </div>
      <div className="item" />
      <div className="item" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col s12 m4">
          <div className="boxContent">
            <h4>Find Us</h4>
            <p>
              Unit B, 6th floor, OfficePlus @Mong kok, 998 Canton Road, Kowloon,
              HKSAR
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="auxBorder boxContent ">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+85259980100">+852 59980100</a>
              </li>
              <li>
                <a href="mailto:enquiry@robot-data.com">
                  enquiry@robot-data.com
                </a>
              </li>
              <li>
                <a href="www.robot-data.com">
                www.robot-data.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="boxContent containerCenterAll">
            <img className="responsive-img" src={logo} alt={title} />
          </div>
        </div>
      </div>
      <div className="footer-copyright ">
        <div className="container" />
        <p>{date}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
