import React from 'react';
import DisplayTool from './DisplayTool';


export default function Monsters({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Monsters</h1>
            <DisplayTool url={url+"monsters"} wait={12500}/>
        </div>
    );
}
