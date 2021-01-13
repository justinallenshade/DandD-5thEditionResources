import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header">
            <Link to={'/'}>Home</Link> 
            <Link to={'/character'}>Character</Link>
            <Link to={'/monsters'}>Monsters</Link>
            <Link to={'/magic'}>Spell and magic</Link>
            <Link to={'/equipment'}>Equipment and magic items</Link>
            <Link to={'/damage'}>Damage types and conditions</Link>
            <Link to={'/skills'}>Skills traits and weapon properties</Link>
            <Link to={'/rules'}>Rules and features</Link>
        </div>
    );
}
