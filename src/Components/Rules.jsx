import React from 'react';
import DisplayTool from './DisplayTool'

export default function Rules({ url }) {
    return (
        <div>
            <h1>Rules</h1>
            <DisplayTool url={url+"rules"} wait={400}/>
        </div>
    );
}
