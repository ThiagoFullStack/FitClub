import React from 'react';
import './footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';


const Footer = () => {
const link_GitHub = 'https://github.com/ThiagoFullStack';
const link_Instagram = 'https://www.instagram.com/thiagofullstack/';
const link_LinkedIn = 'https://www.linkedin.com/in/thiagocb2-developer-fullstack';

  return(
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
            <a href={link_GitHub} target='blank'><img src={Github} alt="" /></a>
            <a href={link_Instagram} target='blank'><img src={Instagram} alt="" /></a>
            <a href={link_LinkedIn} target='blank'><img src={LinkedIn} alt="" /></a>
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  );
}

export default Footer;