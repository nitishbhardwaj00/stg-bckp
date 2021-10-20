import React,{useState} from 'react';



export default function NavbarRightHeader(props) {
    const [isActive , setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
        <section className={isActive ? 'navbar-right-section active' : 'navbar-right-section'} onClick = {handleToggle}>
            <span 
                className={isActive ? 'ri-close-fill icon active' : 'ri-menu-3-fill icon'} onClick = {handleToggle}
                tooltip= {props.title} 
                style={{
                    color:props.color , 
                    fontSize:props.fontSize + 'px'}
                }>

            </span>
        </section>
    )
}