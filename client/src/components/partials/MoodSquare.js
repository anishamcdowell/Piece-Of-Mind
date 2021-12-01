import React from 'react';

const MoodSquare = ({bgColor}) => {
    return (
        <span className="square" style={{backgroundColor: `${bgColor}`}}></span>
        //will need individual key/id when connected to db
    )
}

export default MoodSquare;
