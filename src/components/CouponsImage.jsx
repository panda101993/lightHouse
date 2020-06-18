import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';

   export default function CouponsImage(props) {
   const [modalStatus, setModal] = useState(false);   
   const [modalStatusImage, setModal1] = useState(false);
   const [favouriteImage,setFavouriteImage] = useState('');
   const [getCouponId,setGetCouponId] = useState('');
   const [couponTitle, setCouponTitle] = useState('');
   const [couponCode, setCouponCode] = useState('');
   const [couponDiscount, setCouponDiscount] = useState('');
   const [couponAppliedOn, setCouponAppliedOn] = useState('');
   const [couponExpiryDate, setCouponExpiryDate] = useState('');
   const [oneTimeCoupon, setOneTimeCoupon] = useState('');
   const [shopName, setShopName] = useState('');
   const [shopNumber, setShopNumber] = useState('');
   const [floorNumber, setFloorNumber] = useState('');
   const [martName, setMartName] = useState('')
   const [shopPhoneNumber, setShopPhoneNumber] = useState('');
   const [restrictions, setRestrictions] = useState('');

   const {Title,CouponCode,Discount,ItemName,ExpiryDate,ImageSrc,CouponId,
      CouponToken,CouponAppliedOn,OneTimeCoupon,ShopName,ShopNumber,
      FloorNumber,MartName,ShopPhoneNumber,Restrictions} = props

   console.log("props==", props)

   const  addToFavourite = (getCouponId) => {
      try {
         apiRequest({ couponId:getCouponId }, '/user/saveMyCoupon', 'POST', props.CouponToken)
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
   

   const openfavouriteModal = (imageUrl,coupoun,Title,
      CouponCode,Discount,CouponAppliedOn,ExpiryDate,OneTimeCoupon,ShopName,ShopNumber,
          FloorNumber,MartName,ShopPhoneNumber,Restrictions) =>{
      setFavouriteImage(imageUrl);
      setGetCouponId(coupoun);
      setCouponTitle(Title);
      setCouponCode(CouponCode);
      setCouponDiscount(Discount);
      setCouponAppliedOn(CouponAppliedOn);
      setCouponExpiryDate(ExpiryDate);
      setOneTimeCoupon(OneTimeCoupon);
      setShopName(ShopName);
      setShopNumber(ShopNumber);
      setFloorNumber(FloorNumber);
      setMartName(MartName);
      setShopPhoneNumber(ShopPhoneNumber);
      setRestrictions(Restrictions);
      setModal1( !modalStatusImage);
   }
      return (
         <div>
            <div style={{width:"120%"}} class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
               <figure class="coupon-sec">
                  <img src={ImageSrc} onClick={() =>  openfavouriteModal(ImageSrc,CouponId,Title,
                  CouponCode,Discount,CouponAppliedOn,ExpiryDate,OneTimeCoupon,ShopName,ShopNumber,
                      FloorNumber,MartName,ShopPhoneNumber,Restrictions) }/>
                  {/* <img src={require("../assets/images/pizza great deal.png")} onClick={() => setModal(!modalStatusImage)} /> */}
                  </figure> 

                  <label style={{fontSize:14}}>Title :</label>
                  <label style={{fontSize:14}}>{couponTitle}</label>
                  <br/>
                  <label style={{fontSize:14}}>Coupon Code:</label>
                  <label style={{fontSize:14}}>{couponCode}</label>
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
                     <img style={{width:"100%"}} src={favouriteImage} class="bur-img" />
                     {/* <img src={require("../assets/images/arrow back.png")} /> */}
                     <label style={{fontSize:16}}>Title :</label>
                  <label style={{fontSize:14}}>{Title}</label>
                  <br/>
                  <label style={{fontSize:16}}>Coupon Code:</label>
                  <label style={{fontSize:14}}>{CouponCode}</label>
                  <br/>
                  <label style={{fontSize:16}}>Discount % :</label>
                  <label style={{fontSize:14}}>{couponDiscount}</label>
                  <br/>
                  <label style={{fontSize:16}}>Coupon Applied On:</label>
                  <label style={{fontSize:14}}> {couponAppliedOn}</label>
                  <br/>
                  <label style={{fontSize:16}}>Expiry Date:</label>
                  <label style={{fontSize:14}}>{couponExpiryDate}</label> 
                  <br/>
                  <label style={{fontSize:16}}>One Time Coupon :</label>
                  <label style={{fontSize:14}}>{oneTimeCoupon}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Name:</label>
                  <label style={{fontSize:14}}> {shopName}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Number:</label>
                  <label style={{fontSize:14}}>{shopNumber}</label> 
                  <br/>
                  <label style={{fontSize:16}}>Floor Number :</label>
                  <label style={{fontSize:14}}>{floorNumber}</label>
                  <br/>
                  <label style={{fontSize:16}}>Mart Name:</label>
                  <label style={{fontSize:14}}> {martName}</label>
                  <br/>
                  <label style={{fontSize:16}}>Shop Phone Number:</label>
                  <label style={{fontSize:14}}>{shopPhoneNumber}</label> 
                  <br/>
                  <label style={{fontSize:16}}>Restrictionsr:</label>
                  <label style={{fontSize:14}}>{restrictions}</label> 
                  </div>
                  <div class="modal-body ny">
                     {/* <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#delcoup" onClick={() => setModal1(modalStatusImage)} >Delete</button> */}
                     <button type="button" class="btn setloc-ap cl" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#nosee" onClick={() => addToFavourite(getCouponId)}  >Add to Favourite</button>
                     <button type="button" class="btn setloc-ap" data-dismiss="modal" data-toggle="modal" data-target="#" onclick="window.location.href = '65-all-coupons -retailer.html';" onClick={() => setModal1(modalStatusImage)} >Call Shop</button>
                     <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" onclick="window.location.href = '65-all-coupons -retailer.html';" onClick={() => setModal1(modalStatusImage)} >Navigate to Shop</button>
                  </div>
               </ModalBody>
            </Modal>
         </div>
      )
}

