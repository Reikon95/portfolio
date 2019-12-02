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
      ReactJS - 4/5
      I've used React on almost every project that I've ever completed. I really enjoy how quick I can develop ideas with it.

    </div>
    <div className="tech">
      <img src={py} alt="python" id="fix"/>
      Python - 2/5
      I started using Python at ThirdEye Labs for data analysis. I use this mainly in personal projects and whilst I have not worked on it
      in production code, I'm keen to build my skills in it.
    </div>
    <div className="tech">  
      <img src={js} alt="javascript"/>
      Javascript (Vanilla) - 5/5
      Plain old Javascript is my strongest skill - I think it's really important to understand the underlying technology so I can pick up 
      new frameworks and have strong fundementals. As a result, I enjoy working on problem solving algorithims in the language.
    </div>
    <div className="tech">
      <img src={css} alt="css"/>
      CSS - 4/5
      I really enjoy playing with CSS. I was never great at art as a kid, and CSS allows me to experiment with design in a way I haven't been able
      to before. It's critical to a full stack developer's arsenal, in my opinion.
    </div>
  </div>
  <div className="technologies">
    <div className="tech">
      <img src={cloud} alt="ReactJS"/>
      Heroku - 4/5
      I'm comfortable with a number of depolyment solutions (for example, this website is deployed on Zeit) 
      but I rate Heroku the highest. I've used in both team and individual projects, and want to continue learning.

    </div>
    <div className="tech">
      <img src={nodeLogo} alt="python"/>
      NodeJS - 3/5
      NodeJS is a major priority for me right now in terms of my learning. I'm capable of using it independantly but I want to be an
      expert in the language and I don't consider myself quite there yet.
    </div>
    <div className="tech">  
      <img src={htmli} alt="javascript"/>
      HTML5 - 5/5
      Regardless of the debate over its status as a programming language, I'm very comfortable with HTML5 and understand the importance of semantic code.
    </div>
    <div className="tech">
      <img src={gith} alt="css"/>
      Git 4/5
      Git is my weapon of choice when it comes to version control, and I am comfortable using the tool. I won't destroy a codebase, promise!
    </div>
  </div>
  </>);
}

