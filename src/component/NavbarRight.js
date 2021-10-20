import React from 'react';
import NavbarRightHeader from './NavbarRightComponent/NavbarRightHeader';
//import Icon from './navbarleftComponent/Icon';
import NavbarRightFooter from './NavbarRightComponent/NavbarRightFooter';
//import MainContainer from './MainContainer';
//import BegineerCourse from './courseStructure/BegineerCourse';
import { NavLink , Link } from "react-router-dom";

  

export default function NavbarRight() {

  



    return (
        <div className="right-sidebar">
            <NavbarRightHeader iconName=" ri-menu-3-fill icon"
            fontSize='30' color="#8c8c8e" title='Facebook' />

            <ul className="nav">
               
                <li className="nav-link"><NavLink to="/BegineerCourse" activeClassName="active">Begineer front-end Courses</NavLink></li>
                <li className="nav-link"><NavLink to="/IntermediateCourse" activeClassName="active">Intermediate front-end Courses</NavLink></li>
                <li className="nav-link"><NavLink to="/ExpertCourse" activeClassName="active">Senior front-end Courses</NavLink></li>
            </ul>


        <div className="footer-icon">
        <section className="navbar-footer-section mb-5 code-icon">
            <Link to= '/MainEditor' className="Btn-link"> 
                <span className="ri-code-box-fill"></span>
            </Link>
            </section>
            <Link to= "/Form" className="">
                <NavbarRightFooter iconName="ri-feedback-fill" fontSize='30' color="#8e8e8e" title='Login'/>
            </Link>

            
            
        </div>
            </div>
        
    )
}
