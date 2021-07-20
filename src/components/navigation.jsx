import React from 'react';
// import { Route } from 'react-router-dom';
import { animated } from 'react-spring';
import '../sass/menu.scss';
import RubberBand from 'react-reveal/RubberBand';

// Navigation component that renders an animation from react-spring

export const FullMenu = ({ style }) => (
    <animated.div className="menu menu--full" style={style}>
        <nav>
        <RubberBand>
            <ul className="menu-list menu-list--full">
                <li className="menu-list-item menu-list-item--full">
                <a href="/">Home</a>
                </li>
                <li className="menu-list-item menu-list-item--full">
                    <a href="/about">About</a>
                </li>
                <li className="menu-list-item menu-list-item--full">
                    <a href="/projects">Projects</a>
                </li>
                <li className="menu-list-item menu-list-item--full">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </RubberBand>
        </nav>
    </animated.div>
)