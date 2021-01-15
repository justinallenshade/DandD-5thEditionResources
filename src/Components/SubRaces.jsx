import React from 'react';
import DisplayTool from './DisplayTool';

export default function SubRaces({ url }) {
    return (
        <div>
            <h1>Subraces</h1>
            <DisplayTool url={url+"subraces"} />
        </div>
    );
}

