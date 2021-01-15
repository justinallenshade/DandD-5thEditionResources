import React from 'react';
import DisplayTool from './DisplayTool';


export default function Equipment ({ url }) {
    return (
        <div>
            <p>Equipment</p>
            <DisplayTool url={url+"equipment"} />
        </div>
    );
}

