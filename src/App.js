import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import css from './css-3.svg';
import js from './javascript.svg';
import py from './python.svg';
import rjs from './react.svg';
import em from './email.png';
import tw from './twitter.png';
import gh from './github-logo.png';
import li from './linkedin.png';
import na from './under-construction.png';
import About from './About';
import TechsIntro from './TechsIntro.js';
import EmploymentStatus from './EmploymentStatus';
import SubscriptionForm from './SubscriptionForm.js';
import cloud from './cloud-computing.svg';
import gith from './github-big-logo.svg';
import htmli from './html-5.svg';
import nodeLogo from './nodejs.svg';

function App() {
  document.title="Cameron Blackwood";

    return (
    <div className="App">
      <div className="nav">
          <a href="#about">About Me</a>
          <a href="#techs">What I do</a>
          <a href="#projects">My Projects</a>
          <a href="#contact">Contact Me</a>
      </div>
      <div className="welcome">
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('C://$ Hello World! ')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(500).typeString('My name is Cam, a software engineer and former tech recruiter from London.')
      
      .start();
  }}
/>
      </div>
      <div className="about" id="about">
        <About/>
      </div>
      <div className="techs" id="techs">
        <TechsIntro/>
        <div className="icons">
          <img src={rjs} alt="ReactJS" className="imgItem"/>
          <img src={py} alt="python" className="imgItem" id="py"/>
          <img src={js} alt="javascript" className="imgItem"/>
          <img src={css} alt="css" className="imgItem"/>
        </div>
        <div className="icons">
          <img src={cloud} alt="AWS" className="imgItem"/>
          <img src={nodeLogo} alt="NodeJS" className="imgItem"/>
          <img src={htmli} alt="HTML5" className="imgItem"/>
          <img src={gith} alt="Git" className="imgItem"/>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Some of my projects - click them to see further details and to visit them online</h1>
        <div className="icons">
          <div className="imgItem" id="MotivationalQuotes"><img src={na} alt="na"/></div>
          <div className="imgItem" id="ShineEnergy"><img src={na} alt="na"/></div>
          <div className="imgItem" id="Kodflix"><img src={na} alt="na"/></div>
          </div>
          <div className="icons">
          <div className="imgItem" id="WeatherApp"><img src={na} alt="na"/></div>
          <div className="imgItem" id="Dog Quiz"><img src={na} alt="na"/></div>
          <div className="imgItem" id="Careers Page"><img src={na} alt="na"/></div>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact me</h1>
        <p>Feel free to get in touch with me via any of the below if you have any questions.</p>
        <div className="icons">
        <div className="imgItem">
          <a href="mailto:cameronjwblackwood@gmail.com"> <img src={em} alt="email"/></a>
          </div>
        <div className="imgItem"> 
          <a href="https://twitter.com/CamBlackwood95" rel="noopener noreferrer" target="_blank"> 
        <img src={tw} alt="Twitter"/></a>
        </div>
        <div className="imgItem"> 
          <a href="https://www.linkedin.com/in/cameron-blackwood-2b758883"  rel="noopener noreferrer" target="_blank"> 
          <img src={li} alt="Linkedin" /> </a>
        </div>
        <div className="imgItem">
          <a href="https://www.github.com/Reikon95"  rel="noopener noreferrer" target="_blank"> 
          <img src={gh} alt="Github"/> </a>
        </div>
        </div>
        <EmploymentStatus looking="yes"/>
        <SubscriptionForm/>

      </div>
      <div className="credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
