import React, { Component } from 'react';
import '../sass/home.scss';

export default class Home extends Component {
    render() {
        return (
            <h1>
                <span className="flicker">Welcome to </span>
                <span className="Fast-flicker">Nate-Kruck</span>
                <span className="flicker">.com</span>
            </h1>
            )
        }
    }