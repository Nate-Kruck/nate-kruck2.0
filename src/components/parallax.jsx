import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import '../sass/Parallax.scss';
import '../sass/App.scss';
// import Projects from './projects';
import satellite from '../images/satellite.png';
import moon from '../images/moon.png';
import sky from '../images/sky.png';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import city from '../images/city.png';


class MainParallax extends React.Component {
    render() {
        return (
            <>
                <Parallax ref={(ref) => (this.parallax = ref)} pages={2} scrolling={true} >
                    <div className="stars">
                        <div className="twinkling">
                            <ParallaxLayer 
                                offset={0} 
                                speed={1} 
                                onClick={() => this.parallax.scrollTo(1)    } >
                            </ParallaxLayer>
                            
                            <ParallaxLayer 
                                offset={0.2} speed={-0.1} >
                                <img src={satellite} alt="satellite"    className="satellite" />
                            </ParallaxLayer>

                            <ParallaxLayer 
                                offset={-0.42} speed={-0.3} >
                                <img src={moon} alt="moon"  className="moon" />
                            </ParallaxLayer>
                    </div>
                        </div>
                    
                            <ParallaxLayer 
                                offset={1.05} 
                                speed={-0.4} 
                                onClick={() => this.parallax.scrollTo(0)  } >
                                <img src={sky} alt="sky"  className="blue-sky" />
                            </ParallaxLayer>


                    {/* Already have a sun included with the city so leaving this here incase I change my mind */}

                    {/* <ParallaxLayer offset={1.2} speed={0.5} >
                        <img src={sun} alt="sun" className="sun" />
                    </ParallaxLayer> */}

                            <ParallaxLayer 
                                offset={0.8} speed={-0.1} >
                                <img src={cloud1} alt="cloud1" className="cloud1" />
                            </ParallaxLayer>
                    
                            <ParallaxLayer 
                                offset={1.1} 
                                speed={-0.3} >
                                <img src={cloud2} alt="cloud2" className="cloud2" />
                            </ParallaxLayer>

                        <div className="x-city">
                            <ParallaxLayer 
                                offset={1.1} 
                                speed={-0.1} >
                                <img src={city} alt="city" className="city" />
                            </ParallaxLayer>
                        </div>
                </Parallax>
            </>
        )
    }
}

export default MainParallax;