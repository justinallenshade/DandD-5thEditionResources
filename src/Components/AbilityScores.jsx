import React from 'react';
import DisplayTool from './DisplayTool';

export default function AbilityScores({ url }) {
    return (
        <div>
            <h1>Ability scores</h1>
            <DisplayTool url={url+["ability-scores"]} wait={600}/>
        </div>
    );
}

