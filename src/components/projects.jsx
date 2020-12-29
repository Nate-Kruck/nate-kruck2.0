// Add the Card Stack from react-spring to display each project.

import React from 'react';
import Thumbnail from './thumbnail';
import coffee from '../images/coffee.jpg';
import networkr from '../images/networkr.png';
import mood from '../images/mood.png';
import '../sass/Projects.scss';

function Projects(props) {
    return(
        <div className="thumbnail-container">
            <h1>Projects</h1>
            <Thumbnail
                link="https://kind-bhabha-f2de49.netlify.app/"
                image={coffee}
                title="No Stars, No Bucks"
                category=""
            />
            <Thumbnail
                link="https://networkr-be.herokuapp.com/"
                image={networkr}
                title="Content Hub for Alchemy Students"
                category=""
            />
            <Thumbnail
                link="https://mood-music.netlify.app/"
                image={mood}
                title="Mood Music"
                category=""
            />
        </div>
    )
}

export default Projects;