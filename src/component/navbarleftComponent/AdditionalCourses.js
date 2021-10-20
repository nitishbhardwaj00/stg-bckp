import React from 'react';
import ListOfCourses from './ListOfCourses';

 export default function AdditionalCourses(){

    return(
        <section className="icons">       
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='16' color="#ffc107" title="Bootstrap"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='16' color="#ffc107" title="Materialize.css"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='16' color="#ffc107" title="Tailwind.css"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='16' color="#ffc107" title="JSX"/>
        <ListOfCourses iconName="ri-checkbox-fill" fontSize='16' color="#ffc107" title="Browser Testing"/>
        </section> 
    )
 }