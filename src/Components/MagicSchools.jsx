import React from 'react';
import DisplayTool from './DisplayTool'

export default function MagicSchools({ url }) {
    return (
        <div>
             <h1>Magic Schools</h1>
            <DisplayTool url={url+["magic-schools"]} wait={700}/>
        </div>
    );
}

