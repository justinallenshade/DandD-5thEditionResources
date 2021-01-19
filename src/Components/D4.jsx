import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';


export default function D4(props) {

    return (
        <div>
            <DiceNav />
            <h1>D4</h1>
            <DieCalc die={4}/>
        </div>
    );
}

