import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiHomeGarage } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { CgPokemon } from 'react-icons/cg'
import { FaQuestion } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { GrContactInfo } from 'react-icons/gr'

const Navbar = ({ showOptions, displayOptions }) => {
    return (
        <nav>
            <div id='nav-container'>
                {/* This determines whether or not to draw the options div*/}
                {displayOptions && 
                    <div id="options-div">
                        <h6 className='options-header'>
                            Navigation
                        </h6>
                        <ul id="options-list-one">
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                    Login
                                    <FiLogIn style={{color: 'black'}} /> 
                                </a>
                            </li>
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                    Search 
                                    <AiOutlineSearch style={{color: 'black'}} />
                                </a>
                            </li>
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                   Pokedex
                                   <CgPokemon style={{color: 'black'}} /> 
                                </a>
                            </li>
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                   Home
                                   <GiHomeGarage style={{color: 'black'}} /> 
                                </a>
                            </li>
                        </ul>

                        <h6 className='options-header'>
                            Help And resources
                        </h6>

                        <ul id="options-list-two">
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                    FAQ
                                    <FaQuestion style={{color: 'black'}} /> 
                                </a>
                            </li>
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                    Github 
                                    <ImGithub style={{color: 'black'}} />
                                </a>
                            </li>
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                   Pokemon API
                                   <CgPokemon style={{color: 'black'}} /> 
                                </a>
                            </li>
                            <li>
                                <a className="navlist-links" 
                                   href="test.com"> 
                                   Contact
                                   <GrContactInfo style={{color: 'black'}} /> 
                                </a>
                            </li>
                        </ul>
                    </div>}
                <ul id="navbar-list">
                    <li id='home-button'>
                        <button>
                            Home
                            <GiHomeGarage style={{color: 'black'}} />
                        </button>
                    </li>
                    <li id='main-title'>PokeScope</li>
                    <li id='burger-menu'>
                        <button onClick={showOptions}>
                            Options 
                            <GiHamburgerMenu style={{color: 'black'}} />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
