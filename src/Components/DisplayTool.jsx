import React, { useState, useEffect } from 'react';
let arrName = [];


let urlCondition = 0;
let layer2 = "https://www.dnd5eapi.co"



let mainArr = []
function stage2(url2){
    let call2 = layer2 + url2;

   
    fetch(call2)
    .then(res => res.json())
    .then(res => {
        // mainArr.push(res.name)
        mainArr= res.name
        console.log(mainArr)
    })
    
}

async function urlCall(url){
    await fetch(url)
    .then(res => res.json())
    .then(res => {
        let arrMain = res.results
        

        let k=0;
        arrName = arrMain.map(i => {
            
            return(
            <div key={k = k+1} className="results">
                <p>{i.name}</p>
                {stage2(i.url)}
                <p>{mainArr}</p>
                {console.log(mainArr)}
                <a href={layer2 + i.url} target="_blank" rel="noreferrer">More Info</a>
            </div>
            )
        });
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
        mainArr =[]
    }
    
    const [state, setState] = useState([])
    useEffect(() => {
        setTimeout(() => {
            console.log(`use effect ran`)
            setState(arrName);
        }, 1000);
    },[]);
   

    console.log(`reached the return------------------------`);

    return (
        
        <div className="wholeResults">
            {state}
        </div>
    );
}


