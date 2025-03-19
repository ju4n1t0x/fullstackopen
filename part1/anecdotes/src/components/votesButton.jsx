import React from 'react';

const VotesButton = (props) => {
    return (
        <div>
           <button onClick={props.handleClick}>Vote</button> 
        </div>
    );
}

export default VotesButton;
