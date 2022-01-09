import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="header">
    <img className="myphoto" alt="me" src="https://avatars.githubusercontent.com/u/81727766?s=400&u=622df5144282c954073d352615a0495d74fbb311&v=4" />
      <div classname="header-intro">
        <div className="header-names">
            <h3>Artur Henrique de Oliveira</h3>
        </div>
      </div>
        <div className="header-buttons">
          <button type="button" className="header-button"> <FaGithub className="social-icon" /> GitHub </button>
          <button type="button" className="header-button"> <FaLinkedin className="social-icon" /> LinkedIn </button>
        </div>
        <p id="scroll">Deslize para ler mais sobre mim</p>
    </div>
  );
}
