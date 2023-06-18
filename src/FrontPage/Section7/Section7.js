import Section7Css from "./Section7.css";
import Slide1 from "./images/slide1.jpg";
import Slide2 from "./images/slide2.jpg";
import Slide3 from "./images/slide3.jpg";
import Slide4 from "./images/slide4.jpg";
import Slide5 from "./images/slide5.jpg";
import Slider from "react-slick";
function Section7() {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (

        <div className="Section7"> 
            <div className="container">
                <h1 className="Section7Heading">Meet Our Followers </h1>
                <Slider {...settings}>
                    <div className="SlidesSection7 Slide1">
                        <img src={Slide1}/>
                    </div>
                     <div className="SlidesSection7 Slide2">
                        <img src={Slide2}/>
                    </div>
                     <div className="SlidesSection7 Slide3">
                        <img src={Slide3}/>
                    </div>
                     <div className="SlidesSection7 Slide4">
                        <img src={Slide4}/>
                    </div>
                     <div className="SlidesSection7 Slide5">
                        <img src={Slide5}/>
                    </div>
                 </Slider>
           </div>
        </div>
    )
    
}
export default Section7;