import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypeEffectStyle.css'

export default function TypeEffect() {

    return (
    <div className="total">
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
</div>
)
}

