import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import { FullMenu } from './components/navigation';
import './App.css';
import './sass/menu.scss';

function App() {
  const [fullMenuVisible, setFullMenuVisible] = useState(false);

  const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
  });

  return (
    <div className="App">
      <button 
        className="menu-button menu-button--full"
        onClick={() => setFullMenuVisible(!fullMenuVisible)}
      >
        {fullMenuVisible ? "Close" : "Menu"}
      </button>

      <FullMenu style={fullMenuAnimation} />
    </div>    
  );
}

export default App;
