import React from 'react';
import '../App.css';
import nav_logo from "../Images/F_logo.png";

      
function NavBar(){
    return(
    <div class="navbar-container">
        <ul>
            <li>
                <img src={nav_logo} class="nav_logo"/>
            </li>
            <li class="nav-link">
                <a href="#Home">Home
                </a>
                <div class="underline"></div>
            </li>
            <li class="nav-link">
                <a href="#">About Us</a>
                <div class="underline"></div>
            </li>
            <li class="nav-link">
                <a href="#Keywords">Keywords</a>
                <div class="underline"></div>
            </li>
            <li class="nav-link">
                <a href="#Contact-Us">Contact</a>
                <div class="underline"></div>
            </li>
        </ul>
    </div>
    )
}

export default NavBar;