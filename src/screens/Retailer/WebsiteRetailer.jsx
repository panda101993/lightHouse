import React, { Component } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ViewCouponRetailer from "../../components/ViewCouponRetailer"
import Header2 from '../../components/Header2'
import { Link } from 'react-router-dom'
import apiRequest from '../../api/Apirequest';
import { myCouponData } from '../../redux/action/CouponCodeAction'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { loginAction } from "../../redux/action/AuthAction";

export class WebsiteRetailer extends Component {
   constructor(props) {
      super(props)

      this.state = {
         allData: [],
         // allCoupon: []

      }
   }
   getWebsiteByRetailer = (Id) => {
      try {
         console.log('RetailerId----', Id);
         console.log('RetailerId----', this.props.applicationData.token);
         apiRequest({ }, `/user/viewWebsites/${Id}`, 'GET',this.props.applicationData.token)
            .then((resp) => {
               console.log('responseWebsite=>', resp);
               // console.log('response===>', resp.data.userData);
               this.setState({
                  allData: resp.data.result
               });
            });

      } catch (error) {
         console.log('erroresponse==>', error)

      }

   }
   async componentDidMount() {
      console.log('RetailerId', window.location.pathname);
      let splitUrl = window.location.pathname.split('/')
      console.log('RetailerId', splitUrl);
      console.log('RetailerId', splitUrl[2]);
      this.getWebsiteByRetailer(splitUrl[2]);
   }

   websiteRetailerImage() {
      console.log("alldata---",this.state.allData.webSiteImages)
          if (this.state.allData.webSiteImages !== undefined)
            return this.state.allData.webSiteImages.map((xyz, index) => {
               // const { webSiteImages } = xyz
               // console.log('abcd==',xyz)
               // console.log('abcd==>>', webSiteImages)
               return (
                  <div>
                   <img src={xyz} />
                  </div>
               )
            })
      }
   

   shopDetails= () => {
      //  console.log("alldataaaa---",this.state.allData)
       if (this.state.allData.basicInformation !== undefined)
      return this.state.allData.basicInformation.map((basicInformation, index) => {
         console.log('abcd==',this.state.allData.retailerId)
         let retailerId = this.state.allData.retailerId;
         return (
            <div>
               <div class="basic mt-3 ">
                  <div class="d-flex justify-content-between align-items-center">
                     <div class="john-json">
                        <h5>Shop Name : {basicInformation.shopName}</h5>
                        <h6>Shop Number : {basicInformation.shopNumber}</h6>
                        <h6>Floor Number : {basicInformation.floorNumber}</h6>
                        <h6>Mart Name : {basicInformation.martName}</h6>
                        <h6>Mart Address : {basicInformation.martAddress}</h6>
                     </div>
                     <div> <Link to={`/AllCouponsRetailers/${retailerId}`}  > <button class="btn btn-theme">View Coupons</button> </Link></div>
                  </div>
               </div>
            </div>
         )
      })
   }

   aboutUs= () => {
      // console.log("alldataaaa---",this.state.allData.aboutUs)
      if (this.state.allData.aboutUs !== undefined)
      // return this.state.allData.aboutUs.map((aboutUs, index) => {
      //    console.log('abcd==',aboutUs)
         return (
            <div>
               {this.state.allData.aboutUs}
            </div>
         )
      // })
      
   }

   shopTiming = () => {

      if (!this.state.allData.shopTiming) return null;
      // console.log("alldataaaa---", this.state.allData.shopTiming[0].friday[0])
      // return this.state.allData.shopTiming.map((shopTiming, index) => {
         // console.log("friday===", shopTiming)
         let shopTiming = this.state.allData.shopTiming[0]
         return (

            <div>
               <div class="shop-timing">
                  <ul class="sunday">
                     <li>Sunday</li>
                     <li>Monday</li>
                     <li>Tuesday</li>
                     <li>Wednesday</li>
                     <li>Thursday</li>
                     <li>Friday</li>
                     <li>Saturday</li>
                  </ul>
                  <ul class="timeing">

                     {shopTiming.sunday[0].closeDay == false
                        ?
                        <li>{shopTiming.sunday[0].startTime} - {shopTiming.sunday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {shopTiming.monday[0].closeDay == false
                        ?
                        <li>{shopTiming.monday[0].startTime} - {shopTiming.monday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {shopTiming.tuesday[0].closeDay == false
                        ?
                        <li>{shopTiming.tuesday[0].startTime} - {shopTiming.tuesday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {shopTiming.wednesday[0].closeDay == false
                        ?
                        <li>{shopTiming.wednesday[0].startTime} - {shopTiming.wednesday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {shopTiming.thursday[0].closeDay == false
                        ?
                        <li>{shopTiming.thursday[0].startTime} - {shopTiming.thursday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {shopTiming.friday[0].closeDay == false
                        ?
                        <li>{shopTiming.friday[0].startTime} - {shopTiming.friday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {shopTiming.saturday[0].closeDay == false
                        ?
                        <li>{shopTiming.saturday[0].startTime} - {shopTiming.saturday[0].endTime}</li>
                        :
                        <li><a href="#">Close</a></li>
                     }

                     {/* <li><a href="#">Close</a></li> */}
                  </ul>
               </div>
            </div>
         )
      // })
   }

   productServiceDetails() {
      console.log("alldataaaa---",this.state.allData.productServiceDetails)
       if (!this.state.allData.productServiceDetails) return null;
      return this.state.allData.productServiceDetails.map((productServiceDetails, index) => {
       console.log("productServiceDetails--",productServiceDetails)
            return (
               <div class="product">
                        {/* <h1>Product Service Details</h1> */}
                        <div class="accordion frequently" id="accordionExample">
                           <div class="card">
                     <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                           <button class="btn btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                           {productServiceDetails.categoryName} </button>
                        </h2>
                     </div>
                     <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                           <div class="sub-catgy">
            <h6>{productServiceDetails.subCategoryName}</h6>
                              <ul>
            <li>{productServiceDetails.itemType}</li>
                                 <li>{productServiceDetails.brand}</li>
                                 <li>{productServiceDetails.itemName}</li>
                                 <li>{productServiceDetails.price}</li>
                              </ul>
                              {/* <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul> */}
                           </div>
                           </div>
                     </div>
                           </div>
                           
                        </div>
                     </div>
            )
         })
      }
   


   render() {
      return (
         <div>
            <body>
               <Header2 />
               <section>
                  <div class="bg">
                     {this.websiteRetailerImage()}
                     {/* <img src={require("../../assets/images/Layer-40.png")} /> */}
                  </div>
                  <div class="container">
                  <div class="left-contant00">
                        <h3>Basic Information</h3>
                     </div>
                     {this.shopDetails()}
                     <div class="about-us">
                        <h4>About Us</h4>
                        {this.aboutUs()}
                        {/* <span><a href="#">Read More</a></span> */}
                     </div>
                     <div class="time">
                        <h2>Shop Timings  </h2>
                        {this.shopTiming()}
                     </div>
                     <div class="left-contant00">
                        <h3>Product Service Details</h3>
                     </div>
                     {this.productServiceDetails()}
                     {/* <div class="product">
                        
                        <h1>Product Service Details</h1>
                        <div class="accordion frequently" id="accordionExample">
                           
                           <div class="card">
                     <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                           Category 1 </button>
                        </h2>
                     </div>
                     <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                           <div class="sub-catgy">
                              <h6>Sub Category 1</h6>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                           <div class="accordion frequently" id="accordionExample1">
                           <div class="card">
                                    <div class="card-header chl-head" id="headingsub1">
                                       <h2 class="mb-0">
                                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesub1" aria-expanded="false" aria-controls="collapsesub1">
                                          Sub Category 2 </button>
                                       </h2>
                                    </div>
                                    <div id="collapsesub1" class="collapse" aria-labelledby="headingsub1" data-parent="#accordionExample1">
                                       <div class="card-body">
                                          <div class="sub-catgy">
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           <div class="card">
                                    <div class="card-header chl-head" id="heading2">
                                       <h2 class="mb-0">
                                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesub2" aria-expanded="false" aria-controls="collapseOne">
                                          Sub Category 3 </button>
                                       </h2>
                                    </div>
                                    <div id="collapsesub2" class="collapse" aria-labelledby="headingsub2" data-parent="#accordionExample1">
                                       <div class="card-body">
                                          <div class="sub-catgy">
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                             <ul>
                                                <li>Cloth</li>
                                                <li>Nike</li>
                                                <li>T-shirt</li>
                                                <li>Rs.123.00</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           </div>
                     </div>
                           </div>
                           <div class="card">
                     <div class="card-header" id="heading2">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseOne">
                           Category 2 </button>
                        </h2>
                     </div>
                     <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                        <div class="card-body">
                           <div class="sub-catgy">
                              <h6>Sub Category 1</h6>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                              <ul>
                                 <li>Cloth</li>
                                 <li>Nike</li>
                                 <li>T-shirt</li>
                                 <li>Rs.123.00</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                        </div>
                     </div> */}


                  </div>

               </section>
               <Footer />
            </body>

         </div>
      )
   }
}

// const mapStateToProps = state => {
//    console.log("state===", state.CouponCodeReducer)
//    return {
//       allCouponData: state.CouponCodeReducer.userData
//    }
// }
 
// const mapDispatchToProps = dispatch => {
//    return {
//       action: bindActionCreators({ myCouponData }, dispatch)
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WebsiteRetailer);
const mapStateToProps = state => {
   console.log("state-------", state)
   return {
      applicationData: state.AuthReducer.userData

   }

}

export default connect(mapStateToProps, { loginAction })(WebsiteRetailer);
