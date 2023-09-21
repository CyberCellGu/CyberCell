import React from "react";
import './Test.css';

function Test(){
    return(
        <div className="test-container">
            <h3>How much you know in cybersecurity?</h3>
            <p>Do you think you can beat the best hacker out there?</p>
            <p>Do you think you have a knack for gaining access of any computer or protecting your own computer from getting compromised?</p>
            <button type="submit" className="Test-button">
                Test yourself
            </button>
        </div>
    );
}

export default Test;