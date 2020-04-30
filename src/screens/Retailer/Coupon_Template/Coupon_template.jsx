import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Carousel from  'react-multi-carousel'
import ImageDashboard from '../../../components/ImageDashboard'
import { Switch, Route, Link } from "react-router-dom";
import Header2 from '../../../components/Header2'
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

export default class Coupon_template extends Component {

   

    render() {
        return (
            <div>
   <body>
     <Header2 />
      
      <section>
         <div class="container-fluid">
           <div class="coupn-setting my-5">
             {/* <ul>
               <li><a class="active" href="101-coupon-template.html">Create Coupon</a></li>
               <li ><a href="my-coupons-history.html">Manage Coupons</a></li>
               <li><a href="109-Manage-one-time%20coupon.html">Single Use Coupon</a></li>
               <li><a href="77-settings-retailer.html">Settings</a></li>
             </ul> */}
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
       <ImageDashboard 
      // ImageName="TCL E-Mart" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      // heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      // ImageName="TCL E-Mart" 
      //LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      // heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      // ImageName="TCL E-Mart" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      // heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      // ImageName="TCL E-Mart" 
      //LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      // heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      // ImageName="TCL E-Mart" 
      //LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      // heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 
        </div>   
      </section>
      <Footer/>
     
      <div class="modal fade" id="locationsetmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Please Set Your Location!</h5>
               </div>
               <div class="modal-body">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
               </div>
            </div>
         </div>
         </div>
         <div class="modal fade" id="fill-loctnform" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <ul class="curent-loc">
                     <li><i class="fa fa-map-marker" aria-hidden="true"></i></li>
                     <li><button type="button" class="btn btn-location">Use my current location</button></li>
                  </ul>
               </div>
               <div class="modal-body">
                  <div class="location-form">
                     <h3>Enetr Your Location Details</h3>
                     <form>
                        <div class="form-group dash-form">
                           <label for="exampleFormControlInput1">Pin Code*</label>
                           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                        </div>
                        <div class="form-group dash-form">
                           <label for="exampleFormControlSelect1">State*</label>
                           <select class="form-control" id="exampleFormControlSelect1">
                              <option>UP</option>
                              <option>Delhi</option>
                           </select>
                        </div>
                        <div class="form-group dash-form">
                           <label for="exampleFormControlSelect2">City*</label>
                           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                        </div>
                        <div class="form-group dash-form">
                           <label for="exampleFormControlTextarea1">Address*</label>
                           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="dasmodal-save">
                           <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         </div> 

         <div class="modal fade" id="logout" tabindex="-1" role="dialog"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
               <div class="modal-content coup-code">
                  <div class="modal-header locationsethead adminis">
                     <h5>Are you sure you want to Logout?</h5>
                  </div>
                  <div class="modal-body ok n-yes">
                    <button class="btn setloc-btn" type="submit" data-dismiss="modal">No</button>
                     <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit">Yes</button></a>
                  </div>
               </div>
            </div>
         </div>
     
   </body>
            </div>
        )
    }
}
