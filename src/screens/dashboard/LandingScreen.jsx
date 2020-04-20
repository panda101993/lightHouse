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

class componentName extends Component {
  render() {
    return ( 

      <>   
      <body>  
    <HeaderLandingScreen />
      <section class="second"> 
      <div class="container-fluid">
       <LandingTopicName HeaderName ="Marts" /> 
       <div class="top-slider"> 
       <div class="slider-item"> 
       {/* <WishlistImageComponent  /> 
       <WishlistImageComponent /> */}
         <ImageDashboard  ImageName = "TLC E-MART"   /> 
         <ImageDashboard  ImageName = "TLC E-MART"   />
         {/* <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />   */}
         </div>
        </div>
         <LandingTopicName HeaderName ="Categories" />
         <h5 class="product-herd">products</h5>
         <ImageDashboard  ImageName = "TLC E-MART"   /> 
         {/* <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />  */}

         <h5 class="product-herd">products</h5>
         <ImageDashboard  ImageName = "TLC E-MART"   /> 
         <ImageDashboard  ImageName = "TLC E-MART"   />
         {/* <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />   */}


         <LandingTopicName HeaderName ="Coupons" /> 
         <CouponsImage />  
         <CouponsImage />
         
         </div>
        </section>
        <Footer />
      </body>
      
      </>
    )
  }
}

export default componentName
