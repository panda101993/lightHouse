import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Footer from '../../components/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DashboardImageScroll from '../dashboard/DashboardImageScroll';
import CouponsScrollPupup from '../../components/CouponsScrollPupup'; 
import ImageDashboard from "../../components/ImageDashboard"
import CouponsImage from  "../../components/CouponsImage"
import Header4 from '../../components/Header4'; 
import { Link } from 'react-router-dom'
import apiRequest from '../../api/Apirequest';
import {myCouponData} from '../../redux/action/CouponCodeAction'
import {bindActionCreators} from 'redux';
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

export class AllRetailers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

      allCoupon:[] 
    }
  }

  getAllCoupansOfMart=(Id)=>{
    try {
      
      
      console.log('martt----',Id);
      //  apiRequest({martId:Id},'/user/ ','POST')
      this.props.action.myCouponData({martId:Id})
      
      //  .then((resp)=>{
      //     console.log("responseCoupan",resp)
        //   this.setState({
        //     allCoupon: resp.data.couponData
        //  });
      //  })
    } catch (error) {
       console.log("responseError",error)
       
    }

 }

async componentDidMount() { 
  console.log('martt',window.location.pathname);
  let splitUrl = window.location.pathname.split('/')
  console.log('martt',splitUrl);
  console.log('martt',splitUrl[2]);
 this.getAllCoupansOfMart(splitUrl[2]);
}

martData(){

  if(this.props.allCouponData !== undefined){
    return this.props.allCouponData.map((allCoupon, index)=>{

      return(
         <div>
           <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                   // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={5000000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    //deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
            <div>
              <div class="slicent activa">
                {allCoupon.martName}
              </div>
            </div>
        </Carousel>
          
      </div>
      )
   })
  }
  
}

martName(){
  if(this.props.allCouponData !== undefined){
    return this.props.allCouponData.slice(0,2).map((allCoupon, index)=>{
      return(
  <div>
<h2 class="mn">  <Link to="/WebsiteMart">{allCoupon.martName} </Link></h2>
  </div>
      )
    })
    }
}

retailerData(){
  if(this.props.allCouponData !== undefined){
    return this.props.allCouponData.map((allCoupon, index)=>{
      return(
        // <div class="top-slider index-top">
        <div>
        {/* <DashboardImageScroll /> */}
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
              ImageName={allCoupon.shopName}
              LinkId="/AllCouponsRetailers"
              ImageA={allCoupon.image}
              heartImage={Imageid.RedHeart}
              MartId={allCoupon.martId}
              CategoryName={allCoupon.categoryName}
              SubCategoryName={allCoupon.subCategoryName}
              ItemType={allCoupon.itemType}
              ItemName={allCoupon.itemName}
              BrandName={allCoupon.brandName}
            />

          </div>
        </Carousel>

      </div>
            )
    })
    }
}

couponData(){
  // if(this.props.applicationData.length > 0)
  console.log("applicationData",this.props.applicationData)
  if(this.props.allCouponData !== undefined){
    return this.props.allCouponData.map((allCoupon, index)=>{
      return(
        <div>
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
<CouponsImage 
ImageSrc={allCoupon.image}
Title={allCoupon.title}
CouponCode={allCoupon.couponCode}
Discount={allCoupon.discount}
ItemName={allCoupon.itemName}
ExpiryDate={allCoupon.ExpiryDate}
CouponId={allCoupon._id}
CouponToken={this.props.applicationData.token}
CouponAppliedOn={allCoupon.couponAppliedOn}
OneTimeCoupon={allCoupon.oneTimeCoupon}
ShopName={allCoupon.shopName}
ShopNumber={allCoupon.retailerId.shopNumber}
FloorNumber={allCoupon.floorNumber}
MartName={allCoupon.marName}
ShopPhoneNumber={allCoupon.shopPhoneNumber}
Restrictions={allCoupon.restrictions}



/>
</Carousel>
        </div>
      )
    })
  }
}

  
  render() {

    return (
      <div>
        <body>
          {/* <Header2 /> */} 
          <Header4 />
          <section class="second">
            <div class="container-fluid">

              <div class="slidertop">
                <section class="center slider">
                  
                {this.martData() } 
                  </section>
                  </div>
                  </div>
                </section>
          <div class="left-contant">
            <div class="marname">
            {this.martName()}
            </div>
          </div>

          <section class="third">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <div class="accor-bord apply-on">

                    <ul class="button_cs sve-can button-shift all-clr apply-on">
                      <li>Apply On</li>
                      <li><button type="button" class="save0 s-1" data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
                    </ul>
                    <div class="check-padd-bottom">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Category Name</label>
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Sub-Category Name</label>
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Item Type</label>
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Brand</label>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="col-md-9 border-b7 mt-4">
                  <section class="second">
                    <div class="left-contant my-4">
                      <h3>Retailers</h3>
                    </div>
                    <div class="top-slider index-top">
                      {this.retailerData()}
                    </div>
                    {/* <div class="top-slider index-top">
                      <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive1}
                        ssr={true} 
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
                            ImageName={allCoupon.shopName}
                            LinkId="/AllCouponsRetailers"
                            ImageA={allCoupon.image}
                            heartImage={Imageid.RedHeart}
                            MartId={allCoupon.martId}
                            CategoryName={allCoupon.categoryName}
                            SubCategoryName={allCoupon.subCategoryName}
                            ItemType={allCoupon.itemType}
                            ItemName={allCoupon.itemName}
                            BrandName={allCoupon.brandName}
                          />

                        </div>
                      </Carousel>

                    </div> */}

                    <div class="left-contant">
                      <h3>Coupons</h3>
                    </div>
                    <div class="landing-slider">
                      <div class="cover-slidersection">
                        {/* <CouponsScrollPupup /> */}  
                        {/* <Carousel
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
<CouponsImage 
ImageSrc={allCoupon.image}
Title={allCoupon.title}
CouponCode={allCoupon.couponCode}
Discount={allCoupon.discount}
ItemName={allCoupon.itemName}
ExpiryDate={allCoupon.ExpiryDate}

/> */}
{/* <CouponsImage />
<CouponsImage />
<CouponsImage />
<CouponsImage />
<CouponsImage /> */}
 {/* </Carousel> */}
 {this.couponData()}

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
      );
    }
  }
// export default AllRetailers

const mapStateToProps = state => {
  console.log("stateabc",state)
    return {
       allCouponData: state.CouponCodeReducer.userData,
       applicationData: state.AuthReducer.userData
    }
}

const mapDispatchToProps = dispatch => {
  return {
      action: bindActionCreators({ myCouponData }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRetailers);