import React from 'react';
import Courses from './Courses';

export default function FeaturedCourses(){

return(
    <section className="featuredcourses">
        
            <div className="course-section pt-30 pb-15">
                <Courses title= "HTML" icon = "ri-html5-fill" path = "/BegineerCourse"/>
                <Courses title= "Css" icon = "ri-css3-fill" path = "/BegineerCourse"/>
                <Courses title= "Scss" icon = " " iconText="scss" path = "/BegineerCourse"/>
                <Courses title= "javaScript" icon = " " iconText="JS" path = "/IntermediateCourse"/>
                <Courses title= "jQuery" icon = " ri-code-box-fill" iconText="" path = "/IntermediateCourse"/>
                <Courses title= "React.js" icon = " ri-reactjs-line" iconText="" path = "/ExpertCourse"/>
            </div>



            


    </section>
    

)

}