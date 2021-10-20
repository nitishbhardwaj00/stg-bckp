import React from 'react';
import {ReactComponent as ReactBanner} from '../assets/comingSoon.svg';
import { Link } from 'react-router-dom';
export default function ComingSoon(){
    return(
        <section className="coming-soon">
            <div className="">
                <h1 className="lightheadline">Coming Soon ...!</h1>
                <p className="lightbodytext">Let's checkout some other courses you may be interested in ...</p>
                <Link to= '/IntermediateCourse' className="primary-btn btn mt-15 btn">Click Here</Link>  
            </div>
            <div className="img-col col">
                <ReactBanner />
            </div>
        </section>

    )
    
}