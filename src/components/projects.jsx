// Add the Card Stack from react-spring to display each project.

import React from 'react';

function Thumbnail(props) {
    return (
        <div className="project">
            <a href={props.link} target="blank">
                <div className="project-image">
                    <img src={props.image} alt="Project" />
                </div>
            </a>
            <div className="project-title">{props.title}</div>
            <div className="project-category">{props.category}</div>
        </div>
    )
} 

export default Thumbnail;