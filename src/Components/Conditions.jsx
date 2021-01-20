import React from 'react';
import DisplayTool from './DisplayTool'

export default function Conditions({ url }) {
    return (
         // displays the title of the tab and passes the url into the display component
        <div>
            <h1>Conditions</h1>
            <DisplayTool url={url + "conditions"} wait={600}/>
        </div>
    );
}
