import React from 'react';
import DisplayTool from './DisplayTool'

function Spells({ url }) {
    return (
        <div>
            <DisplayTool url={url+"spells"} />
            <DisplayTool url={url+["magic-schools"]} />
        </div>
    );
}

export default Spells;