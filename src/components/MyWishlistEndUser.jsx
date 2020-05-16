import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
import WishlistImageComponent from './WishlistImageComponent';
import DashboardImageScroll from '../screens/dashboard/DashboardImageScroll';
import CatogriesScroll from './CatogriesScroll';  
import ImageDashboard from "./ImageDashboard";

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
 const Imageid={
   
    Image1:require("../assets/images/image1.png"),
    Image5:require('../assets/images/image5.png'),
    heartImage:require('../assets//images/heart.png'),
    RedHeart:require('../assets/images/redheart.png'),
    Image9:require("../assets/images/image9.png"),
     Image10:require("../assets/images/image10.png"),
     Image11:require("../assets/images/image11.png"),
     Image12:require("../assets/images/image12.png"),
    // Image13:require("../../assets/images/image13.png")
 }

export class MyWishlistEndUser extends Component {  
   constructor(props) {
      super(props)

      this.state = {
       
         modalStatus: false,
        
      }
   }

    render() {
        return (
            <div>
              <h3 class="info_c3">My Wishlist</h3>
                        <div class="name_c3">
                        </div>
                        <section class="second">
                           <div class="container-fluid">
                              <div class="left-contant00">
                                 <h3>Marts</h3>
                              </div> 
                              
                               <div class="wish-slider"> 
                                   {/* <DashboardImageScroll /> */} 
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
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart2" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="TCL E-Mart3" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart4" 
    //  LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart5" 
    //  LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart6" 
    //  LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart7" 
  //    LinkId="/AllRetailers"
      ImageA={Imageid.Image1} 
      heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 

                              </div>
                              <div class="left-contant00">
                                 <h3>Retailers</h3>
                               
                              </div>
                              <div class="wish-slider">
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
      ImageName="TCL E-Mart1" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart2" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="TCL E-Mart3" 
     // LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart4" 
    //  LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart5" 
    //  LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart6" 
    //  LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart7" 
  //    LinkId="/AllRetailers"
      ImageA={Imageid.Image5} 
      heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 

                              
                              </div>
                              <div class="left-contant00">
                                 <h3>Categories</h3>
                              </div>
                              <div class="wish-slider">
                                 {/* <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Bounce Salon & Spa</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image6.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Boddy Massage</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
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
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Food Not Fine Dining</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
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
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png"  /></a>
                                       </div>
                                    </div> 
                                 </div> */} 
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
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
      LinkId="/subCategories"
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="Hair Cutting" 
      LinkId="/subCategories"
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/subCategories"
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
      LinkId="/subCategories"
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Hair Cutting" 
      LinkId="/subCategories"
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/subCategories"
      ImageA={Imageid.Image10} 
      heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 


                              </div>
                              <div class="left-contant00">
                                 <h3>Sub categories</h3>
                              </div>
                              <div class="wish-slider">
                                 {/* <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src={Imageid.Image10} />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /> </a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image6.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                        <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image7.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image8.png" />
                                       </div>
                                       <div class="tcl00">
                                          <p>Sub Category Name</p>
                                          <p>Category Name</p>
                                       </div>
                                       <div class="heart">
                                          <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="slider-item">
                                    <div class="main-coverslider">
                                       <div class="cover-images00">
                                          <img src="images/image5.png" />
                                       </div>
                                       <div class="tcl00">
                                          <h3>Sub Category Name</h3>
                                          <h3>Category Name</h3>
                                       </div>
                                       <div class="heart">
                                         <a data-toggle="modal" data-target="#coup-rmv-success" ><img src="images/redheart.png" /></a>
                                       </div>
                                    </div>
                                 </div> */} 
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
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />

   </div> 
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
      LinkId="/subCategories"
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div>  
       <ImageDashboard 
      ImageName="Hair Cutting" 
      LinkId="/subCategories"
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/subCategories"
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Boddy Massage" 
      LinkId="/subCategories"
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />
     
   </div>
   <div> 
   
   <ImageDashboard 
      ImageName="Hair Cutting" 
      LinkId="/subCategories"
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />
   </div>
   <div> 
    
       <ImageDashboard 
      ImageName="TCL E-Mart" 
      LinkId="/subCategories"
      ImageA={Imageid.Image9} 
      heartImage={Imageid.RedHeart}
         />
   </div>
  

</Carousel> 


                              </div>
                           </div>
                        </section>  
                        <Modal isOpen={this.state.modalStatus} toggle={this.toggle} 
                       // style={{ top: "110px", left: "100px" }}
                       style={{ top: "190px", }}
                        >
                  <ModalBody>
                  <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Item removed from the wishlist !</h5>
               </div>
               <div class="modal-body ok">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })} >OK</button>
               </div>
            </div>

                  </ModalBody>
               </Modal>   
            </div>
        )
    }
}

export default MyWishlistEndUser
