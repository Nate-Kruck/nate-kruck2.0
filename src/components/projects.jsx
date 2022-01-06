import React, { useState } from "react";
import pThumbnail from "../projectImages";
import RubberBand from 'react-reveal/RubberBand';
import { useSpring } from 'react-spring';
import { FullMenu } from '../components/navigation';
import '../sass/Projects.scss';
import Carousel from "react-material-ui-carousel";
import Item from "../hooks/Item";
import tech from '../videos/tech.mp4';


function Projects(props) {

    const [fullMenuVisible, setFullMenuVisible] = useState(false)

    const fullMenuAnimation = useSpring({
      transform: fullMenuVisible ? `translateX(0)` : `translateX(-100%)`,
      opacity: fullMenuVisible ? 1 : 0
  });

    
    return (
            <>
      <video className="tech" autoPlay loop muted>
          <source src={tech}type="video/mp4"/>
      </video> 
            
            <RubberBand>
              <button 
                className="menu-button menu-button--full"
                type="button"
                onClick={() => setFullMenuVisible(!fullMenuVisible)}
                >
                {fullMenuVisible ? "Close" : "Menu"}
              </button>
            </RubberBand>
            <FullMenu style={fullMenuAnimation} />
          
          <Carousel
          indicators={false}
          duration={1800}
          animation='slide'
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{          
            style: {
              color: '#a972cb',
              border: 'solid',
              borderRadius: 7,
              borderWidth: 'thin',
              borderColor: '#a972cb',
            },
          }}
          navButtonsWrapperProps={{ 
            style: {
              marginTop: 100,
              padding: 10,
            }
          }} 
          NextIcon='>'            
          PrevIcon='<' 
          >

            {
              pThumbnail.map( (item, i) => <Item key={i} item={item} /> )
            }
            
          </Carousel>
        
        </>
    )
    

}

export default Projects;
