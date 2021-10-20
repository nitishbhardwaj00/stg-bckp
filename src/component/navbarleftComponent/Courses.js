import React from 'react';
import { Link } from 'react-router-dom';

export default function Courses(props){
    return(

        
            <div className="coursestitle">
            <div className="course center">
            <Link to= {props.path} className="featured-courses-link"> 
                <span className={props.icon}>{props.iconText}</span>
                
                <h6>{props.title}</h6> 
                </Link>
            </div>
            </div>
        

       
        
        
    )
}