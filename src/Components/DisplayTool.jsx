import React, { useState, useEffect } from 'react';
let arrName = [];


let urlCondition = 0;
let layer2 = "https://www.dnd5eapi.co"


let subArr = []
let subArr2=[]
let subArr3=[]
let subArr4=[]
let subArr5=[]
let hitDie =[]
let savingThrows =[]
let spells = []
let url3=[]
let raceSpeed = []
let raceAlignemt = []
let abilityBonus =[];
let abilityBonusOptions =[]
let desc = []
let fullName =[]
let skills =[]
let language = []
let typicalSpeaker = []
let script =[]
let ritual =[]
let castingTime =[]
let spellLevel =[]
let concentration =[]
let duration = []
let material =[]
let range = []
let cost =[]
let equipmentCategory =[]
let weight = []
let featuresClass =[]

let mainArr = []
async function stage2(url2){
    let call2 = layer2 + url2;

    await fetch(call2)
    .then(res => res.json())
    .then(res => {
        subArr.push(res.name)
        subArr2.push(layer2 + res.url)
        subArr3.push(res.challenge_rating)
        subArr4.push(res.armor_class)
        subArr5.push(res.hit_points)
        hitDie.push(res.hit_die)
        savingThrows.push(res.saving_throws)
        url3.push(res.class_levels)
        spells.push(res.spells)
        raceSpeed.push(res.speed)
        abilityBonus.push(res.ability_bonuses)
        raceAlignemt.push(res.alignment)
        abilityBonusOptions.push(res.ability_bonus_options)
        desc.push(res.desc)
        fullName.push(res.full_name)
        skills.push(res.skills)
        language.push(res.type)
        typicalSpeaker.push(res.typical_speakers)
        script.push(res.script)
        castingTime.push(res.casting_time)
        spellLevel.push(res.level)
        concentration.push(res.concentration)
        duration.push(res.duration)
        material.push(res.material)
        range.push(res.range)
        ritual.push(res.ritual)
        cost.push(res.cost)
        equipmentCategory.push(res.equipment_category)
        weight.push(res.weight)
        featuresClass.push(res.class)

        
        let j =0;
        mainArr = arrName.map(i => {
            if(subArr3[j] !== undefined){
                return(
                    <div key={j = j+1} className="results">
                        <h3>{subArr[j]}</h3>
                        <p>{`Challenge rating: ${subArr3[j]}`}</p>
                        <p>{`armor class: ${subArr4[j]}`}</p>
                        <p>{`Hit points: ${subArr5[j]}`}</p>
                        <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                    </div>
                )
            }
            if(hitDie[j] !== undefined){
                if(spells[j] !== undefined){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Hit Die ${hitDie[j]}`}</p>
                            <p>{`Saving Thorws: ${savingThrows[j][0].name} and ${savingThrows[j][1].name}`}</p>
                            <p><a href={layer2 + url3[j]} target="_blank" rel="noreferrer">Level Info</a></p>
                            <p><a href={layer2 + spells[j]} target="_blank" rel="noreferrer">Spell Info</a></p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>
                    )
                }
                else{
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Hit Die ${hitDie[j]}`}</p>
                            <p>{`Saving Thorws: ${savingThrows[j][0].name} and ${savingThrows[j][1].name}`}</p>
                            <p><a href={layer2 + url3[j]} target="_blank" rel="noreferrer">Level Info</a></p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>
                    )
                }
            }
            if(abilityBonus[j] !== undefined){
                if(subArr[j] === "Dragonborn" || subArr[j] === "Half-Orc" || subArr[j] === "Tiefling"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Speed ${raceSpeed[j]}`}</p>
                            <p>{`Ability Bonuses ${abilityBonus[j][0].ability_score.name}: ${abilityBonus[j][0].bonus} ${abilityBonus[j][1].ability_score.name}: ${abilityBonus[j][1].bonus} `}</p>
                            <p>{raceAlignemt[j]}</p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>
                    )
                }
                if(subArr[j] === "Dwarf" || subArr[j] === "Elf" || subArr[j] === "Gnome" || subArr[j] === "Halfling"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Speed ${raceSpeed[j]}`}</p>
                            <p>{`Ability Bonuses ${abilityBonus[j][0].ability_score.name}: ${abilityBonus[j][0].bonus} `}</p>
                            <p>{raceAlignemt[j]}</p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>
                    )
                }
                if(subArr[j] === "Human"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Speed ${raceSpeed[j]}`}</p>
                            <p>{`Ability Bonuses ${abilityBonus[j][0].ability_score.name}: ${abilityBonus[j][0].bonus} ${abilityBonus[j][1].ability_score.name}: ${abilityBonus[j][1].bonus} ${abilityBonus[j][2].ability_score.name}: ${abilityBonus[j][2].bonus}`}</p>
                            <p>{` ${abilityBonus[j][3].ability_score.name}: ${abilityBonus[j][3].bonus} ${abilityBonus[j][4].ability_score.name}: ${abilityBonus[j][4].bonus} ${abilityBonus[j][5].ability_score.name}: ${abilityBonus[j][5].bonus}`}</p>
                            <p>{raceAlignemt[j]}</p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>
                    )
                }
                if(subArr[j] === "Half-Elf"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Speed ${raceSpeed[j]}`}</p>
                            <p>{`Ability Bonuses ${abilityBonus[j][0].ability_score.name}: ${abilityBonus[j][0].bonus} `}</p>
                            <p>{`Choose 2 ---${abilityBonusOptions[j].from[0].ability_score.name}:${abilityBonusOptions[j].from[0].bonus} ${abilityBonusOptions[j].from[1].ability_score.name}:${abilityBonusOptions[j].from[1].bonus} ${abilityBonusOptions[j].from[2].ability_score.name}:${abilityBonusOptions[j].from[2].bonus} ${abilityBonusOptions[j].from[3].ability_score.name}:${abilityBonusOptions[j].from[3].bonus} ${abilityBonusOptions[j].from[4].ability_score.name}:${abilityBonusOptions[j].from[4].bonus}`}</p>
                            <p>{raceAlignemt[j]}</p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>

                    )
                }
                if(subArr[j]=== "Hill Dwarf" || subArr[j]=== "High Elf" || subArr[j]=== "Lightfoot Halfling"|| subArr[j]=== "Rock Gnome"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{`Ability Bonuses ${abilityBonus[j][0].ability_score.name}: ${abilityBonus[j][0].bonus} `}</p>
                            <p>{desc[j]}</p>
                            <p> <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a></p>
                        </div>
                    )
                }
            }

            if(fullName !== undefined){
                if(fullName[j] === "Constitution"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{desc[j]}</p>
                            <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                        </div>
                    )
                }
                if(fullName[j] === "Strength"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{desc[j]}</p>
                            <p>{`Skills: ${skills[j][0].name}`}</p>
                            <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                        </div>
                    )
                }
                if(fullName[j] === "Dexterity"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{desc[j]}</p>
                            <p>{`Skills: ${skills[j][0].name}| ${skills[j][1].name}| ${skills[j][2].name}`}</p>
                            <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                        </div>
                    )
                }
                if(fullName[j] === "Charisma"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{desc[j]}</p>
                            <p>{`Skills: ${skills[j][0].name}| ${skills[j][1].name}| ${skills[j][2].name}| ${skills[j][3].name}`}</p>
                            <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                        </div>
                    )
                }
                if(fullName[j] === "Intelligence" || fullName[j] === "Wisdom"){
                    return(
                        <div key={j = j+1} className="results">
                            <h3>{subArr[j]}</h3>
                            <p>{desc[j]}</p>
                            <p>{`Skills: ${skills[j][0].name}| ${skills[j][1].name}| ${skills[j][2].name}| ${skills[j][3].name}| ${skills[j][4].name}`}</p>
                            <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                        </div>
                    )
                }
            }
            if(typicalSpeaker[j] !== undefined){
                return(
                    <div key={j = j+1} className="results">
                        <h3>{subArr[j]}</h3>
                        <p>{`Rarity: ${language[j]}`}</p>
                        <p>{`Typical speakers: ${typicalSpeaker[j]}`}</p>
                        <p>{`Script: ${script[j]}`}</p>
                        <p>{desc[j]}</p>
                        <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                    </div>
                )
            }
           if(castingTime[j] !== undefined){
            return(
                <div key={j = j+1} className="results">
                    <h3>{subArr[j]}</h3>
                    <p>{`Spell Level: ${spellLevel[j]}`}</p>
                    <p>{`Spell range: ${range[j]}`}</p>
                    <p>{`Spell Duration: ${duration[j]}`}</p>
                    <p>{`Casting time: ${castingTime[j]}`}</p>
                    <p>{`Concentration: ${concentration[j]}`}</p>
                    <p>{`Ritual: ${ritual[j]}`}</p>
                    <p>{`Materials: ${material[j]}`}</p>
                    <p>{desc[j]}</p>
                    <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                </div>
                )
            }
            if(cost[j] !== undefined){
                return(
                    <div key={j = j+1} className="results">
                        <h3>{subArr[j]}</h3>
                        <p>{`Category: ${equipmentCategory[j].name}`}</p>
                        <p>{`Weight: ${weight[j]}`}</p>
                        <p>{`Cost ${cost[j].quantity} in ${cost[j].unit}`}</p>
                        <p>{desc[j]}</p>
                        <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                    </div>
                )
            }
            if(equipmentCategory[j] !== undefined){
                return(
                    <div key={j = j+1} className="results">
                        <h3>{subArr[j]}</h3>
                        <p>{`Category: ${equipmentCategory[j].name}`}</p>
                        <p>{desc[j]}</p>
                        <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                    </div>
                )
            }
            if(featuresClass[j] !== undefined){
                return(
                    <div key={j = j+1} className="results">
                        <h3>{subArr[j]}</h3>
                        <p>{`Level: ${spellLevel[j]}`}</p>
                        <p>{`Class ${featuresClass[j].name}`}</p>
                        <p>{desc[j]}</p>
                        <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                    </div>
                )
            }
           
            return(
                <div key={j = j+1} className="results">
                    <p>{subArr[j]}</p>
                    <p>{desc[j]}</p>
                    <a href={subArr2[j]} target="_blank" rel="noreferrer">More Info</a>
                </div>
            )
            
        })
    })
    .catch(err => {return(
        <div>
            <p>{`You cast wish and it fails: ${err}`}</p>
        </div>
    )})
    
}

async function urlCall(url){
    await fetch(url)
    .then(res => res.json())
    .then(res => {
        let arrMain = res.results

        let k=0;
        arrName = arrMain.map(i => { 
            return(
            <div key={k = k+1} className="wholeResults">
                {stage2(i.url)}
            </div>
            )
        });
    })
   
    .catch(err => {return(
        <div>
            <p>{`An Ancient Red Dragon aproaches: ${err}`}</p>
        </div>
    )})

    urlCondition = url
}

export default function DisplayTool({ url, wait }) {

    if(urlCondition === 0 || urlCondition !== url){
        urlCall(url);
        subArr=[]
        subArr2=[]
        subArr3=[]
        subArr4=[]
        subArr5=[]
        hitDie=[]
        savingThrows =[]
        spells =[]
        url3 =[]
        raceSpeed =[]
        abilityBonus = []
        raceAlignemt =[]
        abilityBonusOptions =[]
        desc =[]
        fullName=[]
        skills=[]
        typicalSpeaker =[]
        language =[]
        script=[]
        castingTime =[]
        spellLevel =[]
        concentration =[]
        duration = []
        material =[]
        range = []
        ritual=[]
        cost =[]
        equipmentCategory =[]
        weight = []
        featuresClass =[]
    }
    
    const [state, setState] = useState([])
    useEffect(() => {
        setState('Rummaging through bag of holding...')
        setTimeout(() => {
            setState(mainArr);
        }, wait);
    },[wait]);
   

    return (
        <div className="wholeResults">
            {state}
        </div>
    );
}
