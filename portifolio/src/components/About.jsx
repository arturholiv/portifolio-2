import React from 'react';
import { MdArticle } from 'react-icons/md'

export default function About() {

  return (
    <div className="about">
      <MdArticle className="about-icons"/>
      <div className="about-me">
       <h3>Sobre Mim</h3>
       <p>Me Chamo Artur Henrique de Oliveira tenho 21 anos, sou um desenvolvedor FrontEnd e atualmente estudante da 
         <a href="https://www.betrybe.com/" target="_blank" className="link-trybe"> Trybe</a>.
       </p>
         Sou apaixonado por tecnologia e por ideias inovadoras o que me leva a procurar sempre as melhores 
         soluções e ir em busca das melhores tecnologias.
      </div>
    </div>
  );
}