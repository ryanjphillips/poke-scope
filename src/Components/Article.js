import React from 'react'

const Article = ( { showButtonAnimationA, 
                    changeColorA, 
                    showButtonAnimationB, 
                    changeColorB,
                    changeRadiusA,
                    changeRadiusB }) => {
    return (
        <article>
            <div id="section-div">
                <div id="section-left-div">
                    <div id="up-div"></div>
                    <div id="across-div"></div>
                </div>
                <div id="section-middle-div">
                    <div id="under-screen-title">
                        <h1 id="section-heading" >Nintendo  
                            <span id="gameboy-title"> GAMEBOY 
                                <span id="tm-span"> TM
                                    </span>
                            </span>
                        </h1>
                    </div>
                    <div id="welcome-section">
                        <h1 className="about-section-heading">
                            * Welcome....</h1>
                        <p className="about-section-text">
                            ...to your personal Pokemon Pokedex 
                            on the World Wide Web! The pokedex in the 
                            first couple of generations are a pain to 
                            manuever, there is just no getting around it. 
                            This app aims to fix certain 
                            quaility of life probems when tracking 
                            your pokemon.To do this, the app gives you 
                            the ability to update which pokemon you have 
                            collected,search with different criteria for 
                            missing pokemon, and view additional notes about
                            that caught pokemon. All in a fantastic and 
                            easy to use user interface for use in the modern age</p>
                    </div>
                    <div id="get-started">
                        <h1 className="about-section-heading"> 
                            * How to get started?
                        </h1>
                        <p className="about-section-text">
                            Do you want to be the very best? To get started
                            scroll up to the beginning of web page and
                            under the main title select the generation 
                            you want to start out with!
                        </p>
                    </div>
                    <div id="current-support">
                        <h1 className="about-section-heading"> 
                            * What Generations Are Currently Supported?
                        </h1>
                        <p  className="about-section-text">
                            Currently there are only plans to support the
                            generations 1-3, as those games lack the most 
                            UI support, however things might change. Keep
                            updated for more release and announcements!
                        </p>
                    </div>
                </div>
                <div id="section-right-div">
                    <div id="under-button">
                        <div id="a-button" onClick={showButtonAnimationA} 
                                           style={{backgroundColor: changeColorA, border: changeRadiusA}}>
                            <p id="para-a-button">A</p>
                        </div>
                        <div id="b-button" onClick={showButtonAnimationB} style={{backgroundColor: changeColorB, border: changeRadiusB}}>
                            <p id="para-b-button">B</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Article
