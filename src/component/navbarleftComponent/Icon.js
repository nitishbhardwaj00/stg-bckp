import React from 'react';

export default function Social(props){

    return(
        <span className= {props.iconName}  tooltip= {props.title} style={{color:props.color , fontSize:props.fontSize + 'px'}}></span>
    )
}