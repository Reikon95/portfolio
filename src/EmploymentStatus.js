import React from 'react';

function EmploymentStatus(props) {
    if (props.looking ==="yes") {
   return  <>
    <h3>Current Employment Status</h3>
        <p>I am <strong>AVAILABLE</strong> for permanent job opportunities
        starting Jan 2020. I'm happy to work anywhere in Zone 1/Zone 2 (or further out if it's South London), but will consider roles elsewhere
        if I love the sound of them!<br></br> <em>(If you have an office dog, this may or may not factor in...)</em></p>
        <p>Want to know when I'm on the lookout for jobs? Enter your email below and I'll keep you in the loop!</p>
    </>
    } else if (props.looking==="passive") {
        return  <>
        <h3>Current Employment Status</h3>
            <p>I am <strong>OPEN TO DISCUSSING</strong> permanent job opportunities
            but I'm not actively looking. I'm happy to work anywhere in Zone 1/Zone 2 (or further out if it's South London), but will consider roles elsewhere
            if I love the sound of them!<br></br> <em>(If you have an office dog, this may or may not factor in...)</em></p>
            <p>Want to know when I'm on the lookout for jobs? Enter your email below and I'll keep you in the loop!</p>
        </>
    } else {
       return <>
    <h3>Current Employment Status</h3>
        <p>Sorry, but I am <strong>UNAVAILABLE</strong> for job opportunities</p>
        <p>Want to know when I'm on the lookout for jobs? Enter your email below and I'll keep you in the loop!</p>
    </>
    }
}

export default EmploymentStatus