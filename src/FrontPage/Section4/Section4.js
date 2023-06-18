import React, { useState } from 'react';
import "./Section4.css";
import Collapse from 'react-bootstrap/Collapse';

import CircleDoll from './images/circleDoll.png';
import Section4Pic2 from './images/Section4Pic2.png';
function Section4() {
    const [openItem1, setOpenItem1] = useState(false);
    const [openItem2, setOpenItem2] = useState(false);
    const [openItem3, setOpenItem3] = useState(false);
    return (
        <div className='Section4'>
            <div className='section4Container container '>
                <div className='s41'>
                    <div className='s411'>
                        <h1>We Are DelightFul And effective </h1>
                    </div>
                    <div className='s412Collapse'>
                        <div className="Collapse1 CollapseItem">
                            <div className='TwoButton'>
                                <button className="CollapseItemBtn word" onClick={() => setOpenItem1(!openItem1)} aria-controls="example-collapse-text" aria-expanded={openItem1}> ABOUT US  </button>
                                <button className="CollapseItemBtn plus" onClick={() => setOpenItem1(!openItem1)} aria-controls="example-collapse-text" aria-expanded={openItem1}> {openItem1 ? "-" : "+"}</button>
                            </div>
                            <hr />
                            <Collapse in={openItem1}>
                                <div className="collapse1Text collapseText">
                                    <p>
                                        Power Gummies® is your new approach to health and wellness. It all begins with what you put inside the body. At Power Gummies®, we believe that when a health regime is simple and delicious, it’s easy to follow it to success. And because good health leads to great confidence, happiness follows naturally.
                                    </p>
                                    <button>
                                        LEARN MORE
                                    </button>
                                </div>
                            </Collapse>
                        </div>

                        <div className="Collapse2 CollapseItem">
                            <div className='TwoButton'>
                                <button className="CollapseItemBtn word" onClick={() => setOpenItem2(!openItem2)} aria-controls="example-collapse-text" aria-expanded={openItem2}>INGREDIENTS </button>
                                <button className="CollapseItemBtn plus" onClick={() => setOpenItem2(!openItem2)} aria-controls="example-collapse-text" aria-expanded={openItem2}> {openItem2 ? "-" : "+"}</button>
                            </div>
                            <hr />
                            <Collapse in={openItem2}>
                                <div className="collapse2Text collapseText">
                                    <p>
                                        Conceptualized in the India, Power Gummies® are crafted for maximum safety and best results. They have the best ingredients available and are certified by FSSAI for quality and safety. You will find a perfect balance of nutrient & mineral composition in our Gummies to fulfill your body’s daily nutritional requirements. To complement all the healthy stuff, Gummies have authentic flavours and a dash of love to make them irresistibly yummy.                                        </p>
                                    <button>
                                        LEARN MORE
                                    </button>
                                </div>
                            </Collapse>
                        </div>

                        <div className="Collapse1 CollapseItem">
                            <div className='TwoButton'>
                                <button className="CollapseItemBtn word" onClick={() => setOpenItem3(!openItem3)} aria-controls="example-collapse-text" aria-expanded={openItem3}> SCIENTIFICALLY-BACKED RESULTS  </button>
                                <button className="CollapseItemBtn plus" onClick={() => setOpenItem3(!openItem3)} aria-controls="example-collapse-text" aria-expanded={openItem3}> {openItem3 ? "-" : "+"}</button>
                            </div>
                            <hr />
                            <Collapse in={openItem3}>
                                <div className="collapse3Text collapseText">
                                    <p>
                                        We are very particular about our products and want to ensure that they are not just 100% safe, but also effective. For this reason, we like to look at science and ensure that all our products give the best results, without compromising on quality.
                                    </p>
                                    <button>
                                        LEARN MORE
                                    </button>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                </div>
                <div className='s42Img'>
                    <div className='firstImg'>
                            <img src={CircleDoll}></img>
                    </div>
                    <div className='secondImg'>
                         <img src={Section4Pic2}></img>
                    </div>

                </div>
            </div>
        </div>




    )
}
export default Section4;
