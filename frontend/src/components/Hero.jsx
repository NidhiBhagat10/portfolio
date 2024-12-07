import React from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/portfolio_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="social-icons">
          <FontAwesomeIcon icon={faInstagram} size="xl" color="#333" />
          <FontAwesomeIcon icon={faCode} size="xl" color="#333" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" color="#333" />
          <FontAwesomeIcon icon={faGithub} size="xl" color="#333" />
        </div>
        <div className='txt-section'>
          <div className="greet">
            Hello! I'm <br /> Nidhi Bhagat<span class="wave-emoji">👋 </span>
          </div>
          <h3>--- Web Developer</h3>
          <p> Designing responsive websites with a focus on minimal elegance.</p>
          <div className="btns">
            <button><a href="#contact">Let's Work Together</a></button>
            <button><a href="#projects">View My Projects </a></button>
          </div>
        </div>
        <div className="img-section">
          <img src={profileImage} alt="Portfolio-Image" />
        </div>
      </div>
      <span className='scroll-down'>
        <a href="#about">
          <FontAwesomeIcon icon={faMouse} size="xl" />
          <span>Scroll down</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </span>
    </section>
  );
};

export default Hero;
