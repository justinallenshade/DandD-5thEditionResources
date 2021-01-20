import React from 'react';
import DiceNav from './DiceNav'
import DieCalc from './DieCalc';

export default function D10(props) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <DiceNav />
            <h1>D10</h1>
            <DieCalc die={10}/>
        </div>
    );
}
