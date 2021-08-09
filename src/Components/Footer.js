import React from 'react'
import {ImGithub} from 'react-icons/im'
import {CgPokemon} from 'react-icons/cg'


const Footer = () => {
    return (
        <footer>
            <div id="footer-div">
                <div id="info-text">
                    <ul id="info-list">
                        <li>
                            <a className="footer-links"
                               href="https://github.com/ryanjphillips" 
                               rel="noreferrer" 
                               target="_blank"> 
                               My Github
                            </a><ImGithub style={{color: 'black'}} />
                        </li>
                        <li>
                            <a
                               className="footer-links" 
                               href="https://pokeapi.co/" 
                               rel="noreferrer" 
                               target="_blank"> 
                                RESTFul Pokemon API
                                <CgPokemon style={{color: 'black'}} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="exhaust-div">
                    <div id="exhaust-1">

                    </div>

                    <div id="exhaust-2">
                        
                    </div>

                    <div id="exhaust-3">
                        
                    </div>

                    <div id="exhaust-4">
                        
                    </div>

                    <div id="exhaust-5">
                        
                    </div>

                    <div id="exhaust-6">
                        
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
