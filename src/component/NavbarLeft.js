import React from 'react';
import Logo from './assets/logo.png';
import NavbarLeftHeader from './navbarleftComponent/NavbarLeftHeader';
import FeaturedCourses from './navbarleftComponent/FeaturedCourses';
import Title from './navbarleftComponent/Titles';
import Divider from './navbarleftComponent/Divider';
//import ListOfCourses from './navbarleftComponent/ListOfCourses';
import Icon from './navbarleftComponent/Icon';
import AdditionalCourses from './navbarleftComponent/AdditionalCourses';
import ComingSoon from './navbarleftComponent/ComingSoon';


function NavbarLeft() {
    return (
        <section className="left-sidebar">
            
        <NavbarLeftHeader logoUrl={Logo} />


            <section className="all-courses p-0-30">
            {/* Featured Courses */}
            
                <Title title="Featured Courses"  />
                <FeaturedCourses />
                <Divider />
            

            {/* Additional courses */}
            <Title title="Additional Courses" marginBottom= '30' />
              <AdditionalCourses />
                <Divider />
            
            {/* coming soon courses */}
            <Title title="Coming Soon..." marginBottom= '30' />
              <ComingSoon />


            {/* Social */}
            <section className="social-section">
            <div className="social-container">
                <Icon iconName='ri-facebook-fill'  fontSize='16' color="#8c8c8e" title='Facebook'/>
                <Icon iconName='ri-twitter-fill'  fontSize='16' color="#8c8c8e" title='Twitter'/>
                <Icon iconName='ri-youtube-fill'  fontSize='16' color="#8c8c8e" title='Youtube'/>
                <Icon iconName='ri-discord-fill'  fontSize='16' color="#8c8c8e" title='Discord'/>
                </div>
                </section>
                </section>
        </section>
    )
}

export default NavbarLeft
