import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DashboardImageScroll from '../dashboard/DashboardImageScroll';
import CouponsScrollPupup from '../../components/CouponsScrollPupup';
import ImageDashboard from "../../components/ImageDashboard"
import CouponsImage from "../../components/CouponsImage"
import Header4 from '../../components/Header4';
import { Link } from 'react-router-dom'
import apiRequest from '../../api/Apirequest';
import { myCouponData } from '../../redux/action/CouponCodeAction'
import { bindActionCreators } from 'redux';
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

      allCoupon: [],
      isChecked: false

    }
  }

  getAllCoupansOfMart = (Id) => {
    try {


      // console.log('martt----', Id);
      //  apiRequest({martId:Id},'/user/ ','POST')
      this.props.action.myCouponData({ martId: Id })
    
    } catch (error) {
      // console.log("responseError", error)

    }

  }

  async componentDidMount() {
    //  console.log('martt', window.location.pathname);
    let splitUrl = window.location.pathname.split('/')
    // console.log('martt', splitUrl);
    // console.log('martt', splitUrl[2]);
    this.getAllCoupansOfMart(splitUrl[2]);
    // console.log("allCoupon---",this.props.allCouponData)
    setTimeout(()=>this.setState({
      allCoupon:this.props.allCouponData
    }),3000)
    
  }

  martData() {
    
    if (this.props.allCouponData !== undefined) {

      return <Carousel
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
      {
        this.props.allCouponData.map((xyz, index) => {

          return (
            <div>
              <div class="slicent activa">
                {xyz.martName}
              </div>
            </div>
          )
        })
      }</Carousel>
  }
  }


  filterData(id,checked){

    console.log("idddd",id)
    console.log("idddd--",checked)

    // console.log("idddd111--",!checked)
this.setState({
  isChecked:!checked
})
// console.log("idddd111--",!this.state.isChecked)
   
    //  if (this.state.allCoupon !== undefined) {    
      {this.state.allCoupon.filter(allCoupon => allCoupon.categoryId == id || allCoupon.subCategoryId == id || allCoupon.itemType == id || allCoupon.brandName == id ).map((xyz, index) => {
        console.log("filtersss--", xyz)
        let filteredArray = [];
        let previousState = this.props.allCouponData;
        
      if(checked==true){
      filteredArray.push(xyz);
      this.setState({
      allCoupon:filteredArray
      })
    }
    else if(checked==false) {
      filteredArray.pop(xyz)
      if(filteredArray.length  === 0){
        this.setState({
          allCoupon:previousState
                })
      }else{
        this.setState({
          allCoupon:filteredArray
        })
      }
       
    }
        
      })
    } 
  // }
  }

  martName() {
    if (this.props.allCouponData !== undefined) {

      return this.props.allCouponData.slice(0, 1).map((xyz, index) => {
        // console.log("xyzzzz=======", allCoupon.retailerId.users)
        return (
          <div>
            <h2 class="mn">  <Link to={`/WebsiteMart/${xyz.martId}`}>{xyz.martName} </Link></h2>
          </div>
        )
      })
    }
  }
  categoryList() {
    if (this.props.allCouponData !== undefined) {

      return this.props.allCouponData.map((xyz, index) => {
        return (
          <div>
           <input type="checkbox" class="form-check-input" isChecked={this.state.isChecked} id={xyz.categoryId} onClick={() => this.filterData(xyz.categoryId, this.state.isChecked)} />        
            <label class="form-check-label" for="exampleCheck1">{xyz.categoryName}</label>
          </div>
        )
      })
    }
  }

  subCategoryList() {
    if (this.props.allCouponData !== undefined) {

      return this.props.allCouponData.map((xyz, index) => {
        return (
          <div>
          <input type="checkbox" class="form-check-input"  id={xyz.subCategoryId} onClick={() => this.filterData(xyz.subCategoryId, this.state.isChecked)} />
        <label class="form-check-label" for="exampleCheck1">{xyz.subCategoryName}</label>
          </div>
        )
      })
    }
  }

  itemTypeList() {
    if (this.props.allCouponData !== undefined) {

      return this.props.allCouponData.map((xyz, index) => {
        return (
          <div>
          <input type="checkbox" class="form-check-input" id={xyz.itemType} onClick={() => this.filterData(xyz.itemType, this.state.isChecked)} />
        <label class="form-check-label" for="exampleCheck1">{xyz.itemType}</label>
          </div>
        )
      })
    }
  }

  brandNameList() {
    if (this.props.allCouponData !== undefined) {

      return this.props.allCouponData.map((xyz, index) => {
        return (
          <div>
          <input type="checkbox" class="form-check-input" id={xyz.brandName} onClick={() => this.filterData(xyz.brandName, this.state.isChecked)} />
        <label class="form-check-label" for="exampleCheck1">{xyz.brandName}</label>
          </div>
        )
      })
    }
  }


  retailerData() {
    if (this.state.allCoupon !== undefined) {



      return <Carousel
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
      
      
      {this.state.allCoupon.map((xyz, index) => {
        
        // console.log("akh", xyz.retailerId.users.length)
        if(xyz.retailerId && xyz.retailerId.users && xyz.retailerId.users.length > 0) {
        let checkData = xyz.retailerId.users.indexOf(this.props.applicationData.userId);

        // console.log('checkData--', checkData)
        // let heartStatus;
        // if (checkData == -1) {
        //   heartStatus = false;
        // } else {
        //   heartStatus = true;
        // }
        let heartStatus;
         if(checkData == -1){
           heartStatus = Imageid.heartImage;         
         }else{            
           heartStatus = Imageid.RedHeart ;
         }
        // console.log('checkData--', heartStatus)



        return (
          // <div class="top-slider index-top">
          <div>
            {/* <DashboardImageScroll /> */}
            
              <div>

                <ImageDashboard

                  ImageName={xyz.shopName}
                  LinkId={`/AllCouponsRetailers/${xyz.retailerId._id}`}
                  // LinkId={`/AllRetailers/${martId}`}
                  ImageA={xyz.image}
                  heartImage={heartStatus}
                  MartId={xyz.martId}
                  CategoryName={xyz.categoryName}
                  SubCategoryName={xyz.subCategoryName}
                  ItemType={xyz.itemType}
                  ItemName={xyz.itemName}
                  BrandName={xyz.brandName}
                  RetailerId={xyz.retailerId._id}
                  Id={xyz.retailerId._id}
                  Token={this.props.applicationData.token}
                  typeData={'retailer'}
                  HeartData={heartStatus}
                  blankHeart={Imageid.heartImage}
                  redHeart={Imageid.RedHeart}
                // getAllCoupansOfMart = {this.getAllCoupansOfMart(mart_ID)}
                />

              </div>
            

          </div>
        )
      }
      })
    }</Carousel>
  }
  }

  couponData() {
    // if(this.props.applicationData.length > 0)

    if (this.state.allCoupon !== undefined) {

      
      return  <Carousel
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
      
      {this.state.allCoupon.map((xyz, index) => {
        // console.log("applicationData--", allCoupon.retailerId.users)
        // if(!xyz.retailerId.address)return null;
        // if(!xyz.retailerId.city)return null;
        // if(!xyz.retailerId.pinCode)return null;
        // if(!xyz.retailerId.state)return null;
        // console.log("applicationDataakh--", allCoupon.retailerId.city)

        return (
          <div>
           
              <CouponsImage
                ImageSrc={xyz.image}
                Title={xyz.title}
                CouponCode={xyz.couponCode}
                Discount={xyz.discount}
                ItemName={xyz.itemName}
                ExpiryDate={xyz.ExpiryDate}
                CouponId={xyz._id}
                CouponToken={this.props.applicationData.token}
                CouponAppliedOn={xyz.couponAppliedOn}
                OneTimeCoupon={xyz.oneTimeCoupon}
                ShopName={xyz.shopName}
                ShopNumber={ xyz.retailerId && xyz.retailerId.shopNumber ? xyz.retailerId.shopNumber :""}
                FloorNumber={xyz.floorNumber}
                MartName={xyz.martName}
                ShopPhoneNumber={xyz.shopPhoneNumber}
                Restrictions={xyz.restrictions}
                Address={xyz.retailerId && xyz.retailerId.address ? xyz.retailerId.address : ""}
                City={xyz.retailerId && xyz.retailerId.city ? xyz.retailerId.city : ""}
                PinCode={xyz.retailerId && xyz.retailerId.pinCode ? xyz.retailerId.pinCode : ""}
                State={xyz.retailerId && xyz.retailerId.state ? xyz.retailerId.state : ""}
              />
           
          </div>
        )
      })
    } </Carousel>
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

                  {this.martData()}
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
                      {/* <div class="form-check"> */}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
                        <label class="form-check-label" for="exampleCheck1">Category Name</label>
                        {/* </div> */}
                        <div class="form-check">
                          {this.categoryList()}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Category A</label> */}
                        </div>
                      
                      {/* <div class="form-check"> */}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
                        <label class="form-check-label" for="exampleCheck1">Sub-Category Name</label>
                      {/* </div> */}
                      <div class="form-check">
                        {this.subCategoryList()}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Sub-Category A</label> */}
                      </div>
                      {/* <div class="form-check"> */}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
                        <label class="form-check-label" for="exampleCheck1">Item Type</label>
                        <div class="form-check">
                        {this.itemTypeList()}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Sub-Category A</label> */}
                      </div>
                      {/* </div> */}
                      {/* <div class="form-check"> */}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
                        <label class="form-check-label" for="exampleCheck1">Brand</label>
                        <div class="form-check">
                        {this.brandNameList()}
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Sub-Category A</label> */}
                      </div>
                      {/* </div> */}
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

                    <div class="left-contant">
                      <h3>Coupons</h3>
                    </div>
                    <div class="landing-slider">
                      <div class="cover-slidersection">
                        {this.couponData()}
                        {/* {this.filterData()} */}

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
  console.log("stateabc", state) 
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