import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../UserContext'; 
import './Login.css';

function Login() {
    const { loginUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3001/login', { email, password });
            console.log(result);
            if (result.status === 200) {
                toast.success('Login successful');
                loginUser({ name: result.data.username }); 
                navigate('/recipefinder');
            } else {
                toast.error('Login failed: ' + result.data);
            }
        } catch (err) {
            console.error(err);
            toast.error('Login failed');
        }
    };

    return (
        <div className='login'>
            <div className='container'>
                <div className='form-container'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input 
                                type='email' 
                                id="email"
                                placeholder='Enter Your Email ID' 
                                autoComplete='on' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
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
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                    <p>Don't Have an account?</p>
                    <Link to='/register' className='link-btn'>
                        Register
                    </Link>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Login;