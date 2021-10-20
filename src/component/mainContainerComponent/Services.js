import React from 'react';
import Title from '../navbarleftComponent/Titles';
import CoursesDescription from './CoursesDescription';


export default function Services(){

    return(
        <section className="course-desc">
            <Title title="Trending Courses" marginBottom= '30' />
            <div className="coursedescription">
                <CoursesDescription 
                title='HTML' 
                text="View the course structure >" 
                path='/BegineerCourse'
                courseContent = "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
                />


                <CoursesDescription 
                title='CSS' 
                text="View the course structure >" 
                path='/BegineerCourse'
                courseContent = "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is among the core languages of the open web."
                />

                <CoursesDescription 
                title='CSS Preprocessor' 
                text="View the course structure >" 
                path='/IntermediateCourse'
                courseContent = "Sass (syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). Sass reduces repetition of CSS and therefore saves time. The file is denoted by .sass or .scss formats"
                />

                <CoursesDescription 
                title='jQuery' 
                text="View the course structure >" 
                path='/IntermediateCourse'
                courseContent="jQuery is a JavaScript Library that focuses on simplifying DOM manipulation, AJAX calls, and Event handling. jQuery uses a format, $(selector).action() to assign an element(s) to an event. To explain it in detail, $(selector) will call jQuery to select selector element(s), and assign it to an event API called .action()."
                />

                <CoursesDescription 
                title='javaScript' 
                text="View the course structure" 
                path='/IntermediateCourse'
                courseContent="JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. JavaScript supports object-oriented programming with object prototypes, instead of classes."
                />

                <CoursesDescription 
                title='React.js' 
                text="View the course structure >" 
                path='/ComingSoon'
                courseContent = "React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. Ex:- React Native can be used to build mobile applications. React's main goal is to minimize bugs that occur when developers are building UIs."
                />
            </div>
        </section>
    )

    
}