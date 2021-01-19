import React from 'react';
import { Link } from 'react-router-dom'

export default function Magic() {
    return (
        <div>
            <div className="charWhole">
                <Link to={'/magic/spells'} className="char" >Spells</Link>
                <Link to={'/magic/schools'} className="char" >Magic Schools</Link>
            </div>
            <p>Please select a category for me to search for</p>
        </div>
    );
}

