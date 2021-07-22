import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/About.scss';
import ocean from '../videos/ocean.mp4';

const About = () => {
    return (
        <>
        <div className="container">
            <video className="ocean" autoPlay loop muted>
                <source src={ocean}type="video/mp4"/>
            </video>
            
            <h1 className="about-me">About Me</h1>

            <p>Hi! Im Nate Kruck, this is the start of my about page. I will add fun facts about me here so you can see how boring I am! lol jkjk. I love coding because it brings me joy. Bringing a webpage to life is a special skill and requires a ton of time.</p>

            <div className="link">
                <Link to="/">Home</Link>
            </div>
        </div>
        </>
    )
}

export default About;