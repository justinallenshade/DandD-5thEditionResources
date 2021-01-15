import React from 'react';
import DisplayTool from './DisplayTool'

function Spells({ url }) {
    return (
        <div>
            <p>Spells</p>
            <DisplayTool url={url+"spells"} />
            <p>Magic Schools</p>
            {/* <DisplayTool url={url+["magic-schools"]} /> */}
        </div>
    );
}

export default Spells;