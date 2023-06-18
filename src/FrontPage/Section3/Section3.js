import React from "react";
import "./Section3.css"
import Part1 from "./images/Part1.png";
import Part2 from "./images/Part2.png";
import Part3 from "./images/Part3.png";
import Part4 from "./images/Part4.png";
import Part5 from "./images/Part5.png";
import Part6 from "./images/Part6.png";
function Section3() {
    return (
        <div className="Section3Head">
            <div className="Section3">
                <div>
                    <h1 className="">Find your Power</h1>
                </div>
                {/* we are foucusing on img */}
                <div className="PartLeft">
                    <div className="PartLeftInside">
                        <div className="PartLeftII">
                            <div className="leftImg">
                                <img src={Part1} />
                            </div>
                            <div className="rightContent">
                                <div className="content">
                                    <h3 className="Nutra">NUTRACEUTICA</h3>
                                    <h1>Dapper Hair & Beard Gummies</h1>
                                    <h3 className="sh3">With Fenugreek Extracts</h3>
                                    <button className="ExBtn">EXPLORE</button>
                                </div>
                                <div className="empty">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                
                <div className="PartLeft PartRight">
                    <div className="PartLeftInside">
                        <div className="PartLeftII">    
                            <div className="rightContent">
                                <div className="content PartRightContent">
                                    <h3>Health Suppliment</h3>
                                    <h1 className="Nutra">Gorgeous Hair And Nail</h1>
                                    <h3 className="sh3">With Biotin</h3>
                                    <button className="ExBtn">EXPLORE</button>
                                </div>
                                <div className="empty">
                                </div>
                            </div>
                            <div className="leftImg">
                                <img src={Part2} />
                            </div>
                        </div>
                    </div>
                </div>




                 <div className="PartLeft">
                    <div className="PartLeftInside">
                        <div className="PartLeftII">
                            <div className="leftImg">
                                <img src={Part3} />
                            </div>
                            <div className="rightContent">
                                <div className="content">
                                    <h3 className="Nutra">NUTRACEUTICA</h3>
                                    <h1 className="Nutra">That Time Of Month</h1>
                                    <h3 className="sh3">With Passion-Flower Extract</h3>
                                    <button className="ExBtn">EXPLORE</button>
                                </div>
                                <div className="empty">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="PartLeft PartRight">
                    <div className="PartLeftInside">
                        <div className="PartLeftII">    
                            <div className="rightContent">
                                <div className="content PartRightContent">
                                    <h3 className="Nutra">NUTRACEUTICA</h3>
                                    <h1 className="Nutra">Weight Management</h1>
                                    <h3 className="sh3">With Green Coffee</h3>
                                    <button className="ExBtn">EXPLORE</button>
                                </div>
                                <div className="empty">
                                </div>
                            </div>
                            <div className="leftImg">
                                <img src={Part4} />
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="PartLeft">
                    <div className="PartLeftInside">
                        <div className="PartLeftII">
                            <div className="leftImg">
                                <img src={Part5} />
                            </div>
                            <div className="rightContent">
                                <div className="content PartRightContent">
                                    <h3 className="Nutra"> NUTRACEUTICA</h3>
                                    <h1>Jaw Dropping Skin</h1>
                                    <h3 className="sh3">With collagen Builder</h3>
                                    <button className="ExBtn">EXPLORE</button>
                                </div>
                                <div className="empty">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="PartLeft PartRight">
                    <div className="PartLeftInside">
                        <div className="PartLeftII">    
                            <div className="rightContent">
                                <div className="content PartRightContent ">
                                    <h3 className="Nutra">NUTRACEUTICA</h3>
                                    <h1>Blessful Sleep Gummies</h1>
                                    <h3 className="sh3">For Beauty Sleep</h3>
                                    <button className="ExBtn">EXPLORE</button>
                                </div>
                                <div className="empty">
                                </div>
                            </div>
                            <div className="leftImg">
                                <img src={Part6} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Section3;