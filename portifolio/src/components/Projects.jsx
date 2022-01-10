import React from 'react';
import spotitrybeprint from '../images/spotitrybeprint.png'
import trybewalletprint from '../images/trybewalletprint.png'
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
        <a href="https://arturholiv.github.io/appdespesas/" target="_blank" >
        <button className="project-btn"> <img className="project-image" src={ trybewalletprint } /> App Carteira de Câmbio </button>
        </a>
        {/* <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" >
        <button className="project-btn"> <img className="project-image" src={ spotitrybeprint } /> SpotiTrybe </button>
        </a>
        <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" >
        <button className="project-btn"> <img className="project-image" src={ spotitrybeprint } /> SpotiTrybe </button>
        </a>
        <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" >
        <button className="project-btn"> <img className="project-image" src={ spotitrybeprint } /> SpotiTrybe </button>
        </a>
        <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" >
        <button className="project-btn"> <img className="project-image" src={ spotitrybeprint } /> SpotiTrybe </button> */}
        {/* </a> */}
       </div>
      </div>
    </div>
  );
}