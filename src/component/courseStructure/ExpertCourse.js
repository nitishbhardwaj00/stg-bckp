import React from 'react';
import Hero from './Hero';
import Path from './Path';
import CoursePricing from './CoursePricing';
import Footer from '../mainContainerComponent/Footer';
import {ReactComponent as ReactBanner} from '../assets/react.svg';

export default function ExpertCourse(){
    return(
        <section className="expertcourses">
            

            <section className="hero-section">
                <Hero  
                    bannerText="The Senior Frontend Developer Career Path"
                    bannerSubText="This career path will turn you into a hireable Senior frontend Developer, and teach you how to nail the job interview. It contains over 70+ hours of top-notch tutorials, with coding challenges, and dozens of real-world projects."
                />
                <div className="img-col col">
                    <ReactBanner />
                </div>
                
            </section>

            <CoursePricing 
                pricing="5999" 
                progText="The program contains 31 modules. All modules are filled with interactive coding challenges to ensure that you don't fall off the wagon. You'll learn HTML, CSS, Animations for web, UI design, javaScript , React.js and how to comunicate with the https & Api calls, career strategy,  and more..."/>
            <Path />
            <Footer />
        </section>
    )
}