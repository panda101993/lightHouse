
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Switch, Route, Link } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Header2 from '../../../components/Header2';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { validateMobileNo, validateName } from '../../../utils/validation/Validation';
import Apirequest from '../../../api/Apirequest';
export class ManageOnetime extends Component {
   constructor(props) {
      super(props)
      // this.toggle= this.toggle.bind(this);
      this.state = {
         CouponCode: '',
         CouponCodeErrorMessage: '',
         CouponCodeStatus: '',

         mobileNumber: '',
         mobileNumberStatus: '',
         mobileNumberErrormessage: '',
         error: '',
         fielderr: '',
         token:'',
         // details: false
         modalStatus: false,
         modalStatusRedeem:false,
         modalStatusCouponUse:false,
      }
   }


   inputHandle = (e, type) => {
      switch (type) {
         case "CouponCode": {
            this.setState({ CouponCode: e.target.value },)
         }

            break;
         case "mobileNumber": {
            this.setState({ mobileNumber: e.target.value }, () => this.handleValidation("mobileNumber"))
         }

         default:
            break;
      }
   }
   handleValidation = (key) => {
      console.log('key-value', key);
      switch (key) {
         // case ("CouponCode"):
         //    var data = this.state.CouponCode
         //    console.log("this is data of CouponCode", data)
         //    this.setState({ CouponCodeErrorMessage: data.error, CouponCodeStatus: data.status }, () => console.log("error", this.state))
         //    break;
         case ("mobileNumber"):
            var data = validateMobileNo(this.state.mobileNumber)
            console.log("this is data of CustomerPhoneNumber", data)
            this.setState({ mobileNumberErrormessage: data.error, mobileNumberStatus: data.status }, () => console.log("error", this.state))
            break;
         default:
            break;
      }
   }
   // redeemHandle = () =>{
   //    console.log("abcd==>")
   //    requestData = {
   //       "couponCode": this.state.CouponCode,
   //          "mobileNumber": this.state.mobileNumber,
   //    }
   //    console.log("Data", requestData)
   //    Apirequest(requestData,"/retailer"/"singleUseCoupon","POST" )
   //    console.log("wxyz==>", resp)
   //    .then(resp) => {

   //    }
   // }

   redeemHandle = () =>{
      console.log("data==>",this.props.applicatonkey)
      var requestData = {
        
         "couponCode": this.state.CouponCode,
         "mobileNumber": this.state.mobileNumber,
      }
      console.log("Data",requestData)
      Apirequest(requestData,"/retailer/singleUseCoupon", "POST",this.props.applicatonkey.token)
      .then((resp) => {
         console.log("wxyz=====>" ,resp)
         switch (resp.status) {
            case 200: {
               if (resp.data.responseCode == 200) {
                  // alert("Redeem coupon successfully")
                  this.setState({ modalStatus:!this.state.modalStatus, modalStatusRedeem: !this .state.modalStatusRedeem })
               }
               else if (resp.data.responseCode == 402) {
                  alert("the coupon code is already exit in enter number")
                  this.setState({ modalStatusCouponUse: !this.state.modalStatusCouponUse }) 
               }
            }
               break;
           default:{

           }
          
            //   break;
         }
         
      }
      
      )
      .catch(e => { console.log(e) })
   }
   verifyHandler = () => {
      // console.log("data==>",this.props.applicatonkey)
      // console.log("abcd==>")
      if (this.state.CouponCode == "" || this.state.mobileNumber == "") {
         // this.setState({ fielderr: "Please enter all fields" })
         alert("please enter all the fields")
      }
      else {
         // this.setState({ fielderr: "" })
         var requestData = {
            "couponCode": this.state.CouponCode,
            "mobileNumber": this.state.mobileNumber,

         }
         console.log("data", requestData)
         Apirequest(requestData, "/retailer/verifySingleUseCoupon", "POST")
            .then((resp) => {
               console.log("wxyz==>", resp);
               switch (resp.status) {
                  case 200: {
                     if (resp.data.responseCode == 200) {
                        // alert("verify coupon successfully")
                        this.setState({ modalStatus: !this.state.modalStatus })
                        // this.setState({ modalStatusRedeem: !this.state.modalStatusRedeem })  
                     }
                     else if (resp.data.responseCode == 402) {
                        alert("the coupon code is already exit in enter number")
                        this.setState({ modalStatusCouponUse: !this.state.modalStatusCouponUse }) 

                     }
                     
                     
                  }
                     break;

                  default:
                     break;
               }

            })

            .catch(e => { console.log(e) })

      }


   }
   render() {
      return (
         <div>
            <body>
               <Header2 />
               <section>
                  <section>
                     <div class="container-fluid">
                        <div class="coupn-setting my-5">

                           <ul>
                              <li>
                                 {/* <a href="101-coupon-template.html">Create Coupon</a>  */}
                                 <Link to="/Coupon_template" >Create Coupon</Link>
                              </li>

                              <li ><Link to="/MyCoupanHistory" >Manage Coupons</Link></li>

                              <li><Link to='/ManageOnetime' class="active"   >Single Use Coupon</Link></li>
                              <li><Link to="/Setting_retailer">Settings</Link></li>
                           </ul>
                        </div>
                     </div>
                  </section>
                  <div class="container border-box">
                     <div class="name_c3">
                        <form>

                           <div class="form-group chang-sec">
                              <label for="exampleInputPassword1" class="old-pass">Coupon Code :</label>
                              <input type="password" class="form-control" placeholder="Coupon Code" onChange={(e) => this.inputHandle(e, "CouponCode")} />
                              {this.state.CouponCodeErrorMessage}
                           </div>
                           <span class="name">
                              <label for="exampleInputPassword1" class="old-pass">Customer Phone Number :</label>
                              <div class="selil">
                                 <div class="row">
                                    <div class="col-md-2">
                                       <ul class="select_s3">
                                          <li>
                                             <select class="form-control _exmple">
                                                <option>+91</option>
                                                <option>2</option>
                                             </select>
                                          </li>
                                       </ul>
                                    </div>
                                    <div class="col-md-10">
                                       <ul class="select_s34">
                                          <li><input type="text" class="form-control" placeholder="9650225013" onChange={(e) => this.inputHandle(e, "mobileNumber")} />

                                          </li>

                                       </ul>
                                       {this.state.mobileNumberErrormessage}
                                    </div>
                                 </div>
                              </div>
                           </span>
                           <ul class="button_cs sve-can">
                              <li class="cancel_c300"><button type="button" class="save" data-toggle="modal" data-target="#no-redeem">Cancel</button></li>
                              <li><button type="button" class="save0" data-toggle="modal" data-target="#this-coupon" onClick={() => this.verifyHandler()}>Verify</button>
                              </li>
                           </ul>
                        </form>
                     </div>
                     <Modal isOpen={this.state.modalStatusCouponUse} toggle={this.toggle} style={{ top: "190px", }}>
                           <ModalBody>
                         {/* <div class="modal fade" id="this-coupon" tabindex="-1" role="dialog" aria-hidden="true"> */}
                           
                           <form>
                             {/* <div class="modal-dialog modal-dialog-centered" role="document">
                                 <div class="modal-content"> */}
                                    <div class="modal-header locationsethead adminis">
                                       <h5>This Coupon Code "!23456"  for Retailer ID "!23ert"
                                       was used by the Phone Number "
                                       +91-12345678" on 12/09/2019 .
                  </h5>
                                    </div>
                                    <div class="modal-body ok">
                                       <button class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#changed">OK</button>
                                    </div>
                                 {/* </div>
                              </div>
                           </div> */}
                           </form>
                        </ModalBody>
                     </Modal>
                     <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                        <ModalBody>
                           |<form>
                           {/* <div class="modal fade" id="no-redeem" tabindex="-1" role="dialog" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered" role="document">
                                 <div class="modal-content coup-code"> */}
                                    <div class="modal-header locationsethead adminis">
                                       <h5>This Coupon Code "!23456"
                                       has not yet been redeemed by this phone number "
                                       +91-12345678".
                  </h5>
                                    </div>
                                    <div class="coupon-url">   
                                       <h6>Do you want to redeem it now ?</h6>
                                    </div>
                                    <div class="modal-body ok n-yes">
                                       <button class="btn setloc-btn" type="submit" data-dismiss="modal"onClick={() => this.setState({ modalStatus:false })}>No</button>
                                       <button type="button" class="btn setloc-btn"  data-dismiss="modal" data-toggle="modal" data-target="#succ-redeemed" onClick = {()=>this.redeemHandle()}>Yes</button>
                                    </div>
                                 {/* </div>
                              </div>
                           </div> */}
                           </form>
                        </ModalBody>
                     </Modal>
                     <Modal isOpen={this.state.modalStatusRedeem} toggle={this.toggle} style={{ top: "190px", }}>
                        <ModalBody>
                           <form>
                           {/* <div class="modal fade" id="succ-redeemed" tabindex="-1" role="dialog" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered" role="document">
                                 <div class="modal-content"> */}
                                    <div class="modal-header locationsethead adminis">
                                       <h5>Successfully Redeemed!</h5>
                                    </div>
                                    <div class="modal-body ok">
                                       <button class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#changed"  >OK</button>
                                    </div>
                                 {/* </div>
                              </div>
                           </div> */}
                           </form>
                        </ModalBody>
                     </Modal>
                  </div>
               </section>
               <Footer />
            </body>
         </div>
      )
   }
}

// export default ManageOnetime
const mapStateToProps = state => {
   console.log("change state", state)
   return {
      applicatonkey: state.AuthReducer.userData
      
   }
}
export default connect(mapStateToProps)(ManageOnetime);
