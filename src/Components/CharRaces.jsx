import React from 'react';
import DisplayTool from './DisplayTool';

export default function CharRaces({ url }) {
    return (
         // displays the title of the tab and passes the url into the display component
        <div>
            <h1>Races</h1>
            <DisplayTool url={url+"races"} wait={800}/>
        </div>
    );
}

