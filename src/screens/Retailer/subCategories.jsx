// 'use strict'
import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CatogriesScroll from '../../components/CatogriesScroll';
import CouponsScrollPupup from '../../components/CouponsScrollPupup';
import CouponsImage from '../../components/CouponsImage';
import ImageDashboard from "../../components/ImageDashboard"
import apiRequest from '../../api/Apirequest';
import ToasterFunction from '../../components/ToasterFunc';
import { loginAction } from "../../redux/action/AuthAction";
import { connect } from "react-redux";

import Cookies from 'universal-cookie';

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
   constructor(props) {
      super(props)

      this.state = {

         allData: [],

         couponsList: [],

         subCategory: [],

         filterList: [],

         martList: [
            {
               martId: 'm1',
               martName: 'Mart1',
               retailer: [
                  {
                     retailerId: 'm1r1',
                     retailerName: 'Mart1 Retailer1'
                  },
                  {
                     retailerId: 'm1r2',
                     retailerName: 'Mart1 Retailer2'
                  }
               ]
            },
            {
               martId: 'm2',
               martName: 'Mart2',
               retailer: [
                  {
                     retailerId: 'm2r1',
                     retailerName: 'Mart2 Retailer1'
                  },
                  {
                     retailerId: 'm2r2',
                     retailerName: 'Mart2 Retailer2'
                  },
                  {
                     retailerId: 'm2r3',
                     retailerName: 'Mart2 Retailer3'
                  }
               ]
            }
         ],

         apiRequest: {
            "lat": '',
            "long": '',
            "categoryId": ''
         }
      }
   }

   getMartAndRetailersByCategory = () => {
      try {
         let urlEndPoint = '/user/getMartAndRetailerByCategory';

         apiRequest(this.state.apiRequest, urlEndPoint, 'POST')
               .then((resp) => {
                  console.log('responseMart&Retailer==> ', resp);
                  switch (resp.status) {
                     case (200):
                        {
                           if (resp.data.responseCode == 200) {
                              this.setState({ couponsList: resp.data.result });
                              
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
               .catch(err=>{
                  console.log('errorMart&RetailerApi=> ', err)
               })

      }
      catch (error) {
         console.log('errorMart&RetailerApi_catch=> ', error)
      }
   }

   getSubCategoryAndCouponByCategory = () => {
      try {
         // apiRequest({ categoryId: categoryId, martId: martId }, '/user/getSubCategoryAndCouponByCategory', 'POST')

         // const cookies = new Cookies();
         // let lat = cookies.get('latitude')
         // let long = cookies.get('longitude')
         // let params = '';
         // let categoryId = '';
         // if (window.location.search) {
         //    params = new URLSearchParams(window.location.search);
         //    categoryId = params.get('categoryId');
         // }

         // let obj = {
         //    "lat": lat,
         //    "long": long,
         //    "categoryId": categoryId
         // }

         // console.log('categoryId=> ', obj);

         // if (lat && long && categoryId) {

            let urlEndPoint = '/user/getDataByCategory';
            apiRequest(this.state.apiRequest, urlEndPoint, 'POST')
               .then((resp) => {
                  // console.log('responseCategorycoupon', resp);
                  switch (resp.status) {
                     case (200):
                        {
                           if (resp.data.responseCode == 200) {
                              this.setState({ couponsList: resp.data.result });
                              
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

         // }


      } catch (error) {
         console.log('errorresponse', error)
         ToasterFunction("error", "Network error, please contact the administrator");

      }

   }

   async componentDidMount() {
      // console.log('category', window.location.pathname);
      // let splitUrl = window.location.pathname.split('/')
      // console.log('category', splitUrl);
      // console.log('category', splitUrl[2]);
      // console.log('category', splitUrl[3]);

      const cookies = new Cookies();
      let lat = cookies.get('latitude')
      let long = cookies.get('longitude')
      let params = '';
      let categoryId = '';
      if (window.location.search) {
         params = new URLSearchParams(window.location.search);
         categoryId = params.get('categoryId');
      }

      let apiRequest = {
         "lat": lat,
         "long": long,
         "categoryId": categoryId
      }
      if (lat, long, categoryId) {
         this.setState({ apiRequest }, () => {
            this.getSubCategoryAndCouponByCategory();
            this.getMartAndRetailersByCategory();
         })
      }
      // else {
      //    // do nothing
      // }
   }

   couponCategory() {
      // console.log("applicationData",this.props.applicationData)

      return <Carousel
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

         {this.state.couponsList.map((allCouponData, index) => {
            //   console.log("allCouponDataakhtar",allCouponData)
            return (
               <div>
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

               </div>
            )
         })
         } </Carousel>
   }



   subCategoryData() {
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
         {this.state.allData.map((allCouponData, index) => {
            let checkData = allCouponData.subCategoryId.users.indexOf(this.props.applicationData.userId);
            // console.log('checkData--',checkData)
            //   let heartStatus;
            //   if(checkData == -1){
            //     heartStatus = false;
            //   }else{
            //     heartStatus = true ;
            //   }
            let heartStatus;
            if (checkData == -1) {
               heartStatus = Imageid.heartImage;
            } else {
               heartStatus = Imageid.RedHeart;
            }
            //   console.log('checkData--',heartStatus)
            //   console.log('category',categoryImage);
            return (
               <div>

                  <div>
                     <ImageDashboard
                        ImageName={allCouponData && allCouponData.subCategoryId ? allCouponData.subCategoryId.subCategoryName : ''}
                        LinkId={`/ItemList/${allCouponData.subCategoryId ? allCouponData.subCategoryId._id : ''}/${allCouponData.subCategoryId ? allCouponData.subCategoryId.categoryId : ''}/${allCouponData ? allCouponData.martId : ''}`}
                        ImageA={allCouponData && allCouponData.subCategoryId ? allCouponData.subCategoryId.image : ''}
                        heartImage={heartStatus}
                        Id={allCouponData && allCouponData.subCategoryId ? allCouponData.subCategoryId._id : ''}
                        Token={this.props.applicationData.token}
                        typeData={'subCategory'}
                        HeartData={heartStatus}
                        blankHeart={Imageid.heartImage}
                        redHeart={Imageid.RedHeart}
                     />
                  </div>
               </div>
            )
         })
         } </Carousel>
   }

   categoryNameList() {
      return <Carousel
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
         {this.state.allData.map((allCouponData, index) => {
            //   console.log('category',categoryImage);
            return (
               <div>



                  <div>
                     <div class="slicent activa">
                        {allCouponData ? allCouponData.categoryName : ''}
                     </div>
                  </div>
               </div>
            )
         })

         } </Carousel>
   }

   clearAllFilter = () => {
      this.setState({ filterList: [] })
   }

   applyFIlter = (e, type, data) => {

      e.nativeEvent.stopImmediatePropagation();

      let { filterList } = this.state;

      if (type === 'mart') {
         if (!e.target.checked) {
            filterList = filterList.filter(x => x != data.martId)
         }
         else {
            filterList.push(data.martId);
         }
      }
      else if (type === 'retailer') {
         if (!e.target.checked) {
            filterList = filterList.filter(x => x != data.retailerId)
         }
         else {
            filterList.push(data.retailerId);
         }
      }
      this.setState({ filterList });
   }

   // function to render left panel for filter
   leftFilterPanel = () => {
      return (
         <>
            {
               this.state.martList.map((martData, martIndex) => {
                  return (
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" checked={this.state.filterList.find(x => x == martData.martId) ? true : false} id="exampleCheck1" onChange={e => this.applyFIlter(e, 'mart', martData)} />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target={`#mart${martIndex}`} aria-expanded="false" >
                                          <span class="mart-mar-left">{martData.martName}</span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target={`#mart${martIndex}`} aria-expanded="false" ></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id={`mart${martIndex}`} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          {
                                             martData.retailer && martData.retailer[0] ? martData.retailer.map((retailerData, retailerIndex) => {
                                                return (
                                                   <div class="form-group form-check">
                                                      <input type="checkbox" class="form-check-input" checked={this.state.filterList.find(x => x == retailerData.retailerId) || this.state.filterList.find(x => x == martData.martId) ? true : false} id="exampleCheck1" onChange={e => this.applyFIlter(e, 'retailer', retailerData)} />
                                                      <label class="form-check-label" for="exampleCheck1">{retailerData.retailerName}</label>
                                                   </div>
                                                )
                                             })
                                                : null
                                          }

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </>
      )
   }

   render() {

      return (
         <div> <body>
            <Header2 />
            <div class="container-fluid">
               <div class="slidertop">
                  {this.categoryNameList()}
               </div>
            </div>
            <section class="third">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-3">
                        <div class="accor-bord">
                           <ul class="button_cs sve-can button-shift all-clr">
                              <li><button type="button" class="save0 s-1" data-toggle="modal" data-target="#this-coupon" onClick={e => this.clearAllFilter()}>Clear All</button></li>
                           </ul>

                           {this.leftFilterPanel()}

                        </div>
                     </div>
                     <div class="col-md-9">
                        <section class="second">
                           <div class="landing-slider">
                              {/* <div class="top-slider"> */}

                              {/* <CatogriesScroll /> */}
                              {/* </div> */}
                              {this.subCategoryData()}

                              {/* <div>

                                    <ImageDashboard
                                       ImageName="Bounce Salon & Spa"
                                       LinkId="/ItemList"
                                       ImageA={Imageid.Image5}
                                       heartImage={Imageid.RedHeart}
                                    />

                                 </div> */}

                              <div class="left-contant">
                                 <h3>Coupons</h3>
                              </div>
                              {/* <CouponsScrollPupup /> */}

                              <div class="cover-slidersection">
                                 {this.couponCategory()}
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

// export default subCategories
const mapStateToProps = state => {
   console.log("state-------", state)
   return {
      applicationData: state.AuthReducer.userData

   }

}

export default connect(mapStateToProps, { loginAction })(subCategories);
