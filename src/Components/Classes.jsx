import React from 'react';
import DisplayTool from './DisplayTool';

export default function Classes({ url }) {
    return (
        <div>
            <h1>Classes</h1>
            <DisplayTool url={url+"classes"} wait={1500}/>
        </div>
    );
}

