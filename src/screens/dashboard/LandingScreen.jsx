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
import Header4 from '../../components/Header4'
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
   Image5:require('../../assets/images/image5.png'),
   heartImage:require('../../assets//images/heart.png'),
   RedHeart:require('../../assets/images/redheart.png'),
   Image9:require("../../assets/images/image9.png"),
    Image10:require("../../assets/images/image10.png"),
    Image11:require("../../assets/images/image11.png"),
    Image12:require("../../assets/images/image12.png"),
   
          
 }


class componentName extends Component {
  render() {
    return ( 

      <>   
      <body>  
    {/* <HeaderLandingScreen /> */}
    <Header4 />
      <section class="second">  
      <LandingTopicName HeaderName ="Marts" /> 
      <div class="container-fluid"> 
       {/* <DashboardImageScroll />  */} 
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
      ImageName="TCL E-Mart1" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart2" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="TCL E-Mart3" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart4" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart5" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart6" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart7" 
      LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 


       </div>
        <LandingTopicName HeaderName ="Categories" /> 
        
        <div class="container-fluid"> 
        <h5 class="product-herd">Products</h5> 
         {/* <CatogriesScroll /> */}  
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
      ImageName="Bounce Salon & Spa" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="Hair Cutting" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Hair Cutting" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/subCategories"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 


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

      <div>
      <ImageDashboard 
     ImageName="Watches" 
   //  LinkId="/subCategories"
     ImageA={Imageid.Image9} 
     heartImage={Imageid.RedHeart}
        />

  </div> 
  <div> 
  
  <ImageDashboard 
     ImageName="Ornaments" 
    // LinkId="/subCategories"
     ImageA={Imageid.Image10} 
     heartImage={Imageid.RedHeart}
        />
  </div>
  <div>  
      <ImageDashboard 
     ImageName="Dresses" 
    // LinkId="/subCategories"
     ImageA={Imageid.Image11} 
     heartImage={Imageid.RedHeart}
        />
  </div>
  <div> 
  
  <ImageDashboard 
     ImageName="Furniture" 
  //   LinkId="/subCategories"
     ImageA={Imageid.Image10} 
     heartImage={Imageid.RedHeart}
        />
  </div>
  <div> 
  
  <ImageDashboard 
     ImageName="Boddy Massage" 
  //   LinkId="/subCategories"
     ImageA={Imageid.Image9} 
     heartImage={Imageid.RedHeart}
        />
    
  </div>
  <div> 
  
  <ImageDashboard 
     ImageName="Hair Cutting" 
  //   LinkId="/subCategories"
     ImageA={Imageid.Image10} 
     heartImage={Imageid.RedHeart}
        />
  </div>
  <div> 
   
      <ImageDashboard 
     ImageName="TCL E-Mart" 
  //   LinkId="/subCategories"
     ImageA={Imageid.Image9} 
     heartImage={Imageid.RedHeart}
        />
  </div>



 </Carousel>
       

       </div> 

         <LandingTopicName HeaderName ="Coupons" /> 
         {/* <CouponsScrollPupup /> */} 
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
<CouponsImage />
<CouponsImage />
<CouponsImage />
<CouponsImage />
<CouponsImage />
<CouponsImage />
 </Carousel>

         
        </section>
        <Footer />
      </body>
      
      </>
    )
  }
}

export default componentName
