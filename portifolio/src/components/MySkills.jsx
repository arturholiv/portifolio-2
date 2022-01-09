import React from 'react';
import { FaCode, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux } from 'react-icons/si'

export default function MySkills() {

  return (
    <div className="myskills">
      {/* <img alt="code" src="https://img.icons8.com/ios-filled/100/000000/google-code.png" /> */}
      <FaCode className="code-icon"/>
      <div className="my-habilities">
       <h3>Minhas Habilidades</h3>
       <div className="skills">
        <button className="skill-btn"> <FaHtml5 className="skill-icon"/> HTML </button>
        <button className="skill-btn"> <FaCss3Alt className="skill-icon"/> CSS </button>
        <button className="skill-btn"> <IoLogoJavascript className="skill-icon"/> JavaScript </button>
        <button className="skill-btn"> <FaReact className="skill-icon"/> React </button>
        <button className="skill-btn"> <SiRedux className="skill-icon"/> Redux </button>
       </div>
      </div>
    </div>
  );
}