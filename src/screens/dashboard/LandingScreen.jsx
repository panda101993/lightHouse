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
import Header4 from '../../components/Header4'
import apiRequest from '../../api/Apirequest'
// import {loginAction} from "../../redux/action/AuthAction";
import { connect } from "react-redux";
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
         martsList: [],
         allCategoriesList: [],
         serviceCategoriesList: [],
         productCategoriesList: []

      }

   }

   getmartsbyUserList = () => {
      try {
         // console.log('token++++++',this.props.applicationData)
         if (this.props.applicationData.token) {
            const cookies = new Cookies();

            const latitude = cookies.get('latitude');

            const longitude = cookies.get('longitude');

            if ((latitude != null || latitude != undefined) && (longitude != null && latitude != undefined)) {
               apiRequest({ lat: latitude, long: longitude }, '/user/getMartsByUser', 'POST', this.props.applicationData.token)
                  .then((resp) => {
                     console.log('response_martList=> ', resp);
                     switch (resp.status) {
                        case (200):
                           {
                              if (resp.data.responseCode == 200) {
                                 this.setState({
                                    allData: resp.data.result[0].details
                                 });
                                 this.setState({ martsList: resp.data.result }, () => { this.extractCategoriesfromMartList() });
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
                              ToasterFunction("error", "Please check your internet connection")
                           }
                        }
                     }

                  })
                  .catch(err => {
                     console.log(err);
                  })
            }

         }

      } catch (error) {
         // console.log('response===', error);
         ToasterFunction("error", "Network error, please contact the administrator");

      }
   }

   extractCategoriesfromMartList = async () => {
      let { martsList, allCategoriesList } = this.state;


      // await martsList.map((mart) => {
      //    allCategoriesList = [...allCategoriesList, ...mart.details];
      // });

      for (let i = 0; i < martsList.length; i++) {
         let mart = martsList[i];
         allCategoriesList = allCategoriesList.concat(mart.details);

         if (i === (martsList.length - 1)) {
            console.log("AllCategoriesList=> ", allCategoriesList);
            this.setState({ allCategoriesList }, () => { this.extractDistinctCategories() })
         }
      }
   }

   extractDistinctCategories = () => {
      let { allCategoriesList, serviceCategoriesList, productCategoriesList } = this.state;

      for (let i = 0; i < allCategoriesList.length; i++) {
         let category = allCategoriesList[i];

         console.log("categoryId=> ", category.categoryId)

         if (category.productServiceType.toLowerCase().includes('service')) {

            if (!serviceCategoriesList.includes(category.categoryId)) {
               serviceCategoriesList.push(category.categoryId);
            }
         }
         else {
            if (!productCategoriesList.includes(category.categoryId)) {
               productCategoriesList.push(category.categoryId);
            }
         }

         if (i === allCategoriesList.length - 1) {
            this.setState({ serviceCategoriesList, productCategoriesList }, () => {
               console.log('CategoryList=> ', this.state.serviceCategoriesList, this.state.productCategoriesList);
            });

         }

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
      // /if(this.state.allData.length > 0)

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
            {this.state.martsList.map((mart, index) => {
               // console.log("abcffff",xyz.martUsers)
               // if (!xyz.martUsers) return null;               

               let martName = '', martId = '', martImage = '', heartStatus = '', uniqueId;

               if (mart && mart.details && mart.details[0]) {
                  martName = mart.details[0].martName;
                  martId = mart.details[0].martId;
                  martImage = mart.details[0].martImage[0];
               }
               heartStatus = Imageid.heartImage;
               uniqueId = mart._id;

               // if ( xyz && xyz.martUsers && xyz.martUsers !== undefined) {
               //    let checkData = xyz.martUsers.indexOf(this.props.applicationData.userId);

               //    // console.log('checkData--',checkData)
               //    // let heartStatus;
               //    // if(checkData == -1){
               //    //   heartStatus = false;
               //    // }else{
               //    //   heartStatus = true ;
               //    // }
               //    let heartStatus;
               //    if (checkData == -1) {
               //       heartStatus = Imageid.heartImage;
               //    } else {
               //       heartStatus = Imageid.RedHeart;
               //    }

               return (
                  <div>

                     <ImageDashboard
                        ImageName={martName}
                        LinkId={`/AllRetailers/${martId}`}
                        // LinkId={this.props.action.myCouponData({martId},()=>this.props.history.push("/AllRetailers"))}
                        ImageA={martImage}
                        heartImage={heartStatus}
                        MartId={martId}
                        Id={martId}
                        Token={this.props.applicationData.token}
                        typeData={'mart'}
                        UniqueId={uniqueId}
                        HeartData={heartStatus}
                        blankHeart={Imageid.heartImage}
                        redHeart={Imageid.RedHeart}
                        reloadApi={this.getmartsbyUserList}

                     />

                  </div>
               )
               // }
            })
            }</Carousel>
      )
   }



   // productServiceType(){
   //    return this.state.allData.map((xyz, index)=>{
   //       const {productServiceType} = xyz
   //       return(
   //          <div>
   //       <h5 class="product-herd">{productServiceType}</h5>
   //       </div>
   //       )

   //    })
   // }

   servicesByCategoryData() {
      // if(this.state.allData.length > 0)
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
               // this.state.allData.filter(allData => allData.productServiceType == "SERVICE").map((xyz, index) => {
               this.state.serviceCategoriesList.map((category) => {                  

                  let categoryDetails = this.state.allCategoriesList.find(x => x.categoryId === category);

                  let imageName = '', categoryId = '', categoryImage = '', uniqueId = '', heartStatus = '';
               
                  if (categoryDetails) {
                     imageName = categoryDetails.categoryName;
                     categoryId = categoryDetails.categoryId;
                     categoryImage = categoryDetails.categoryImage;
                     uniqueId = category;
                  }

                  heartStatus = Imageid.heartImage;

                  // return (<>{category} &nbsp; &nbsp;</>)

                  // if(categoryDetails) {
                  //    imageName=
                  // }

                  // const {martId,categoryId, categoryImage,categoryName,_id} = xyz
                  // if (xyz.categoryUsers !== undefined) {
                  //    let checkData = xyz.categoryUsers.indexOf(this.props.applicationData.userId);

                  //    // console.log('checkData--', checkData)

                  //    let heartStatus;
                  //    if (checkData == -1) {
                  //       heartStatus = Imageid.heartImage;
                  //    } else {
                  //       heartStatus = Imageid.RedHeart;
                  //    }
                  return (
                     <div>

                        <ImageDashboard
                           ImageName={imageName}
                           // LinkId={`/subCategories/${xyz.categoryId}/${xyz.martId}`}
                           LinkId={`/subCategories?categoryId=${categoryId}`}
                           ImageA={categoryImage}
                           heartImage={heartStatus}
                           CategoryId={categoryId}
                           Id={categoryId}
                           Token={this.props.applicationData.token}
                           typeData={'category'}
                           UniqueId={category}
                           HeartData={heartStatus}
                           // blankHeart={Imageid.heartImage}
                           // redHeart={Imageid.RedHeart}
                           ProductServiceType={"SERVICE"}
                           reloadApi={this.getmartsbyUserList}

                        />

                     </div>
                  )
                  // }
               })
            }
         </Carousel>
      )
   }

   productsByCategoryData() {
      // if(this.state.allData.length > 0)
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
               // this.state.allData.filter(allData => allData.productServiceType == "PRODUCT").map((xyz, index) => {
               this.state.productCategoriesList.map((category) => {
                  // const {martId,categoryId, categoryImage,categoryName,_id} = xyz
                  // if (xyz.categoryUsers !== undefined) {
                  //    let checkData = xyz.categoryUsers.indexOf(this.props.applicationData.userId);

                  //    // let heartStatus;
                  //    // if(checkData == -1){
                  //    //   heartStatus = false;
                  //    // }else{
                  //    //   heartStatus = true ;
                  //    // }
                  //    let heartStatus;
                  //    if (checkData == -1) {
                  //       heartStatus = Imageid.heartImage;
                  //    } else {
                  //       heartStatus = Imageid.RedHeart;
                  //    }

                  let categoryDetails = this.state.allCategoriesList.find(x => x.categoryId === category);

                  let imageName = '', categoryId = '', categoryImage = '', uniqueId = '', heartStatus = '';                  

                  if (categoryDetails) {
                     imageName = categoryDetails.categoryName;
                     categoryId = categoryDetails.categoryId;
                     categoryImage = categoryDetails.categoryImage;
                     uniqueId = category;
                  }

                  heartStatus = Imageid.heartImage;

                  return (
                     <div>

                        <ImageDashboard
                           ImageName={imageName}
                           // LinkId={`/subCategories/${xyz.categoryId}/${xyz.martId}`}
                           LinkId={`/subCategories?categoryId=${categoryId}`}
                           ImageA={categoryImage}
                           heartImage={heartStatus}
                           CategoryId={categoryId}
                           Id={categoryId}
                           Token={this.props.applicationData.token}
                           typeData={'category'}
                           UniqueId={category}
                           HeartData={heartStatus}
                           // blankHeart={Imageid.heartImage}
                           // redHeart={Imageid.RedHeart}
                           ProductServiceType={"SERVICE"}
                           reloadApi={this.getmartsbyUserList}

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



         <>
            <body>
               {/* <HeaderLandingScreen /> */}
               <Header4 />
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


const mapStateToProps = state => {
   // console.log("stateabc", state)
   return {
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
