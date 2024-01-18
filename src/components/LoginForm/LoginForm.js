import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ()=>{
    const [formData, setFormData] = useState({})
const navigate = useNavigate();

const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/user/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      localStorage.setItem("access_token",data.access)
      localStorage.setItem("refresh_token", data.refresh)

      navigate("/customer");

    } catch (error) {
        alert("Invalid Credentials");
      console.error('Error:', error.message);
    }
  };

    const handleChange =(event)=>{
        // console.log(event.target.id, event.target.value);

        setFormData({
            ...formData,
           [ event.target.id] : event.target.value
        })

    }


    return (
        <div className="Wrapper1"> 
        <form action = "">
            <h2>Login</h2>
            <div className="input-box">
                <input type="text" placeholder="Email" id={'email'} onChange={(event)=>handleChange(event)}required />
            </div>
            <div className="input-box">
                <input type="password" placeholder="password" id={'password'} onChange={(event)=>handleChange(event)}required />
            </div>
            <button type="submit" onClick={(event)=>handleLogin(event)}>Login</button>
        </form>

        </div>
    )

}


export default LoginForm;
