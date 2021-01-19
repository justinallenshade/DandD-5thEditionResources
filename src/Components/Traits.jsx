import React from 'react';
import { Link } from 'react-router-dom'

export default function Traits() {
    return (
        <div>
            <div className="charWhole">
                <Link to={'/traits/traits'} className="char">Traits</Link>
                <Link to={'/traits/skills'} className="char">Skills</Link>
                <Link to={'/traits/weapon'} className="char">Weapon traits</Link>
            </div>
            <p>Please select a category for me to search for</p>
        </div>
    );
}