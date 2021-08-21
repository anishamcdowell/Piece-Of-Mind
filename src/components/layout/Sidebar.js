import React from 'react';
import MoodSquare from '../partials/MoodSquare';

const Sidebar = () => {
    let bgColor = "gray";

    return (
        <div className="App-sidebar">
            <div className="mood-grid">
            {Array.from({ length: 365 }, (()=> <MoodSquare bgColor={bgColor}/>))}
            </div>
        </div>
    )
}

export default Sidebar;
