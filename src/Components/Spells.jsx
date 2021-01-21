import React from 'react';
import DisplayTool from './DisplayTool'

export default function Spells({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Spells</h1>
            <DisplayTool url={url+"spells"} wait={10000}/>
        </div>
    );
}

