import React from 'react';
import spotitrybeprint from '../images/spotitrybeprint.png'
import { MdOutlineWeb } from 'react-icons/md'

export default function Projects() {

  return (
    <div className="projects">
      <MdOutlineWeb className="projects-icon" />
      <div className="my-projects">
       <h3>Alguns projetos</h3>
       <div className="projects-buttons">
        <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" >
        <button className="project-btn"> <img className="project-image" src={ spotitrybeprint } /> SpotiTrybe </button>
        </a>
        <button className="project-btn"> <img className="project-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIykYGfyU8ZSd23m0wdcUF2vEzoBPWZyHJA&usqp=CAU" alt="project image" />  CSS </button>
        <button className="project-btn"> <img className="project-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIykYGfyU8ZSd23m0wdcUF2vEzoBPWZyHJA&usqp=CAU" alt="project image" />  JavaScript </button>
        <button className="project-btn"> <img className="project-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIykYGfyU8ZSd23m0wdcUF2vEzoBPWZyHJA&usqp=CAU" alt="project image" />  React </button>
        <button className="project-btn"> <img className="project-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIykYGfyU8ZSd23m0wdcUF2vEzoBPWZyHJA&usqp=CAU" alt="project image" />  Redux </button>
        <button className="project-btn"> <img className="project-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIykYGfyU8ZSd23m0wdcUF2vEzoBPWZyHJA&usqp=CAU" alt="project image" />  Redux </button>
       </div>
      </div>
    </div>
  );
}