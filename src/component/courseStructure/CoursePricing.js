import React from 'react';
import QR from '../assets/QR.jpg';
import {Link } from 'react-router-dom';
export default function CoursePricing(props){

    return(
        <section className="pricing-section">
            <div className="prog-text">
                <h1 className="lightheadline">Your Program</h1>
                <p className="lightbodytext">{props.progText}</p>
                <h2 className="lightheadline mt-15 mb-10">How to pay?</h2>
                <p className="lightbodytext"> You just have to scan the QR through any payment getway app like <b>(phone pe, google pay & Paytm )</b>. At the time of Payment you have to write your valid email address and we will send the zoom link with timing. for any query please  <a href="mailTo:mnitishbhardwaj@gmail.com">send us an email</a> or call <a href="to:8882137405">8882137405</a>.</p>
                <Link to= "/Form" className="primary-btn btn mt-30">Connect with us</Link>
            </div>
            <div className="pricing-container">
                <img src={QR} alt="Qr code" className="qr-code"/>
                <p className="price-text mb-10">In Just ₹ {props.pricing}</p>
            </div>
        </section>
    )
}