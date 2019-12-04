import React from 'react';
import Typewriter from 'typewriter-effect';


export default function TypeEffect() {

    return (
    
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('$ Hello World! ')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(500).typeString('My name is Cam, a software engineer and former tech recruiter from London.')
      
      .start();
  }}
/>
)
}

