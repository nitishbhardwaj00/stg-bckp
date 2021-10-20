import React from "react";
//import Logo from './component/navbarleftComponent/assets/logo.png';
import { Link } from 'react-router-dom';
export default function NavbarLeftHeader(props){
    return(
        <header className="nav-left-logo">
        <Link to='/' >
            <img src={props.logoUrl} alt="FrontEnd expert logo" className="logo mb-15"/>
        </Link>
        <h5 className = "name mb-10">FrontEnd Expert</h5>
        <p className="skills sm-text">Front-end Developer,<br /> HTML Developer</p>
        </header>
    )
   
}