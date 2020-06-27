import React, { Component } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';   
import CouponsImage from "../components/CouponsImage"
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
export class CouponsScrollPupup extends Component {
    render() {
        return (
            <div> 
                  <div class="landing-slider">
                   <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={5000000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>     <div>
     <CouponsImage />
    
    </div>  
    <div>
     <CouponsImage />
    
    </div>        
    <div>
     <CouponsImage />
    
    </div>
    <div>
     <CouponsImage />
    
    </div>
    <div>
     <CouponsImage />
    
    </div>
    <div>
     <CouponsImage />
    
    </div>
    <div>
     <CouponsImage />
    
    </div>
    <div>
     <CouponsImage />
    
    </div>
    </Carousel>  
            
</div> 
            </div>
        )
    }
}

export default CouponsScrollPupup
