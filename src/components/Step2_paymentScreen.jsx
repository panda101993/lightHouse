

import React, { Component } from 'react';
import { Modal, ModalBody } from "reactstrap";

export default class Step2_paymentScreen extends Component {

   state = {

      modalStatus: false,
      modalStatus1: false

   }

   handlestate = () =>{
      this.setState({
         modalStatus: !this.state.modalStatus,
         modalStatus1: !this.state.modalStatus1
      })
   }

   render() {
      return (
         <div>
            <div class="tab-pane fade show active" id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
               <h3 class="info_c3">Register Your Business</h3>
               <div class="name_c3">
                  <div class="totgst">
                     <ul class="gst">
                        <li class="ta">Sign up free :</li>
                        <li class="ta">GST Amount :</li>
                        <li class="ta bl">Total Amount :</li>
                     </ul>
                     <ul class="gst">
                        <li class="rs">Rs 300.00 </li>
                        <li class="rs">18% of sign up free</li>
                        <li class="rs bl">RS 800.00 </li>
                     </ul>
                  </div>
                  <div class="pas">
                     <ul class="button_cs">
                        <li><button class="save paddi" data-toggle="modal" data-target="#icon" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Pay and Submit</button></li>
                     </ul>
                     <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "200px", }}>
                        <ModalBody>
                           <div>
                              <div class="modal-content">
                                 <div class="modal-header locationsethead">
                                    <img src={require("../assets/images/blue cross.png")} data-dismiss="modal" />
                                 </div>
                                 <div class="modal-body">
                                    <ul class="imgeicons even">
                                       <li><img src={require("../assets/images/paypal.png")} data-toggle="modal" data-target="#paysuccess" data-dismiss="modal" onClick={()=>this.handlestate()} /></li>
                                       <li> <img src={require("../assets/images/stripe.png")} data-toggle="modal" data-target="#paysuccess" data-dismiss="modal" 
                                       onClick={()=>this.handlestate()}
                                       /></li>
                                    </ul>
                                 </div>
                              </div>
                              {/* <div style={{ textAlign: "center" }}>
                                             <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                                          </div> */}

                           </div>
                        </ModalBody>
                     </Modal>

                     <Modal isOpen={this.state.modalStatus1} toggle={this.toggle} style={{ top: "200px", }}>
                        <ModalBody>
                           <div>
                             
                                
                                    <div class="modal-content">
                                       <div class="modal-header locationsethead">
                                          <h5>Congratulation your payment has been done successfully.</h5>
                                       </div>
                                       <div class="modal-body ok">
                                          <button type="button" class="btn setloc-btn" data-dismiss="modal" onclick="window.location.href = '81-step-2 retailer1.html';">OK</button>
                                       </div>
                                    
                                
                              </div>


                           </div>
                        </ModalBody>
                     </Modal>
                  </div>
               </div>
            </div>

            {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-body verfy_cs3">
                  <h1>OTP verification</h1>
                  <p class="text_c3">Please enter the 4 digits OTP sent on your registered phone number </p>
                  <h2>Enter 4-digits code</h2>
                  <ul class="enter_code"  >
                     <li><input type="text" class="form-control txt_c3"></li>
                     <li><input type="text" class="form-control txt_c3"></li>
                     <li><input type="text" class="form-control txt_c3"></li>
                     <li><input type="text" class="form-control txt_c3"></li>
                  </ul>
                  <span class="re_cs3"><a href="#"  data-toggle="modal" data-target="#otpmodal" data-dismiss="modal">Resend</a></span>
               </div>
               <div class="modal-footer botton_modal">
                  <button type="button" class="save">SUBMIT</button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog"  aria-hidden="true">
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
      <div class="modal fade" id="icon" tabindex="-1" role="dialog"  aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <img src="images/blue cross.png" data-dismiss="modal">
               </div>
               <div class="modal-body">
                  <ul class="imgeicons even">
                     <li><img src="images/paypal.png" data-toggle="modal" data-target="#paysuccess" data-dismiss="modal"></li>
                     <li> <img src="images/stripe.png" data-toggle="modal" data-target="#paysuccess" data-dismiss="modal"></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="paysuccess" tabindex="-1" role="dialog"  aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Congratulation your payment has been done successfully.</h5>
               </div>
               <div class="modal-body ok">
               <button type="button" class="btn setloc-btn" data-dismiss="modal" onclick="window.location.href = '81-step-2 retailer1.html';">OK</button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="logout" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content coup-code">
              <div class="modal-header locationsethead adminis">
                 <h5>Are you sure you want to Logout?</h5>
              </div>
              <div class="modal-body ok n-yes">
                <button class="btn setloc-btn" type="submit" data-dismiss="modal">No</button>
                 <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit">Yes</button></a>
              </div>
           </div>
        </div>
     </div>
      
      <div class="modal fade" id="locationsetmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Please Set Your Location!</h5>
               </div>
               <div class="modal-body">
                  <button class="btn setloc-btn" type="submit">OK</button>
               </div>
            </div>
         </div>
      </div> */}

         </div>
      )
   }
}
