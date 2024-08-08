import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Register from './components/Register';
import Login from './components/Login';
import RecipeFinder from './components/RecipeFinder';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/recipefinder" element={<RecipeFinder />} />
                    <Route path="/" element={<Register />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;