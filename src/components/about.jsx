import React, { useState } from 'react';
import '../sass/About.scss';
import ocean from '../videos/ocean.mp4';
import RubberBand from 'react-reveal/RubberBand';
import { useSpring } from 'react-spring';
import { FullMenu } from '../components/navigation';


const About = () => {
    
    const [fullMenuVisible, setFullMenuVisible] = useState(false)
    
    const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateX(0)` : `translateX(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
    });

    return (
        <>
        <div className="container">
            <video className="ocean" autoPlay loop muted>
                <source src={ocean}type="video/mp4"/>
            </video>
            
            <h1 className="about-me">About Me</h1>

            <p>Hi! Im Nate Kruck, this is the start of my about page. I will add fun facts about me here so you can see how boring I am! lol jkjk. I love coding because it brings me joy. Bringing a webpage to life is a special skill and requires a ton of time.</p>

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
        </>
    )
}

export default About;