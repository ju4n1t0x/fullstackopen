import React from 'react';

const RandomButton = (props) => {
    return (
        <div>
          <button onClick={props.handleClick}>Next anecdote</button>  
        </div>
    );
}

export default RandomButton;
