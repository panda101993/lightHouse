import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Carousel from  'react-multi-carousel' 
import 'react-multi-carousel/lib/styles.css'; 
import ImageDashboard from '../../../components/ImageDashboard'
import { Switch, Route, Link } from "react-router-dom";
import Header2 from '../../../components/Header2'
import CreateCoupon from '../../../components/CreateCoupon'
import CoupontempleteImage from '../../../components/CoupontempleteImage'
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
   Image1:require("../../../assets/images/Template-1.png"),
 }
 
 
const CreateCoupon1 = () => 
<div>
    <CreateCoupon />
</div>; 
const Coupontemplete =() =>
<div>
<CoupontempleteImage />
</div>;

export default class Coupon_template extends Component {

   

    render() { 
      const { path } = this.props.match;
        return (
            <div>
   <body>
     <Header2 />
      
      <section>
         <div class="container-fluid">
           <div class="coupn-setting my-5">
            
              <ul>
                                    <li>
                                      <Link to="/Coupon_template" class="active" > Create Coupon</Link> </li>
                                    <li> <Link to='/MyCoupanHistory' > Manage Coupons </Link></li>
                                    <li><Link to='/ManageOnetime'>Single Use Coupon</Link></li>
                                    <li><Link to="/Setting_retailer">Settings</Link></li>
                                </ul>
           </div>
         </div>
       </section> 
       <section class="second">
         <div class="container-fluid border-with-radius img-slic">
            <h3 class="info_c3 chnge-pass coup-temp">Please select the coupon template for the creation of the coupon : </h3>
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
  containerClass="top-slider"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="slider-item"
  itemClass="carousel-item-padding-40-px"
>
  
      
      
   <div>  
        
           <div class="main-coverslider">  
           <div class="cover-images"> 
          
         {/* <img  
          style={{width:"100%",height:"100%" }} 
          src={Imageid.Image1} 
          
          />  */} 
            <Link to='/CreateCouponform'>
         <img  
          style={{width:"100%",height:"100%" }} 
          src={Imageid.Image1} 
          
          />  
          </Link>
          </div> 
          </div>
   </div>
   <div> 
   
   
     <div class="main-coverslider">  
           <div class="cover-images">
           <Link to='/CreateCouponform'>
         <img  
          style={{width:"100%",height:"100%" }} 
          src={Imageid.Image1} 
          
          />  
          </Link>
          </div> 
          </div>

   </div>
   <div> 

         <div class="main-coverslider">  
           <div class="cover-images">
           <Link to='/CreateCouponform'>
         <img  
          style={{width:"100%",height:"100%" }} 
          src={Imageid.Image1} 
          
          />  
          </Link>
          </div> 
          </div>
   </div>
   <div> 
  
          <div class="main-coverslider">  
           <div class="cover-images">
           <Link to='/CreateCouponform'>
         <img  
          style={{width:"100%",height:"100%" }} 
          src={Imageid.Image1} 
          
          />  
          </Link>
          </div> 
          </div>
   </div>
   <div> 

          <div class="main-coverslider">  
           <div class="cover-images">
           <Link to='/CreateCouponform'>
         <img  
          style={{width:"100%",height:"100%" }} 
          src={Imageid.Image1} 
          
          />  
          </Link>
          </div> 
          </div>
   </div>
  

</Carousel> 
        </div>   
      </section> 
              {/* <Switch>
                <Route path={`${path}`} exact component={Coupontemplete} />
                <Route path={`${path}/Coupon_template`} exact component={Coupontemplete} />
                <Route path={`${path}/CreateCoupon`} component={CreateCoupon1} />


              </Switch> */}

      <Footer/>
                                  
     
   </body>
            </div>
        )
    }
}
