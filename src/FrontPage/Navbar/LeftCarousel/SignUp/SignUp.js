import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

import "../Login/Login.css";
import NavbarTop from "../../NavbarTop";
import Base from "../../../Section11/Section11";
function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    const goToLogin = () => { 
        navigate("/login")
    }


    function ValidatePassword(password) {
        // Initialize variables
        var strength = 0;
        var tips = "";
        // Check password length
        (password.length < 8) ? tips += "Make the password longer. " : strength += 1;
        // Check for mixed case
        (password.match(/[a-z]/)) ? strength += 1 : tips += "Use atlest one lowercase";
        (password.match(/[A-Z]/)) ? strength += 1 : tips += "Use atlest one uppercase letters. ";
        // Check for numbers
        (password.match(/\d/)) ? strength += 1 : tips += "Include at least one number. ";
        // Check for special characters
        (password.match(/[^a-zA-Z\d]/)) ? strength += 1 : tips += "Include at least one special character. ";



        // Return results
        if (strength < 2) {
            alert("Easy to guess. " + tips);
            return false;
        } else if (strength === 2) {
            alert("Medium difficulty. " + tips);
            return false;
        } else if (strength === 3) {
            alert("Difficult. " + tips);
            return false;
        } else if (strength === 4) {
            alert("Difficult. But " + tips);
            return false;
        }
        else {
            return true;
        }


    }
    const Register = () => {
        if (user.email != "" && user.password != "" && user.name != "") {
            const { name, email, password } = user;
            if (name && email /*&& ValidateEmail(email)*/ && password /*&&  ValidatePassword(password)*/) {
                axios.post("https://powergummiesbackend.onrender.com/signUp", user)
                    .then(res => {
                        alert(res.data.message)
                        navigate("/login");

                    })
                    .catch(err => {
                        alert(err, "Something went wrong")
                    })
            }
        }
         else {
            if(user.email=="" && user.password=="" && user.name==""){ alert("please Enter email and password and name")}
            else if (user.email == "") { alert("please Enter email"); }
                else if (user.name == "") { alert("please Enter name"); }
            else { alert("please Enter password"); }
            
        }
}
// }
return (
    <div className='SignUp'>
        <NavbarTop />
        <div className='container ContainerSignUp' style={{ border: "none" }}>
            <h1 className='item'>Welcome!</h1>
            <input className='item' name='name' type="text" placeholder='NAME' value={user.name} onChange={handleChange} />
            <input className="item" name="email" type="text" placeholder="EMAIL" value={user.email} onChange={handleChange} />
            <input type="text" className='item' name='password' placeholder="PASSWORDS" value={user.password} onChange={handleChange} />
            <button className='create item' onClick={Register}>SignUp</button>
            <h5 className='item'>   OR SIGN WITH</h5>
            <button className='fb item'>Sign in with Facebook</button>
            <button className=' item Google'>Sign in with Google</button>
            <div className="item  GoToLogin">
                <h6 >Already have and ACCOUNT </h6>
                <h6 className="createAcc" onClick={goToLogin}>&nbsp; Login</h6>
            </div>
        </div>
        <Base />
    </div>
)
}
export default SignUp;