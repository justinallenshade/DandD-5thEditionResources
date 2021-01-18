import React from 'react';
import DisplayTool from './DisplayTool'

export default function MagicSchools({ url }) {
    return (
        <div>
             <p>Magic Schools</p>
            <DisplayTool url={url+["magic-schools"]} wait={500}/>
        </div>
    );
}

