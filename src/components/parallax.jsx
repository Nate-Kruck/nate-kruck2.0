import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import '../sass/Parallax.scss';
import '../sass/App.scss';
import Header from '../components/header';

class MainParallax extends React.Component {
    render() {
        return (
            <>
            <Parallax vertical ref={(ref) => (this.parallax = ref)} pages={3}>
                <div className="stars">
                <div className="twinkling">
                    <ParallaxLayer offset={0} speed={1}  onClick={() => this.parallax.scrollTo(1)} />
                </div>
                </div>
            <Header />

                    <ParallaxLayer offset={1} speed={1} onClick={() => this.parallax.scrollTo(2)} />
               

                    <ParallaxLayer offset={2} speed={0} factor={3} onClick={() => this.parallax.scrollTo(0)} style={{ backgroundColor: '#253237' }} />
            </Parallax>
                    </>
        )
    }
}

export default MainParallax;