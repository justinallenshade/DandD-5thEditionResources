import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';

export default function D10(props) {
    return (
        <div>
            <DiceNav />
            <h1>D10</h1>
            <DieCalc die={10}/>
        </div>
    );
}
