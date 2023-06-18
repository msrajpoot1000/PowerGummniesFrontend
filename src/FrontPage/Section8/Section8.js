import React,{useRef ,useState ,useEffect} from 'react';
import "./Section8.css";
import Slider from "react-slick";
import Slide1 from "./Images/Slide1.png";
import Slide2 from "./Images/Slide2.png";
import Slide3 from "./Images/Slide3.png";
import Slide4 from "./Images/Slide4.png";
import Slide5 from "./Images/Slide5.png";
import Rating from "../Section5/Rating";
function Section8() {
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
        slidesToShow: NoOfslide,
        slidesToScroll: NoOfslide
    };
    return (
        <div className='Section8'>
            <div className='container section8Container'>
                <div >
                    <h1 className='Section8Heading'>Get started with your Happy, healthy trip!</h1>
                </div>
                <Slider {...settings}>
                    <div className='Section8Slides'>
                        <img src={Slide1} />
                        <div className='Section8SlidePart2'>
                            <p> 1 Month</p>
                            <h2> The Beach Body Gummies</h2>
                            <div className='Section8Rating'><Rating /></div>
                            <h4 className='price'>MRP ₹ 1200.00</h4>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className='Section8Slides'>
                        <img src={Slide2} />
                        <div className='Section8SlidePart2'>
                            <p> 1 Month</p>
                            <h2> Gorgeous Hair Gummies</h2>
                            <div className='Section8Rating'><Rating /></div>
                            <h4 className='price'>MRP ₹ 1200.00</h4>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className='Section8Slides'>
                        <img src={Slide3} />
                        <div className='Section8SlidePart2'>
                            <p> 1 Month</p>
                            <h2> Jaw-Dropping Gummies </h2> 
                            <div className='Section8Rating'><Rating /></div>
                            <h4 className='price'>MRP ₹ 1300.00</h4>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className='Section8Slides'>
                        <img src={Slide4} />
                        <div className='Section8SlidePart2'>
                            <p> 1 Month</p>
                            <h2> Blessful Sleep Gummies</h2>
                            <div className='Section8Rating'><Rating /></div>
                            <h4 className='price'>MRP ₹ 999.00</h4>
                            <button>Buy Now</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className='Section8Slides'>
                        <img src={Slide5} />
                        <div className='Section8SlidePart2'>
                            <p className='Month'> 1 Month</p>
                            <h2> Dapper Hair And Beard Gummies</h2>
                            <div className='Section8Rating'><Rating />
                                <h4 className='price'>MRP ₹ 1200.00</h4>
                                <button>Buy Now</button>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Section8;