import React from 'react';

const DisplayMaxVotes = (props) => {
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[props.maxVotesIndex]}</p>
        </div>
    );
}

export default DisplayMaxVotes;
