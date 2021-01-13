import React from 'react';
import DisplayTool from './DisplayTool';

function Damage({ url }) {
    return (
        <div>
            <DisplayTool url={url + ["damage-types"]} />
            <DisplayTool url={url + "conditions"} />
        </div>
    );
}

export default Damage;