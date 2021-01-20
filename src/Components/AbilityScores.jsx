import React from 'react';
import DisplayTool from './DisplayTool';

export default function AbilityScores({ url }) {
    // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Ability scores</h1>
            <DisplayTool url={url+["ability-scores"]} wait={600}/>
        </div>
    );
}

