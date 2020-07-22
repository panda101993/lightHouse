import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Footer from '../../components/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';   
import  CouponsImage from '../../components/CouponsImage'
import Header4 from '../../components/Header4';
import { Link } from 'react-router-dom';
import ToasterFunction from '../../components/ToasterFunc';
import apiRequest from '../../api/Apirequest';
import {loginAction} from "../../redux/action/AuthAction";
import { connect } from "react-redux";

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
  constructor(props) {
    super(props)
  
    this.state = {

      allData:[]
       
    }
  }


  getAllCoupanDisplayForRetailer=(Id)=>{
    try {
      apiRequest({ retailerId:Id }, '/user/allCouponDisplayForRetailer', 'POST')
         .then((resp) => {
            console.log('responseRetailercoupon', resp);
            switch (resp.status) {
               case (200):
                   {
                   if (resp.data.responseCode == 200) {
                    this.setState({
                      allData: resp.data.data
                   });
                   }
                    else if (resp.data.responseCode == 404) {
                       ToasterFunction("info", resp.data.responseMessage);
   
                   }
                   else if (resp.data.responseCode == 500) {
                       ToasterFunction("error", resp.data.responseMessage);
   
                   }
               }
               break;
               case (900): {
                   if (resp.status == 900) {
                       ToasterFunction("error", "Please check your internet connection")
                   }
               }
           }
         })
   } catch (error) {
      console.log('errorresponse', error)
      // ToasterFunction("error", "Network error, please contact the administrator");

   }

 }


  async componentDidMount() { 
    console.log('retailer',window.location.pathname);
    let splitUrl = window.location.pathname.split('/')
    console.log('retailer',splitUrl);
    console.log('retailer',splitUrl[2]);
   this.getAllCoupanDisplayForRetailer(splitUrl[2]);
  }
  

  couponRetailer(){
    // console.log("applicationData",this.props.applicationData)
      return this.state.allData.map((allCouponData, index)=>{
        return(
          <div>
            {/* <Carousel
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
  >  */}
  <CouponsImage 
  ImageSrc={allCouponData.image}
  Title={allCouponData.title}
  CouponCode={allCouponData.couponCode}
  Discount={allCouponData.discount}
  ItemName={allCouponData.itemName}
  ExpiryDate={allCouponData.ExpiryDate}
  CouponId={allCouponData._id}
  CouponToken={this.props.applicationData.token}
  CouponAppliedOn={allCouponData.couponAppliedOn}
  OneTimeCoupon={allCouponData.oneTimeCoupon}
  ShopName={allCouponData.shopName}
  // ShopNumber={allCouponData.retailerId.shopNumber}
  FloorNumber={allCouponData.floorNumber}
  MartName={allCouponData.martName}
  ShopPhoneNumber={allCouponData.shopPhoneNumber}
  Restrictions={allCouponData.restrictions}
  
  
  
  />
  {/* </Carousel> */}
          </div>
        )
      })
      }

      retailerNamedata(){
            return(
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
                    { this.state.allData.slice(0,1).map((allCouponData, index)=>{
                      return(
                    <div>
                      <div class="slicent activa">
                      {allCouponData.shopName}
                  </div>
                    </div>
                      )
                    })
                  }
                  </Carousel>
            )
          }

          retailerName(){
            // console.log("applicationData",this.props.applicationData)
              return this.state.allData.slice(0,1).map((allCouponData, index)=>{
                return(
                  <div>
            <h2 class="mn"><Link to={`/WebsiteRetailer/${allCouponData.retailerId}`}>{allCouponData.shopName}</Link></h2>
                  </div>
                )
              })
              }
      
  
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
                 {this.retailerNamedata()}
                </section>
  
              </div>           
         </div>
      </section>

      <div class="left-contant">
        <div class="marname">
          {this.retailerName()}
           {/* <h2 class="mn"><Link to="/WebsiteRetailer">Retailer Name</Link></h2> */}
          
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


              <div class="col-md-9 mt-4">

                <div class="slid-margin">
  
                  <div class="row mar-bottom">
                    {this.couponRetailer()}
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

// export default AllCouponsRetailers
const mapStateToProps = state => {
  console.log("state-------", state)
  return {
     applicationData: state.AuthReducer.userData
       
  }
        
}



// export default componentName
export default connect(mapStateToProps,{loginAction})(AllCouponsRetailers);
