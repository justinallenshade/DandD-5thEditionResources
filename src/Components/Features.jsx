import React from 'react';
import DisplayTool from './DisplayTool'

export default function Features({ url }) {
    return (
        <div>
            <h1>Features</h1>
            <DisplayTool url={url+"features"} wait={7750}/>
        </div>
    );
}
