import React from 'react';
import DisplayTool from './DisplayTool';


function Monsters({ url }) {
    return (
        <div>
            <DisplayTool url={url+"monsters"} />
        </div>
    );
}

export default Monsters;