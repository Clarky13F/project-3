import React from "react";
// import { useSelector } from "react-redux";
import "./Navbar.css";
import { Link }  from "react-router-dom";

const Navbar = () => {
    return (
        <Row>
        <div className="name">
        <p className="text">Live:Interactive</p>
        </div>
    
        <div>
        <Link to="/Home">
            <p className="homePage">
            Home
            </p>
        </Link>
        </div>

        <div>
            <Link to="/About">
                <p className="aboutPage">
                About
                </p>
            </Link>
        </div>

        <div>
            <Link to="Contact">
                <p className="contactPage">
                Contact
                </p>
            </Link>
        </div>

        <div>
            <Link to="Login">
                <p className="loginPage">
                Login
                </p>
            </Link>
        </div>

        <div>
            <Link to="Profile">
                <p className="profilePage">
                Profile
                </p>
            </Link>
        </div>
        </Row>
    )
};