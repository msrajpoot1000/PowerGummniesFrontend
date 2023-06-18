import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import NavbarTop from "../../NavbarTop";
import Base from "../../../Section11/Section11";
function Login() {
    const navigate = useNavigate();

     const [user, setUser] = useState({
         email: "",
        password: ""
     })
    
    const goToSingUp=()=>{
        navigate("/signUp");
    }
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const login = () => {
        if (user.email != "" && user.password != "") {
            axios.post('https://powergummiesbackend.onrender.com/login', user)
                .then(res => {
                    if (res.data == "1") {
                        alert("user not registered")
                        navigate("/signUp")
                    }
                    else {
                        alert(res.data)
                        console.log(res.data);
                    }
                })
                .catch(err => {
                    console.log(err.response);
                    alert("Something went wrong")
                })
        } else {
            if(user.email=="" && user.password==""){ alert("please Enter email and password")}
           else if (user.email == "") { alert("please Enter email"); }
            else { alert("please Enter password"); }
            
        }
    }
    
    return (
        <div className="Login">
            <NavbarTop/>
            <div className="container ContainerLogin">
                <h1 >Hello There!</h1>
                <input type="text" name="email" className="InputEmail item" value={user.email} onChange={handleChange} placeholder="EMAIL" />
                <input type="text " name="password" value={user.password} onChange={handleChange}  placeholder="PASSWORD" />
                <button className="ForgotPassword item" >FORGOT YOUR PASSWORD</button>
                <button className="signIn item"  onClick={login} >SIGN IN</button>
                <button className="fb item">
                    logo
                    Sign in with Facebook
                </button>
                <button className="Google item">
                    logo
                    Sign in with Google
                </button>
                <div className="item  GoToSignUP">
                    <h6 >New TO POWER GUMMIES ? </h6>
                    <h6  onClick={goToSingUp} className="createAcc">&nbsp; CREATE ACCOUNT</h6>
                </div>
            </div>
            <Base/>
        </div>
    )
}
export default Login;