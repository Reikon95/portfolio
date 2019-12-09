import React from 'react';
import './Projects.css';

export default function Projects() {

return (
    <>
    <div className="tiles">
        <div className="tileItem a">
        <h3>Motivational Quote Generator</h3>
        <div className="projectFurtherDetails">
            This holds a special place in my heart - my first completed project! It previously used vanilla Javascript to generate a new random quote
            every time you refresh the page, but I've refactored it with react hooks to retrieve a new quote from a small database every 5 seconds.
            <a href="https://motivationalquotes.cameronjwblackwood.now.sh/" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>
        </div>
        <div className="tileItem b">
        <h3>Shine Energy</h3> 
        <div className="projectFurtherDetails">
            I built this as part of a team of 3 in an internal hackathon. It's a bill calculator app, simulating an energy company. It uses ReactJS as its main tech.
            <a href="https://github.com/Reikon95/Shine-Energy" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>    
        </div>
        <div className="tileItem c">
        <h3>Kodflix*</h3>
        <div className="projectFurtherDetails">
            This is a full stack application designed to replicate Netflix, using ReactJS, NodeJS, ExpressJs and MongoDB.
            <a href="https://kodflix-cjwb.herokuapp.com/" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>    
        </div>
        <div className="tileItem d">
        <h3>Weather App*</h3>
        <div className="projectFurtherDetails">
            This is a simple responsive weather app using the OpenWeather API to deliver data about different locations. 
            The app is built in ReactJS.
            <a href="https://weather-checker-cjwb.herokuapp.com/" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>
        </div>
        <div className="tileItem e">
        <h3>Football App</h3>
        <div className="projectFurtherDetails">
            A football fan companion app, still in development - you can launch the repo though!
            <a href="https://github.com/Reikon95/FootballPerformanceDashboard" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>    
        </div>
            <div className="tileItem f">
            <h3>Festipal*</h3>
            <div className="projectFurtherDetails">
            Team application which generates a event websites according to parameters. 
            <a href="https://festipal-kodiri.herokuapp.com/" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>
        </div>
    </div>
    </>
)

}

