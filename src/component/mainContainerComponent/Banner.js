import React from 'react';
import Button from './Button';
//import Icon from '../navbarleftComponent/Icon';
//import BannerImg from '../assets/bannerImg.png';
import {ReactComponent as ReactmainBannerImg} from '../../component/assets/mainBannerImg.svg';
export default function Banner(props) {
    return (
        <section className="banner-section">
            <div className="banner">
                <h1>{props.title}</h1>
                <p className="lightSubtitle"> {props.subtitle} </p>
                <Button className='primary-btn btn' title ='Enroll Now!' btnUrl='#pricing'/>
            </div>

            <div className="img-col col" >

                <ReactmainBannerImg />
                {/* <img src={BannerImg} alt="banner image"/> */}

                {/* <Icon iconName='ri-html5-fill'  fontSize='60' color="#fcfcfc" title=''/>
                <Icon iconName='ri-css3-fill '  fontSize='60' color="#fcfcfc" title=''/>
                <Icon iconName='ri-code-box-fill'  fontSize='80' color="#fcfcfc" title=''/>
                <Icon iconName='ri-github-fill'  fontSize='60' color="#fcfcfc" title=''/>
                <Icon iconName='ri-reactjs-line'  fontSize='60' color="#fcfcfc" title=''/>
                <Icon iconName='ri-angularjs-fill'  fontSize='60' color="#fcfcfc" title=''/>
                <Icon iconName='ri-vuejs-fill'  fontSize='60' color="#fcfcfc" title=''/> */}
            </div>
            
        </section>
    )
}
