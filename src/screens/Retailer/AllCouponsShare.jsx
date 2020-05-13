import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  
import  CouponsImage from '../../components/CouponsImage'
import Header4 from '../../components/Header4';


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

  const Imageid = {
    Image1: require("../../assets/images/image1.png"),
    Image5: require('../../assets/images/image5.png'),
    heartImage: require('../../assets//images/heart.png'),
    RedHeart: require('../../assets/images/redheart.png'),
    Image9: require("../../assets/images/image9.png"),
    Image10: require("../../assets/images/image10.png"),
    Image11: require("../../assets/images/image11.png"),
    Image12: require("../../assets/images/image12.png"),
    // Image13:require("../../assets/images/image13.png")
  
  
  }

export class AllCouponsShare extends Component {
    render() {
        return (
            <div>
                <body> 
                    {/* <Header2 />  */} 
                    <Header4 />
                    <section class="second">
         <div class="container-fluid">

<div class="slidertop">
             <section class="center slider">
               
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
                      <div class="slicent activa">
                      Retailer Name
                  </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>
                    <div>
                      <div class="slicent">
                      Retailer Name
                        </div>
                    </div>

                  </Carousel>


              </section>

            </div>





            
         </div>
      </section>
      <section class="third">
         <div class="container-fluid">
            <div class="marname">
                <h2 class="mn">Retailer Name</h2>
                <a href="#" data-toggle="modal" data-target="#icon">View Retailer Website</a>
             </div>
           <div class="coupnme" data-toggle="modal" data-target="#pophistory">
                 <div class="row">
                     
                      <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
                      
                </div>
                <div class="row my-3">
                      {/* <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal" data-dismiss="modal"
                       data-toggle="modal" data-target="#great-deal" />
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal" />
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal" />
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal" data-dismiss="modal" data-toggle="modal"
                       data-target="#great-deal" />
                      </div> */} 
                       
                       <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
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

export default AllCouponsShare
