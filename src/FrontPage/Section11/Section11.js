import React from 'react';
import Fb from './images/fb.png';
import insta from './images/insta.png';
import Youtube from './images/youtube.png';

import "./Section11.css";
function Section11() {
    return (
        <div className='Section11' style={{backgroundColor : "#222222"}} >
            <div className='container Container'>
                <h2>About Us</h2>
                <div className='items'>
                    <h6 className='item'> WHO WE ARE</h6>
                    <h6 className='item'>  INGREDIENTS</h6>
                    <h6 className='item'>  OUR REVIEWS</h6>
                    <h6 className='item'>  CLINICALLY PROVEN RESULTS</h6>
                    <h6 className='item'>  CAREERS</h6>
                    <h6 className='item'>  STORE LOCATOR</h6>
                    <h6 className='item'> CLINICAL PROVEN - GORGEOUS HAIR & NAILS</h6>
                    <h6 className='item'> CLINICAL PROVEN - BEACH BODY</h6>
                    <h6 className='item'> POWER GUMMIES GIVEAWAY</h6>
                    <h6 className='item'>  SHRADDHA'S SECRET</h6>
                    <h6 className='item'>  FEATURED FAN'S PAGE</h6>
                    <h6 className='item'> LIFESTYLE LOUNGE</h6>
                </div>
                <h2>SUPPORT</h2>
                <div className='items'>
                    <h6 className='item'>CONTACT US </h6>
                    <h6 className='item'>TRACK ORDER STATUS</h6>
                    <h6 className='item'>RETURN & EXCHANGE</h6>
                    <h6 className='item'>PRIVACY POLICY</h6>
                    <h6 className='item'>SHIPPING & RETURNS</h6>
                    <h6 className='item'>TERMS & CONDITIONS</h6>
                </div>
                <h2>NO SPAM, ONLY HAPPINESS</h2>
                <div className='Email'>
                    <input placeholder='Email'></input>
                    <button>SUBSCRIBE</button>
                </div>
                {/* <div className='images'>
                    <img src={Fb} />
                    <img src={insta} />
                    <img src={Youtube} />
                </div> */}
              <hr/>
                <p>© 2023 Power Gummies, All Right Reserved.</p>
               

            </div>
        </div>
    )

}
export default Section11