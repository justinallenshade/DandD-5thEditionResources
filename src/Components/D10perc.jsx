import React,{ useState } from 'react';
import DiceNav from './DiceNav'

export default function DieCalc() {
    const [dieState, setDieState] = useState("Please Roll the die")
    const [countState, setCountState] = useState(0)

    function rollDice(event){
        event.preventDefault();
        setDieState(`Results: ${(Math.floor(Math.random()*11 ))*10}%`);
        setCountState(countState + 1)
    }


    return (
        <div>
            <DiceNav />
            <h1>D10%</h1>
            <h3 className="dieDisplay">{`Roll: ${countState}`}</h3>
            <h3 className="dieDisplay">{dieState}</h3>
            <button className="dieButton" onClick={rollDice}>Roll Die</button>
        </div>
    );
}
