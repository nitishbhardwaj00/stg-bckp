import React from 'react';
import BeginnerPricing from './BeginnerPricing';
import { Link } from 'react-router-dom';

export default function PricingDesc(props){

    return(
        <div className="price-desc">
            <h3 className="pricetitle mb-15">{props.title}</h3>
            <p className="lightSubtitle mb-10"> {props.price}</p>
           
            <p className="pricetext mb-15">{props.pricingDescription}</p>
            <BeginnerPricing />

            <Link to={props.path} className="link mt-15"> {props.LinkTitle}</Link>  
        </div>
    )
}