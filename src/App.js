import './index.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Article from './Components/Article';
import Section from './Components/Section';
import { useState } from 'react';

function App() {
  const [optionsMenu, setOptionsMenu] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState('#730E33');
  const [buttonAnimationB, setButtonAnimationB] = useState('#730E33');
  const [borderRadiusA,setborderRadiusA ] = useState('1px solid black');
  const [borderRadiusB,setborderRadiusB ] = useState('1px solid black');

  return (
    <div className="root">
      <Navbar showOptions={() => setOptionsMenu(!optionsMenu)} 
              displayOptions={optionsMenu} />
      <Main />
      <Article showButtonAnimationA={() => {
                                            setButtonAnimation("#3b081b")
                                            setborderRadiusA("6px solid black")}} 
               changeColorA={buttonAnimation}
               changeRadiusA={borderRadiusA} 
               showButtonAnimationB={() => {
                                            setButtonAnimationB("#3b081b")
                                            setborderRadiusB("6px solid black")}} 
               changeColorB={buttonAnimationB}
               changeRadiusB={borderRadiusB}
              
               />
      
      <Section />
      <Footer />
    </div>
  );
}

export default App;
