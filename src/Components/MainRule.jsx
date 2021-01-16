import React from 'react';
import { Link } from 'react-router-dom'

export default function MainRule() {
    return (
        <div>
             <div className="charWhole">
                <Link to={'/mainrule/rules'} className="char" >Rules</Link>
                <Link to={'/mainrule/rulesection'} className="char" >Rule Section</Link>
                <Link to={'/mainrule/features'} className="char" >Features</Link>
            </div>
        </div>
    );
}