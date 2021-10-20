import React from 'react';

export default function Titles(props){
    return(
        <h4 className="courseTitle mt-30" style= {{marginBottom:props.marginBottom + 'px'}}> {props.title} </h4>
    )
}