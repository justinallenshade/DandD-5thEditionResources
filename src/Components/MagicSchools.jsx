import React from 'react';
import DisplayTool from './DisplayTool'

export default function MagicSchools({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
             <h1>Magic Schools</h1>
            <DisplayTool url={url+["magic-schools"]} wait={1500}/>
        </div>
    );
}

