import React from 'react';
import { Link } from 'react-router-dom'

export default function MainRule() {
    return (
        <div>
             <div className="charWhole">
                <Link to={'/mainrule/rulesection'} className="char" >Rule Section</Link>
                <Link to={'/mainrule/features'} className="char" >Features</Link>
            </div>
            <p>Please select a category for me to search for</p>
        </div>
    );
}
