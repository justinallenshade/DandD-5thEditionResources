import React from 'react';
import DisplayTool from './DisplayTool'

export default function Conditions({ url }) {
    return (
        <div>
            <h1>Conditions</h1>
            <DisplayTool url={url + "conditions"} wait={600}/>
        </div>
    );
}
