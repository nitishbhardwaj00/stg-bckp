import React from 'react';
import ListOfCourses from '../navbarleftComponent/ListOfCourses';

export default function BeginnerPricing(){

    return(
        <section>
        <div className="beginnerpricing">
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="HTML + CSS"/>
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="Css Libraries "/>
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="3 live project implementation "/>
        </div>


        <div className="Intermediatepricing">
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="javaScript"/>
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title=" All Beginner Courses"/>
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="5 live project implementation "/>
        </div>

        <div className="expertpricing">
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="React.js"/>
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='11' color="#ffc107" title=" Beginner + Intermediate Courses"/>
            <ListOfCourses iconName="ri-checkbox-fill" fontSize='12' color="#ffc107" title="7 live project implementation "/>
        </div>
        </section>
    )
}