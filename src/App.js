// todo 
// add routes 
import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import css from './css-3.png';
import js from './javascript.png';
import py from './python.png';
import rjs from './react.png';
import em from './email.png';
import tw from './twitter.png';
import gh from './github-logo.png';
import li from './linkedin.png';
import na from './under-construction.png';
function App() {
  document.title="Cameron Blackwood"
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
      .pauseFor(1500).typeString('My name is Cameron Blackwood, a software engineer and former tech recruiter from London.')
      
      .start();
  }}
/>
      </div>
      <div className="about" id="about">
        <h1>About Me</h1>
        <p>Born in Germany, I moved around a fair bit as a kid, eventually settling in the suburbs of London. I've now lived in 
          various parts of the capital for the past 15 years, making me the most English sounding Scot you'll ever encounter - though when
          rugby's on, there's no doubt of my origins! I started learning engineering
          in 2018 inspired by conversations with candidates due to my five year career in technical recruitment. During a stint at ThirdEye
          Labs as their talent acquisition manager, they offered me the chance to be an engineer part time. After loving this experience,
          I'm currently attending Kodiri to firm up on my MERN stack skills, due to graduate at the end of 2019. When I'm not coding, you
          can often find me playing ice hockey for the Streatham Wolves, watching rugby or reading the weirdest articles I can find on 
          Wikipedia. 
        </p>
      </div>
      <div className="techs" id="techs">
        <h1>What I work with</h1>
        <p>First and foremost, as cliche as it sounds, I'm a lifelong learner. If you want me to learn something, I gladly will! <br></br>
        That being said, I currently use...</p>
        <div className="icons">
          <img src={rjs} alt="ReactJS" className="imgItem"/>
          <img src={py} alt="python" className="imgItem"/>
          <img src={js} alt="javascript" className="imgItem"/>
          <img src={css} alt="css" className="imgItem"/>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Some of my projects - click them to see further details and to visit them online</h1>
        <div className="icons">
          <div className="imgItem"><img src={na} alt="na"/></div>
          <div className="imgItem"><img src={na} alt="na"/></div>
          <div className="imgItem"><img src={na} alt="na"/></div>
          </div>
          <div className="icons">
          <div className="imgItem"><img src={na} alt="na"/></div>
          <div className="imgItem"><img src={na} alt="na"/></div>
          <div className="imgItem"><img src={na} alt="na"/></div>
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
        <h3>Current Job Status</h3>
        <p>I am <strong>AVAILABLE</strong> for permanent job opportunities
        starting Jan 2020. I'm happy to work anywhere in Zone 1/Zone 2 (or further out if it's South London), but will consider roles elsewhere
        if I love the sound of them!<br></br> <em>(If you have an office dog, this may or may not factor in...)</em></p>
      </div>
      <div className="credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
