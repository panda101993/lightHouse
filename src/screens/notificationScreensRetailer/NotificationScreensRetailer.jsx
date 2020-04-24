// import React, { Component } from 'react'
// import Header2 from '../../components/Header2';
// import Footer from '../../components/Footer';
// import { GlobalValidations } from '../../components/GlobalValidations';
// import { GlobalAlertCoupanTitleBox } from '../../components/GlobalAlertCoupanTitleBox';
// import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// export default class NotificationScreensRetailer extends Component {
//    constructor(props) {
//       super(props)

//       this.state = {
//          modalStatus: false,
//       }
//    }

//    render() {
//       return (
//          <div>

//             <body>
//                <Header2 />

//                <section>
//                   <div class="container-fluid">
//                      <div class="coupn-setting my-5">
//                         <ul>
//                            <li><a href="101-coupon-template.html">Create Coupon</a></li>
//                            <li ><a href="my-coupons-history.html">Manage Coupons</a></li>
//                            <li><a href="109-Manage-one-time%20coupon.html">Single Use Coupon</a></li>
//                            <li><a href="77-settings-retailer.html">Settings</a></li>
//                         </ul>
//                      </div>
//                   </div>
//                </section>
//                <section>
//                   <div class="container-fluid border-with-radius">
//                      <div class="container-fluid inner-size">
//                         <h3 class="info_c3 chnge-pass notifi">Notifications</h3>
//                         <ul class="button_cs sve-can button-shift">
//                            <li><button type="button" class="save0" data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
//                         </ul>
//                         < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Current Credit Balance is too low. Please recharge . "
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                   <div>
//                      <h3>Alert !</h3>
//                      <span>Current Credit Balance is too low. Please recharge . </span>
//                   </div>
//                   <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                      <i class="fa fa-trash" aria-hidden="true"  onClick={() => this.setState({ modalStatus: !this.state.modalStatus})}></i>
//                   </div>
//                </div> */}
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Your coupons will not display on  this platform because your credit balance has fallan below zero.</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                         < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Your coupons will not display on  this platform because your credit balance has fallan below zero."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Your account will deactivate after 180 days of  zero balance .</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                          < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Your account will deactivate after 180 days of  zero balance ."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Current Credit Balance is too low. Please recharge .</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                         < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Current Credit Balance is too low. Please recharge ."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Your coupons will not display on  this platform because your credit balance has fallan below zero.</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                          < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Your coupons will not display on  this platform because your credit balance has fallan below zero."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Your account will deactivate after 180 days of  zero balance .</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                          < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Your account will deactivate after 180 days of  zero balance ."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Current Credit Balance is too low. Please recharge .</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                         < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Current Credit Balance is too low. Please recharge ."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Your coupons will not display on  this platform because your credit balance has fallan below zero.</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                         < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Your coupons will not display on  this platform because your credit balance has fallan below zero."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
//                         {/* <div class="category_c3 data-bin">
//                            <div>
//                               <h3>Alert !</h3>
//                               <span>Your account will deactivate after 180 days of  zero balance .</span>
//                            </div>
//                            <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
//                               <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
//                            </div>
//                         </div> */}
//                          < GlobalAlertCoupanTitleBox
//                            headerName="Alert !"
//                            bodyText="Your account will deactivate after 180 days of  zero balance ."
//                            expiryDate=""
//                            onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
//                         />
                       
//                   </div>
//                   </div>
//                </section>

//                <Footer />

//                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                   <div class="modal-dialog modal-dialog-centered" role="document">
//                      <div class="modal-content">
//                         <div class="modal-body verfy_cs3">
//                            <h1>OTP verification</h1>
//                            <p class="text_c3">Please enter the 4 digits OTP sent on your registered phone number </p>
//                            <h2>Enter 4-digits code</h2>
//                            <ul class="enter_code"  >
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                            </ul>
//                            <span class="re_cs3"><a href="#" data-toggle="modal" data-target="#otpmodal" data-dismiss="modal">Resend</a></span>
//                         </div>
//                         <div class="modal-footer botton_modal">
//                            <button type="button" class="save">SUBMIT</button>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog" aria-hidden="true">
//                   <div class="modal-dialog modal-dialog-centered" role="document">
//                      <div class="modal-content">
//                         <div class="modal-header locationsethead">
//                            <h5>OTP resent successfully.</h5>
//                         </div>
//                         <div class="modal-body">
//                            <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div class="modal fade" id="delnotification" tabindex="-1" role="dialog" aria-hidden="true">
//                   <div class="modal-dialog modal-dialog-centered" role="document">
//                      <div class="modal-content eqlalin">
//                         <div class="modal-header locationsethead">
//                            <h5>Are you sure you want to delete this Notification ?
//                   </h5>
//                         </div>
//                         <div class="modal-body ny">
//                            <button type="button" class="btn setloc-" type="submit" data-dismiss="modal">No</button>
//                            <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#changed12">Yes</button>
//                         </div>
//                      </div>
//                   </div>
//                </div>




//                {/* <div class="modal fade" id="changed12" tabindex="-1" role="dialog"  aria-hidden="true">
//          <div class="modal-dialog modal-dialog-centered" role="document">
//             <div class="modal-content">
//                <div class="modal-header locationsethead">
//                   <h5>Notification has been deleted successfully!</h5>
//                </div>
//                <div class="modal-body ok">
//                   <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
//                </div>
//             </div>
//          </div>
//       </div> */}
//                <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>

//                   <ModalBody>
//                      {/* <div class="modal fade" id="delnotification" tabindex="-1" role="dialog" aria-hidden="true">
//                <div class="modal-dialog modal-dialog-centered" role="document">
//                   <div class="modal-content eqlalin">
//                   {/* <form> */}
//                      <div class="modal-header locationsethead">
//                         <h5>Are you sure you want to delete this Notification ?</h5>
//                      </div>
//                      <div class="modal-body ny">
//                         <button type="button" class="btn setloc-" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: false })}>No</button>
//                         <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#changed12" onClick={() => this.setState({ modalStatus: false })}>Yes</button>
//                      </div>
//                      {/* </form> */}
//                      {/* </div>
//                </div>
//             </div> */}

//                   </ModalBody>
//                </Modal>

//                <script src="js/jquery.min.js"></script>
//                <script src="js/bootstrap.bundle.min.js"></script>
//                <script src="js/slick.min.js"></script>
//                <script src="js/custom.js"></script>
//                <script src="js/app.js"></script>

//             </body>

//          </div>
//       )
//    }
// } 

import React, { Component } from 'react'
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';
import { GlobalValidations } from '../../components/GlobalValidations';
import { GlobalAlertCoupanTitleBox } from '../../components/GlobalAlertCoupanTitleBox';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class NotificationScreensRetailer extends Component {
   constructor(props) {
      super(props)

      this.state = {
         modalStatus: false,
         modalStatusResend: false
      }
   }

   render() {
      return (
         <div>

            <body>
               <Header2 />

               <section>
                  <div class="container-fluid">
                     <div class="coupn-setting my-5">
                        <ul>
                           <li><a href="101-coupon-template.html">Create Coupon</a></li>
                           <li ><a href="my-coupons-history.html">Manage Coupons</a></li>
                           <li><a href="109-Manage-one-time%20coupon.html">Single Use Coupon</a></li>
                           <li><a href="77-settings-retailer.html">Settings</a></li>
                        </ul>
                     </div>
                  </div>
               </section>
               <section>
                  <div class="container-fluid border-with-radius">
                     <div class="container-fluid inner-size">
                        <h3 class="info_c3 chnge-pass notifi">Notifications</h3>
                        <ul class="button_cs sve-can button-shift">
                           <li><button type="button" class="save0" data-toggle="modal" data-target="#this-coupon">Clear All</button></li>
                        </ul>
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Current Credit Balance is too low. Please recharge . "
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                  <div>
                     <h3>Alert !</h3>
                     <span>Current Credit Balance is too low. Please recharge . </span>
                  </div>
                  <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                     <i class="fa fa-trash" aria-hidden="true"  onClick={() => this.setState({ modalStatus: !this.state.modalStatus})}></i>
                  </div>
               </div> */}
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Your coupons will not display on  this platform because your credit balance has fallan below zero.</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Your coupons will not display on  this platform because your credit balance has fallan below zero."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Your account will deactivate after 180 days of  zero balance .</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Your account will deactivate after 180 days of  zero balance ."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Current Credit Balance is too low. Please recharge .</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Current Credit Balance is too low. Please recharge ."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Your coupons will not display on  this platform because your credit balance has fallan below zero.</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Your coupons will not display on  this platform because your credit balance has fallan below zero."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Your account will deactivate after 180 days of  zero balance .</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Your account will deactivate after 180 days of  zero balance ."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Current Credit Balance is too low. Please recharge .</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Current Credit Balance is too low. Please recharge ."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Your coupons will not display on  this platform because your credit balance has fallan below zero.</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Your coupons will not display on  this platform because your credit balance has fallan below zero."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />
                        {/* <div class="category_c3 data-bin">
                           <div>
                              <h3>Alert !</h3>
                              <span>Your account will deactivate after 180 days of  zero balance .</span>
                           </div>
                           <div class="tras-dust" data-target="#delnotification" data-toggle="modal">
                              <i class="fa fa-trash" aria-hidden="true" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}></i>
                           </div>
                        </div> */}
                        < GlobalAlertCoupanTitleBox
                           headerName="Alert !"
                           bodyText="Your account will deactivate after 180 days of  zero balance ."
                           expiryDate=""
                           onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}
                        />

                     </div>
                  </div>
               </section>

               <Footer />

               <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                     <div class="modal-content">
                        <div class="modal-body verfy_cs3">
                           <h1>OTP verification</h1>
                           <p class="text_c3">Please enter the 4 digits OTP sent on your registered phone number </p>
                           <h2>Enter 4-digits code</h2>
                           <ul class="enter_code"  >
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                           </ul>
                           <span class="re_cs3"><a href="#" data-toggle="modal" data-target="#otpmodal" data-dismiss="modal">Resend</a></span>
                        </div>
                        <div class="modal-footer botton_modal">
                           <button type="button" class="save">SUBMIT</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                     <div class="modal-content">
                        <div class="modal-header locationsethead">
                           <h5>OTP resent successfully.</h5>
                        </div>
                        <div class="modal-body">
                           <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="modal fade" id="delnotification" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                     <div class="modal-content eqlalin">
                        <div class="modal-header locationsethead">
                           <h5>Are you sure you want to delete this Notification ?
                  </h5>
                        </div>
                        <div class="modal-body ny">
                           <button type="button" class="btn setloc-" type="submit" data-dismiss="modal">No</button>
                           <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#changed12">Yes</button>
                        </div>
                     </div>
                  </div>
               </div>




               {/* <div class="modal fade" id="changed12" tabindex="-1" role="dialog"  aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Notification has been deleted successfully!</h5>
               </div>
               <div class="modal-body ok">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
               </div>
            </div>
         </div>
      </div> */}
               <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>

                  <ModalBody>
                     {/* <div class="modal fade" id="delnotification" tabindex="-1" role="dialog" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content eqlalin">
                  {/* <form> */}
                     <div class="modal-header locationsethead">
                        <h5>Are you sure you want to delete this Notification ?</h5>
                     </div>
                     <div class="modal-body ny">
                        <button type="button" class="btn setloc-" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: false })}>No</button>
                        <button type="button" class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#changed12" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })}>Yes</button>
                     </div>
                     {/* </form> */}
                     {/* </div>
               </div>
            </div> */}

                  </ModalBody>
               </Modal>



               <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "190px", }}>
                  <ModalBody>
                     <form>
                        <div class="modal-header locationsethead">
                           <h5>Notification has been deleted successfully!</h5>
                        </div>
                        <div style={{ textAlign: "center" }} >
                           <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend })} >OK</button>
                        </div>
                     </form>
                  </ModalBody>
               </Modal>

               <script src="js/jquery.min.js"></script>
               <script src="js/bootstrap.bundle.min.js"></script>
               <script src="js/slick.min.js"></script>
               <script src="js/custom.js"></script>
               <script src="js/app.js"></script>

            </body>

         </div>
      )
   }
}



