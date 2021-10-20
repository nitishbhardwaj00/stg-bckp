import React from 'react';

export default function Button(props){

    return(
        <a className={props.className} href={props.btnUrl}> {props.title}</a> 
    )
}