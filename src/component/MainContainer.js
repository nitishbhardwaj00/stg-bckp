import React from 'react';
import Banner from './mainContainerComponent/Banner'
import Services from './mainContainerComponent/Services'
import Pricing from './mainContainerComponent/Pricing'
import Footer from './mainContainerComponent/Footer'
export default function MainContainer(){

    return(
        <div className='maincontainercomponent'>
            <Banner 
            title="Let's learn together" 
            class=' banner-img visible'
            subtitle="& Turn into a coding magician"
            />
            <Services />
            <Pricing />
            <Footer />
        </div>
    )
}