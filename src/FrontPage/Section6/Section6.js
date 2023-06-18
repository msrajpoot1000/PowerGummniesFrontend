import React,{useRef ,useState ,useEffect} from 'react';
import "./Section6.css"
import Slider from "react-slick";
import Slide1 from "./images/slide1.jpg";
import Slide2 from "./images/slide2.jpg";
import Slide3 from "./images/slide3.jpg";
import Slide4 from "./images/slide4.jpg";
import Slide5 from "./images/slide5.jpg";
import Slide6 from "./images/slide6.jpg";

function Section6() {
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
        <div className='Section6'>
            <div className='container section6Container'>
                <h1 className='Section6Heading'>Our Journal</h1>
                <Slider {...settings}>
                    <div className='SlidesSection6 '>
                        <img src={Slide1} />
                        <div className='Section6part2'>
                            <p>6 min read</p>
                            <h3 className='conten61'>How Brushing Can Benefit Your Beard Growth?</h3>
                            <h6>Beards have been a symbol of masculinity and strength for centuries. In recent years, the popularity of beards has grown, with more and more men em...</h6>
                        </div></div>
                    <div className='SlidesSection6'>
                        <img src={Slide2} /><div className='Section6part2'>
                            <p>6 min read</p>
                            <h3 className='conten61'>Stop Period Pain Immediately at Home with these 5 Proven Remedies</h3>
                            <h6>Periods Again? Oh! Those cramps! Can be really frustrating. Menstruation or as we say “Periods” is a natural process that occurs in the body of a w...</h6>
                        </div></div>
                    <div className='SlidesSection6'>
                        <img src={Slide3} />
                        <div className='Section6part2'>
                            <p>6 min read</p>
                            <h3 className='conten61'>Best & Fruitful Ways for Weight Management</h3>
                            <h6>With all those appetising and tasty fried, spicy, junk food, it becomes difficult to manage your weight. However, it is essential to maintain healt...</h6>
                        </div>
                    </div>
                    <div className='SlidesSection6'>
                        <img src={Slide4} />
                        <div className='Section6part2'>
                            <p>6 min read</p>
                            <h3 className='conten61'>Tips on How to Grow Hair Fast & Thicker?</h3>
                                                          <h6>With all those appetising and tasty fried, spicy, junk food, it becomes difficult to manage your weight. However, it is essential to maintain healt...</h6>

                        </div>
                    </div>
                    <div className='SlidesSection6 '>
                        <img src={Slide5} />
                        <div className='Section6part2'>
                            <p>6 min read</p>
                            <h3>Best Tips for Falling Asleep Fast</h3>
                            <h6>Long, shiny hair is the dream of many. Some might even have long hair but its thinness will make it look dull and dry. Besides having faster hair g...</h6>
                        </div>

                    </div>
                    <div className='SlidesSection6 '>
                        <img src={Slide6} />
                        <div className='Section6part2'>
                            <p>6 min read</p>
                            <h3 className='conten61'>How to Grow Beard Faster & Naturally at Home?</h3>
                            <h6>Sleeping at the right time can be a difficult task. Sometimes, even if you are sleeping at the correct time, getting quality sleep can be ...</h6>
                        </div>
                    </div>


                </Slider>
                <button>Visit BLog</button>
            </div>
        </div>
    )
}
export default Section6;