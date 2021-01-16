import React from 'react';
import DisplayTool from './DisplayTool';

export default function Languages({ url }) {
    return (
        <div>
            <h1>Languages</h1>
            <DisplayTool url={url+"languages"} />
        </div>
    );
}
