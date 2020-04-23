
import React, { Component } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 

import CatogriesImage from './CatogriesImage';
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

export class CatogriesScroll  extends Component { 
    render() {
        return (
            <div>
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
>
   <div>
       <CatogriesImage ImageName="Bounce Salon & Spa" />
   </div> 
   <div> 
       <CatogriesImage ImageName="Boddy Massage" />
   </div>
   <div> 
       <CatogriesImage ImageName="Hair Cutting" />
   </div>
   <div> 
       <CatogriesImage ImageName="Food Not Fine Dining" />
   </div>
   <div> 
       <CatogriesImage ImageName="Bounce Salon & Spa" />
   </div>
   <div> 
       <CatogriesImage ImageName="Hair Cutting" />
   </div>
   <div> 
       <CatogriesImage ImageName="last" />
   </div>
  

</Carousel> 
            </div>
        )
    }
}

export default CatogriesScroll