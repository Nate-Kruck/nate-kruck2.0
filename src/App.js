import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useSpring } from 'react-spring';
import Header from './components/header';
import { FullMenu } from './components/navigation';
import MainParallax from './components/parallax';
import './sass/App.scss';
import './sass/menu.scss';

function App() {
  const [fullMenuVisible, setFullMenuVisible] = useState(false)

  const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateX(0)` : `translateX(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
  });

  
  return (
    <>
      <MainParallax />
        <div className="App">
          <button 
            className="menu-button menu-button--full"
            onClick={() => setFullMenuVisible(!fullMenuVisible)}
            >
            {fullMenuVisible ? "Close" : "Menu"}
          </button>

          <FullMenu style={fullMenuAnimation} />
        </div>
          <Header />
        {/* </MainParallax> */}
        {/* <Router>
          <Header />
        <Switch>
        </Switch>
        </Router> */}
    </>    
  );
}

export default App;
