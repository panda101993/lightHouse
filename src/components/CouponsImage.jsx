import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

   export default function CouponsImage(props) {
   const [modalStatus, setModal] = useState(false)   
   const [modalStatusImage, setModal1] = useState(false)
   const {Title,CouponCode,Discount,ItemName,ExpiryDate,ImageSrc} = props
   console.log("props==", props)
      return (
         <div>
            <div style={{width:"120%"}} class="cover-slidersection00" data-toggle="modal" data-target="#great-deal">
               <figure class="coupon-sec">
                  <img src={ImageSrc} onClick={() => setModal1( !modalStatusImage)}/>
                  {/* <img src={require("../assets/images/pizza great deal.png")} onClick={() => setModal(!modalStatusImage)} /> */}
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
                  <label style={{fontSize:14}}>{ItemName}</label>
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
                     <img src={require("../assets/images/burger1.png")} class="bur-img" />
                     <img src={require("../assets/images/arrow back.png")} />
                  </div>
                  <div class="modal-body ny">
                     {/* <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#delcoup" onClick={() => setModal1(modalStatusImage)} >Delete</button> */}
                     <button type="button" class="btn setloc-ap cl" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#nosee" onClick={() => setModal1(false)} >Add to Favourite</button>
                     <button type="button" class="btn setloc-ap" data-dismiss="modal" data-toggle="modal" data-target="#" onclick="window.location.href = '65-all-coupons -retailer.html';" onClick={() => setModal1(modalStatusImage)} >Call Shop</button>
                     <button type="button" class="btn setloc-ap" type="submit" data-dismiss="modal" onclick="window.location.href = '65-all-coupons -retailer.html';" onClick={() => setModal1(modalStatusImage)} >Navigate to Shop</button>
                  </div>
               </ModalBody>
            </Modal>
         </div>
      )
}

