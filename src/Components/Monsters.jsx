import React from 'react';
import DisplayTool from './DisplayTool';


export default function Monsters({ url }) {
    return (
        <div>
            <h1>Monsters</h1>
            <DisplayTool url={url+"monsters"} wait={8000}/>
        </div>
    );
}
