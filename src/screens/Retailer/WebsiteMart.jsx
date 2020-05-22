import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  
import ImageDashboard from '../../components/ImageDashboard';

const responsive = {
   desktop: {
     breakpoint: { max: 2000, min: 1024 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1,
     slidesToSlide: 1, // optional, default to 1.
   },
 }; 
 
 const responsive1 = {
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

export class WebsiteMart extends Component {
    render() {
        return (
            <div> 
                <body> 
                    <Header2 />
                    <section>
         {/* <div class="bg"> */}
           
               <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
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
               <img src={require("../../assets/images/Layer-41.png")} />
               </div> 
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div>
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div> 
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div>
               <div> 
               <img src={require("../../assets/images/Layer-41.png")} />
               </div>
              {/* <div class="carousel-item">
                
                  <img src={require("../../assets/images/Layer-41.png")} />
                 </div>
                 <div class="carousel-item">
               
                  <img src={require("../../assets/images/Layer-41.png")} />
                 </div>
                 <div class="carousel-item">
                
                  <img src={require("../../assets/images/Layer-41.png")} />
                 </div>
                 <div class="carousel-item">
                
                  <img src={require("../../assets/images/Layer-41.png")} />
                 </div> */}
</Carousel>       
               
               {/* <a class="carousel-control-prev" href="#demo" data-slide="prev">
                 <span class="carousel-control-prev-icon"></span>
               </a>
               <a class="carousel-control-next" href="#demo" data-slide="next">
                 <span class="carousel-control-next-icon"></span>
               </a> */}
             {/* </div>  */}
        
         <div class="container">
            <div class="basic mt-3 ">
               <div class="d-flex justify-content-between align-items-center">
                  <div class="john-json">
                     <h6>V-MART</h6>
                     <p class="mb-3">OKhala Phase 1,D-115, New Delhi, 110020</p>
                     <label>Parking Availability :</label>
                     <span>Yes</span>
                  </div>
                  {/* <div> <a href="64-all-retailers.html"><button class="btn btn-theme">View Coupons</button></a></div> */}
                  <div> <Link to ="/AllRetailers"  > <button class="btn btn-theme">View Coupons</button> </Link></div>
               </div>
            </div>
            <div class="left-contant00">
                                 <h3>Categories</h3>
                              </div> 
                              
         {/* <CatogriesScroll /> */}  
         <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive1}
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

                              {/* <div class="wish-slider">
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/heart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider active">
                                       <div class="cover-images00">
                                          <img src="images/image6.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Boddy Massage</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/heart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image7.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Hair Cutting</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/heart.png" /></a>
                                       </div>
                                    </div>
                                 </div> */} 
                                 {/* <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Food Not Fine Dining</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/heart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                         <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/heart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                              </div> */}
                              <div class="cover-bodyspa">
                                 <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 {/* <img src="images/bodyspa.png" />  */} 
                                 <img src={require("../../assets/images/bodyspa.png")} />
                                 <div class="inner-spa">
                                    <h6>Body Massage Shop</h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>S1234567890</li>
                                    <li>Floor Number:</li>
                                    <li>2nd Floor</li>
                                    <li>Contact Number : </li>
                                    <li>+91-7896543454</li>
                                 </ul>
                                 </div>
                                 
                                 </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 {/* <img src="images/bodyspa.png"/>  */} 
                                 <img src={require("../../assets/images/bodyspa.png")} />
                                 <div class="inner-spa">
                                    <h6>Body Massage Shop</h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>S1234567890</li>
                                    <li>Floor Number:</li>
                                    <li>2nd Floor</li>
                                    <li>Contact Number : </li>
                                    <li>+91-7896543454</li>
                                 </ul>
                                 </div>
                                 
                                 </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 {/* <img src="images/bodyspa.png" />  */} 
                                 <img src={require("../../assets/images/bodyspa.png")} />
                                 <div class="inner-spa">
                                    <h6>Body Massage Shop</h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>S1234567890</li>
                                    <li>Floor Number:</li>
                                    <li>2nd Floor</li>
                                    <li>Contact Number : </li>
                                    <li>+91-7896543454</li>
                                 </ul>
                                 </div>
                                 
                                 </div>
                                </div>

                             </div>
                              <div class="row mt-4">
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 {/* <img src="images/bodyspa.png" />  */} 
                                 <img src={require("../../assets/images/bodyspa.png")} />
                                 <div class="inner-spa">
                                    <h6>Body Massage Shop</h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>S1234567890</li>
                                    <li>Floor Number:</li>
                                    <li>2nd Floor</li>
                                    <li>Contact Number : </li>
                                    <li>+91-7896543454</li>
                                 </ul>
                                 </div>
                                 
                                 </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 {/* <img src="images/bodyspa.png" />  */} 
                                 <img src={require("../../assets/images/bodyspa.png")} />
                                 <div class="inner-spa">
                                    <h6>Body Massage Shop</h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>S1234567890</li>
                                    <li>Floor Number:</li>
                                    <li>2nd Floor</li>
                                    <li>Contact Number : </li>
                                    <li>+91-7896543454</li>
                                 </ul>
                                 </div>
                                 
                                 </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                 <div class="body-spa">
                                 {/* <img src="images/bodyspa.png" />  */} 
                                 <img src={require("../../assets/images/bodyspa.png")} />
                                 <div class="inner-spa">
                                    <h6>Body Massage Shop</h6> 
                                 <ul>
                                    <li>Shop Number :</li>
                                    <li>S1234567890</li>
                                    <li>Floor Number:</li>
                                    <li>2nd Floor</li>
                                    <li>Contact Number : </li>
                                    <li>+91-7896543454</li>
                                 </ul>
                                 </div>
                                 
                                 </div>
                                </div>
                                
                             </div>
                              </div>
                             



         </div>
               
               
      </section>
                
                <Footer />
               </body>
            </div>
        )
    }
}

export default WebsiteMart
