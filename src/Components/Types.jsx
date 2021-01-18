import React from 'react';
import DisplayTool from './DisplayTool'

export default function Types({ url }) {
    return (
        <div>
            <div>
                <h1>Damage Types</h1>
                <DisplayTool url={url + ["damage-types"]} wait={500}/>
            </div>
        </div>
    );
}

