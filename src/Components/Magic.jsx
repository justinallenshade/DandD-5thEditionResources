import React from 'react';
import { Link } from 'react-router-dom'

export default function Magic() {
    // creates the nave bar for the Magic component
    return (
        <div>
            <div className="charWhole">
                <Link to={'/magic/spells'} className="char" >Spells</Link>
                <Link to={'/magic/schools'} className="char" >Magic Schools</Link>
            </div>
            <p className="select">Please select a category for me to search from</p>
        </div>
    );
}

