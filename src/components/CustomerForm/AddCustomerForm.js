import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddCustomerForm = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/customer/createCustomer', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            navigate("/customer");

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            alert("Invalid Details Entered");
            console.error('Error:', error.message);
        }
    };

    const handleChange = (event) => {
        console.log(event.target.id, event.target.value);

        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })

    }

    console.log(formData);


    return (
        <div className="Wrapper1">
            <form action="">
                <h2>Add Customer</h2>
                <div className="input-box">
                    <input type="text" placeholder="first name" id={'first_name'} onChange={(event) => handleChange(event)} required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Last name" id={'last_name'} onChange={(event) => handleChange(event)} required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Date of birth" id={'date_of_birth'} onChange={(event) => handleChange(event)} required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Phone Number" id={'phone_number'} onChange={(event) => handleChange(event)} required />
                </div>
                <button type="submit" onClick={(event) => handleRegister(event)}>Add</button>
            </form>

        </div>
    )

}


export default AddCustomerForm;
