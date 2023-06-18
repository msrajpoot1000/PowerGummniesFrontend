// import React,{useState} from 'react';
// import "./Section1.css";
// import Banner1 from "./images/banner1.jpg";
// import Banner2 from "./images/banner2.jpg";
// import Banner3 from "./images/Banner3.png";
// import BannerBack1 from "./images/BannerBack1.png";
// import BannerBack2 from "./images/BannerBack2.jpeg";
// import BannerBack3 from "./images/bannerBack3.jpg";

// import Carousel from 'react-bootstrap/Carousel';
// import CarItem1LeftImg from './images/CarItem1LeftImg.png';

// import { useRef } from 'react';


// import Slider from "react-slick";
// function Section1() {
// const images = [
//    "https://powergummies.com/cdn/shop/files/gradiant_colour_website_1024x1024.png?v=1639567309",
//      "https://powergummies.com/cdn/shop/files/VERSUON-2-DAPPER-BACKGROUND-WITHOU-ICON_1024x1024.jpg?v=1666188663",
//      "https://powergummies.com/cdn/shop/files/VERSUON-2-DAPPER-BACKGROUND-WITHOU-ICON_1024x1024.jpg?v=1666188663",

//     ];

//     return (
//         <div className='Section1 '>
//                 <Carousel

//                     className=' CarlSection1 container Carousel  '  >
//                     <Carousel.Item>
//                         <div className='carlItem carItem1'>
//                             <div className='CartItemLeft1 CartItemLeft'>
//                                 <img className='cartLogo' src={CarItem1LeftImg} />
//                                 <h1> Health Powered by Happiness & Backed by Science</h1>
//                                 <h6>In just 90 days, experience the simple pleasure of running your fingers through your healthy hair.</h6>
//                                 <button > SHOP NOW</button>
//                             </div>
//                             <img className='Img' src={Banner1}></img>
//                         </div>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <div className='carlItem carItem2'>
//                             <div className='CartItemLeft2 CartItemLeft'>
//                                 <h1> Shraddha's secret to Gorgeous Hair & Nails</h1>
//                                 <h6> That's our 'Power Girl' you all have been falling for since forever. And she loves these Gummies just as much as we love your hair!</h6>
//                                 <button> SHOP NOW</button>
//                            </div>
//                             <img className='Img' src={Banner2}></img>
//                         </div>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <div className='carlItem carItem3'>
//                             <img className='Img CartItemImg3' src={Banner3}></img>
//                             <div className='CartItemLeft3 CartItemLeft'>
//                                 <h1> Get a Mane for the Man in You</h1>
//                                 <h6>That legendary hair and beard growth awaits you. get it today with Dapper Hair and Beard Gummies made for the man in you.</h6>
//                                 <button>SHOP NOW</button>
//                             </div>
//                         </div>
//                     </Carousel.Item>
//             </Carousel>

//             <Carousel
//                     autoPlay={false}
//                     interval={2000}
//                     controls={true}
//                     indicators={true}
//                     className=' CarlSection2 container Carousel  '  >
//                     <Carousel.Item>
//                     <div className='carlItem carItem1'>
//                             <img className='Img' src={Banner1}></img>
//                             <div className='CartItemLeft1 CartItemLeft'>
//                                 <h1> Health Powered by Happiness & Backed by Science</h1>
//                                 <h6>In just 90 days, experience the simple pleasure of running your fingers through your healthy hair.</h6>
//                                 <button  className='Btn'> SHOP NOW</button>
//                             </div>
//                         </div>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <div className='carlItem carItem2'>
//                             <img className='Img' src={Banner2}></img>
//                             <div className='CartItemLeft2 CartItemLeft'>
//                                 <h1> Shraddha's secret to Gorgeous Hair & Nails</h1>
//                                 <h6> That's our 'Power Girl' you all have been falling for since forever. And she loves these Gummies just as much as we love your hair!</h6>
//                                 <button> SHOP NOW</button>
//                            </div>
//                         </div>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <div className='carlItem carItem3'>
//                             <img className='Img CartItemImg3' src={Banner3}></img>
//                             <div className='CartItemLeft3 CartItemLeft'>
//                                 <h1> Get a Mane for the Man in You</h1>
//                                 <h6>That legendary hair and beard growth awaits you. get it today with Dapper Hair and Beard Gummies made for the man in you.</h6>
//                                 <button>SHOP NOW</button>
//                             </div>
//                         </div>
//                     </Carousel.Item>
//             </Carousel>

//             </div>
//     )
// }
// export default Section1;


import React, { useRef, useState, useEffect } from 'react';
import CarItem1LeftImg from './images/CarItem1LeftImg.png';

import "./Section1New.css";
import Banner1 from "./images/banner1.jpg";
import Banner2 from "./images/banner2.jpg";
import Banner3 from "./images/Banner3.png";
import BannerBack1 from "./images/BannerBack1.png";
import BannerBack2 from "./images/BannerBack2.jpeg";
import BannerBack3 from "./images/bannerBack3.jpg";
import Slider from "react-slick";


function Section1() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [NoOfslide, setNoOfslide] = useState(3);


    useEffect(() => {
        setWidth((window.innerWidth));
        setHeight((window.innerHeight));
        if (width < 993) {
            setNoOfslide(1);
        }
        else {
            setNoOfslide(3);
        }
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='Section1'>


            <div className='Section11'>
                <div className='container containerSection11'>
                    <Slider {...settings}>

                        <div className='Section11Slides'>
                            <div className='Section11SlidePartLeft'>
                                <img className='cartLogo' src={CarItem1LeftImg} />
                                <h1> Health Powered by Happiness & Backed by Science</h1>
                                <h6>In just 90 days, experience the simple pleasure of running your fingers through your healthy hair.</h6>
                                <button > SHOP NOW</button>
                            </div>
                            <div className='Section11SlidePartRight'>
                                <img className='Img' src={Banner1}></img>
                            </div>
                        </div>


                        <div className='Section11Slides'>
                            <div className='Section11SlidePartLeft'>
                                <h1> Shraddha's secret to Gorgeous Hair & Nails</h1>
                                <h6> That's our 'Power Girl' you all have been falling for since forever. And she loves these Gummies just as much as we love your hair!</h6>
                                <button> SHOP NOW</button>
                            </div>
                            <div className='Section11SlidePartRight'>
                                <img className='Img' src={Banner2}></img>
                            </div>
                        </div>
                        <div className='Section11Slides'>
                            <div className='Section11SlidePartLeft'>
                                <img className='Img CartItemImg3' src={Banner3}></img>
                            </div>
                            <div className='Section11SlidePartRight'>
                                <h1> Get a Mane for the Man in You</h1>
                                <h6>That legendary hair and beard growth awaits you. get it today with Dapper Hair and Beard Gummies made for the man in you.</h6>
                                <button>SHOP NOW</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='Section12'>
                <div className='container containerSection11'>
                    <Slider {...settings}>

                        <div className='Section12Slides'>
                            <img className='Img' src={Banner1}></img>
                            <img className='cartLogo' src={CarItem1LeftImg} />
                            <h1> Health Powered by Happiness & Backed by Science</h1>
                            <h6>In just 90 days, experience the simple pleasure of running your fingers through your healthy hair.</h6>
                            <button > SHOP NOW</button>
                        </div>


                        <div className='Section12Slides'>
                            <img className='Img' src={Banner2}></img>
                            <h1> Shraddha's secret to Gorgeous Hair & Nails</h1>
                            <h6> That's our 'Power Girl' you all have been falling for since forever. And she loves these Gummies just as much as we love your hair!</h6>
                            <button> SHOP NOW</button>
                        </div>
                        <div className='Section12Slides'>
                            <img className='Img CartItemImg3' src={Banner3}></img>
                            <h1> Get a Mane for the Man in You</h1>
                            <h6>That legendary hair and beard growth awaits you. get it today with Dapper Hair and Beard Gummies made for the man in you.</h6>
                            <button>SHOP NOW</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    )
}
export default Section1;