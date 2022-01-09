import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="header">
    <img className="myphoto" alt="me" src="https://avatars.githubusercontent.com/u/81727766?s=400&u=622df5144282c954073d352615a0495d74fbb311&v=4" />
      <div classname="header-intro">
        <div className="header-names">
            <h3>{`<arturholiv />`}</h3>
            {/* <h5>{`'Sou um desenvolvedor em desenvolvimento'`}</h5> */}
        </div>
      </div>
        <div className="header-buttons">
          <a href="https://www.github.com/arturholiv/" target="_blank" className="link">
            <button type="button" className="header-button"> <FaGithub className="social-icon" /> GitHub </button>
          </a>
          <a href="https://github.com/arturholiv" target="_blank" className="link">
            <button type="button" className="header-button"> <FaLinkedin className="social-icon" /> LinkedIn </button>
          </a>
          <a href="https://www.instagram.com/arturholiv/" target="_blank" className="link">
            <button type="button" className="header-button"> <FaInstagram className="social-icon" /> Instagram </button>
          </a>
        </div>
        <p id="scroll">Deslize para ler mais sobre mim</p>
    </div>
  );
}
