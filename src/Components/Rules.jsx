import React from 'react';
import DisplayTool from './DisplayTool'

export default function Rules({ url }) {
    return (
        <div>
            <p>Rules</p>
            <DisplayTool url={url+"rules"} />
            <p>Rule sections</p>
            <DisplayTool url={url+["rule-sections"]} />
            <p>Features</p>
            <DisplayTool url={url+"features"} />
        </div>
    );
}
