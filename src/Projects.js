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
            <a href="https://reikon95.github.io/MotivationalQuotes/" target="_blank"><button className="proButton">Launch App!</button></a>
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
        <h3>Kodflix</h3>
        <div className="projectFurtherDetails">
            This is a full stack application designed to replicate Netflix, using ReactJS, NodeJS, ExpressJs and MongoDB.
            <a href="https://kodflix-cjwb.herokuapp.com/" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>    
        </div>
        <div className="tileItem d">
        <h3>Weather App</h3>
        <div className="projectFurtherDetails">
            This is a simple responsive weather app using the OpenWeather API to deliver data about different locations. 
            The app is built in ReactJS.
            <a href="https://weather-checker-cjwb.herokuapp.com/" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>
        </div>
        <div className="tileItem e">
        <h3>Football App</h3>
        <div className="projectFurtherDetails">
            Find out which dog breed is suitable for you, using this ReactJS based quiz!
            <a href="https://github.com/Reikon95/Dont-Shop-Adopt" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>    
        </div>
            <div className="tileItem f">
            <h3>Festipal</h3>
            <div className="projectFurtherDetails">
            A simple webpage using the power of pure CSS to show a startup's team.
            <a href="https://github.com/Reikon95?tab=repositories" target="_blank"><button className="proButton">Launch App!</button></a>
        </div>
        </div>
    </div>
    </>
)

}

