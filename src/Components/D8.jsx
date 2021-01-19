import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';

export default function D8(props) {
    return (
        <div>
            <DiceNav />
            <h1>D8</h1>
            <DieCalc die={8}/>
        </div>
    );
}