import React from 'react';

export default function AnchoreLink(props){
    return(
        <a href = {props.url} className="link"> {props.text} </a>
    )
}