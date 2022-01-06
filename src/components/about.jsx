import React, { useState } from 'react';
import '../sass/About.scss';
// import ocean from '../videos/ocean.mp4';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';
import { useSpring } from 'react-spring';
import { FullMenu } from '../components/navigation';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import githubgradient from '../images/githubgradient.png';
import html5 from '../images/javascript.png';
import markdown from '../images/markdown.png';
import api from '../images/api.png';
import java from '../images/java.png';
import design from '../images/design.png';

const About = () => {
    
    const [fullMenuVisible, setFullMenuVisible] = useState(false)
    
    const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateX(0)` : `translateX(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
    });

    return (
        <>
        <div className="stars">
        <div className="twinkling">
        <div className="container">
            
            <h1 className="about-me">About Me</h1>

            <h3>Hey, I'm 
                <Bounce top cascade>
                    <span className='name'> Nathan</span>
                </Bounce>
                </h3>
                
            <p>
                Full stack software developer.
            </p>
            <p>
               Currently working on personal projects, like my 
               <a className="wedding-site" href='https://www.willowandnathan.com' alt="wedding" target="blank"><Bounce bottom cascade>wedding website.</Bounce>
               </a> I enjoy bringing webpages to life and creating an enjoyable user experience. 
            </p>
            <div className='icon-group'>
                <img className='tech-icons' src={javascript} alt='javascript'></img>
                <img className='tech-icons' src={react} alt='react'></img>
                <img className='tech-icons' src={githubgradient} alt='githubgradient'></img>
                <img className='tech-icons' src={html5} alt='html5'></img>
                <img className='tech-icons' src={markdown} alt='markdown'></img>
                <img className='tech-icons' src={api} alt='api'></img>
                <img className='tech-icons' src={java} alt='java'></img>
                <img className='tech-icons' src={design} alt='design'></img>
            </div>

        </div>
        </div>

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