import React from 'react';
import DisplayTool from './DisplayTool';

export default function Classes({ url }) {
    return (
         // displays the title of the tab and passes the url into the display component
        <div>
            <h1>Classes</h1>
            <DisplayTool url={url+"classes"} wait={1500}/>
        </div>
    );
}

