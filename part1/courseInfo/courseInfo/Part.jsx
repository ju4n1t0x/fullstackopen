import React from 'react';
    


const Part = (props) => {
    console.log('props en part:', props)
    return (
       <>
        <p>{props.part.name} {props.part.exercises}</p>
    </> 
    );
}

export default Part;
