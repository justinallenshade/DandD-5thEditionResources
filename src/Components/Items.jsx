import React from 'react';
import { Link } from 'react-router-dom'


export default function Items() {
    return (
        
        <div>
            <div className="charWhole">
                <Link to={'/items/equipment'} className="char" >Equipment</Link>
                <Link to={'/items/magicitems/'} className="char" >Magic Items</Link>
            </div>
        </div>
        
    );
}

