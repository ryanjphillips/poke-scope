import './index.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Article from './Components/Article';
import Section from './Components/Section';
import { useState } from 'react';

function App() {
  const [optionsMenu, setOptionsMenu] = useState(false);

  console.log(optionsMenu)

  


  return (
    <div className="root">
      <Navbar showOptions={() => setOptionsMenu(!optionsMenu)} displayOptions={optionsMenu} />
      <Main />
      <Article />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
