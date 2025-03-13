import React from 'react';
    


const Part = (props) => {
    console.log('props en part:', props)
    return (
       <>
        <p>{props.part.part} {props.part.exercises}</p>
    </> 
    );
}

export default Part;
