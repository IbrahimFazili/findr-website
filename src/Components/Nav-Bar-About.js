import React from 'react';
import '../App.css';

function NavBar(){
    return(
    <div class="newNav">
        <ul>
            <li class="nav-link">
                <a href="#">why-us</a>
                <div class="underline"></div>
            </li>
            <li class="nav-link">
                <a href="#Keywords">Findr</a>
                <div class="underline"></div>
            </li>
            <li class="nav-link">
                <a href="#Contact-Us">the team</a>
                <div class="underline"></div>
            </li>
        </ul>
    </div>
    )
}

export default NavBar