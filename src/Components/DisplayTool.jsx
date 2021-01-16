import React, { useState, useEffect } from 'react';


let arrName = [];
let arrUrls = [];

let urlCondition = 0;
let layer2 = "https://www.dnd5eapi.co"

function urlCall2(url2){
    fetch(url2)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        arrUrls.push(res.name);
    })
    .catch(err => console.log(`failed to seduce the dragon----- ${err}`))
    console.log(`gate 2 passed`)
}

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
                {urlCall2(layer2 + i.url)}
                <p>{arrUrls}</p>
                
            </div>
            
        )});
        // console.log(arrUrls)
    })
   
    .catch(err => console.log(`Your spell fizzled out!- ${err}`))

    

    console.log(`gate 1 passed`)
    urlCondition = url
    
}




export default function DisplayTool({ url }) {
    console.log(url)
    
    
    if(urlCondition === 0 || urlCondition !== url){
        console.log(`conditional ran`)
        urlCall(url);
        arrUrls =[]
    }
    
    const [state, setState] = useState([])
    useEffect(() => {
        setTimeout(() => {
            console.log(`use effect ran`)
            setState(arrName);
        }, 10000);
    },[]);
   

    console.log(`reached the return------------------------`);
    
    return (
        
        <div className="wholeResults">
            {state}
           
        </div>
    );
}


