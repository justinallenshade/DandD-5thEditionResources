import React from 'react';
import DisplayTool from './DisplayTool'

export default function RuleSection({ url }) {
    return (
        <div>
            <h1>Rules Section</h1>
            <DisplayTool url={url+["rule-sections"]} wait={1000}/>
        </div>
    );
}

