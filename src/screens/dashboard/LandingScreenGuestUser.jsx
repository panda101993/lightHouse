import React, { Component } from 'react'
import Footer from '../../components/Footer'
import LandingTopicName from '../../components/LandingTopicName'
import ImageDashboard from '../../components/ImageDashboard'
// import CouponsImage from '../../components/CouponsImage'
// import HeaderLandingScreen from '../../components/HeaderLandingScreen'
// import WishlistImageComponent from '../../components/WishlistImageComponent'
// import ViewCouponRetailer from '../../components/ViewCouponRetailer'
// import CouponImageSetting from '../../components/CouponImageSetting'
// import DashboardImageScroll from './DashboardImageScroll'
// import DashboardProductImage from '../../components/DashboardProductImage'
// import CouponsScrollPupup from '../../components/CouponsScrollPupup'
// import CatogriesScroll from '../../components/CatogriesScroll'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../components/Header'
import apiRequest from '../../api/Apirequest';
// import { loginAction } from "../../redux/action/AuthAction";
// import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import ToasterFunction from '../../components/ToasterFunc';
import { endUserProfileAction } from '../../redux/action/EndUserProfileAction';
import { bindActionCreators } from 'redux';

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
   Image1: require("../../assets/images/image1.png"),
   Image5: require('../../assets/images/image5.png'),
   heartImage: require('../../assets//images/heart.png'),
   RedHeart: require('../../assets/images/redheart.png'),
   Image9: require("../../assets/images/image9.png"),
   Image10: require("../../assets/images/image10.png"),
   Image11: require("../../assets/images/image11.png"),
   Image12: require("../../assets/images/image12.png"),


}


class componentName extends Component {
   constructor(props) {
      super(props)

      this.state = {
         allData: [],

      }

   }

   getmartsbyUserList = () => {
      try {
         const cookies = new Cookies();

         const latitude = cookies.get('latitude')
console.log("latitude---",latitude)

         const longitude = cookies.get('longitude')
console.log("longitude---",longitude)
         

         // if (this.props.applicationData.token) {
            if (this.props.isLoggedIn==true) {
            // console.log('hhhh=>',this.props.applicationData)
            apiRequest({ lat: latitude, long: longitude }, '/user/getMartsByUser', 'POST', this.props.applicationData.token)
               .then((resp) => {
                  console.log('responseLandingscreen--', resp);
                  switch (resp.status) {
                     case (200):
                        {
                           if (resp.data.responseCode == 200) {
                              this.setState({
                                 allData: resp.data.result[0].details
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
                           ToasterFunction("error", resp.data)
                        }
                     }
                  }
               });
         }

         else {
            apiRequest({ lat:latitude, long:longitude }, '/user/getMartsByUser', 'POST')
               .then((resp) => {
                  console.log('response', resp);
                  switch (resp.status) {
                     case (200):
                        {
                           if (resp.data.responseCode == 200) {
                              this.setState({
                                 allData: resp.data.result[0].details
                              });
                           }
                           else if (resp.data.responseCode == 404) {
                              ToasterFunction("info", resp.data.responseMessage);

                           }
                           else if (resp.data.responseCode == 500) {
                              ToasterFunction("error", resp.data.responseMessage);

                           }
                           break;
                        }
                     case (900): {
                        if (resp.status == 900) {
                           ToasterFunction("error", resp.data)
                        }
                     }
                  }

               });
         }

      } catch (error) {
         console.log('response===', error);
         ToasterFunction("error", "Network error, please contact the administrator");

      }
   }

   getMyProfile = () => {
      try {
         console.log('profiletoken-', this.props.applicationData.token);
         this.props.action.endUserProfileAction({ token: this.props.applicationData.token })


      } catch (error) {
         //  console.log('erroresponse==>', error)

      }

   }


   async componentDidMount() {

      this.getmartsbyUserList();
      this.getMyProfile();
   }

   martData() {
      // if (this.props.applicationData.token) {
         if (this.props.isLoggedIn==true) {
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
               {this.state.allData.map((xyz, index) => {
                  // console.log("abcffff",xyz.martUsers)
                  // if (!xyz.martUsers) return null;
                  if (xyz.martUsers !== undefined) {
                     let checkData = xyz.martUsers.indexOf(this.props.applicationData.userId);

                     // console.log('checkData--',checkData)
                     // let heartStatus;
                     // if(checkData == -1){
                     //   heartStatus = false;
                     // }else{
                     //   heartStatus = true ;
                     // }
                     let heartStatus;
                     if (checkData == -1) {
                        heartStatus = Imageid.heartImage;
                     } else {
                        heartStatus = Imageid.RedHeart;
                     }
                     return (
                        <div>

                           <ImageDashboard
                              ImageName={xyz.martName}
                              LinkId={`/AllRetailers/${xyz.martId}`}
                              // LinkId={this.props.action.myCouponData({martId},()=>this.props.history.push("/AllRetailers"))}
                              ImageA={xyz.martImage}
                              heartImage={heartStatus}
                              MartId={xyz.martId}
                              Id={xyz.martId}
                              Token={this.props.applicationData.token}
                              typeData={'mart'}
                              UniqueId={xyz._id}
                              HeartData={heartStatus}
                              blankHeart={Imageid.heartImage}
                              redHeart={Imageid.RedHeart}
                              reloadApi={this.getmartsbyUserList}


                           />

                        </div>
                     )
                  }
               })
               }
            </Carousel>
         )
      }
      else {
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
               {this.state.allData.map((xyz, index) => {
                  return (
                     <div>
                        <ImageDashboard
                           ImageName={xyz.martName}
                           // LinkId="/AllRetailers"
                           ImageA={xyz.martImage}
                           heartImage={Imageid.RedHeart}
                           MartId={xyz.martId}
                        />
                     </div>
                  )
               }
               )
               }
            </Carousel>
         )
      }
   }

   servicesByCategoryData() {
      // if (this.props.applicationData.token) {
         if (this.props.isLoggedIn==true) {
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
               {this.state.allData.filter(allData => allData.productServiceType == "SERVICE").map((xyz, index) => {
                  // const {martId,categoryId, categoryImage,categoryName,_id} = xyz
                  if (xyz.categoryUsers !== undefined) {
                     let checkData = xyz.categoryUsers.indexOf(this.props.applicationData.userId);

                     console.log('checkData--', checkData)


                     let heartStatus;
                     if (checkData == -1) {
                        heartStatus = Imageid.heartImage;
                     } else {
                        heartStatus = Imageid.RedHeart;
                     }
                     return (
                        <div>

                           <ImageDashboard
                              ImageName={xyz.categoryName}
                              LinkId={`/subCategories/${xyz.categoryId}/${xyz.martId}`}
                              ImageA={xyz.categoryImage}
                              heartImage={heartStatus}
                              CategoryId={xyz.categoryId}
                              Id={xyz.categoryId}
                              Token={this.props.applicationData.token}
                              typeData={'category'}
                              UniqueId={xyz._id}
                              HeartData={heartStatus}
                              // blankHeart={Imageid.heartImage}
                              // redHeart={Imageid.RedHeart}
                              ProductServiceType={xyz.productServiceType}
                              reloadApi={this.getmartsbyUserList}

                           />

                        </div>
                     )
                  }
               })
               }
            </Carousel>
         )
      }
      else {
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
               {this.state.allData.filter(allData => allData.productServiceType == "SERVICE").map((xyz, index) => {
                  return (
                     <div>
                        <ImageDashboard
                           ImageName={xyz.categoryName}
                           // LinkId="/subCategories"
                           ImageA={xyz.categoryImage}
                           heartImage={Imageid.RedHeart}
                        />
                     </div>
                  )
               })
               }
            </Carousel>
         )
      }
   }


   productsByCategoryData() {
      // if (this.props.applicationData.token) {
         if (this.props.isLoggedIn==true) {
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
                  this.state.allData.filter(allData => allData.productServiceType == "PRODUCT").map((xyz, index) => {
                     // const {martId,categoryId, categoryImage,categoryName,_id} = xyz
                     if (xyz.categoryUsers !== undefined) {
                        let checkData = xyz.categoryUsers.indexOf(this.props.applicationData.userId);

                        // let heartStatus;
                        // if(checkData == -1){
                        //   heartStatus = false;
                        // }else{
                        //   heartStatus = true ;
                        // }
                        let heartStatus;
                        if (checkData == -1) {
                           heartStatus = Imageid.heartImage;
                        } else {
                           heartStatus = Imageid.RedHeart;
                        }
                        return (
                           <div>

                              <ImageDashboard
                                 ImageName={xyz.categoryName}
                                 LinkId={`/subCategories/${xyz.categoryId}/${xyz.martId}`}
                                 ImageA={xyz.categoryImage}
                                 heartImage={heartStatus}
                                 CategoryId={xyz.categoryId}
                                 Id={xyz.categoryId}
                                 Token={this.props.applicationData.token}
                                 typeData={'category'}
                                 UniqueId={xyz._id}
                                 HeartData={heartStatus}
                                 blankHeart={Imageid.heartImage}
                                 redHeart={Imageid.RedHeart}
                                 ProductServiceType={xyz.productServiceType}
                                 reloadApi={this.getmartsbyUserList}

                              />

                           </div>
                        )
                     }
                  })
               }
            </Carousel>
         )

      }
      else {
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
               {this.state.allData.filter(allData => allData.productServiceType == "PRODUCT").map((xyz, index) => {
                  return (
                     <div>
                        <ImageDashboard
                           ImageName={xyz.categoryName}
                           // LinkId="/subCategories"
                           ImageA={xyz.categoryImage}
                           heartImage={Imageid.RedHeart}
                        />
                     </div>
                  )
               })
               }
            </Carousel>
         )
      }
   }






render() {
      return (
        <>
            <body>
               <Header />
               <section class="second">
                  <LandingTopicName HeaderName="Marts" />
                  <div class="container-fluid">
                     {this.martData()}
                  </div>

                  <LandingTopicName HeaderName="Categories" />

                  <div class="container-fluid">
                     {/* {this.productServiceType()} */}
                     <div>
                        <h5 class="product-herd">SERVICES</h5>
                     </div>
                     {this.servicesByCategoryData()}
                     <div>
                        <h5 style={{ marginTop: 40 }} class="product-herd">PRODUCTS</h5>
                     </div>
                     {this.productsByCategoryData()}
                  </div>
               </section>
               <Footer />
            </body>

         </>
      )
   }
}



// export default componentName

const mapStateToProps = state => {
   console.log("stateabc", state)
   return {
      isLoggedIn:state.AuthReducer.isLoggedIn,
      applicationData: state.AuthReducer.userData,
      endUserProfileData: state.EndUserProfileReducer.endUserProfileData
   }
}

const mapDispatchToProps = dispatch => {
   return {
      action: bindActionCreators({ endUserProfileAction }, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(componentName);