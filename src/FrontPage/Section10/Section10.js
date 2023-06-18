import React, { useRef, useState, useEffect } from 'react';
import "./Section10.css";
import Slider from "react-slick";

import Slide1 from "./images/slide1.png";
import Slide2 from "./images/slide2.png";
import Slide3 from "./images/slide3.png";
import Slide4 from "./images/slide4.png";
import Slide5 from "./images/slide5.png";

function Section10() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [NoOfslide, setNoOfslide] = useState(3)
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: NoOfslide,
        slidesToScroll: 1
    };


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

    return (
        <div className="Section10">
            <div className="container ContainerSection10">
                <h1 className="Section10Heading">Lifestyle Lounge</h1>
                <Slider {...settings}>
                    <div className="slidesSection10 ">
                        <img src={Slide1} />
                        <h2> Dapper Neem Comb for Beard</h2>
                        <p>INR 299.00</p>
                        <div className="Section10Buttons">
                            <button> BUY NOW</button>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="slidesSection10 ">
                        <img src={Slide2} />
                        <h2> Striped Three Layered Face Mask for Ultimate Protection</h2>
                        <p>INR 299.00</p>
                        <div className="Section10Buttons">

                            <button> BUY NOW</button>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="slidesSection10 ">
                        <img src={Slide3} />
                        <h2>Striped Sleeping Eye Mask For Sound Sleep</h2>
                        <p>INR 299.00</p>
                        <div className="Section10Buttons">
                            <button> BUY NOW</button>
                            <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="slidesSection10 ">
                            <img src={Slide4} />
                            <h2> Striped Foldable Travel Pillow</h2>
                            <p>INR 299.00</p>
                            <div className="Section10Buttons">

                                <button> BUY NOW</button>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="slidesSection10 s">
                            <img src={Slide5} />
                            <h2> Striped Lightweight and Handy Makeup Pouch</h2>
                            <p>INR 299.00</p>
                            <div className="Section10Buttons">
                                <button> BUY NOW</button>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                </Slider>
            </div>
        </div>
    )
}
export default Section10;