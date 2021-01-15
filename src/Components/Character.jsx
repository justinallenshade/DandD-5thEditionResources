import React from 'react';
import DisplayTool from './DisplayTool'

export default function Character({ url }) {
   
    return (
        <div>
            
            <p>classes</p>
            <DisplayTool url={url+"classes"} />
            
            
            <p>Ability scores</p>
            {/* <DisplayTool url={url+["ability-scores"]} /> */}
            <p>Character races</p>
            {/* <DisplayTool url={url+"races"} /> */}
            <p>Subraces</p>
            {/* <DisplayTool url={url+"subraces"} /> */}
            <p>Languages</p>
            {/* <DisplayTool url={url+"languages"} /> */}
            
        </div>
    );
}
