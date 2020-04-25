import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Carousel from  'react-multi-carousel'
import ImageDashboard from '../../../components/ImageDashboard'

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
       <Header/>
      {/* <header>
         <div class="top-head">
            <div class="container-fluid">
               <nav class="top-nav">
                  <div class="right-top">
                     <ul class="right-sideloctn">
                        <li>
                           <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </li>
                        <li>
                            <a href="#" data-toggle="modal" data-target="#fill-loctnform">Choose location <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                           <!-- <select class="custom-select" id="inputGroupSelect01" data-toggle="modal" data-target="#locationsetmodal">
                              <option selected>Choose location</option>
                              <option value="1">New Delhi</option>
                              <option value="2">Lucknow</option>
                              <option value="3">Noida</option>
                           </select> -->
                        </li>
                     </ul>
                  </div>
                  <div class="left-top">
                     <ul class="leftsideloctn">
                        <li class="nav-item dropdown">
                           <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Retailer
                           </a>
                           <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="14-login(retailer).html">Login</a>
                              <a class="dropdown-item" href="create-webpage126.html">Sign Up</a>
                           </div>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           End User
                           </a>
                           <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="3-login.html">Login</a>
                              <a class="dropdown-item" href="25-signup-user.html">Sign Up</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
         <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light">
               <a class="navbar-brand" href="index.html">
               <img class="logo" src="images/logo.png">
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto custom-nav">
                     <!-- <li class="serch-sec">
                        <input class="form-control" type="search" placeholder="Search by Title, Product/Service name etc" aria-label="Search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                     </li> -->
                     <li class="nav-item dropdown account-drop">
                         <a class="nav-link py-0" id="navbarDropdown" href="77-settings-retailer1.html">
                             Credits Point(1000)
                         </a>
                      </li>
                     <li class="nav-item dropdown account-drop">
                        <a class="nav-link py-0" id="navbarDropdown" data-toggle="modal" data-target="#logout">
                           Log Out
                        </a>
                     </li>
                     <li class="notification-icon"><a href="124-notifications-screen-retailer.html"><i class="fa fa-bell" aria-hidden="true"></i></a></li>
                     <li class="prfile">
                        <p>Kamal</p>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header> */}
      <section>
         <div class="container-fluid">
           <div class="coupn-setting my-5">
             <ul>
               <li><a class="active" href="101-coupon-template.html">Create Coupon</a></li>
               <li ><a href="my-coupons-history.html">Manage Coupons</a></li>
               <li><a href="109-Manage-one-time%20coupon.html">Single Use Coupon</a></li>
               <li><a href="77-settings-retailer.html">Settings</a></li>
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
  </div>

</Carousel> 
            {/* <div class="top-slider">
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                       <a href="102-add-coupon.html"><img src="images/Template-1.png"/></a> 
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        <a href="102-add-coupon.html"><img src={require("../../../assets/images/Template-1.png")}/></a> 
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        <a href="102-add-coupon.html"><img src={require("../../../assets/images/Template-1.png")}/></a> 
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        <a href="102-add-coupon.html"><img src={require("../../../assets/images/Template-1.png")}/></a> 
                     </div>
                  </div>
               </div>
               <div class="slider-item">
                  <div class="main-coverslider">
                     <div class="cover-images">
                        <a href="102-add-coupon.html"><img src={require("../../../assets/images/Template-1.png")}/></a> 
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </section>
      <Footer/>
      {/* <!-- footer section -->
       <footer class="footer">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="footer-logosec">
                     <img class="dammy-logo" src="images/logo-copy.png">
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="main-infosec">
                     <div class="info-left mr-15">
                        <h2>Information</h2>
                        <ul class="foter">
                           <li><a href="about.html">About Us </a></li>
                           <li><a href="terms-condition.html">Terms&Conditions </a></li>
                           <li><a href="privacypolicy.html">Privacy Policy </a></li>
                        </ul>
                     </div>
                     <div class="info-left">
                        <h2>CONTACT</h2>
                        <ul class="foter">
                           <li><a href="how-it-work.html">How it Works </a></li>
                           <li><a href="contact-us.html">Contact Us </a></li>
                           <li><a href="FAQS.html">FAQs </a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="right-footer">
                     <h2>Follow Us</h2>
                     <ul class="social-icon">
                        <li><a href="#"><img class="social-pic" src="images/fb.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/linkdn.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/googlepluse.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/twitr.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/insta.png"></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      <p class="copyright text-center">@All rights reserved 2020</p> */}
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
      {/* <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/app.js"></script>
      <script>
         $(document).ready(function(){
             $("#locationsetmodal").modal('show');
         });
      </script>
      <script>
         $('.top-slider').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         
         ]
         });
      </script>
      <script>
         $('.landing-slider').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         
         ]
         });
      </script> */}
   </body>
            </div>
        )
    }
}
