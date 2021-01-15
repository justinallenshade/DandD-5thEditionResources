import React from 'react';
import { Link } from 'react-router-dom';

export default function Character() {
   
    return (

        <div>
            <div className="charWhole">
                <Link to={'/character/classes'} className="char" >Classes</Link>
                <Link to={'/character/races'} className="char" >Races</Link>
                <Link to={'/character/subraces'} className="char" >Subraces</Link>
                <Link to={'/character/score'} className="char" >Ability Scores</Link>
                <Link to={'/character/languages'} className="char" >Languages</Link>
            </div>
            <div>
                <p>HIIIII</p>
            </div>

        </div>
      
    );
}
