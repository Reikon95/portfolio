import React from 'react';
import './Projects.css';

export default function Projects() {

return (
    <>
    <div className="tiles">
        <div className="tileItem a">
        <h3>Motivational Quote Generator</h3>
        <div className="projectFurtherDetails">
            This holds a special place in my heart - my first completed project! It uses vanilla Javascript to generate a new random quote
            every time you refresh the page.
            <button className="proButton">Launch App!</button>
        </div>
        </div>
        <div className="tileItem b">
        <h3>Shine Energy</h3> 
        <div className="projectFurtherDetails">
            I built this as part of a team of 3 in an internal hackathon. It's a bill calculator app, simulating an energy company. It uses ReactJS as its main tech.
            <button className="proButton">Launch App!</button>
        </div>    
        </div>
        <div className="tileItem c">
        <h3>Kodflix</h3>
        <div className="projectFurtherDetails">
            This is a full stack application designed to replicate Netflix, using ReactJS, NodeJS, ExpressJs and MongoDB.
            <button className="proButton">Launch App!</button>
        </div>    
        </div>
        <div className="tileItem d">
        <h3>Weather App</h3>
        <div className="projectFurtherDetails">
            This is a simple responsive weather app using the OpenWeather API to deliver data about different locations. 
            The app is built in ReactJS.
            <button className="proButton">Launch App!</button>
        </div>
        </div>
        <div className="tileItem e">
        <h3>Dog Quiz</h3>
        <div className="projectFurtherDetails">
            Find out which dog breed is suitable for you, using this ReactJS based quiz!
            <button className="proButton">Launch App!</button>
        </div>    
        </div>
            <div className="tileItem f">
            <h3>Careers Page</h3>
            <div className="projectFurtherDetails">
            A simple webpage using the power of pure CSS to show a startup's team.
            <button className="proButton">Launch App!</button>
        </div>
        </div>
    </div>
    </>
)

}

