import React from 'react';
import DisplayTool from './DisplayTool'

export default function Spells({ url }) {
    return (
        <div>
            <p>Spells</p>
            <DisplayTool url={url+"spells"} />
        </div>
    );
}

