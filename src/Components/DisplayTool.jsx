import React from 'react';
let arrName = [];
// let arrUrl = [];

async function urlCall(url){
    await fetch(url)
    .then(res => res.json())
    .then(res => {
        let arrMain = res.results

        arrName = arrMain.map(i => i.name);
        // console.log(`the name array is ` + arrName);
        // console.log(url)

        // arrUrl = arrMain.map(i => i.url);
        // console.log(arrUrl)
        
    })
    .catch(err => console.log(`Your spell fizzled out!- ${err}`))

    console.log(`gate 1 passed`)
}

export default function DisplayTool({ url }) {
    // console.log(`the name array is ` + arrName);
    console.log(url)

    // figure out how to put an await here
    urlCall(url)
    
    console.log(`the name array is ` + arrName);
    return (

        <div>
            <p>{arrName}</p>
            <p>{url}</p>
        </div>
    );
}
