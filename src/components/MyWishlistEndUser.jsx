import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
// import WishlistImageComponent from './WishlistImageComponent';
// import DashboardImageScroll from '../screens/dashboard/DashboardImageScroll';
// import CatogriesScroll from './CatogriesScroll';
import ImageDashboard from "./ImageDashboard";
import apiRequest from '../api/Apirequest';
import { loginAction } from "../redux/action/AuthAction";
import { connect } from "react-redux";
import ToasterFunction from '../components/ToasterFunc';

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
const Imageid = {

   Image1: require("../assets/images/image1.png"),
   Image5: require('../assets/images/image5.png'),
   heartImage: require('../assets//images/heart.png'),
   RedHeart: require('../assets/images/redheart.png'),
   Image9: require("../assets/images/image9.png"),
   Image10: require("../assets/images/image10.png"),
   Image11: require("../assets/images/image11.png"),
   Image12: require("../assets/images/image12.png"),
   // Image13:require("../../assets/images/image13.png")
}

export class MyWishlistEndUser extends Component {
   constructor(props) {
      super(props)

      this.state = {

         modalStatus: false,
         favMartData: [],
         favRetailerData: [],
         favCategoryData: [],
         favSubCategoryData: []
      }
   }


   getFavSubCategoryWishlist = () => {
      try {

         console.log('hhhh=>', this.props.applicationData)
         apiRequest({ "type": "SUBCATEGORY" }, '/user/wishList', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('responseSubCategory', resp);
               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           this.setState({
                              favSubCategoryData: resp.data.results
                           });
                        }
                        //   else if (resp.data.responseCode == 404) {
                        //      ToasterFunction("info", resp.data.responseMessage);

                        //  }
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
            });

      } catch (error) {
         console.log('response===', error);
         // ToasterFunction("error", "Network error, please contact the administrator");

      }
   }

   getFavCategoryWishlist = () => {
      try {

         console.log('hhhh=>', this.props.applicationData)
         apiRequest({ "type": "CATEGORY" }, '/user/wishList', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('responseCategory', resp);
               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           this.setState({
                              favCategoryData: resp.data.results
                           });
                        }
                        //   else if (resp.data.responseCode == 404) {
                        //      ToasterFunction("info", resp.data.responseMessage);

                        //  }
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
            });

      } catch (error) {
         console.log('response===', error);
         // ToasterFunction("error", "Network error, please contact the administrator");

      }
   }

   getFavRetailerWishlist = () => {
      try {

         console.log('hhhh=>', this.props.applicationData)
         apiRequest({ "type": "RETAILER" }, '/user/wishList', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('responseRetailer', resp);
               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           this.setState({
                              favRetailerData: resp.data.results
                           });
                        }
                        //   else if (resp.data.responseCode == 404) {
                        //      ToasterFunction("info", resp.data.responseMessage);

                        //  }
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
            });

      } catch (error) {
         console.log('response===', error);
         // ToasterFunction("error", "Network error, please contact the administrator");

      }
   }

   getFavMartWishlist = () => {
      try {

         console.log('hhhh=>', this.props.applicationData)
         apiRequest({ "type": "MART" }, '/user/wishList', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('responseMart', resp);
               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           this.setState({
                              favMartData: resp.data.results
                           });
                        }
                        //   else if (resp.data.responseCode == 404) {
                        //      ToasterFunction("info", resp.data.responseMessage);

                        //  }
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
            });

      } catch (error) {
         console.log('response===', error);
         // ToasterFunction("error", "Network error, please contact the administrator");

      }
   }

   async componentDidMount() {

      this.getFavMartWishlist();
      this.getFavRetailerWishlist();
      this.getFavCategoryWishlist();
      this.getFavSubCategoryWishlist();

   }
   subCategoryData() {


      return (
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


            {
               this.state.favSubCategoryData.map((xyz, index) => {
                  return (
                     <div>

                        <ImageDashboard
                           ImageName={xyz.subCategoryName}
                           LinkId="/subCategories"
                           ImageA={xyz.subCategoryImage}
                           heartImage={Imageid.RedHeart}
                           Id={xyz.subCategoryId}
                           Token={this.props.applicationData.token}
                           typeData={'subCategory'}
                           typePage={'subCategory'}
                           // HeartData = {heartStatus}
                           // blankHeart={Imageid.heartImage}
                           // redHeart={Imageid.RedHeart}

                        />
                     </div>
                  )
               })
            }
         </Carousel>
      )
   }

   categoryData() {
      return (
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
               {
                  this.state.favCategoryData.map((xyz, index) => {
                     return (
                        <div>

                           <ImageDashboard
                              ImageName={xyz.categoryName}
                              LinkId="/subCategories"
                              ImageA={xyz.categoryImage}
                              heartImage={Imageid.RedHeart}
                              Id={xyz.categoryId}
                              Token={this.props.applicationData.token}
                              typeData={'category'}
                              typePage={'category'}
                              UniqueId={xyz._id}
                              // HeartData = {heartStatus}
                              // blankHeart={Imageid.heartImage}
                              // redHeart={Imageid.RedHeart}
                              reloadApi={this.getFavCategoryWishlist}
                           />

                        </div>
                     )
                  })
               }
            </Carousel>
      )
   }


   martData() {

      return (
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
            {
               this.state.favMartData.map((xyz, index) => {
                  return (
                     <div>
                        <ImageDashboard
                           ImageName={xyz.martName}
                           ImageA={xyz.martImage[0]}
                           heartImage={Imageid.RedHeart}
                           MartId={xyz.martId}
                           Id={xyz.martId}
                           Token={this.props.applicationData.token}
                           typeData={'mart'}
                           typePage={'mart'}
                           UniqueId={xyz._id}
                           // HeartData = {heartStatus}
                           // blankHeart={Imageid.heartImage}
                           // redHeart={Imageid.RedHeart}
                        />
                     </div>
                  )
               })
            }
         </Carousel>
      )
   }

   retailerData() {

      return (
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
            {
               this.state.favRetailerData.map((xyz, index) => {
                  return (
                     <div>

                        <ImageDashboard
                           ImageName={xyz.shopName}
                           ImageA={xyz.retailerImage}
                           heartImage={Imageid.RedHeart}
                           Token={this.props.applicationData.token}
                           typeData={'retailer'}
                           typePage={'retailer'}
                           Id={xyz.retailerId}
                           // HeartData = {heartStatus}
                           // blankHeart={Imageid.heartImage}
                           // redHeart={Imageid.RedHeart}
                        />
                     </div>
                  )
               })
            }
         </Carousel>
      )
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
                     {this.martData()}
                  </div>

                  <div class="left-contant00">
                     <h3>Retailers</h3>
                  </div>
                  <div class="wish-slider">
                     {this.retailerData()}
                  </div>

                  <div class="left-contant00">
                     <h3>Categories</h3>
                  </div>
                  <div class="wish-slider">
                     {this.categoryData()}
                  </div>

                  <div class="left-contant00">
                     <h3>Sub categories</h3>
                  </div>
                  <div class="wish-slider">
                     {this.subCategoryData()}
                  </div>
               </div>
            </section>
            <Modal isOpen={this.state.modalStatus} toggle={this.toggle}
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

// export default MyWishlistEndUser
const mapStateToProps = state => {
   console.log("stateLogin-------", state)
   return {
      applicationData: state.AuthReducer.userData

   }

}



// export default componentName
export default connect(mapStateToProps, { loginAction })(MyWishlistEndUser);