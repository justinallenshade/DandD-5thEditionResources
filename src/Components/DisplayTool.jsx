import React, { useState } from 'react';

export default function DisplayTool({ url }) {

    let [result, setResultState] = useState([]);

    fetch(url)
    .then(res => res.json())
    .then(res => {
        let arr = res.results
        // console.log(arr);


        let arrName = arr.map(i => i.name);
        console.log(arrName);
        // let arrUrl = arr.map(i => i.url);
        // console.log(arrUrl);

       
        let k=0
        setResultState(arr.map(i => {
            return(
                <div key={k = k+1}> 
                    <p>{i.name}</p>
                    <p>{i.url}</p>
                </div>
            )
        },[]))

    })
   
    .catch(err => {
        console.log(`The arror is${err}`)
    })
    
    return (
        <div>
            {result}
        </div>
    );
}
