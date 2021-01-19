import './App.css';
import React from "react"
import { Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'


import Character from './Components/Character'
import Classes from './Components/Classes'
import CharRaces from './Components/CharRaces'
import SubRaces from './Components/SubRaces'
import AbilityScores from './Components/AbilityScores'
import Languages from './Components/Languages'

import Monsters from './Components/Monsters'

import Magic from './Components/Magic'
import Spells from './Components/Spells'
import MagicSchools from './Components/MagicSchools'

import Items from './Components/Items'
import Equipment from './Components/Equipment'
import MagicItems from './Components/MagicItems'

import Damage from './Components/Damage'
import Conditions from './Components/Conditions'
import Types from './Components/Types'


import Traits from './Components/Traits'
import Skills from './Components/Skills'
import WeaponTraits from './Components/WeaponTraits'
import MainTraits from './Components/MainTraits'

import MainRule from './Components/MainRule'
import RuleSection from './Components/RuleSection'
import Features from './Components/Features'

import D4 from './Components/D4'
import D6 from './Components/D6'
import D8 from './Components/D8'
import D10 from './Components/D10'
import D10perc from './Components/D10perc'
import D12 from './Components/D12'
import D20 from './Components/D20'


export default function App() {
  let url = "https://www.dnd5eapi.co/api/"


  return (
    <div className="App">
        <div>
            <h1  className="text">D and D 5th edition resources</h1>
            <Header />
            <Route path="/" exact render={() => <Home url={url} />} /> 

            <Route path="/character" exact render={() => <Character url={url} />} />
            <Route path="/character/classes" exact render={() => <Classes url={url} />} />
            <Route path="/character/races" exact render={() => <CharRaces url={url} />} />
            <Route path="/character/subraces" exact render={() => <SubRaces url={url} />} />
            <Route path="/character/score" exact render={() => <AbilityScores url={url} />} />
            <Route path="/character/languages" exact render={() => <Languages url={url} />} />
            
            <Route path="/monsters" exact render={() => <Monsters url={url} />} /> 

            <Route path="/magic" exact render={() => <Magic url={url} />} />
            <Route path="/magic/schools" exact render={() => <MagicSchools url={url} />} />
            <Route path="/magic/spells" exact render={() => <Spells url={url} />} /> 
            
            
            <Route path="/items" exact render={() => <Items url={url} />} />
            <Route path="/items/equipment" exact render={() => <Equipment url={url} />} />
            <Route path="/items/magicitems" exact render={() => <MagicItems url={url} />} />
        
            <Route path="/damage" exact render={() => <Damage url={url} />} />
            <Route path="/damage/types" exact render={() => <Types url={url} />} />
            <Route path="/damage/conditions" exact render={() => <Conditions url={url} />} />
        
        
            <Route path="/traits" exact render={() => <Traits url={url}/>} />
            <Route path="/traits/skills" exact render={() => <Skills url={url}/>} />
            <Route path="/traits/weapon" exact render={() => <WeaponTraits url={url}/>} />
            <Route path="/traits/traits" exact render={() => <MainTraits url={url}/>} />
            
            <Route path="/mainrule" exact render={() => <MainRule url={url}/>} />
            <Route path="/mainrule/rulesection" exact render={() => <RuleSection url={url}/>} />
            <Route path="/mainrule/features" exact render={() => <Features url={url}/>} />
            
            <Route path="/die/d4" exact render={() => <D4 url={url} />} /> 
            <Route path="/die/d6" exact render={() => <D6 url={url} />} /> 
            <Route path="/die/d8" exact render={() => <D8 url={url} />} /> 
            <Route path="/die/d10" exact render={() => <D10 url={url} />} /> 
            <Route path="/die/d10perc" exact render={() => <D10perc url={url} />} /> 
            <Route path="/die/d12" exact render={() => <D12 url={url} />} /> 
            <Route path="/die/d20" exact render={() => <D20 url={url} />} /> 
            
        </div>
    </div>
  );
}

 
