import React, { useState } from 'react';
import RubberBand from 'react-reveal/RubberBand';
import { useSpring } from 'react-spring';
import Header from './components/header';
import { FullMenu } from './components/navigation';
import MainParallax from './components/parallax';
import './sass/App.scss';
import './sass/menu.scss';
import './sass/Parallax.scss';
import './sass/queries.scss';

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
            <RubberBand>
              <button 
                className="menu-button menu-button--full"
                type="button"
                onClick={() => setFullMenuVisible(!fullMenuVisible)}
                >
                {fullMenuVisible ? "Close" : "Menu"}
              </button>

            </RubberBand>
            <FullMenu style={fullMenuAnimation} />
          </div>
            <Header />
    </>
  );
}

export default App;
