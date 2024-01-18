import React, { useState, useEffect } from 'react';
import LogoutForm from '../LogoutForm/LogoutForm';
import { useNavigate } from 'react-router-dom';



const CustomerList = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/addcustomer');
    };
    const [customerData, setCustomerData] = useState([]);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));

    useEffect(() => {
        fetch('http://localhost:8000/customer/listCustomer', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include', //for cors error
        })
            .then((response) => response.json())
            .then((data) => setCustomerData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [accessToken]);



    return (
        <div class="listcustomer">
            <div class="head">
                <h2>Customer List</h2>
            </div>

            <div class="tableClass">



                {Array.isArray(customerData) && customerData.length > 0 ? (
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Phone Number</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerData.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.first_name}</td>
                                    <td>{customer.last_name}</td>
                                    <td>{customer.date_of_birth}</td>
                                    <td>{customer.phone_number}</td>
                                    <td>{customer.user_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No customer data available</p>
                )}
            </div>

            <div class="addCust">
                <button type="submit" onClick={handleClick}>Add Customer</button>
            </div>

            <LogoutForm />
        </div>
    )

};

export default CustomerList;
