import React, { useState } from 'react';
import '../styles/Header.css';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaperPlane, faUser, faTarp, faDiagramProject, faXmark, faFileLines, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  /*toggle menu */
  const [Toggle, showMenu] =useState(false)
  return (
    <header className="header">
      <nav className='nav container'>
        <a href='index.html' className='nav-logo'>Nidhi</a>
        <div className={Toggle ? "nav-menu show-menu": "nav-menu"}>
          <ul className='nav-list'>
            <li className='nav-item'><a className='nav-link active-link' href="#home"><FontAwesomeIcon className='nav-icon' icon={faHouse} /> Home</a></li>
            <li className='nav-item'><a className='nav-link' href="#about"><FontAwesomeIcon className='nav-icon' icon={faUser} /> About</a></li>
            <li className='nav-item'><a className='nav-link' href="#projects"><FontAwesomeIcon className='nav-icon' icon={faFileLines} /> Skills</a></li>
            <li className='nav-item'><a className='nav-link' href="#projects"><FontAwesomeIcon className='nav-icon' icon={faTarp} /> Services</a></li>
            <li className='nav-item'><a className='nav-link' href="#projects"><FontAwesomeIcon className='nav-icon' icon={faDiagramProject} /> Projects</a></li>
            <li className='nav-item'><a className='nav-link' href="#contact"><FontAwesomeIcon className='nav-icon' icon={faPaperPlane} /> Contact</a></li>
          </ul>
          <FontAwesomeIcon className='nav-close' icon={faXmark} onClick={()=> showMenu(!Toggle)}/>
        </div>
        <div className="nav-toggle" onClick={()=> showMenu(!Toggle)}>
          <FontAwesomeIcon icon={faTableCellsLarge} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
