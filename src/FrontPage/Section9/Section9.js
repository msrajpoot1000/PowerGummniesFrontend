import React from "react";
import "./Section9.css";
import Slider from "react-slick";

import Slide1 from "./images/slide1.jpg";
import Slide2 from "./images/slide2.jpg";
import Slide3 from "./images/slide3.jpg";
import Slide4 from "./images/slide4.jpg";
import Slide5 from "./images/slide5.jpg";

function Section9() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="Section9">
            <div className="container ContainerSection9">
                <h1 className="Section9Heading">Making Headlines</h1>
                <Slider {...settings}>
                    <div className="slidesSection9 slide1">
                        <img src={Slide1}/>
                    </div>
                    <div className="slidesSection9 slide2">
                        <img src={Slide2}/>
                    </div>
                    <div className="slidesSection9 slide3">
                        <img src={Slide3}/>
                    </div>
                    <div className="slidesSection9 slide4">
                        <img src={Slide4}/>
                    </div>
                    <div className="slidesSection9 slide5">
                        <img src={Slide5}/>
                    </div>
                 </Slider>
            </div>
        </div>
    )
}
export default Section9;