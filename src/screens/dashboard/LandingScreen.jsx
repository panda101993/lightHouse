import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import LandingTopicName from '../../components/LandingTopicName'
import ImageDashboard from '../../components/ImageDashboard'
import CouponsImage from '../../components/CouponsImage'
import HeaderLandingScreen from '../../components/HeaderLandingScreen'
import WishlistImageComponent from '../../components/WishlistImageComponent'
import ViewCouponRetailer from '../../components/ViewCouponRetailer'
import CouponImageSetting from '../../components/CouponImageSetting'
import DashboardImageScroll from './DashboardImageScroll' 
import DashboardProductImage from '../../components/DashboardProductImage'
import CouponsScrollPupup from '../../components/CouponsScrollPupup'
import CatogriesScroll from '../../components/CatogriesScroll' 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
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

class componentName extends Component {
  render() {
    return ( 

      <>   
      <body>  
    <HeaderLandingScreen />
      <section class="second">  
      <LandingTopicName HeaderName ="Marts" /> 
      <div class="container-fluid"> 
       <DashboardImageScroll /> 
       </div>
        <LandingTopicName HeaderName ="Categories" /> 
        
        <div class="container-fluid"> 
        <h5 class="product-herd">Products</h5> 
        <CatogriesScroll />
       </div>  
      
       <div class="container-fluid"> 
       <h5 class="product-herd">Services</h5> 
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
<div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        {/* <img src="images/image9.png"> */}
                        <img src={require("../../assets/images/image9.png")} />
                     </div>
                     <div class="tcl">
                        <p>Watches</p>
                     </div>
                     <div class="heart">
                        <a data-toggle="modal" data-target="#coup-rmv-success" >
                          {/* <img src="images/heart.png">  */}
                          <img src={require("../../assets/images/heart.png")} />
                          </a>
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        {/* <img src="images/image10.png"> */}
                        <img src={require("../../assets/images/image10.png")} />
                     </div>
                     <div class="tcl">
                        <p>Ornaments</p>
                     </div>
                     <div class="heart">
                        <a data-toggle="modal" data-target="#coup-rmv-success" >
                            {/* <img src="images/heart.png">  */}
                          <img src={require("../../assets/images/heart.png")} />
                          </a>
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        {/* <img src="images/image11.png"> */}
                        <img src={require("../../assets/images/image11.png")} />
                     </div>
                     <div class="tcl">
                        <p>Dresses</p>
                     </div>
                     <div class="heart">
                        <a data-toggle="modal" data-target="#coup-rmv-success" >
                          {/* <img src="images/heart.png">  */}
                          <img src={require("../../assets/images/heart.png")} />
                          </a>
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        {/* <img src="images/image12.png"> */}
                        <img src={require("../../assets/images/image12.png")} />
                     </div>
                     <div class="tcl">
                        <p>Furniture</p>
                     </div>
                     <div class="heart">
                        <a data-toggle="modal" data-target="#coup-rmv-success" >
                        <img src={require("../../assets/images/heart.png")} /> </a>
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        {/* <img src="images/image9.png"> */}
                        <img src={require("../../assets/images/image9.png")} />
                     </div>
                     <div class="tcl">
                        <p>Watches</p>
                     </div>
                     <div class="heart">
                        <a data-toggle="modal" data-target="#coup-rmv-success" > 
                        {/* <img src="images/heart.png">  */} 
                        <img src={require("../../assets/images/heart.png")} />
                        </a>
                     </div>
                  </div>
               </div>

 </Carousel>
       

       </div> 

         <LandingTopicName HeaderName ="Coupons" /> 
         <CouponsScrollPupup />
         
        </section>
        <Footer />
      </body>
      
      </>
    )
  }
}

export default componentName
