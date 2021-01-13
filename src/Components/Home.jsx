import React from 'react';

export default function Home({ url }) {
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let results = res
        console.log(results);
    })
    .catch(err => {
        console.log(`The arror is${err}`)
    })
    return (
        <div>
            <p>{url}</p>
        </div>
    );
}
