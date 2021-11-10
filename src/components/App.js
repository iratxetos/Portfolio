import '../styles/App.scss';
//import React, { useState } from "react";
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from "./Header";
import Myself from './Myself';
import Tags from "./Tags";
import Welcome from './Welcome';
import Social from "./Social";
import Experience from "./Experience";
import Studies from './Studies';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import data from '../data-projects/projects.json';


function App() {

  const renderProjectList = () => {
    return data
      .map((project, index) => (
        <li className='page__projectList--item' data-aos="zoom-in" data-aos-delay="1000" key={index}>
          <h3 className='page__projectList--title'>{project.title}</h3>
          <p className='page__projectList--text'>{project.desc}</p>
          <div className='page__projectList--icons'>
            <a href={project.url} target="_blank" rel="noreferrer">
              <i className="fas fa-desktop"></i></a>
            <a href={project.git} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          </div>

        </li>
      ));
  };

  return (
    <div className="page" data-aos="fade-up">
      <Header />
      <div className="page__wrapper" data-aos="fade-up" data-aos-delay="500">

        <Myself />

        <Tags />

        <Welcome />

        <Social />

        <div className='page__line' data-aos="fade-down-right" data-aos-delay="1000"></div>

        <Experience />

        <div className='page__line' data-aos="fade-down-right" data-aos-delay="1000"></div>

        <Studies />

        <div className='page__line' data-aos="fade-down-right" data-aos-delay="1000"></div>

        <Projects renderProjectList={renderProjectList()} />

        <div className='page__line--contact' data-aos="fade-down-right" data-aos-delay="1000"></div>

        <Contact />

      </div>

      <Footer />
    </div >
  );
}

export default App;
