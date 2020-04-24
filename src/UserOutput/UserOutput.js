import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="userOutput">
            <p>My Name is : {props.userName} </p>
            <p>This is Second Paragraph.</p>
        </div>
    )
}

export default userOutput;