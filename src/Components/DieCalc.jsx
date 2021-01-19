import React,{ useState } from 'react';

export default function DieCalc(Die) {
    const [dieState, setDieState] = useState("Please Roll the die")
    const [countState, setCountState] = useState(0)

    function rollDice(event){
        event.preventDefault();
        setDieState(`Results: ${Math.floor(Math.random()*(Die.die +1) )}`);
        setCountState(countState + 1)
    }


    return (
        <div>
            <h2 className="dieDisplay">{dieState}</h2>
            <h3 className="dieDisplay">{`Roll: ${countState}`}</h3>
            <button className="dieButton" onClick={rollDice}>Roll Die</button>
        </div>
    );
}
