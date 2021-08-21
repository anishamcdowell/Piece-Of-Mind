import React from 'react';

const Button = ({text, bgColor, color, fontSize, margin, marginL, marginT, marginR, marginB}) => {
    return (
        <button 
            className="button" 
            style={{
                backgroundColor: `${bgColor}`, 
                color: `${color}`,
                fontSize: `${fontSize}`,
                margin: `${margin}`,
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
