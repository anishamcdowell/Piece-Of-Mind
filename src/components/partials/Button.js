import React from 'react';

const Button = ({text, bgcolor, color, fontSize, marginL, marginT, marginR, marginB}) => {
    return (
        <button 
            className="button" 
            style={{
                backgroundColor: `${bgcolor}`, 
                color: `${color}`,
                fontSize: `${fontSize}`,
                marginLeft: `${marginL}`, 
                marginTop: `${marginT}`,
                marginRight: `${marginR}`,
                marginBottom: `${marginB}`
            }}>
          {text}  
        </button>
    )
}

export default Button;
