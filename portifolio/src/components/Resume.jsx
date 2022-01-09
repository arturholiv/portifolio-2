import React from 'react';
import { FaDownload } from 'react-icons/fa';
import resume from '../files/resume.pdf';

export default function Resume() {

  return (
    <div className="resume">
     <a href={ resume } download>
        <button type="button" class="curriculum-btn">
          <FaDownload />
          <h5 className="link" >Meu Currículo</h5>
        </button>
      </a>
    </div>
  );
}