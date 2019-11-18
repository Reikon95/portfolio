import React, { useState, useEffect } from 'react';

function SubscriptionForm() {
    let [message, setMessage] = useState('');
    function handleSubmission() {
        setMessage('Thanks for submitting your details!')
    }

return <div className="submit"><input type="text" placeholder="Enter your name here"/>
        <input type="text" placeholder="Enter your email here"/>
        <input type="text" placeholder="Enter your organisation (if applicable) here"/>
        <button onClick={handleSubmission}>Submit</button>{message}</div>

}

export default SubscriptionForm;