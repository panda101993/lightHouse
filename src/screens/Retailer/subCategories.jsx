import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CatogriesScroll from '../../components/CatogriesScroll';
import CouponsScrollPupup from '../../components/CouponsScrollPupup';
import CouponsImage from '../../components/CouponsImage'; 
import ImageDashboard from "../../components/ImageDashboard" 
const Imageid={
   Image1:require("../../assets/images/image1.png"),
   Image5:require('../../assets/images/image5.png'),
   heartImage:require('../../assets//images/heart.png'),
   RedHeart:require('../../assets/images/redheart.png'),
   Image9:require("../../assets/images/image9.png"),
    Image10:require("../../assets/images/image10.png"),
    Image11:require("../../assets/images/image11.png"),
    Image12:require("../../assets/images/image12.png"),
   // Image13:require("../../assets/images/image13.png")
         
          
 }
 
const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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

export class subCategories extends Component {
   render() {
      return (
         <div> <body>
            <Header2 />
            <div class="container-fluid">
               <div class="slidertop">
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

                     {/* <section class="center slider"> */}
                     <div>
                        <div class="slicent activa">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     <div>
                        <div class="slicent">
                           Category Name
                  </div>
                     </div>
                     {/* </section> */}

                  </Carousel>
               </div>
            </div>
            <section class="third">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-3">
                        <div class="accor-bord">
                           <ul class="button_cs sve-can button-shift all-clr">
                              <li><button type="button" class="save0 s-1" data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
                           </ul>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade" id="headingOne">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseOn" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseOn" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="collapseOn" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade" id="headingOne">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseO" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseO" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="collapseO" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade" id="headingOne">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="collapse" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade" id="headingOne">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collap" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collap" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="collap" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade" id="headingOne">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#colla" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#colla" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="colla" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1" >Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="to-al-cent">
                              <div class="form-check first-nopad">
                                 <div class="accordion" id="accordionExample">
                                    <div class="car">
                                       <div class="card-heade" id="headingOne">
                                          <h2 class="mb-0 down-arrow">
                                             <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                             <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#coll" aria-expanded="false" aria-controls="collapseOne">
                                                <span class="mart-mar-left">Mart Name </span>
                                             </button>
                                             <div>
                                                <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#coll" aria-expanded="false" aria-controls="collapseOne"></i>
                                             </div>
                                          </h2>
                                       </div>
                                       <div id="coll" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                          <div class="card-body">
                                             <div class="form-group form-check no-pad-left">
                                                <div class="form-group form-check ">
                                                   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                   <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-9">
                        <section class="second"> 
                        <div class="landing-slider">
                           {/* <div class="top-slider"> */}

                              {/* <CatogriesScroll /> */}
                               {/* </div> */}  
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



                           <div class="left-contant">
                              <h3>Coupons</h3>
                           </div>
                           {/* <CouponsScrollPupup /> */} 
                        
                        <div class="cover-slidersection">
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
                            <CouponsImage />
                            <CouponsImage />
                            <CouponsImage />
                            <CouponsImage />
                            <CouponsImage />
                            <CouponsImage />
                            <CouponsImage />
                         
                            
                              </Carousel>
                         </div>
                         </div> 
                        
                        </section>
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

export default subCategories
