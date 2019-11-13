import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
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
      </div>
      <div className="techs">
        <h1>What I work with</h1>
      </div>
      <div className="projects">
        <h1>Some of my projects</h1>
      </div>
      <div className="contact">
        <h1>Contact me</h1>
      </div>
    </div>
  );
}

export default App;
