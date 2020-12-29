import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import '../sass/Parallax.scss';
import '../sass/App.scss';
import Projects from './projects';
import satellite from '../images/satellite.png';
import moon from '../images/moon.png';

class MainParallax extends React.Component {
    render() {
        return (
            <>
            <Parallax vertical ref={(ref) => (this.parallax = ref)} pages={2}>
                <div className="stars">
                <div className="twinkling">
                    <ParallaxLayer offset={0} speed={1}  onClick={() => this.parallax.scrollTo(1)} >
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.5} speed={-0.1} style={{ pointerEvents: 'none' }} >
                        <img src={satellite} alt="satellite" className="satellite" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={-0.2} speed={-0.1} style={{ pointerEvents: 'none' }} >
                        <img src={moon} alt="moon" className="moon" />
                    </ParallaxLayer>
                </div>
                </div>
                    <ParallaxLayer offset={1.35} speed={1} factor={3} onClick={() => this.parallax.scrollTo(0)}>
                        <Projects />
                    </ParallaxLayer>
            </Parallax>
            </>
        )
    }
}

export default MainParallax;