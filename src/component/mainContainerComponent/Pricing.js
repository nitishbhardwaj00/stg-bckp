import React from 'react';
import PricingDesc from './PricingDesc';
import Title from '../navbarleftComponent/Titles';


export default function Pricing(){

    return(
        <div className="Pricing" id="pricing">
            <Title title= 'Pricing' marginBottom= '30'/>
            <div className="pricing-list">

            <PricingDesc 
            title="Front-end Beginner" 
            price =' ₹ 499 ' 
            className="beginner"
            path='/BegineerCourse'
            LinkTitle="Enroll Now!"
            pricingDescription = {<>This career path will turn you into a hireable Junior frontend Developer, and teach you how to nail the job interview. It contains over <span className="white-bold"> 30 hours</span>  of top-notch tutorials, with coding challenges, and dozens of real-world projects.</>}
            />

            <PricingDesc 
            title="Front-end Intermediate" 
            price =' ₹ 4999 ' 
            className="intermediate"
            path='/IntermediateCourse'
            LinkTitle="Enroll Now!"
            pricingDescription = {<>This career path will turn you into a hireable Frontend Developer, and teach you how to nail the job interview. It contains over <span className="white-bold"> 50 hours</span>   of top-notch tutorials, with coding challenges, and dozens of real-world projects.</>}
            />


            <PricingDesc 
            title="Front-end Expert" 
            price =' ₹ 5999 ' 
            className="expert"
            path='/ExpertCourse'
            LinkTitle="Enroll Now!"
            pricingDescription = {<>This career path will turn you into a hireable senior Frontend Developer, and teach you how to nail the job interview. It contains over <span className="white-bold"> 70 hours</span>  hours of top-notch tutorials, with coding challenges, and dozens of real-world projects.</>}
            />
            
            </div>
        </div>
        
    )
}