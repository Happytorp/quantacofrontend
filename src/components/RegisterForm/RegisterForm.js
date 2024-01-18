import {React, useState} from "react";
import { useNavigate } from "react-router-dom";


const RegisterForm = ()=>{
const [formData, setFormData] = useState({})
const navigate = useNavigate();

const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/user/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigate("/login");

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      alert("Invalid Details entered");
      console.error('Error:', error.message);
    }
  };

    const handleChange =(event)=>{
        console.log(event.target.id, event.target.value);

        setFormData({
            ...formData,
           [ event.target.id] : event.target.value
        })

    }

    console.log(formData);


    return (
        <div className="Wrapper1"> 
        <form action = "">
            <h2>Register</h2>
            <div className="input-box">
                <input type="text" placeholder="name" id={'name'} onChange={(event)=>handleChange(event)} required />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Email" id={'email'} onChange={(event)=>handleChange(event)} required />
            </div>
            <div className="input-box">
                <input type="password" placeholder="password" id={'password'} onChange={(event)=>handleChange(event)} required />
            </div>
            <button type="submit" onClick={(event)=>handleRegister(event)}>Register</button>
        </form>

        </div>
    )

}


export default RegisterForm;
