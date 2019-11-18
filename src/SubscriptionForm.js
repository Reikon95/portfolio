import React, { useState, useEffect } from 'react';
import './SubscriptionFormStyle.css';

function SubscriptionForm() {
    let [message, setMessage] = useState('');
    function handleSubmission() {
        setMessage('Thanks for submitting your details!')
    }        
        return <div className="container">
        <div className="item"><input type="text" placeholder="Enter your name"/></div>
        <div className="item"><input type="text" placeholder="Enter your email"/></div>
        <div className="item"><input type="text" placeholder="Enter your organisation"/></div>
        <div className="item"><button onClick={handleSubmission}>Submit</button><p>{message}</p></div>
        {/* <div className="item">{message}</div> */}
        </div>


}

export default SubscriptionForm;