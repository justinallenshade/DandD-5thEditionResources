import React from 'react';
import DisplayTool from './DisplayTool'

export default function Types({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <div>
                <h1>Damage Types</h1>
                <DisplayTool url={url + ["damage-types"]} wait={1000}/>
            </div>
        </div>
    );
}

