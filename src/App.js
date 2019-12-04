import React from 'react';
import './App.css';
import em from './Imgs/email.png';
import tw from './Imgs/twitter.png';
import gh from './Imgs/github-logo.png';
import li from './Imgs/linkedin.png';
import About from './About';
import TechsIntro from './TechsIntro.js';
import EmploymentStatus from './EmploymentStatus';
import SubscriptionForm from './SubscriptionForm.js';
import Projects from './Projects.js';
import GetTechs from './Techs.js';
import TypeEffect from './Components/TypeEffect.js'

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
    <TypeEffect/>
      </div>
      <div className="about" id="about">
                <About/>
        </div>

      <div className="techs" id="techs">
        <TechsIntro/>
        <GetTechs/>
      </div>
      <div className="projects" id="projects">
        <h1>Some of my projects - click them to see further details and to visit them online</h1>
        <em className="disclaimer">Please allow up to 30 seconds for some apps to load, due to Heroku restrictions.</em>
      </div>
      <Projects/>
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
