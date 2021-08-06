import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiHomeGarage } from 'react-icons/gi'

const Navbar = () => {
    return (
        <nav>
            <div id='nav-container'>
                <ul id='home-button'>Home<GiHomeGarage style={{color: 'black'}} /></ul>
                <ul id='main-title'>PokeScope</ul>
                <ul id='burger-menu'>Options <GiHamburgerMenu style={{color: 'black'}} /></ul>
            </div>
        </nav>
    )
}

export default Navbar
