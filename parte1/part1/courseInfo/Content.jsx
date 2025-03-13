import React from 'react';
import Parte from './Part';




const Content = (props) => {
    console.log('Props en content:', props)
   
    return (
        <>
        <Parte part={props.partes[0]} />
        <Parte part={props.partes[1]} />
        <Parte part={props.partes[2]} />
        </>
    );
}

export default Content;
