import React from 'react';
import DisplayTool from './DisplayTool'

export default function Spells({ url }) {
    return (
        <div>
            <h1>Spells</h1>
            <DisplayTool url={url+"spells"} wait={7000}/>
        </div>
    );
}

