import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import { FullMenu } from './components/navigation';
import MainParallax from './components/parallax';
import './sass/App.scss';
import './sass/menu.scss';

function App() {
  const [fullMenuVisible, setFullMenuVisible] = useState(false)

  const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
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
      </>    
  );
}

export default App;
