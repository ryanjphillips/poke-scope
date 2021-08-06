import React from 'react'

const Main = () => {
    return (
        <main>
            <div id='top-div'>
                <div id="first-strip">
                    <div className="purple-strip"></div>
                    <div className='navy-strip'></div>
                </div>
                <div id="descr">
                  <p id="gamebody-descr">DOT MATRIX WITH STEREO SOUND</p>  
                </div>
                <div id="third-section">
                    <div className='purple-strip'></div>
                    <div className='navy-strip'></div>
                </div>
            </div>
    
            <div id='main-class'>
                <div id="left-div" className="sides">
                    <div id="circle-div"></div>
                </div>
                <div id="main-div">
                    <p id="title">PokeScope</p>
                    <p id="describe-title">...Your Pokemon Tracker!</p>
                    <p></p>
                </div>
                <div className="sides"></div>
            </div>
        </main>
    )
}

export default Main
