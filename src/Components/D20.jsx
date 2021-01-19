import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';

export default function D20(props) {
    return (
        <div>
            <DiceNav />
            <h1>D20</h1>
            <DieCalc die={20}/>
        </div>
    );
}
