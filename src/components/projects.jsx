import React from 'react';
import Thumbnail from './thumbnail';
import networkr from '../images/networkr.png';
import mood from '../images/mood.png';
import '../sass/Projects.scss';

function Projects() {
    return(
          <>
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
        </>
    )
}

export default Projects;