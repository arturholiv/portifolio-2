import React from 'react';
import spotitrybeprint from '../images/spotitrybeprint.png'
import trybewalletprint from '../images/trybewalletprint.png'
import starwarsplanets from '../images/starwarsplanets.png'
import todolistprint from '../images/todolistprint.png'
import { MdOutlineWeb } from 'react-icons/md'
export default function Projects() {
  return (
    <div className="projects">
      <MdOutlineWeb className="projects-icon" />
      <div className="my-projects">
       <h3>Alguns projetos</h3>
       <div className="projects-buttons">
        <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" className="project-btn-a project-btn-a" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="spoti print" src={ spotitrybeprint } /> SpotiTrybe </button>
        </a>
        <a href="https://arturholiv.github.io/appdespesas/" target="_blank"  className="project-bt-a project-btn-b" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="wallet print" src={ trybewalletprint } /> App Carteira de Câmbio </button>
        </a>
        <a href="https://arturholiv.github.io/StarWarsPlanetSearch/" target="_blank" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="starwars print" src={ starwarsplanets } /> StarWars Planets Data </button>
        </a>
         {/* <a href="https://arturholiv.github.io/todolist/" target="_blank" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="toodlist print" src={ todolistprint } /> To Do List </button>
        </a> */}
        {/*<a href="https://arturholiv.github.io/spotitrybe/" target="_blank" >
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