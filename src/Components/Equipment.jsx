import React from 'react';
import DisplayTool from './DisplayTool';


export default function Equipment ({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Equipment</h1>
            <DisplayTool url={url+"equipment"} wait={5000}/>
        </div>
    );
}

