import React from 'react';
import DisplayTool from './DisplayTool'

export default function Features({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Features</h1>
            <DisplayTool url={url+"features"} wait={15000}/>
        </div>
    );
}
