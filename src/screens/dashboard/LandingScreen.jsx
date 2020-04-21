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

class componentName extends Component {
  render() {
    return ( 

      <>   
      <body>  
    <HeaderLandingScreen />
      <section class="second"> 
      <div class="container-fluid"> 
      <DashboardImageScroll /> 
       <LandingTopicName HeaderName ="Marts" /> 
       <div class="top-slider">  
       {/* <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />  */}

      
       {/* <DashboardImageScroll /> */}
       <div class="slider-item"> 
       {/* <WishlistImageComponent  /> 
       <WishlistImageComponent /> */} 

       
         {/* {/* <ImageDashboard  ImageName = "TLC E-MART"   />  */}
         <ImageDashboard  ImageName = "TLC E-MART"   /> 
         {/* <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />   */}
         </div>
        </div>
         <LandingTopicName HeaderName ="Categories" />
         <h5 class="product-herd">products</h5>
         <DashboardProductImage ImageName="Bounce Salon & Spa" />

         <h5 class="product-herd">Servies</h5>
         {/* <ImageDashboard  ImageName = "TLC E-MART"   /> 
         <ImageDashboard  ImageName = "TLC E-MART"   /> */}
         {/* <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />
         <ImageDashboard  ImageName = "TLC E-MART"   />   */}


         <LandingTopicName HeaderName ="Coupons" /> 
         {/* <CouponsImage />  
         <CouponsImage /> */}
         
         </div>
        </section>
        <Footer />
      </body>
      
      </>
    )
  }
}

export default componentName
