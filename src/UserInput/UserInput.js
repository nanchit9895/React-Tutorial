import React from 'react';

const userInput = (props) => {
    const textboxStyle = {
        border: "2px solid red",
        marginTop: "50px"
    };

    return <input type="text" 
            style= {textboxStyle}
            onChange={props.changed} 
            value={props.currentName}
            />;
    
}

export default userInput;