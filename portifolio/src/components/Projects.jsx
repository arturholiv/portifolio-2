import React from 'react';
import { MdOutlineWeb } from 'react-icons/md'

export default function Projects() {

  return (
    <div className="projects">
      <MdOutlineWeb className="projects-icon" />
      <div className="my-projects">
       <h3>Alguns projetos</h3>
       <div className="projects-buttons">
        <button className="project-btn"> HTML </button>
        <button className="project-btn"> CSS </button>
        <button className="project-btn"> JavaScript </button>
        <button className="project-btn"> React </button>
        <button className="project-btn"> Redux </button>
        <button className="project-btn"> Redux </button>
       </div>
      </div>
    </div>
  );
}