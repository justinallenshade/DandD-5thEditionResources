import React from 'react';
import DisplayTool from './DisplayTool'

export default function WeaponTraits({ url }) {
     // displays the title of the tab and passes the url into the display component
    return (
        <div>
            <h1>Weapon Traits</h1>
            <DisplayTool url={url+["weapon-properties"]} wait={500}/>
        </div>
    );
}