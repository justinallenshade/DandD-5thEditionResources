import './App.css';
import React from "react"
import { Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Spells from './Components/Spells'
import Character from './Components/Character'
import Monsters from './Components/Monsters'
import Equipment from './Components/Equipment'
import Damage from './Components/Damage'
import Skills from './Components/Skills'
import Rules from './Components/Rules'


export default function App() {
  let url = "https://www.dnd5eapi.co/api/"

  return (
    <div className="App">
        <div>
            <h1>D and D 5th edition resources</h1>
            <Header />
            <Route path="/" exact render={() => <Home url={url}/>} /> 
            <Route path="/magic" exact render={() => <Spells url={url}/>} /> 
            <Route path="/character" exact render={() => <Character url={url}/>} />
            <Route path="/monsters" exact render={() => <Monsters url={url}/>} /> 
            <Route path="/equipment" exact render={() => <Equipment url={url}/>} />
            <Route path="/damage" exact render={() => <Damage url={url}/>} />
        </div>
    </div>
  );
}

 
