import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';

export default function D6(props) {
    return (
        <div>
            <DiceNav />
            <h1>D6</h1>
            <DieCalc die={6}/>
        </div>
    );
}
