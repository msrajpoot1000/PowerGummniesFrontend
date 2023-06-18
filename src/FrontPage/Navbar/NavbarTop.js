import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavbarTop.css";
import Bottle from "./images/bottle.gif";
import Collapse from 'react-bootstrap/Collapse';
import LeftCartCarousel from './images/LeftCartCarousel.png';
import { useNavigate, NavLink} from "react-router-dom";



function Try() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [openItem1, setOpenItem1] = useState(false);
  const [openItem4, setOpenItem4] = useState(false);
  const [openItem6, setOpenItem6] = useState(false);
   const navigate = useNavigate();

  
  const HomePage = () => {
    navigate("/")

  }
   const Login = () => { 
    navigate("/login")
  }
  const SignUp = () => { 
    navigate("/signUp")
  }
 
 

  return (
    <>
      <div className="NavHead container">
        <div className="upperHeadLeft">
          {/* <button className="navItem ToogleBtn leftToogle" onClick={handleShow} ><img className="navItem navImg" src={Toogle} /> </button> */}

          <div className="toogleHead">
          <svg id="icon_hamburger" className="navItem ToogleBtn leftToogle icon-hamburger" onClick={handleShow1} data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19">
            <g id="Group_1" data-name="Group 1">
              <rect id="Rectangle_3" data-name="Rectangle 10" width="30" height="5" transform="translate(0)" fill="#2275b4"></rect>
              <rect id="Rectangle_4" data-name="Rectangle 10" width="30" height="5" transform="translate(0 8)" fill="#2275b4"></rect>
              <rect id="Rectangle_5" data-name="Rectangle 10" width="30" height="5" transform="translate(0 16)" fill="#2275b4"></rect>
            </g>
            </svg>
            </div>

          <h4 className="navItem wname WebsiteTitle" onClick={HomePage}>Power Gummies</h4>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="navItem wname " style={{ color: "black", border: "1px solid red"}} width="99.949" height="62.391" viewBox="0 0 99.949 62.391"/> */}



          <img className="navItem navImg" src={Bottle} />
        </div>
        <div className="upperHeadRight">
          {/* <img  src={User3} /> */}
           <button onClick={SignUp}>
          <svg class="" className="navItem navImg user icon-login" xmlns="http://www.w3.org/2000/svg" width="27" height="28.896" viewBox="0 0 26.803 28.896">
            <g id="Group_1936" data-name="Group 1936" transform="translate(-81.01 -633.473)">
              <path id="Path_1314" data-name="Path 1314" d="M102.157,711.327a11.5,11.5,0,0,0-11.49,11.49v.1h22.98v-.1A11.5,11.5,0,0,0,102.157,711.327Z" transform="translate(-7.745 -62.442)" fill="#d0f6fa"></path>
              <path id="Path_1315" data-name="Path 1315" d="M125.232,654.718a5.794,5.794,0,1,0-5.795-5.794A5.8,5.8,0,0,0,125.232,654.718Z" transform="translate(-30.82 -7.745)" fill="#d0f6fa"></path>
              <path id="Path_1316" data-name="Path 1316" d="M98.8,647.7l-.185-.064.161-.111a7.706,7.706,0,1,0-8.72,0l.162.111-.185.064a13.424,13.424,0,0,0-9.018,12.671v1.994h26.8v-1.994A13.422,13.422,0,0,0,98.8,647.7Zm-10.178-6.525a5.795,5.795,0,1,1,5.795,5.794A5.8,5.8,0,0,1,88.617,641.179ZM105.9,660.474H82.922v-.1a11.49,11.49,0,1,1,22.98,0Z" transform="translate(0 0)" fill="#2275b4"></path>
            </g>
          </svg>
          </button>

          <button className="navItem loginBtn" onClick={Login}>Login</button>
          {/* <img  src={BlueHeart} /> */}

          {/* <svg className="navItem navImg heart icon-login" xmlns="http://www.w3.org/2000/svg" width="27" height="28.896" viewBox="0 0 26.803 28.896">
            <g id="Group_1936" data-name="Group 1936" transform="translate(-81.01 -633.473)">
              <path id="Path_1314" data-name="Path 1314" d="M102.157,711.327a11.5,11.5,0,0,0-11.49,11.49v.1h22.98v-.1A11.5,11.5,0,0,0,102.157,711.327Z" transform="translate(-7.745 -62.442)" fill="#d0f6fa"></path>
              <path id="Path_1315" data-name="Path 1315" d="M125.232,654.718a5.794,5.794,0,1,0-5.795-5.794A5.8,5.8,0,0,0,125.232,654.718Z" transform="translate(-30.82 -7.745)" fill="#d0f6fa"></path>
              <path id="Path_1316" data-name="Path 1316" d="M98.8,647.7l-.185-.064.161-.111a7.706,7.706,0,1,0-8.72,0l.162.111-.185.064a13.424,13.424,0,0,0-9.018,12.671v1.994h26.8v-1.994A13.422,13.422,0,0,0,98.8,647.7Zm-10.178-6.525a5.795,5.795,0,1,1,5.795,5.794A5.8,5.8,0,0,1,88.617,641.179ZM105.9,660.474H82.922v-.1a11.49,11.49,0,1,1,22.98,0Z" transform="translate(0 0)" fill="#2275b4"></path>
            </g>
          </svg> */}

          {/* <img className="navItem navImg trolly" src={Trolly2} /> */}

          <svg className="navItem navImg trolly icon-cart" onClick={handleShow2}  xmlns="http://www.w3.org/2000/svg" width="33.072" height="32.187" viewBox="0 0 33.072 32.187">
            <g id="Group_1935" data-name="Group 1935" transform="translate(7489.205 1845.477)">
              <path id="Path_934" data-name="Path 934" d="M774.357,742.748a1.918,1.918,0,1,0,1.918,1.918A1.918,1.918,0,0,0,774.357,742.748Z" transform="translate(-8238.435 -2561.409)" fill="#d0f6fa"></path>
              <path id="Path_935" data-name="Path 935" d="M714.935,742.748a1.918,1.918,0,1,0,1.918,1.918A1.918,1.918,0,0,0,714.935,742.748Z" transform="translate(-8193.59 -2561.409)" fill="#d0f6fa"></path>
              <path id="Path_937" data-name="Path 937" d="M713.3,668.813l15.959-1.65a2.609,2.609,0,0,0,2.34-2.033l1.65-6.79-23.516-.345Z" transform="translate(-8191.113 -2497.448)" fill="#d0f6fa"></path>
              <path id="Path_940" data-name="Path 940" d="M710.215,736.494a3.453,3.453,0,1,0,3.453,3.453A3.453,3.453,0,0,0,710.215,736.494Zm0,5.371a1.918,1.918,0,1,1,1.918-1.918A1.918,1.918,0,0,1,710.215,741.865Z" transform="translate(-8188.87 -2556.689)" fill="#0063a9"></path>
              <path id="Path_941" data-name="Path 941" d="M769.637,736.494a3.453,3.453,0,1,0,3.453,3.453A3.453,3.453,0,0,0,769.637,736.494Zm0,5.371a1.918,1.918,0,1,1,1.918-1.918A1.918,1.918,0,0,1,769.637,741.865Z" transform="translate(-8233.714 -2556.689)" fill="#0063a9"></path>
              <path id="Path_942" data-name="Path 942" d="M710.136,638.278l-24.974-.345-.691-2.11a3.53,3.53,0,0,0-3.3-2.379H678.6a.767.767,0,0,0,0,1.535h2.57a2,2,0,0,1,1.842,1.342l4.872,14.693-.384.882a3.684,3.684,0,0,0,.345,3.338,3.567,3.567,0,0,0,2.877,1.611h14.923a.767.767,0,0,0,0-1.535H690.724a1.956,1.956,0,0,1-1.611-.921,2.109,2.109,0,0,1-.192-1.841l.307-.69,16.151-1.688a4.22,4.22,0,0,0,3.645-3.223l1.841-7.711a.652.652,0,0,0-.115-.652A.959.959,0,0,0,710.136,638.278Zm-2.609,8.325a2.609,2.609,0,0,1-2.34,2.033l-15.959,1.65-3.568-10.818,23.516.345Z" transform="translate(-8167.039 -2478.921)" fill="#2275b4"></path>
            </g>
          </svg>

          {/* <button className="navItem ToogleBtn rightToogle" onClick={handleShow} ><img className="navItem navImg" src={Toogle} /> </button> */}
          <div className="ToogleBtn navItem">
          <svg id="icon_hamburger" className="navItem ToogleBtn rightToogle icon-hamburger" onClick={handleShow1} data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19">
            <g id="Group_1" data-name="Group 1">
              <rect id="Rectangle_3" data-name="Rectangle 3" width="22" height="3" transform="translate(0)" fill="#2275b4"></rect>
              <rect id="Rectangle_4" data-name="Rectangle 4" width="22" height="3" transform="translate(0 8)" fill="#2275b4"></rect>
              <rect id="Rectangle_5" data-name="Rectangle 5" width="22" height="3" transform="translate(0 16)" fill="#2275b4"></rect>
            </g>
            </svg>
            </div>
        </div>
      </div>
      <div>

      </div>





      <Offcanvas className="OffCanvas"  show={show1} onHide={handleClose1}>
        <Offcanvas.Header className="OffCanvasHead" closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="OffCanvasBody">
            <div className="nBSection1">
              <h2>Welcome</h2>
              <div className="WelBtn">
                <Button onClick={Login}>Login</Button>
                <Button onClick={SignUp}>SignUp</Button>
              </div>
            </div>
            <div className="nBSection2">
              {/* this section contain differnt navbase dropdown or collapse */}
              <div className="Collapse1 CollapseItem">
                <div>
                  <button className="CollapseItemBtn" onClick={() => setOpenItem1(!openItem1)} aria-controls="example-collapse-text" aria-expanded={openItem1}> Shop  </button>
                  <button className="CollapseItemBtn plus" onClick={() => setOpenItem1(!openItem1)} aria-controls="example-collapse-text" aria-expanded={openItem1}> {openItem1 ? "-" : "+"}</button>
                </div>
                
                <hr />
                <Collapse in={openItem1}>
                  <div id="example-collapse-text">
                   <div className="collapseInsideListItem" ><h5>Hair Nails</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>The Beach Body</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>That Time Of The Month</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>Jaw Dropping Skin</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>Blessful Sleep Gummies</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>Dapper Hair And Beard</h5><hr /></div>
                    <div className="collapseInsideListItem" ><h5>Combo Packs</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>LifeStyle Lounge</h5> <hr /></div>
                    <div className="collapseInsideListItem" ><h5>Dapper Hair And Beard</h5> <hr /></div>
                  </div>
                </Collapse>
              </div>


              <div className="Collapse2 CollapseItem">
                <NavLink className="CollapseItemBtn who-we-are-button" to="/who-we-are">Who We Are</NavLink>
                <hr />
              </div>
              

              <div className="Collapse3 CollapseItem">
                <button className="CollapseItemBtn" > Meet Our Ingredients</button>
                 <hr />
              </div>
             



              <div className="Collapse4 CollapseItem">
                <div>
                  <button className="CollapseItemBtn" onClick={() => setOpenItem4(!openItem4)} aria-controls="example-collapse-text" aria-expanded={openItem4}> Clinically Proven Results  </button>
                  <button className="CollapseItemBtn plus" onClick={() => setOpenItem4(!openItem4)} aria-controls="example-collapse-text" aria-expanded={openItem4}> {openItem4 ? "-" : "+"} </button>
                </div>
                {/* <hr /> */}
                <Collapse in={openItem4}>
                  <div id="example-collapse-text">
                    <div className="collapseInsideListItem" > <h5>Hairs & Nails</h5><hr /></div>
                    <div className="collapseInsideListItem"><h5>The Beach Body</h5><hr /></div>
                    <div className="collapseInsideListItem"><h5>That Time Of Month</h5><hr /></div>
                  </div>
                </Collapse>
              </div>

              <div className="Collapse5 CollapseItem">
                <button className="CollapseItemBtn" > Our Journal</button>
                <hr />
              </div>
              

              <div className="Collapse6 CollapseItem">
                <div>
                  <button className="CollapseItemBtn" onClick={() => setOpenItem6(!openItem6)} aria-controls="example-collapse-text" aria-expanded={openItem6}> Support  </button>
                  <button className="CollapseItemBtn plus" onClick={() => setOpenItem6(!openItem6)} aria-controls="example-collapse-text" aria-expanded={openItem6}> {openItem6 ? "-" : "+"}</button>
                </div>
                <hr />
                <Collapse in={openItem6}>
                  <div id="example-collapse-text">
                   <div className="collapseInsideListItem"> <h5>Review</h5> <hr /> </div> 
                    <div className="collapseInsideListItem"> <h5>Contact Us </h5> <hr /></div> 
                    <div className="collapseInsideListItem"> <h5>Track Order Status</h5></div> 
                    <hr />
                  </div>
                </Collapse>
              </div>

            </div>
            <div>
          </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>







{/* this is OffCanvas for cart */}
       <Offcanvas className="OffCanvas" placement="end" show={show2} onHide={handleClose2}>
        <Offcanvas.Header className="OffCanvasHead" closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="OffCanvasBody">
           
            <div className="nBSection2">
                <div className="CartCarouselHead">
                  <h3> Your Cart <span> ( 0 ITEM )</span></h3>
                  
                </div>
                <img className="CartCarlImg" src={LeftCartCarousel} />
                <h6>Uh Oh!</h6>
                <h6>Looks like your Cart is empty!</h6>
                <div className="cartBtnHead">
                  <button className="cartBtn"> GORGEOUS HAIR & NAILS </button>
                  <button className="cartBtn">THE BEACH BODY</button>
                  <button className="cartBtn">THAT TIME OF THE MONTH</button>
                  <button className="cartBtn">VIEW ALL PRODUCTS</button>
                </div>
            </div>
            <div>
          </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>








    </>
  );
}
export default Try;
