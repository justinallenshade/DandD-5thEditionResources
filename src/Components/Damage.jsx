import React from 'react';
import DisplayTool from './DisplayTool';

function Damage({ url }) {
    return (
        <div>
            <p>Damage types</p>
            <DisplayTool url={url + ["damage-types"]} />
            <p>Conditions</p>
            {/* <DisplayTool url={url + "conditions"} /> */}
        </div>
    );
}

export default Damage;