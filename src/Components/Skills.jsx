import React from 'react';
import DisplayTool from './DisplayTool'

export default function Skill({ url }) {
    return (
        <div>
            <DisplayTool url={url+"skills"} />
        </div>
    );
}

