import React from 'react';
function getProjectDetails(props) {
    return (
        <div className="detailsBox">
        <h2>Project: {props.name}</h2>
        <h5>Technologies used: </h5>
        <p>{props.description}</p>
        <button><a href={props.link}>Check out {props.name}!</a></button>
        </div>
    )
}

export default getProjectDetails;