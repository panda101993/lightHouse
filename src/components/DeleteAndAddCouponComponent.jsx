import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import apiRequest from '../api/Apirequest';
// import {loginAction} from "../redux/action/AuthAction";
import { connect } from "react-redux";
// import ToasterFunction from '../components/ToasterFunc';
import { myCouponData } from '../redux/action/CouponCodeAction';
import { bindActionCreators } from 'redux';
// import {loginAction} from "../redux/action/AuthAction";




export const  deleteCoupans = () => {
        try {
            console.log('hhhh==>',this.props.applicationData)
           apiRequest({ couponId: "" }, '/user/deleteCoupon', 'POST', this.props.applicationData.token)
              .then((resp) => {
                 console.log('respresp', resp);
                 
              })
        } catch (error) {
           console.log('errorresponse', error);
           
  
        }
     }

export const  hideCoupans = () => {
    try {
       apiRequest({ couponId: "" }, '/user/hideCoupon', 'POST', this.props.applicationData.token)
          .then((resp) => {
             console.log('response', resp);
          })
    } catch (error) {
       console.log('errorresponse', error)

    }
 }

 export const  addToFavourite = () => {
    try {
       apiRequest({ couponId: "" }, 'user/saveMyCoupon', 'POST', this.props.applicationData.token)
          .then((resp) => {
             console.log('response', resp);
          })
    } catch (error) {
       console.log('errorresponse', error)

    }
 }

//    return (
//       <>
//          <body>

//             <div class="slider-item">
//                <div class="main-coverslider">
//                   <Link to={LinkId} >
//                      <img
//                         style={{ width: "100%", height: "100%" }}
//                         src={ImageA}
//                         data-toggle="modal" data-target="#wishlist" /> </Link>
//                   <Link to={`/WebsiteRetailer/${MartId}/${ImageName}`}>
//                      <div class="tcl00">
//                         <p> {ImageName} </p>
//                      </div> </Link>
//                   <div class="heart">
//                      <a data-toggle="modal" data-target="#coup-rmv-success" >

//                         <img
//                            src={heartImage}
//                            onClick={() => setModal(!modalStatus)} /></a>

//                   </div>
//                </div>
//             </div>
//             <Modal isOpen={modalStatus}
//                style={{ top: "190px", }}
//             >
//                <ModalBody>
//                   <div class="modal-content">
//                      <div class="modal-header locationsethead">
//                         <h5>Item removed from the wishlist !</h5>
//                      </div>
//                      <div class="modal-body ok">
//                         <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => setModal(!modalStatus)} > OK </button>
//                      </div>
//                   </div>
//                </ModalBody>
//             </Modal>
//          </body>
//       </>



//    )
// }
const mapStateToProps = state => {
    console.log("stateCD===", state)
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(DeleteAndAddCouponComponenet);
 

