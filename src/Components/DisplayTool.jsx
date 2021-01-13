import React from 'react';

// when this is called all i need it to do is go throught
// eh array called and get the name and aditional url
// display the name and grab the url, in the return call
// another tool to display all of the wanted results.
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
