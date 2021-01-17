import React from 'react';
import DisplayTool from './DisplayTool';


export default function MainTraits({ url }) {
    return (
        <div>
            <h1>Traits</h1>
            <DisplayTool url={url+"traits"} />
        </div>
    );
}
