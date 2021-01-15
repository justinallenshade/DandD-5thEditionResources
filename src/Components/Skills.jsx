import React from 'react';
import DisplayTool from './DisplayTool'

export default function Skill({ url }) {
    return (
        <div>
            <h1>Skills</h1>
            <DisplayTool url={url+"skills"} />
        </div>
    );
}

