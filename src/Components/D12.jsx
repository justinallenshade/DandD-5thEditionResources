import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';

export default function D12(props) {
    return (
        <div>
            <DiceNav />
            <h1>D12</h1>
            <DieCalc die={12}/>
        </div>
    );
}
