import React from 'react';
import DisplayTool from './DisplayTool';

export default function CharRaces({ url }) {
    return (
        <div>
            <h1>Races</h1>
            <DisplayTool url={url+"races"} wait={800}/>
        </div>
    );
}

