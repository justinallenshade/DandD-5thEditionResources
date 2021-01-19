import React from 'react';
import { Link } from 'react-router-dom'

export default function DiceNav() {
    return (
        <div className="header">
            <Link to={'/die/d4'} className="char" >D4</Link> 
            <Link to={'/die/d6'} className="char" >D6</Link> 
            <Link to={'/die/d8'} className="char" >D8</Link> 
            <Link to={'/die/d10'} className="char" >D10</Link> 
            <Link to={'/die/d10perc'} className="char" >D10% </Link> 
            <Link to={'/die/d12'} className="char" >D12</Link> 
            <Link to={'/die/d20'} className="char" >D20</Link> 
        </div>
    );
}
