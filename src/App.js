import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FrontPage from './FrontPage/FrontPage';
import AboutUs from './FrontPage/Navbar/LeftCarousel/AboutUs/AboutUs';
import Login from './FrontPage/Navbar/LeftCarousel/Login/Login';
import SignUp from './FrontPage/Navbar/LeftCarousel/SignUp/SignUp';



<Link to="div"></Link>
function App() {
  return (
    <div className='app'>      
       <BrowserRouter>
        <Routes>    
          <Route path="/" element={<FrontPage />}></Route>
          <Route path="/who-we-are" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          </Routes>
      </BrowserRouter>
      
    </div>


  );
}

export default App;
