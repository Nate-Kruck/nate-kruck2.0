import React from 'react';
import { animated } from 'react-spring';
import '../sass/menu.scss';

// Navigation component that renders an animation from react-spring

export const FullMenu = ({ style }) => (
    <animated.div className="menu menu--full" style={style}>
        <nav>
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
        </nav>
    </animated.div>
)