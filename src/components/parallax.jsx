import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';


class MainParallax extends React.Component {
    render() {
        return (
            <Parallax vertical ref={(ref) => (this.parallax = ref)} pages={3}>

                <ParallaxLayer offset={0} speed={1}  onClick={() => this.parallax.scrollTo(1)} style={{ background: 'black' }} />
                <ParallaxLayer offset={1} speed={1} onClick={() => this.parallax.scrollTo(2)} style={{ background: '#AF81FA' }} />

                <ParallaxLayer offset={2} speed={0} factor={3} onClick={() => this.parallax.scrollTo(0)} style={{ backgroundColor: '#253237' }} />

            </Parallax>
        )
    }
}

export default MainParallax;