import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

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
      .pauseFor(2500).typeString('My name is Cameron Blackwood, a software engineer from London, UK.')
      
      .start();
  }}
/>
      </div>
      <div className="about">
        <h1>About Me</h1>
        <p>Born in Germany, I moved around a fair bit as a kid, eventually settling in the suburbs of London. I've now lived in 
          various parts of the capital for the past 15 years, making me the most English sounding Scot you'll ever encounter. I started learning engineering
          in 2018 inspired by conversations with candidates due to my five year career in technical recruitment. During a stint at ThirdEye
          Labs as their talent acquisition manager, they offered me the chance to be an engineer part time. After loving this experience,
          I'm currently attending Kodiri to firm up on my MERN stack skills, due to graduate at the end of 2019. When I'm not coding, you
          can often find me playing ice hockey for the Streatham Wolves, watching rugby or reading the weirdest articles I can find on 
          Wikipedia. 
        </p>
      </div>
      <div className="techs" id="techs">
        <h1>What I work with</h1>
        <p>First and foremost, I'm a lifelong learner. If you want me to learn something, I gladly will! That being said, I currently use...</p>
        <div className="icons">
          <p>React</p>
          <p>Vanilla JS</p>
          <p>Python</p>
          <p>AWS</p>
          <p>CSS</p>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Some of my projects</h1>
        <div className="tiles">
          <p>React</p>
          <p>Vanilla JS</p>
          <p>Python</p>
          <p>AWS</p>
          <p>CSS</p>
        </div>
      </div>
      <div className="contact" id="contact">
        <h1>Contact me</h1>
        <p>Feel free to get in touch with me if you have any questions. Please note, I am <strong>AVAILABLE</strong>for job opportunities
        starting Jan 2020. I'm happy to work anywhere in Zone 1/Zone 2 (or further out if it's South London), but will consider roles elsewhere
        if I love the sound of them!</p>
      </div>
    </div>
  );
}

export default App;
