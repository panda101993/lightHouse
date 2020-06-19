import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiRequest from '../api/Apirequest';
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



   export default function CouponsImage(props) {
   const [modalStatus, setModal] = useState(false);   
   const [modalStatusImage, setModal1] = useState(false);
   const [modalStatusBackImage,setModal2] = useState(false);
   // const [favouriteImage,setFavouriteImage] = useState('');
   // const [getCouponId,setGetCouponId] = useState('');
   // const [couponTitle, setCouponTitle] = useState('');
   // const [couponCode, setCouponCode] = useState('');
   // const [couponDiscount, setCouponDiscount] = useState('');
   // const [couponAppliedOn, setCouponAppliedOn] = useState('');
   // const [couponExpiryDate, setCouponExpiryDate] = useState('');
   // const [oneTimeCoupon, setOneTimeCoupon] = useState('');
   // const [shopName, setShopName] = useState('');
   // const [shopNumber, setShopNumber] = useState('');
   // const [floorNumber, setFloorNumber] = useState('');
   // const [martName, setMartName] = useState('')
   // const [shopPhoneNumber, setShopPhoneNumber] = useState('');
   // const [restrictions, setRestrictions] = useState('');

   const {Title,CouponCode,Discount,ItemName,ExpiryDate,ImageSrc,CouponId,
      CouponToken,CouponAppliedOn,OneTimeCoupon,ShopName,ShopNumber,
      FloorNumber,MartName,ShopPhoneNumber,Restrictions} = props

   console.log("props==", props)

   const  addToFavourite = (CouponId) => {
      try {
         apiRequest({ couponId:CouponId }, '/user/saveMyCoupon', 'POST', props.CouponToken)
            .then((resp) => {
               console.log('response', resp);
               switch (resp.status) {
                  case (200):
                      {
                      if (resp.data.responseCode == 200) {
                        ToasterFunction("success", "Coupon added Successfully");
                      }
                       else if (resp.data.responseCode == 404) {
                          ToasterFunction("info", "Coupon already saved");
      
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
         console.log('errorresponse', error)
         ToasterFunction("error", "Network error, please contact the administrator");
  
      }
      setModal1(false)
   }
   
      return (
         <div>
            <div style={{width:"120%"}} class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
               <figure class="coupon-sec">
                  <img src={ImageSrc} onClick={() =>  setModal1( !modalStatusImage)}/>
                  </figure> 

                  <label style={{fontSize:14}}>Title :</label>
                  <label style={{fontSize:14}}>{Title}</label>
                  <br/>
                  <label style={{fontSize:14}}>Coupon Code:</label>
                  <label style={{fontSize:14}}>{CouponCode}</label>
                  <br/>
                  <label style={{fontSize:14}}>Discount % :</label>
                  <label style={{fontSize:14}}>{Discount}</label>
                  <br/>
                  <label style={{fontSize:14}}>Item Name  :</label>
                  <label style={{fontSize:14}}> {ItemName}</label>
                  <br/>
                  <label style={{fontSize:14}}>Expiry Date:</label>
                  <label style={{fontSize:14}}>{ExpiryDate}</label> 
                  
            </div>

            <Modal isOpen={modalStatusBackImage} style={{ top: "190px", }}>
               <ModalHeader >
                  <button onClick={() => setModal2(false)} type="button" class="close" data-dismiss="modal" aria-label="Close">
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

            <Modal isOpen={modalStatus} style={{ top: "190px", }}>
               <ModalBody>
                  <div class="modal-content">
                     <div class="modal-header locationsethead">
                        <h5>Are you sure you want to remove this
                        from wishlist ?
                  </h5>
                     </div>
                     <div class="modal-body ny">
                        <button type="button" class="btn setloc-" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>No</button>
                        <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#rmvwish" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Yes</button>
                     </div>
                  </div>
               </ModalBody>
            </Modal>

            <Modal class="modalviewcoupon" isOpen={modalStatusImage}  style={{ top: "190px", }}>
               <ModalBody class="modalviewcoupon" >

                  <div class="mainoffer">
                     <img style={{width:"100%"}} src={ImageSrc} class="bur-img" />
                    
                     <label style={{fontSize:16}}>Title :</label>
                  <label style={{fontSize:14}}>{Title}</label>
                  <br/>
                  <label style={{fontSize:16}}>Coupon Code:</label>
                  <label style={{fontSize:14}}>{CouponCode}</label>
                  <br/>
                  <label style={{fontSize:16}}>Discount % :</label>
                  <label style={{fontSize:14}}>{Discount}</label>
                  <br/>
                  <label style={{fontSize:16}}>Coupon Applied On:</label>
                  <label style={{fontSize:14}}> {CouponAppliedOn}</label>
                  <br/>
                  <label style={{fontSize:16}}>Expiry Date:</label>
                  <label style={{fontSize:14}}>{ExpiryDate}</label> 
                  <br/>
                  <label style={{fontSize:16}}>One Time Coupon :</label>
                  <label style={{fontSize:14}}>{OneTimeCoupon}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Name:</label>
                  <label style={{fontSize:14}}> {ShopName}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Number:</label>
                  <label style={{fontSize:14}}>{ShopNumber}</label> 
                  <br/>
                  <label style={{fontSize:16}}>Floor Number :</label>
                  <label style={{fontSize:14}}>{FloorNumber}</label>
                  <br/>
                  <label style={{fontSize:16}}>Mart Name:</label>
                  <label style={{fontSize:14}}> {MartName}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Phone Number:</label>
                  <label style={{fontSize:14}}>{ShopPhoneNumber}</label> 
                  <br/>
                  <label style={{fontSize:16}}>Restrictionsr:</label>
                  <label style={{fontSize:14}}>{Restrictions}</label> 
                     <div class="cover-share">
                        <a data-toggle="modal" data-target="#icon" data-dismiss="modal">
                        <img src={require("../assets/images/arrow back.png")} class="ba" onClick={() => setModal2(true)} />
                      </a>
                     </div>
                  </div>
                  <div class="modal-body ny">
                     {/* <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#delcoup" onClick={() => setModal1(modalStatusImage)} >Delete</button> */}
                     <button type="button" class="btn setloc-ap cl" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#nosee" onClick={() => addToFavourite(CouponId)}  >Add to Favourite</button>
                     <button type="button" class="btn setloc-ap" data-dismiss="modal" data-toggle="modal" data-target="#" onclick="window.location.href = '65-all-coupons -retailer.html';" onClick={() => setModal1(false)} >Call Shop</button>
                     <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" onclick="window.location.href = '65-all-coupons -retailer.html';" onClick={() => setModal1(false)} >Navigate to Shop</button>
                  </div>
               </ModalBody>
            </Modal>
         </div>
      )
}

