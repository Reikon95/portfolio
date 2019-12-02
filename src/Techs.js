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
      <div className="techDetails">
      <h3>ReactJS - 4/5</h3>
    </div>
    </div>
    <div className="tech">
      <img src={py} alt="python" id="fix"/>
      <div className="techDetails">
      <h3>Python - 2/5</h3>
      </div>
    </div>
    <div className="tech">  
      <img src={js} alt="javascript"/>
      <div className="techDetails">
      <h3>      Javascript - 5/5</h3>
      </div>
    </div>
    <div className="tech">
      <img src={css} alt="css"/>
      <div className="techDetails">
      <h3>      CSS - 4/5</h3>
      </div>
    </div>
  </div>
  <div className="technologies">
    <div className="tech">
      <img src={cloud} alt="ReactJS"/>
      <div className="techDetails">
      <h3>     Heroku - 4/5</h3>
        </div>
    </div>
    <div className="tech">
      <img src={nodeLogo} alt="python"/>
      <div className="techDetails">
      <h3> NodeJS - 3/5</h3>
      </div>
    </div>
    <div className="tech">  
      <img src={htmli} alt="javascript"/>
      <div className="techDetails">
      <h3>HTML5 - 5/5</h3>
        </div>
    </div>
    <div className="tech">
      <img src={gith} alt="css"/>
      <div className="techDetails">
      <h3>Git 4/5</h3>
        </div>
    </div>
  </div>
  </>);
}

