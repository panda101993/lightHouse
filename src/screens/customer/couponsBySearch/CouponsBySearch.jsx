import React, { Component } from 'react'
import Footer from '../../../components/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';   
import  CouponsImage from '../../../components/CouponsImage'
import Header from '../../../components/Header';
import Header4 from '../../../components/Header4';
import { Link } from 'react-router-dom';
import ToasterFunction from '../../../components/ToasterFunc';
import apiRequest from '../../../api/Apirequest';
import Cookies from 'universal-cookie';
import {loginAction} from "../../../redux/action/AuthAction";
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



export class CouponsBySearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

      allData:[],
      isLoggedIn:""
       
    }
  }


getSearchAllByLocation = (SearchId) => {
    try {
        console.log("searcgjjjjj",SearchId)
        const cookies = new Cookies();

        const latitude = cookies.get('latitude')
        const longitude = cookies.get('longitude')
        // console.log("akhtarrr",latitude)
        // console.log("akhtarrr",search)

        apiRequest({ lat:latitude, long:longitude, search:SearchId }, '/user/searchAllByLocation', 'POST',)
            .then((resp) => {
                console.log('responseSearch--', resp);
                switch (resp.status) {
                    case (200):
                        {
                            if (resp.data.responseCode == 200) {
                                  this.setState({
                                      allData: resp.data.result
                                   });
                            }
                            else if (resp.data.responseCode == 404) {
                                // ToasterFunction("info", resp.data.responseMessage);

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



    } catch (error) {
        // console.log('response===', error);
        ToasterFunction("error", "Network error, please contact the administrator");

    }

}



  async componentDidMount() { 
    console.log('search',window.location.pathname);
    let splitUrl = window.location.pathname.split('/')
    console.log('search',splitUrl);
    console.log('search',splitUrl[2]);
    console.log("isLoggedIn",splitUrl[3])
   this.getSearchAllByLocation(splitUrl[2]);
   this.setState({isLoggedIn:splitUrl[3]});
//    this.getSearchAllByLocation();
  }
  

  couponsdata(){
      return this.state.allData.map((allCouponData, index)=>{
        console.log("allCouponDataakhtar",allCouponData)
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
//   OneTimeCoupon={allCouponData.oneTimeCoupon}
  ShopName={allCouponData.shopName}
//   ShopNumber={allCouponData.retailerId.shopNumber}
  FloorNumber={allCouponData.floorNumber}
//   MartName={allCouponData.martName}
  ShopPhoneNumber={allCouponData.shopPhoneNumber}
  Restrictions={allCouponData.restrictions}
  />
  
          </div>
        )
      })
      }
      
  
    render() {
        return (
            <div> 
                <body> 
               { 
               this.state.isLoggedIn ? <Header4 /> :
                <Header />
                }
                <section class="second">
         <div class="container-fluid">

            <div class="slidertop">
               <section class="center slider">
                 {/* {this.retailerNamedata()} */}
                </section>
  
              </div>           
         </div>
      </section>

      <div class="left-contant">
        <div class="marname">
          {/* {this.retailerName()} */}
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
                    {this.couponsdata().length > 0 ? 
                        this.couponsdata() 
                        : 
                        <div><h1>Data not found!!</h1></div>}
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

//  export default CouponsBySearch;
 const mapStateToProps = state => {
    console.log("state-------", state)
    return {
       applicationData: state.AuthReducer.userData
         
    }
          
  }
  
  
  
  // export default componentName
  export default connect(mapStateToProps,{loginAction})(CouponsBySearch);
  

