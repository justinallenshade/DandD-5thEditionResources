import React from 'react';
import { Link } from 'react-router-dom'

function Damage({ url }) {
    return (
        <div>
            <div className="charWhole">
                <Link to={'/damage/types'} className="char" >Damage Types</Link>
                <Link to={'/damage/conditions'} className="char" >Damage Conditions</Link>
            </div>
            <p className="select">Please select a category for me to search from</p>
        </div>
    );
}

export default Damage;