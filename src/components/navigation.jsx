import React from 'react';
// import { Route } from 'react-router-dom';
import { animated } from 'react-spring';
import '../sass/menu.scss';
import RubberBand from 'react-reveal/RubberBand';
import { Link } from 'react-router-dom';

// Navigation component that renders an animation from react-spring

export const FullMenu = ({ style }) => (
    <animated.div className="menu menu--full" style={style}>
        <nav>
        <RubberBand>
            <ul className="menu-list menu-list--full">
                <li className="menu-list-item menu-list-item--full">
                <Link to="/">Home</Link>
                </li>
                <li className="menu-list-item menu-list-item--full">
                    <Link to="/about">About Me</Link>
                </li>
                <li className="menu-list-item menu-list-item--full">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="menu-list-item menu-list-item--full">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </RubberBand>
        </nav>
    </animated.div>
)
