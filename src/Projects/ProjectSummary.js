import React, { Component } from 'react';
import './ProjectSummaryStyle.css'

function ProjectSummary(props) {
    return (
        <>
        <h1>{props.title}</h1>
        <h3>Functionality</h3>
        <p>{props.functionality}</p>
        <h3>What I used for this project</h3>
        <ul>
            <li>{props.tech1}</li>
            <li>{props.tech2}</li>
            <li>{props.tech3}</li>
        </ul>
        <h3>How to view this project</h3>
        <p>The project is deployed <a href={props.url}>here</a></p>
        </>
    )
    }
    export default ProjectSummary