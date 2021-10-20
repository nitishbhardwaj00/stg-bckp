import React from 'react';

export default function NavbarRightFooter(props){

    return(
        <section className="navbar-footer-section">
        <span 
            className= {props.iconName}  
            tooltip= {props.title} 
            style={{
                color:props.color , 
                fontSize:props.fontSize + 'px'}
            }>

        </span>

        
    </section>
    )
}