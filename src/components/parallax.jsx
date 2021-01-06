import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import '../sass/Parallax.scss';
import '../sass/App.scss';
// import Projects from './projects';
import satellite from '../images/satellite.png';
import moon from '../images/moon.png';
import sky from '../images/sky.png';
import sun from '../images/sun.png';
import hill1 from '../images/hill1.png';
import hill2 from '../images/hill2.png';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import lefteye from '../images/lefteye.png';
import righteye from '../images/righteye.png';

class MainParallax extends React.Component {
    render() {
        return (
            <>
            <Parallax ref={(ref) => (this.parallax = ref)} pages={2} factor={1}>
                <div className="stars">
                <div className="twinkling">
                    <ParallaxLayer 
                        offset={0} 
                        speed={1} 
                        onClick={() => this.parallax.scrollTo(1)} >
                    </ParallaxLayer>

                    <ParallaxLayer 
                        offset={0.5} speed={-0.1} style={{ pointerEvents: 'none' }} >
                        <img src={satellite} alt="satellite" className="satellite" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={-0.5} speed={-0.3} style={{ pointerEvents: 'none' }} >
                        <img src={moon} alt="moon" className="moon" />
                    </ParallaxLayer>
                </div>
                </div>
                    <ParallaxLayer 
                        offset={1.05} 
                        speed={-0.4} 
                        onClick={() => this.parallax.scrollTo(0)} >
                        <img src={sky} alt="sky" className="blue-sky" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }} >
                        <img src={sun} alt="sun" className="sun" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }} >
                        <img src={lefteye} alt="leye" className="leye" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }} >
                        <img src={righteye} alt="reye" className="reye" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.8} speed={-0.1} >
                        <img src={cloud1} alt="cloud1" className="cloud1" />
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={1.1} speed={-0.3} >
                        <img src={cloud2} alt="cloud2" className="cloud2" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.9} speed={0.2} style={{ pointerEvents: 'none' }} >
                        <img src={hill1} alt="hill" className="hill1" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.86} speed={-0.1} style={{ pointerEvents: 'none' }} >
                        <img src={hill2} alt="hills" className="hill2" />
                    </ParallaxLayer>
            </Parallax>
            </>
        )
    }
}

export default MainParallax;