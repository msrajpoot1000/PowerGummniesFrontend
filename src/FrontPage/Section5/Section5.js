



import React, { useRef, useState, useEffect } from 'react';
import "./Section5.css";
import Slider from "react-slick";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.png";
import Img5 from "./images/img5.png";
import Img6 from "./images/img6.png";
import Img7 from "./images/img7.png";
import Img8 from "./images/img8.png";
import Img9 from "./images/img9.png";

import Rating from './Rating';

function Section5() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [NoOfslide, setNoOfslide] = useState(3)

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
        slidesToShow: NoOfslide,
        slidesToScroll: 1
    };

  

    return (
        <div className='Section5'>
            <div className='container ContainerSection5'>
                <div>
                    <h1 className='section5H1'>Hear from our Fans</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img1} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>
                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5> I am very picky with what products I use when it comes to hair care, but I can trust Power Gummies to the fullest</h5>
                                <h3 className='fansName'> Anam Nousheen </h3>
 
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img2} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>
                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5> I am very picky with what products I use when it comes to hair care, but I can trust Power Gummies to the fullest</h5>
                                <h3 className='fansName'> Simran </h3>
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img3} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>
                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5>
                                    I loved these collagen builder gummies because these vitamin gummies have improved my skin elasticity and maintained a natural glow.
                                </h5>
                                <h3 className='fansName'>
                                    Pratibha Chouhan
                                </h3>
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img4} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>
                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5>
                                    Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better.
                                </h5>
                                <h3 className='fansName'>
                                    Deepika
                                </h3>
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img6} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5> I am very picky with what products I use when it comes to hair care, but I can trust Power Gummies to the fulles </h5>
                                <h3 className='fansName'> Tanvi Shindee</h3>
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img7} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5>
                                    Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better.
                                </h5>
                                <h3 className='fansName'>Kushi</h3>
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img8} /> </div>
                            <div className='slidesSection5Part2'>
                                <div className='Section5rating'> <Rating /></div>                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                                <h5>  I am very picky with what products I use when it comes to hair care, but I can trust Power Gummies to the fullest</h5>
                                <h3 className='fansName'>Manasi</h3>
                            </div>
                        </div>

                        <div className="slidesSection5">
                            <div className='Section5slidesImg'><img src={Img9} /> </div>
                            <div className='rating'> <Rating /></div>                                <h4>   Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better </h4>
                            <div className='slidesSection5Part2'>
                                <h5> Great product! I’m really in love with these vitamin gummies. It actually helped me a lot to manage my period cramps and made me feel better. </h5>
                                <h3 className='fansName'>Saurav</h3>
                            </div>
                        </div>

                    </Slider>

                </div>
                <div className='Section5review'>
                    ALL REVIEW
                </div>
               

            </div>

        </div>
    )
}
export default Section5;




// *{
//     padding: 0px;
//     margin:0px;
// }
// .Section5{
//     border:1px solid red;
// }
// .section5H1{
//     text-align: center;
//     margin:4rem 0rem;
// }
// .ContainerSection5{
//     border:1px solid green;
// }

// .slidesSection5{
//     border:1px solid blue;
//     background-color: rgba(107,121,123,255);
//     /* padding: 0rem 1rem; */
//        height: 100%;
//        border-radius: 0px;;
// }

// .rating{
//     /* padding-top: 3rem; */
// }

// .slidesImg{
//    border:1px solid red;
//    display: flex;
//    justify-content: right;
//    background-color: white;
//    border-radius: 10px;
// }
// .slidesImg img{
// height: 8rem;
// width: 8rem;
// margin-right: 3rem;
// /* padding: 2rem; */
// z-index: 1;
// background-color: rgba(107,121,123,255);
// padding:1rem;
// border-radius: 100px;
// margin-bottom: -2rem;
// }

// .slidesSection5Part2{
//     /* margin-top: -2rem; */
//     z-index: 1;
//     /* position: relative; */
//     /* top:-2rem; */
//     color: white;
 
// }
// .rating{
//     margin-top: 2rem;
// }

// .fansName{
//     color:black;
// }
// .Section5review{

//     text-align: center;
//     margin: 3rem;
//     font-style: bold;
//     font-size: 1.5rem;
//     font-weight: 500;
// }
