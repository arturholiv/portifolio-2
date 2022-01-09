import React from 'react';
import Header from './Header';
import About from './About';
import MySkills from './MySkills'
import Projects from './Projects'
import Footer from './Footer';

export default function Main() {

  return (
    <div>
     <Header />
     <About />
     <MySkills />
     <Projects />
     <Footer />
    </div>
  );
}