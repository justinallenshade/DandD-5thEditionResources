import React from 'react';
import DisplayTool from './DisplayTool';


export default function MainTraits({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Traits</h1>
            <DisplayTool url={url+"traits"} wait={1000}/>
        </div>
    );
}
