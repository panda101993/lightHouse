import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiRequest from '../api/Apirequest';
import {loginAction} from "../redux/action/AuthAction";
import { connect } from "react-redux";
import ToasterFunction from '../components/ToasterFunc';
import { myCouponData } from '../redux/action/CouponCodeAction';
import { bindActionCreators } from 'redux';

import {
   EmailShareButton,
   FacebookShareButton,
   InstapaperShareButton,
   LineShareButton,
   LinkedinShareButton,
   LivejournalShareButton,
   MailruShareButton,
   OKShareButton,
   PinterestShareButton,
   PocketShareButton,
   RedditShareButton,
   TelegramShareButton,
   TumblrShareButton,
   TwitterShareButton,
   ViberShareButton,
   VKShareButton,
   WhatsappShareButton,
   WorkplaceShareButton,
} from "react-share";

import {
   FacebookShareCount,
   OKShareCount,
   PinterestShareCount,
   RedditShareCount,
   TumblrShareCount,
   VKShareCount,
   WhatsappIcon,
   TwitterIcon,
   InstapaperIcon,
   FacebookIcon,
   TelegramIcon,
   EmailIcon,
} from "react-share";





class CouponImageSetting extends Component {
   constructor(props) {
      super(props);
      this.state = {
         search: "",
         pageNumber: 1,
         limit: 10,
         modalStatus: false,
         modalStatusImage: false,
         modalStatusBackImage: false,
         allCoupon: [],
         allData: [],
         getCouponId:"",
         favouriteImage:"",
         couponTitle:"",
         couponCode:"",
         couponDiscount:"",
         itemName:"",
         couponExpiryDate:"",
         couponAppliedOn:"",
         oneTimeCoupon:"",
         shopName:"",
         floorNumber:"",
         martName:"",
         shopPhoneNumber:"",
         restrictions:""


      }
   }
   
   getCoupounList = () => {
      try {
         console.log('hhhhii==>',this.props.applicationData)
         
         apiRequest({ userId: this.props.applicationData.userId, search: this.state.search, pageNumber: this.state.pageNumber, limit: this.state.limit }, '/user/myCoupons', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('responseMycoupan', resp);

               switch (resp.status) {
                  case (200):
                      {
                        if (resp.data.responseCode == 200) {
                           this.setState({
                               allData: resp.data.result.docs
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

            })
      } catch (error) {
         console.log('errorresponse', error);
         ToasterFunction("error", "Network error, please contact the administrator");
      }
   }
   async componentDidMount() {
      this.getCoupounList();
   }

   deleteCoupans = (getCouponId) => {
      console.log("getCouponId---",getCouponId)
      try {
         
         apiRequest({ couponId: getCouponId }, '/user/deleteCoupon', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('resprespdel', resp);
               switch (resp.status) {
                  case (200):
                      {
                      if (resp.data.responseCode == 200) {
                        ToasterFunction("success", "Coupon deleted Successfully");
                      }
                       else if (resp.data.responseCode == 404) {
                          ToasterFunction("info", "Coupon already deleted");
      
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
              this.setState({modalStatus:false});
            //   window.location.reload(false);
            })
      } catch (error) {
         console.log('errorresponse', error);
         ToasterFunction("error", "Network error, please contact the administrator");

      }
      this.setState({modalStatus:false});
   }

   hideCoupans = (getCouponId) => {
      console.log("getCouponId---",getCouponId)
      try {
         apiRequest({ couponId: getCouponId  }, '/user/hideCoupon', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('response', resp);
               switch (resp.status) {
                  case (200):
                      {
                      if (resp.data.responseCode == 200) {
                        ToasterFunction("success", "Coupon hide Successfully");
                      }
                       else if (resp.data.responseCode == 404) {
                          ToasterFunction("info", "Coupon already hide");
      
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
              this.setState({modalStatusImage:false});
            })
      } catch (error) {
         console.log('errorresponse', error)
         ToasterFunction("error", "Network error, please contact the administrator");

      }
      this.setState({modalStatusImage:false});
   }

   openfavouriteModal= (id,image,title,couponCode,discount,itemName,
      couponAppliedOn,ExpiryDate,oneTimeCoupon,shopName,floorNumber,
      martName,shopPhoneNumber,restrictions) => {
this.setState({getCouponId:id,favouriteImage:image,couponTitle:title,
   couponCode:couponCode,couponDiscount:discount,itemName:itemName,
   couponExpiryDate:ExpiryDate,couponAppliedOn:couponAppliedOn,oneTimeCoupon:oneTimeCoupon,
   shopName:shopName,floorNumber:floorNumber,martName:martName,shopPhoneNumber:shopPhoneNumber,
   restrictions:restrictions,modalStatusImage: true});

   }

   openDelteModal = (id) =>{
      this.setState({getCouponId:id,modalStatus:true});
      
   }
   couponData(){
      // if(this.state.allData.length > 0)
      return this.state.allData.map((xyz, index)=>{
         const {couponId,image,title,couponCode,discount,itemName,
            couponAppliedOn,ExpiryDate,oneTimeCoupon,shopName,floorNumber,
            martName,shopPhoneNumber,restrictions} = xyz
      //   console.log('category',categoryImage);
         return(
            <div>
               <div style={{width:"120%"}} class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
               <figure class="coupon-sec">
                  <img src={image} onClick={() => this.openfavouriteModal(couponId,image,title,couponCode,discount,itemName,
            couponAppliedOn,ExpiryDate,oneTimeCoupon,shopName,floorNumber,
            martName,shopPhoneNumber,restrictions)} />
               </figure>
                  <label style={{fontSize:14}}>Title :</label>
                  <label style={{fontSize:14}}>{title}</label>
                  <br/>
                  <label style={{fontSize:14}}>Coupon Code:</label>
                  <label style={{fontSize:14}}>{couponCode}</label>
                  <br/>
                  <label style={{fontSize:14}}>Discount % :</label>
                  <label style={{fontSize:14}}>{discount}</label>
                  <br/>
                  <label style={{fontSize:14}}>Item Name  :</label>
                  <label style={{fontSize:14}}> {itemName}</label>
                  <br/>
                  <label style={{fontSize:14}}>Expiry Date:</label>
                  <label style={{fontSize:14}}>{ExpiryDate}</label> 
            </div>
            <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup" onClick={() => this.openDelteModal(couponId)}>Delete</button>
            </div>
         )
      })
   }

   render() {
      return (
         <div>
            {/* <div class="col-lg-4 col-md-4 col-sm-12"> */}
            {/* <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
               <figure class="coupon-sec">
                  <img src={require("../assets/images/pizza great deal.png")} onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage })} />
               </figure>
            </div>
            <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Delete</button> */}
            {/* </div>   */}
            {this.couponData()}

            <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
               <ModalBody>

                  <div class="modal-content">
                     <div class="modal-header locationsethead">
                        <h5>Are you sure you want to remove this
                        from wishlist ?
                  </h5>
                     </div>
                     <div class="modal-body ny">
                        <button type="button" class="btn setloc-" type="submit" data-dismiss="modal"
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>No</button>
                        <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#rmvwish" onClick={() => this.deleteCoupans(this.state.getCouponId)}>Yes</button>
                     </div>
                  </div>

               </ModalBody>
            </Modal>


            <Modal isOpen={this.state.modalStatusBackImage} toggle={this.toggle} style={{ top: "190px", }}>
               <ModalHeader >
                  <button onClick={() => this.setState({ modalStatusBackImage: false })} type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                  </button>
               </ModalHeader>
               <ModalBody>

                  <div class="modal-content">
                     <div class="modal-header locationsethead">

                        <h5>Share Us
                  </h5>
                     </div>
                     <div class="modal-body ny">
                      
                        <div className="Demo__container">
                           <div className="Demo__some-network">
                              <WhatsappShareButton
                                 url={'www.whatsapp.com'}
                                 quote={'whatsapp'}
                                 className="Demo__some-network__share-button"
                              >
                                 <WhatsappIcon size={50} round />
                              </WhatsappShareButton>
                           </div>
                        </div>

                        <div className="Demo__container">
                           <div className="Demo__some-network">
                              <TwitterShareButton
                                 url={'www.twitter.com'}
                                 quote={'twitter'}
                                 className="Demo__some-network__share-button"
                              >
                                 <TwitterIcon size={50} round />
                              </TwitterShareButton>
                           </div>
                        </div>

                        <div className="Demo__container">
                           <div className="Demo__some-network">
                              <InstapaperShareButton
                                 url={'www.instapaper.com'}
                                 quote={'twitter'}
                                 className="Demo__some-network__share-button"
                              >
                                 <InstapaperIcon size={50} round />
                              </InstapaperShareButton>
                           </div>
                        </div>

                        <div className="Demo__container">
                           <div className="Demo__some-network">
                              <FacebookShareButton
                                 url={'www.facebook.com'}
                                 quote={'facebook'}
                                 className="Demo__some-network__share-button"
                              >
                                 <FacebookIcon size={50} round />
                              </FacebookShareButton>
                           </div>
                        </div>

                        <div className="Demo__container">
                           <div className="Demo__some-network">
                              <TelegramShareButton
                                 url={'www.telegram.com'}
                                 quote={'telegram'}
                                 className="Demo__some-network__share-button"
                              >
                                 <TelegramIcon size={50} round />
                              </TelegramShareButton>
                           </div>
                        </div>

                        <div className="Demo__container">
                           <div className="Demo__some-network">
                              <EmailShareButton
                                 url={'www.gmail.com'}
                                 quote={'gmail'}
                                 className="Demo__some-network__share-button"
                              >
                                 <EmailIcon size={50} round />
                              </EmailShareButton>
                           </div>
                        </div>
                     </div>
                  </div>

               </ModalBody>
            </Modal>

            <Modal isOpen={this.state.modalStatusImage} toggle={this.toggle} style={{ top: "190px", }}>
               <ModalBody>
                  <div class="modal-content offer">
                     <div class="modal-body bumoffer">
                        <div class="mainoffer">
                           {/* <img src="images/burger1.png" class="bur-img" /> */}
                           {/* <img src={require("../assets/images/burger1.png")} class="bur-img" /> */}
                           <img src={this.state.favouriteImage} class="bur-img" />

                           {/* <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5> */}
                           {/* <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6> */}
                           <label style={{fontSize:16}}>Title :</label>
                  <label style={{fontSize:14}}>{this.state.couponTitle}</label>
                  <br/>
                  <label style={{fontSize:16}}>Coupon Code:</label>
                  <label style={{fontSize:14}}>{this.state.couponCode}</label> 
                  <br/>
                  <label style={{fontSize:16}}>Discount % :</label>
                  <label style={{fontSize:14}}>{this.state.couponDiscount}</label>
                  <br/>
                  <label style={{fontSize:16}}>Coupon Applied On:</label>
                  <label style={{fontSize:14}}> {this.state.couponAppliedOn}</label>
                  <br/>
                  <label style={{fontSize:16}}>Expiry Date:</label>
                  <label style={{fontSize:14}}>{this.state.couponExpiryDate}</label> 
                  <br/>
                  <label style={{fontSize:16}}>One Time Coupon :</label>
                  <label style={{fontSize:14}}>{this.state.oneTimeCoupon}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Name:</label>
                  <label style={{fontSize:14}}> {this.state.shopName}</label>
                  <br/>
                  {/* <label style={{fontSize:16}}>Shop Number:</label>
                  <label style={{fontSize:14}}>{this.state.shopNumber}</label> 
                  <br/> */}
                  <label style={{fontSize:16}}>Floor Number :</label>
                  <label style={{fontSize:14}}>{this.state.floorNumber}</label>
                  <br/>
                  <label style={{fontSize:16}}>Mart Name:</label>
                  <label style={{fontSize:14}}> {this.state.martName}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Phone Number:</label>
                  <label style={{fontSize:14}}>{this.state.shopPhoneNumber}</label> 
                  <br/>
                  <label style={{fontSize:16}}>Restrictionsr:</label>
                  <label style={{fontSize:14}}>{this.state.restrictions}</label> 

                           <div class="cover-share">
                              <a data-toggle="modal" data-target="#icon" data-dismiss="modal">
                                 {/* <img src="images/arrow back.png" class="ba" />  */}
                                 <img src={require("../assets/images/arrow back.png")} class="ba" onClick={() => this.setState({ modalStatusBackImage: !this.state.modalStatusBackImage })} />
                              </a>
                           </div>
                        </div>
                        <div class="modal-body ny">
                           {/* <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-svd-success" onClick={() => this.deleteCoupans()}  >Delete</button> */}
                           <button type="button" class="btn setloc-ap cl" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-wish-success" onClick={() => this.hideCoupans(this.state.getCouponId)} >Don't Show Again</button>
                           <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-rmv-success" onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage })}>Call Shop</button>
                           <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage })}>Navigate to Shop</button>
                        </div>
                     </div>
                  </div>


               </ModalBody>
            </Modal>


         </div>
      )
   }
}

// const mapStateToProps = state => {
//   if(state.AuthReducer.isLoggedIn === true){
     
//   }
//    console.log("hhhh====>>", state.AuthReducer.userData)
   
//    return{
//       applicationData: state.AuthReducer.userData
//    }
// }

// const mapDispatchToProps = dispatch => {
//    return {
//       action: bindActionCreators({ myCouponData }, dispatch)
//    }
// }


// export default CouponImageSetting
// export default connect(mapStateToProps,{loginAction,myCouponData})(CouponImageSetting);

const mapStateToProps = state => {
   console.log("state===", state)
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

export default connect(mapStateToProps, mapDispatchToProps)(CouponImageSetting);
