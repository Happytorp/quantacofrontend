// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LogoutForm from './components/LogoutForm/LogoutForm';
import CustomerForm from './components/CustomerForm/CustomerForm';
import AddCustomerForm from './components/CustomerForm/AddCustomerForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          <Route path="/customer" element={<CustomerForm/>} />
          <Route path="/addcustomer" element={<AddCustomerForm/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
