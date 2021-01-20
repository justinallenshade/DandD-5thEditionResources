import React from 'react';
import DisplayTool from './DisplayTool';

export default function SubRaces({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Subraces</h1>
            <DisplayTool url={url+"subraces"} wait={700}/>
        </div>
    );
}

