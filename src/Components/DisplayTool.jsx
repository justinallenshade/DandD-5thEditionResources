import React, { useState, useEffect } from 'react';
let arrName = [];
// let arrUrl = [];

async function urlCall(url){
    await fetch(url)
    .then(res => res.json())
    .then(res => {
        let arrMain = res.results

        let k=0;
        arrName = arrMain.map(i => 
        {return(
            <div key={k = k+1} className="results">
                <p>{i.name}</p>
            </div>
        )});
        
        console.log(arrMain.map(i=> i.name));
        // console.log(url)

        // arrUrl = arrMain.map(i => i.url);
        // console.log(arrUrl)
        
    })
    .catch(err => console.log(`Your spell fizzled out!- ${err}`))

    console.log(`gate 1 passed`)
}




export default function DisplayTool({ url }) {
    console.log(url)
    // figure out how to put an await here
    urlCall(url);
    
    const [state, setState] = useState([])
    useEffect(() => {
        setTimeout(() => {
            console.log(`use effect ran`)
            setState([arrName]);
        }, 500);
    },[]);


    console.log(`reached the return------------------------`);
    // console.log(arrName);
    return (
        
        <div>
            {state}
            <p>{url}</p>
        </div>
    );
}


