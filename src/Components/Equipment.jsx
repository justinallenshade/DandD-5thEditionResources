import React from 'react';
import DisplayTool from './DisplayTool';


export default function Equipment ({ url }) {
    return (
        <div>
            <h1>Equipment</h1>
            <DisplayTool url={url+"equipment"} wait={5000}/>
        </div>
    );
}

