import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiRequest from '../api/Apirequest';
import {loginAction} from "../redux/action/AuthAction";
import { connect } from "react-redux";
import ToasterFunction from '../components/ToasterFunc';

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
         modalStatusBackImage: false

      }
   }
   
   getCoupounList = () => {
      try {
         
         console.log('hhhh==>',this.props.applicationData)
         apiRequest({ userId: this.props.applicationData.userId, search: this.state.search, pageNumber: this.state.pageNumber, limit: this.state.limit }, '/user/myCoupons', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('responseMycoupan', resp);
               switch (resp.status) {
                  case (200):
                      {
                      
                        if (resp.data.responseCode == 404) {
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

   deleteCoupans = () => {
      try {
         apiRequest({ couponId: "" }, '/user/deleteCoupon', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('respresp', resp);
               this.setState({ modalStatusImage: !this.state.modalStatusImage })
            })
      } catch (error) {
         console.log('errorresponse', error);
         this.setState({ modalStatusImage: !this.state.modalStatusImage })

      }
   }

   deleteCoupans1 = () => {
      try {
         apiRequest({ couponId: "" }, '/user/deleteCoupon', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('respresp', resp);
               this.setState({ modalStatus: !this.state.modalStatus })
            })
      } catch (error) {
         console.log('errorresponse', error);
         this.setState({ modalStatus: !this.state.modalStatus })

      }
   }
   hideCoupans = () => {
      try {
         apiRequest({ couponId: "" }, '/user/hideCoupon', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('response', resp);
               this.setState({ modalStatusImage: !this.state.modalStatusImage })
            })
      } catch (error) {
         console.log('errorresponse', error)
         this.setState({ modalStatusImage: !this.state.modalStatusImage })

      }
   }

   addToFavourite = () => {
      try {
         apiRequest({ couponId: "" }, 'user/saveMyCoupon', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('response', resp);
               this.setState({ modalStatusImage: !this.state.modalStatusImage })
            })
      } catch (error) {
         console.log('errorresponse', error)
         this.setState({ modalStatusImage: !this.state.modalStatusImage })

      }
   }

   render() {
      return (
         <div>
            {/* <div class="col-lg-4 col-md-4 col-sm-12"> */}
            <div class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
               <figure class="coupon-sec">
                  {/* <img src="images/pizza great deal.png" /> */}
                  <img src={require("../assets/images/pizza great deal.png")} onClick={() => this.setState({ modalStatusImage: !this.state.modalStatusImage })} />
               </figure>
            </div>
            <button type="button" class="dlt-btn" data-toggle="modal" data-target="#delcoup" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Delete</button>
            {/* </div>   */}

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
                        <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#rmvwish" onClick={() => this.deleteCoupans1()}>Yes</button>
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
                              {/* 
                                <div>
                                   <FacebookShareCount url={'www.facebook.com'} className="Demo__some-network__share-count">
                                      {count => count}
                                   </FacebookShareCount>
                                </div> */}

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
                           <img src={require("../assets/images/burger1.png")} class="bur-img" />
                           <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5>
                           <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6>

                           <div class="cover-share">
                              <a data-toggle="modal" data-target="#icon" data-dismiss="modal">
                                 {/* <img src="images/arrow back.png" class="ba" />  */}
                                 <img src={require("../assets/images/arrow back.png")} class="ba" onClick={() => this.setState({ modalStatusBackImage: !this.state.modalStatusBackImage })} />
                              </a>
                           </div>
                        </div>
                        <div class="modal-body ny">
                           {/* <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-svd-success" onClick={() => this.deleteCoupans()}  >Delete</button> */}
                           <button type="button" class="btn setloc-ap cl" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#coup-wish-success" onClick={() => this.addToFavourite()} >Add to Favourite</button>
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

const mapStateToProps = state => {
  if(state.AuthReducer.isLoggedIn === true){
     
  }
   console.log("hhhh====>>", state)
   
   return{
      applicationData: state.AuthReducer.userData
   }
}


// export default CouponImageSetting
export default connect(mapStateToProps,{loginAction})(CouponImageSetting);
