import React,{ useState } from 'react';


export default function DieCalc(Die) {
    const [dieState, setDieState] = useState("Please Roll the die")
    const [countState, setCountState] = useState(0)

    // sets state to a random number on button click
    function rollDice(event){
        event.preventDefault();
        setDieState(`Results: ${Math.floor(Math.random()*(Die.die +1) )}`);
        setCountState(countState + 1)
    }
    // creates and returns the display for each die
    return (
        <div>
            <h2 className="dieDisplay">{dieState}</h2>
            <h3 className="dieDisplay">{`Roll: ${countState}`}</h3>
            <div className="text">
                <button className="dieButton" onClick={rollDice}>Roll Die</button>
            </div>
        </div>
    );
}
