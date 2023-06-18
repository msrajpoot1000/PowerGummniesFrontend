import React from 'react';
import NavbarTop from "./Navbar/NavbarTop";
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';
import Section8 from './Section8/Section8';
import Section9 from './Section9/Section9';
import Section10 from './Section10/Section10';
import Section11 from './Section11/Section11';
import Login from './Navbar/LeftCarousel/Login/Login';
import SignUp from './Navbar/LeftCarousel/SignUp/SignUp';
import AboutUs from './Navbar/LeftCarousel/AboutUs/AboutUs';

function FrontPage() {
    return (
        <div>
      <NavbarTop />
      <Section1 />
      <Section2 />
     <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
       <Section8 />
     <Section9 />
        <Section10 />
        <Section11/>
       
        </div>
    )
}
export default FrontPage;