import React from 'react';
import DisplayTool from './DisplayTool'

function Character({ url }) {
   
    return (
        <div>
            <DisplayTool url={url+"classes"} />
            <DisplayTool url={url+["ability-scores"]} />
            <DisplayTool url={url+"races"} />
            <DisplayTool url={url+"subraces"} />
            <DisplayTool url={url+"languages"} />
            
        </div>
    );
}

export default Character;