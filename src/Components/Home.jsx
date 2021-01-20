import React from 'react';
import DiceNav from './DiceNav'

export default function Home() {
     // displays the title of the tab along with the starting information
    return (
        <div>
            <DiceNav />
            <h1>Welcome Adventurers!!</h1>
            <p className="introText">This is a collection of information that I have gathered along my travels.
                Please use it if you would like. Oh! I should also tell you to be careful,
                as the information is in my bag of holding and can take some time to retrieve. 
            </p>
        </div>
    );
}
