import React from 'react';
import DisplayTool from './DisplayTool';

export default function Languages({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Languages</h1>
            <DisplayTool url={url+"languages"} wait={1000}/>
        </div>
    );
}

