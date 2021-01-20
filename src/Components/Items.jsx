import React from 'react';
import { Link } from 'react-router-dom'


export default function Items() {
    return (
        // creates the nav bar for the Items section
        <div>
            <div className="charWhole">
                <Link to={'/items/equipment'} className="char" >Equipment</Link>
                <Link to={'/items/magicitems/'} className="char" >Magic Items</Link>
            </div>
            <p className="select">Please select a category for me to search from</p>
        </div>
        
    );
}

