import React, { Component } from 'react'
import Footer from '../../components/Footer'
import LandingTopicName from '../../components/LandingTopicName'
import ImageDashboard from '../../components/ImageDashboard'
import CouponsImage from '../../components/CouponsImage'
import HeaderLandingScreen from '../../components/HeaderLandingScreen'
import WishlistImageComponent from '../../components/WishlistImageComponent'
import ViewCouponRetailer from '../../components/ViewCouponRetailer'
import CouponImageSetting from '../../components/CouponImageSetting'
import DashboardImageScroll from './DashboardImageScroll'
import DashboardProductImage from '../../components/DashboardProductImage'
import CouponsScrollPupup from '../../components/CouponsScrollPupup'
import CatogriesScroll from '../../components/CatogriesScroll'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../components/Header'
import apiRequest from '../../api/Apirequest';
import {loginAction} from "../../redux/action/AuthAction";
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import ToasterFunction from '../../components/ToasterFunc';

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

   getmartsbyUserList = () =>{
      try {
        const cookies = new Cookies();
        console.log(cookies.get('latitude'));
        const latitude = cookies.get('latitude')

        console.log(cookies.get('longitude'));
        const longitude = cookies.get('longitude')

        //  console.log('hhhh=>',this.props.applicationData)
         apiRequest({lat:latitude, long:longitude},'/user/getMartsByUser','POST')
         .then((resp)=>{
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
                    ToasterFunction("info", "Data not found, internal server error");

                }
                else if (resp.data.responseCode == 500) {
                    ToasterFunction("error", "Internal Server Error");

                }
            }
            case (900): {
                if (resp.status == 900) {
                    ToasterFunction("error", "Please check your internet connection")
                }
            }
        }
        
      });
         
      } catch (error) {
         console.log('response===', error);
         ToasterFunction("error", "Network error, please contact the administrator");
         
      }
   }

   async componentDidMount() {

   this.getmartsbyUserList();
   
   }

   martData(){
      // if(this.state.allData.length > 0)
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
      { this.state.allData.map((xyz, index)=>{
         const {martId,martImage,martName} = xyz
      //   console.log('category',categoryImage);
         return(
            <div class="container-fluid">
               
            <ImageDashboard          
               ImageName={martName}
               LinkId="/AllRetailers"
               ImageA={martImage}
               heartImage={Imageid.RedHeart}
               MartId={martId}
            />
            
         </div>
         )
      })
   } </Carousel>
}


   productServiceType(){
      return this.state.allData.slice(0,2).map((xyz, index)=>{
         const {productServiceType} = xyz
         return(
            <div>
         <h5 class="product-herd">{productServiceType}</h5>
         </div>
         )
         
      })
   }

   categoryData(){
      // if(this.state.allData.length > 0)
      return   <Carousel
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
      {this.state.allData.map((xyz, index)=>{
         const {categoryId, categoryImage,categoryName,productServiceType} = xyz
      //   console.log('category',categoryImage);
         return(
            // <div class="container-fluid">
              <div>  
              
                  <ImageDashboard
                     ImageName={categoryName}
                     LinkId="/subCategories"
                     ImageA={categoryImage}
                     heartImage={Imageid.RedHeart}
                     
                  />
               
            </div>
         )
      })
   } </Carousel>
}

 
   
  

   
   render() {
      return (

         

         <>
            <body>
               <Header/>
               <section class="second">
                  <LandingTopicName HeaderName="Marts" />
                  {this.martData()}

                  <LandingTopicName HeaderName="Categories" />

                   <div class="container-fluid"> 
                  {this.productServiceType()}
                  {this.categoryData()}
                   </div>
               </section>
               <Footer />
            </body>

         </>
      )
   }
}



export default componentName