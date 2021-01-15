import React from 'react';
import DisplayTool from './DisplayTool'

export default function Skill({ url }) {
    return (
        <div>
            <p>Skills</p>
            <DisplayTool url={url+"skills"} />
            <p>Weapon Properties</p>
            {/* <DisplayTool url={url+["weapon-properties"]} /> */}
        </div>
    );
}

