import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'; 
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { registerUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, phone, password })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    registerUser({ name, email }); // Set the registered user
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='register'>
            <div className='container'>
                <div className='form-container'>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor="name">Name</label>
                            <input 
                                type='text' 
                                id="name"
                                placeholder='Enter Your Name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input 
                                type='email' 
                                id="email"
                                placeholder='Enter Your Email' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="phone">Mobile Number</label>
                            <input 
                                type='text' 
                                id="phone"
                                placeholder='Enter Your Mobile Number' 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input 
                                type='password' 
                                id="password"
                                placeholder='Enter Your Password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type='submit' className='submit-btn'>Register</button>
                    </form>
                    <p>Already have an account?</p>
                    <Link to='/login'>
                        <button type='button' className='link-btn'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
