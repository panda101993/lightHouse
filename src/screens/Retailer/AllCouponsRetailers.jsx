import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Footer from '../../components/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';   
import  CouponsImage from '../../components/CouponsImage'

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



export class AllCouponsRetailers extends Component {
    render() {
        return (
            <div> 
                <body> 
                <Header2 /> 
                <section class="second">
         <div class="container-fluid">

            <div class="slidertop">
               <section class="center slider">
                  {/* <div>
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

      <div class="left-contant">
        <div class="marname">
           <h2 class="mn"><a href="60-Website(Retailer)%20.html">Retailer Name</a></h2>
          
        </div>
        </div>
      <section class="third">
         <div class="container-fluid">
           <div class="row">
              <div class="col-md-3">
                 <div class="accor-bord apply-on">

               <ul class="button_cs sve-can button-shift all-clr apply-on">
                   <li>Apply On</li>
                  <li><button type="button" class="save0 s-1"data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
              </ul>
              <div class="check-padd-bottom">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Category Name</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Sub-Category Name</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Item Type</label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Brand</label>
              </div>
            </div>

           

         </div>
              </div>


              <div class="col-md-9">

                <div class="slid-margin">
  
                  <div class="row mar-bottom">
                      {/* <div class="col-md-3">
                      <img src="images/pizza great deal.png"
                       class="pizza-deal" data-dismiss="modal" data-toggle="modal" data-target="#great-deal"/>
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal"/>
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal"/>
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal"/>
                      </div> */} 
                        <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
                  </div>
  
                 
  
                  <div class="row mar-bottom">
                      {/* <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal"/>
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal"/>
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal"/>
                      </div>
                      <div class="col-md-3">
                      <img src="images/pizza great deal.png" class="pizza-deal" />
                      </div> */}
                        <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
                      <CouponsImage />
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

export default AllCouponsRetailers
