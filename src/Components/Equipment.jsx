import React from 'react';
import DisplayTool from './DisplayTool';


export default function Equipment ({ url }) {
    return (
        <div>
            <DisplayTool url={url+"equipment"} />
            <DisplayTool url={url+["magic-items"]} />
        </div>
    );
}

