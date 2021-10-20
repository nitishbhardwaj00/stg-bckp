import React from 'react';

//import BannerImg from '../assets/hero.svg';



export default function Hero(props){
 




    return(
      <>
            <div className="text-col col">
              <h1 className="lightheadline">{props.bannerText}</h1>
              <p className="lightbodytext">{props.bannerSubText}</p>
          </div>
          
      
      </>
        
    
    )
}