import React from "react";
import "../App.css"; // Assuming this includes your CSS

const Navbar = ({ message }) => {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center align-items-center px-5">
            <h2 className="navbar-brand m-1">{message}</h2>
        </nav>
    );
};

export default Navbar;

