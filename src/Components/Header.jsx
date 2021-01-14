import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header">
            
            <Link to={'/'} className="tabs" >Home</Link> 
            <Link to={'/character'} className="tabs" >Character</Link>
            <Link to={'/monsters'} className="tabs" >Monsters</Link>
            <Link to={'/magic'} className="tabs" >Spell and magic</Link>
            <Link to={'/equipment'} className="tabs" >Equipment and magic items</Link>
            <Link to={'/damage'} className="tabs" >Damage types and conditions</Link>
            <Link to={'/skills'} className="tabs" >Skills traits and weapon properties</Link>
            <Link to={'/rules'} className="tabs" >Rules and features</Link>
        </div>
    );
}
