import React from 'react';
//import AnchoreLink from '../global/Link';
import { Link } from 'react-router-dom';

 

export default function CoursesDescription(props){

    return(
        <div className="courses-desc">
            <h3 className="coursetitle mb-15">{props.title}</h3>
            <p className="coursestext mb-15">{props.courseContent}</p>
            <Link to={props.path} className="link"> {props.text}</Link>  
            
        </div>
    )
}