import React from 'react';
import DisplayTool from './DisplayTool'

export default function RuleSection({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Rules Section</h1>
            <DisplayTool url={url+["rule-sections"]} wait={1500}/>
        </div>
    );
}

