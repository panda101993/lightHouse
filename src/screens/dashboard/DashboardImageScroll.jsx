
import React, { Component } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import ImageDashboard from "../../components/ImageDashboard";
//import ImageIcon from '../../assets/ImageIcon';
//console.log("hellloooooo",ImageIcon)
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
const Imageid={
  Image1:require("../../assets/images/image1.png"),
  Image2:require('../../assets/images/image2.png'),
  heartImage:require('../../assets//images/heart.png'),
  RedHeart:require('../../assets/images/redheart.png')
}
export class DashboardImageScroll extends Component {  
    constructor(props) {
      super(props)
    
      this.state = {
         Image1:null,
      }
    }
    componentDidMount() {
        this.setState({ 
       //     Image1:ImageIcon.Image1
        })
    }
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
      
       <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   <ImageDashboard 
      ImageName="TCL E-Mart" 

      ImageA={Imageid.Image1}
         />
   </div>
   <div>   <ImageDashboard 
      ImageName="TCL E-Mart" 

      ImageA={Imageid.Image1}
         />
   </div>
   <div> 
   <ImageDashboard 
      ImageName="TCL E-Mart" 

      ImageA={Imageid.Image1}
         />
   </div>
   <div> 
   <ImageDashboard 
      ImageName="TCL E-Mart" 

      ImageA={Imageid.Image1}
         />
     
   </div>
   <div> 
   <ImageDashboard 
      ImageName="TCL E-Mart" 

      ImageA={Imageid.Image1}
         />
   </div>
   <div> 
   <ImageDashboard 
      ImageName="TCL E-Mart" 

      ImageA={Imageid.Image1}
         />
   </div>
  

</Carousel> 
            </div>
        )
    }
}

export default DashboardImageScroll
