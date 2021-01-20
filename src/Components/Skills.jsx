import React from 'react';
import DisplayTool from './DisplayTool'

export default function Skill({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Skills</h1>
            <DisplayTool url={url+"skills"} wait={700}/>
        </div>
    );
}

