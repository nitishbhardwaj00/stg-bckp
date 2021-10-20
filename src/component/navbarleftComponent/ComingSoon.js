import React from 'react';
import ListOfCourses from './ListOfCourses';

 export default function ComingSoon(){

    return(
        <section className="">       
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='13' color="#8c8c8e" title="Share Market"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='13' color="#8c8c8e" title="Angular.js"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='13' color="#8c8c8e" title="Vue.js"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='13' color="#8c8c8e" title="Figma"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='13' color="#8c8c8e" title="Designer's specific "/>
        </section> 
    )
 }