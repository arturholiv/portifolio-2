import React from 'react';
import { MdArticle } from 'react-icons/md'

export default function About() {

  return (
    <div className="about">
      <MdArticle className="about-icons"/>
      <article className="about-me">
       <h3>Sobre Mim</h3>
       <p>Me Chamo Artur Henrique de Oliveira, tenho 21 anos, sou um desenvolvedor FrontEnd e estudante da 
         <a href="https://www.betrybe.com/" target="_blank" className="link-trybe"> Trybe</a>. Atualmente estudando BackEnd
       </p>
         Sou apaixonado por tecnologia e por ideias inovadoras o que me leva a ir em busca das melhores 
         soluções e a me aprofundar nas melhores tecnologias.
        <p>
          Você pode ver minha tragetória no curso da Trybe pelo README <a target="_blank" href="https://github.com/arturholiv/trybe-exercices" className="link-trybe"> deste repositório</a>.
        </p>
      </article>
    </div>
  );
}