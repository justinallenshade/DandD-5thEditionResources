import React from 'react';
import DisplayTool from './DisplayTool'

export default function Rules({ url }) {
    return (
        <div>
            <DisplayTool url={url+"rules"} />
            <DisplayTool url={url+["rule-sections"]} />
            <DisplayTool url={url+"features"} />
        </div>
    );
}
