import React from 'react'

const Main = () => {
    return (
        <main>
            <div id='transition-div'>
                <div id="first-section">
                    <div className="purple-strip"></div>
                    <div className='navy-strip'></div>
                </div>
                <div id="descr">
                  <p id="gamebody-descr">
                     DOT MATRIX WITH STEREO SOUND</p>  
                </div>
                <div id="third-section">
                    <div className='purple-strip'></div>
                    <div className='navy-strip'></div>
                </div>
            </div>

            <div id="main-body">
                <div id="left-div" className="sides">
                    <div id="circle-div"></div>
                </div>
                <div id="main-div">
                    <p id="title">PokeScope</p>
                    <p id="describe-title">
                       ...Your Personal Pokemon Tracker!</p>
                    <div id="selection-div">
                        <p id="getting-started">---Get Started!---</p>
                        <ul id="selection-list">
                            <li> <a className="selection-item" 
                                    href="www.test.com">
                                    ...Generation 1 </a></li>
                            <li> <a className="selection-item" 
                                    href="www.test.com">
                                    ...Generation 2 </a></li>
                            <li> <a className="selection-item" 
                                    href="www.test.com">
                                    ...Generation 3 </a></li>
                        </ul>
            </div>
                </div>
                <div id="right-div" className="sides">
                </div>
            </div>

        </main>
    )
}

export default Main
