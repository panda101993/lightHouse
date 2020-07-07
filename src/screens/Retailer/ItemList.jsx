import React, { Component } from 'react'
import Header2 from '../../components/Header2'
import Footer from '../../components/Footer' 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import CouponImageSetting from '../../components/CouponImageSetting';
import CouponsImage from '../../components/CouponsImage';
import apiRequest from '../../api/Apirequest';
import ToasterFunction from '../../components/ToasterFunc';
import { loginAction } from "../../redux/action/AuthAction";
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


export class ItemList extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         allData: [] 
      }
   }

   


   getCouponByMartSubCategory = (subCategoryId,categoryId, martId) => {
      try {
         apiRequest({ subCategoryId:subCategoryId, categoryId:categoryId, martId: martId }, '/user/getCouponByMartSubCategory', 'POST')
            .then((resp) => {
               console.log('responsesubCategorycoupon',resp);
               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           this.setState({
                              allData: resp.data.Data
                            
                           });
                           // console.log("subCategory---",resp.data.DatasubCategoryId)
                        }
                        else if (resp.data.responseCode == 404) {
                           ToasterFunction("info", resp.data.responseMessage);

                        }
                        else if (resp.data.responseCode == 500) {
                           ToasterFunction("error", resp.data.responseMessage);

                        }
                     }
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
      console.log('subCategoryCoupon', window.location.pathname);
      let splitUrl = window.location.pathname.split('/')
      console.log('subCategoryCoupon', splitUrl);
      console.log('subCategoryCoupon', splitUrl[2]);
      console.log('subCategoryCoupon', splitUrl[3]);
      console.log('subCategoryCoupon', splitUrl[4]);
      this.getCouponByMartSubCategory(splitUrl[2], splitUrl[3],splitUrl[4]);
   }

   couponSubCategory(){
      // console.log("applicationData",this.props.applicationData)
        return this.state.allData.map((allCouponData, index)=>{
          return(
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
        }

   subCategoryDataList (){
      // console.log("applicationData",this.props.applicationData)
      return this.state.allData.map((allCouponData, index)=>{
         return(
           <div>
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
                        {allCouponData.subCategoryName}
                     </div>
                  </div>
            </Carousel> 
           </div>
         )
       })

   }


    render() {
        return (
            <div>
               <Header2 /> 
               <div class="container-fluid">
            <div class="slidertop"> 
            <section class="center slider">
               {this.subCategoryDataList ()}
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
>   
<div>
                     <div class="slicent activa">
                        Sub-Category Name
                     </div>
                  </div>
            </Carousel>  */}
         </section>
            </div>
           </div>  
           <section class="third">
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-3">
                  <div class="accor-bord">
                     <ul class="button_cs sve-can button-shift all-clr">
                        <li><button type="button" class="save0 s-1"data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
                     </ul>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                          <span class="mart-mar-left">Mart Name </span> 
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1"/>
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseOn" aria-expanded="false" aria-controls="collapseOne">
                                       <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseOn" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapseOn" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapseO" aria-expanded="false" aria-controls="collapseOne">
                                       <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapseO" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapseO" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collapse" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#collap" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#collap" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="collap" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#colla" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#colla" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="colla" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="to-al-cent">
                        <div class="form-check first-nopad">
                           <div class="accordion" id="accordionExample">
                              <div class="car">
                                 <div class="card-heade" id="headingOne">
                                    <h2 class="mb-0 down-arrow">
                                       <input type="checkbox" class="form-check-input car" id="exampleCheck1" />
                                       <button class="btn btn-link blak-colr" type="button" data-toggle="collapse" data-target="#coll" aria-expanded="false" aria-controls="collapseOne">
                                        <span class="mart-mar-left">Mart Name </span>
                                       </button>
                                       <div>
                                          <i class="fa fa-caret-down" aria-hidden="true" data-toggle="collapse" data-target="#coll" aria-expanded="false" aria-controls="collapseOne"></i>
                                       </div>
                                    </h2>
                                 </div>
                                 <div id="coll" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <div class="form-group form-check no-pad-left">
                                          <div class="form-group form-check ">
                                             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                             <label class="form-check-label" for="exampleCheck1">Retailer Name</label>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-9">
                  <div class="slid-margin">
                     <div class="row mar-bottom">
                     {this.couponSubCategory()}
                  {/* <CouponsImage /> */}
                
               </div>
            </div>
         </div> 
         </div>
         </div>
      </section>
    


               <Footer />
            </div>
        )
    }
}

// export default ItemList
const mapStateToProps = state => {
   console.log("state-------", state)
   return {
      applicationData: state.AuthReducer.userData

   }

}

export default connect(mapStateToProps, { loginAction })(ItemList);
