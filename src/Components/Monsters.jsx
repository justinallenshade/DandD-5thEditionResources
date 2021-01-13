import React from 'react';
import DisplayTool from './DisplayTool';


function Monsters({ url }) {
    return (
        <div>
            <p>Monsters</p>
            <DisplayTool url={url+"monsters"} />
        </div>
    );
}

export default Monsters;