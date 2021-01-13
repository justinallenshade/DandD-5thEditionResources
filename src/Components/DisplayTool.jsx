import React from 'react';

export default function DisplayTool({ url }) {
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let results = res.results
        console.log(results);
    })
    .catch(err => {
        console.log(`The arror is${err}`)
    })

    return (
        <div>
            <p>Dispaly tool {url}</p>
        </div>
    );
}
