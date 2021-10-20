import React from 'react';
import Hero from './Hero';
import Path from './Path';
import CoursePricing from './CoursePricing';
import Footer from '../mainContainerComponent/Footer';
import {ReactComponent as ReactBanner} from '../assets/hero.svg';
export default function BegineerCourse(){
    return(
        <section className="intermediatecourses">
            

            <section className="hero-section">
                <Hero  
                    bannerText="The Intermediate Frontend Developer Career Path"
                    bannerSubText="This career path will turn you into a hireable Intermediate frontend Developer, and teach you how to nail the job interview. It contains over 30 hours of top-notch tutorials, with coding challenges, and dozens of real-world projects."
                />
                <div className="img-col col">
                    <ReactBanner />
                </div>
                
            </section>









            <CoursePricing 
                pricing="4999" 
                progText="The program contains 22 modules. All modules are filled with interactive coding challenges to ensure that you don't fall off the wagon. You'll learn HTML, CSS, Animations for web, UI design, javaScript and how to comunicate with the https & Api calls, career strategy,  and more..."/>
            <Path />
            <Footer />
        </section>
    )
}