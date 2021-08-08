import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiHomeGarage } from 'react-icons/gi'

const Navbar = ({ showOptions, displayOptions }) => {
    console.log(displayOptions);
    return (
        <nav>
            <div id='nav-container'>
                {displayOptions && <div id="options-div"></div>}
                <ul id="navbar-list">
                    <li id='home-button'><button>Home<GiHomeGarage style={{color: 'black'}} /></button></li>
                    <li id='main-title'>PokeScope</li>
                    <li id='burger-menu'><button onClick={showOptions}>Options <GiHamburgerMenu style={{color: 'black'}} /></button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
