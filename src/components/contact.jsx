import React, { useState } from 'react';
import '../sass/Contact.scss';
import '../sass/queries.scss';
import RubberBand from 'react-reveal/RubberBand';
import { useSpring } from 'react-spring';
import { FullMenu } from '../components/navigation';
import linkdin from '../images/linkdin.png';
import email from '../images/email.png';
import github from '../images/github.png';


const Contact = () => {
    
    const [fullMenuVisible, setFullMenuVisible] = useState(false)
    
    const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateX(0)` : `translateX(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
    });

    return (
        <>
        <div className='contact-body'>
        <div className="stars">
        <div className="twinkling">
        <div className="contact-container">

            {/* <h1 className="contact-me">Contact</h1> */}
            
            <a className='contact-icons' href='https://github.com/Nate-Kruck' target='blank'><img className='icon-images1' src={github} alt="github"/></a>
            <a className='contact-icons' href='https://www.linkedin.com/feed/' target='blank'><img className='icon-images2' src={linkdin} alt="linkedin" /></a>
            <a className='contact-icons' href='mailto:natekruck@outlook.com' target='blank'><img className='icon-images3' src={email} alt="email"/></a>

        </div>
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
        </>
    )
}

export default Contact;