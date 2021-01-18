import React from 'react';
import DisplayTool from './DisplayTool'

export default function MAgicItems({ url }) {
    return (
        <div>
            <p>Magic items</p>
            <DisplayTool url={url+["magic-items"]} wait={5000}/>
        </div>
    );
}

