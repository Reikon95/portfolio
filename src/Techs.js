import React from 'react';
import css from './Imgs/css-3.svg';
import js from './Imgs/javascript.svg';
import py from './Imgs/python.svg';
import rjs from './Imgs/react.svg';
import cloud from './Imgs/cloud-computing.svg';
import gith from './Imgs/github-big-logo.svg';
import htmli from './Imgs/html-5.svg';
import nodeLogo from './Imgs/nodejs.svg';
import './TechsStyle.css';

export default function GetTechs() {
    return (
    <>
    <div className="technologies">
    <div className="tech">
      <img src={rjs} alt="ReactJS"/>
    </div>
    <div className="tech">
      <img src={py} alt="python" id="py"/>
    </div>
    <div className="tech">  
      <img src={js} alt="javascript"/>
    </div>
    <div className="tech">
      <img src={css} alt="css"/>
    </div>
  </div>
  <div className="technologies">
    <div className="tech">
      <img src={cloud} alt="ReactJS"/>
    </div>
    <div className="tech">
      <img src={nodeLogo} alt="python"/>
    </div>
    <div className="tech">  
      <img src={htmli} alt="javascript"/>
    </div>
    <div className="tech">
      <img src={gith} alt="css"/>
    </div>
  </div>
  </>);
}

