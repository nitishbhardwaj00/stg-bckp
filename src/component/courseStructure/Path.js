import React, { useState } from 'react';
import Data from './CoursesData';

export default function Path(){

    const [isActive , setisActive] = useState(false);





    return(
        <section className="begineer-path">
                {
                    Data.map(item => {
                    return(
                        <section id={item.courseTitle}>
                           
                          

                                    {
                                        item.CourseModule.map(data => {
                                          
                                          return(
                                            <div className={isActive ? " accordion active": "accordion"} onClick = {()=> setisActive(!isActive)}>
                                            <div className="accordion-title mt-15" >
                                                <h2 className="lighSubtitle" ><span className="coursetitle">{item.courseTitle}:</span>{data.moduleTitle} </h2> 
                                                <h2 className="lighSubtitle" ><i className={isActive ? "ri-subtract-fill": "ri-add-fill"}></i></h2>
                                            </div>
                                            { isActive &&
                                           <div className="accordion-content">
                                                {
                                                    data.moduleSubtitle.map(subs => {
                                                        return(<li className="mb-5" >{subs}</li>)
                                                    })
                                                }
                                           </div>
                                        }
                                            </div>
                                       
                                            
                                          )
                                           
                                        })
                                    }
                                
                            

                                
                            </section>
                    )
                    })
                }
        </section>
    )}