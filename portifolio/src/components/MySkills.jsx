import React from 'react';
import { FaCode, FaCss3Alt, FaHtml5, FaReact, FaGitSquare, FaDocker, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux, SiJest, SiMysql } from 'react-icons/si'

export default function MySkills() {

  return (
    <div className="myskills">
      {/* <img alt="code" src="https://img.icons8.com/ios-filled/100/000000/google-code.png" /> */}
      <div className="my-habilities">
      <FaCode className="code-icon"/>
        <h3>Minhas Habilidades</h3>
        <div className="skillset">
          <div className="skills-front">
          <h5>FrontEnd</h5>
            <div className="skills">
              <button className="skill-btn"> <FaHtml5 className="skill-icon"/> HTML </button>
              <button className="skill-btn"> <FaGitSquare className="skill-icon"/> Git </button>
              <button className="skill-btn"> <FaReact className="skill-icon"/> React </button>
              <button className="skill-btn"> <FaCss3Alt className="skill-icon"/> CSS </button>
              <button className="skill-btn"> <IoLogoJavascript className="skill-icon"/> JavaScript </button>
              <button className="skill-btn"> <SiRedux className="skill-icon"/> Redux </button>
              <button className="skill-btn"> <SiJest className="skill-icon"/> Jest </button>
            </div>
          </div>

          <div className="skills-back">
            <h5>BackEnd</h5>
            <div className="skills">
              <button className="skill-btn"> <FaDocker className="skill-icon"/> Docker </button>
              <button className="skill-btn"> <SiMysql className="skill-icon"/> MySQL </button>
              <button className="skill-btn"> <FaNodeJs className="skill-icon"/> NodeJS </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}