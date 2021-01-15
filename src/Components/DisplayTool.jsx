import React, { useState, useEffect } from 'react';
let arrName = [];
// let urlLayer2 = "https://www.dnd5eapi.co"


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
                {/* <p>{i.url}</p> */}
            </div>
        )});
        
        console.log(arrMain.map(i=> i.name));
        // console.log(url)

        
        
    })
    .catch(err => console.log(`Your spell fizzled out!- ${err}`))

    console.log(`gate 1 passed`)
}




export default function DisplayTool({ url }) {
    console.log(url)
    
    urlCall(url);
    
    const [state, setState] = useState([])
    useEffect(() => {
        setTimeout(() => {
            console.log(`use effect ran`)
            setState([arrName]);
        }, 650);
    },[]);


    console.log(`reached the return------------------------`);
    return (
        
        <div>
            {state}
        </div>
    );
}


