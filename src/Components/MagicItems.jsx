import React from 'react';
import DisplayTool from './DisplayTool'

export default function MAgicItems({ url }) {
    return (
        <div>
            <h1>Magic items</h1>
            <DisplayTool url={url+["magic-items"]} wait={6000}/>
        </div>
    );
}

