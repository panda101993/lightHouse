// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// export class ManageInfoEndUser extends Component {
//    constructor(props) {
//       super(props)

//       this.state = {
//          modalStatusSubmit:false,
//          modalStatus: false,
//          modalStatusResend:false
//       }
//    }

//    render() {
//       return (
//          <div>

//             <h3 class="info_c3">Manage General Info</h3>
//             <div class="name_c3">
//                <span class="name">
//                   <label>Name</label>
//                   <p><input type="text" class="form-control" placeholder="Sushree" /></p>
//                </span>
//                <span class="name">
//                   <label>Mobile Number</label>
//                   <ul class="select_s3">
//                      <li>
//                         <select class="form-control _exmple">
//                            <option>+91</option>
//                            <option>2</option>
//                         </select>
//                      </li>
//                      <li><input type="text" class="form-control _number" placeholder="9650225013" /></li>
//                   </ul>
//                </span>
//                <span class="name">
//                   <label>Email 
//                      {/* <img src="images/about-icon.png" /> */}
//                     <img src={require("../assets/images/about-icon.png")} />

//                      <a href="#">(Verify)</a> 
                   


//                   </label>


//                   <ul class="verify_c3">
//                      <li><input type="text" class="form-control bhaswati_c3" placeholder="bhaswati@gmail.com" /></li>
//                      <li class="verify_button"> 
                     
//                      {/* <a href="45-setting-enduser-popup.html#">Verify</a>  */}
//                      <Link onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}> Verify <i class="fa fa-angle-down" aria-hidden="true"></i></Link>
                     
//                      </li>
//                   </ul>
//                </span>
//                <span class="name">
//                   <label>Referral Code</label>
//                   <p><input type="text" class="form-control" placeholder="#$%^&*1234ert$$$$" /></p>
//                </span>
//                <div class="age-range">
//                   <span class="name">
//                      <label>Age Range</label>
//                      <select class="form-control _range_s3">
//                         <option>20-29</option>
//                         <option>30-39</option>
//                         <option>40-49</option>
//                      </select>
//                   </span>
//                   <span class="name">
//                      <label>Gender</label>
//                      <select class="form-control _range_s3">
//                         <option>Male</option>
//                         <option>Female</option>
//                      </select>
//                   </span>
//                </div>
//                <label>Please Enter Date and Month of  your Birth</label>
//                <div class="your_birth">
//                   <div class="please_enter">
//                      <ul>
//                         <li class="date">Date</li>
//                         <li>
//                            <select class="form-control month_c3">
//                               <option>12</option>
//                               <option>13</option>
//                               <option>14</option>
//                               <option>15</option>
//                            </select>
//                         </li>
//                      </ul>
//                   </div>
//                   <div class="please_enter">
//                      <ul>
//                         <li class="date">Month</li>
//                         <li>
//                            <select class="form-control month_c3">
//                               <option>Jan</option>
//                               <option>Feb</option>
//                               <option>Mar</option>
//                               <option>Apr</option>
//                            </select>
//                         </li>
//                      </ul>
//                   </div>
//                </div>
//                <label>Please Enter Date and Month of your Anniversary</label>
//                <div class="your_birth">
//                   <div class="please_enter">
//                      <ul>
//                         <li class="date">Date</li>
//                         <li>
//                            <select class="form-control month_c3">
//                               <option>12</option>
//                               <option>13</option>
//                               <option>14</option>
//                               <option>15</option>
//                            </select>
//                         </li>
//                      </ul>
//                   </div>
//                   <div class="please_enter">
//                      <ul>
//                         <li class="date">Month</li>
//                         <li>
//                            <select class="form-control month_c3">
//                               <option>Jan</option>
//                               <option>Feb</option>
//                               <option>Mar</option>
//                               <option>Apr</option>
//                            </select>
//                         </li>
//                      </ul>
//                   </div>
//                </div>
//                <span class="name">
//                   <label>Occupation</label>
//                   <input type="text" class="form-control" placeholder="Occupation" />
//                </span>
//                <span class="name">
//                   <label>Income Range</label>
//                   <select class="form-control">
//                      <option>Les then 10.000</option>
//                   </select>
//                </span>
//                <span class="name">
//                   <label>Homeownership</label>
//                   <select class="form-control">
//                      <option>Rent</option>
//                   </select>
//                </span>
//                <span class="name">
//                   <label>Educational Level</label>
//                   <select class="form-control">
//                      <option>Master’s Degree or Above</option>
//                   </select>
//                </span>
//                <div class="address">
//                   <h3>Address Details</h3>
//                   <span class="name">
//                      <label>Pin Code*</label>
//                      <input type="text" class="form-control" placeholder="110025" />
//                   </span>
//                   <span class="name">
//                      <label>State*</label>
//                      <select class="form-control">
//                         <option>UP</option>
//                      </select>
//                   </span>
//                   <span class="name">
//                      <label>City*</label>
//                      <input type="text" class="form-control" placeholder="Noida" />
//                   </span>
//                   <span class="name">
//                      <label>Address*</label>
//                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Virgo Aluminum, Block D, Okhla Industrial Estate Phase 1"></textarea>
//                   </span>
//                   <ul class="button_cs">
//                      {/* <a href="62-dashboard-landing-screen.html">  <li class="cancel_c3"><button class="save">Cancel</button></li></a>  */}
//                       <Link to ="/#" ><li class="cancel_c3"><button class="save">Cancel</button></li> </Link>
//                      {/* <a href="62-dashboard-landing-screen.html"> <li><button class="save">Save</button></li></a> */}  
//                      <Link to ="/#" ><li><button class="save">Save</button></li> </Link>
//                   </ul>
//                </div>

//                <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
//                   <ModalBody>
//                      <div class="modal-content">
//                         <div class="modal-body verfy_cs3">
//                            <h1>OTP verification</h1>
//                            <p class="text_c3">Please enter the 4 digits OTP sent on your registered email id </p>
//                            <h2>Enter 4-digits code</h2>
//                            <ul class="enter_code"  >
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                               <li><input type="text" class="form-control txt_c3" /></li>
//                            </ul>
//                            <span class="re_cs3">
                              
//                               {/* <a href="#" data-target="#resent" data-toggle="modal" data-dismiss="modal" >Resend</a>  */}
//                               <Link onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend , modalStatus: !this.state.modalStatus})  }  
                     
//                             > Resend </Link>   
//                               </span>
//                         </div>
//                         <div class="modal-footer botton_modal">

//                            {/* <a href="41-Settings .html"> <button class="save">SUBMIT</button></a> */}
//                            <Link onClick={() => this.setState({ modalStatus: !this.state.modalStatus })  }  
//                         //   component ={}
//                             > 
//                            <button class="save">SUBMIT</button></Link>

//                         </div>
//                      </div>


//                   </ModalBody>
//                </Modal>   
//                <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
//                   <ModalBody>
//                   <div class="modal-content">
//                <div class="modal-header locationsethead">
//                   <h5>OTP resent successfully.</h5>
//                </div>
//                <div class="modal-body ok-cent">
//                   <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick ={ () => this.setState ({ modalStatusResend : !this.state.modalStatusResend}) }>OK</button>
//                </div>
//             </div>
//                   </ModalBody>
//                </Modal>  


//             </div>
//          </div>
//       )
//    }
// }

// export default ManageInfoEndUser

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { validateOtp,validateMobileNo } from '../utils/validation/Validation';
export class ManageInfoEndUser extends Component {
   constructor(props) {
      super(props)

      this.state = {
         // modalStatusSubmit:false,
         // modalStatus: false,
         // modalStatusResend:false

         otp: "",
         otpErrorMessage: "",
         otpStatus: false,

         otp2: "",
         otpErrorMessage2: "",
         otpStatus2: false,

         otp3: "",
         otpErrorMessage3: "",
         otpStatus3: false,

         otp4: "",
         otpErrorMessage4: "",
         otpStatus4: false,

         mobileno: "",
         mobilenoErrorMessage: "",
         mobilenoStatus: false,



         modalStatus: false,
         modalStatusResend: false
     }
 }

 submitHandler = () => {
     if (this.state.otpStatus) {
         if (this.state.otpStatus2) {
             if (this.state.otpStatus3) {
                 if (this.state.otpStatus4) {

                     alert('Submit Successfully');
                     // window.location.href = "SignupRetailer";
                     this.setState({ modalStatus: false })



                 } else { this.setState({ otpStatus4: false, otpErrorMessage: "*Please enter OTP" }) }
             } else { this.setState({ otpStatus3: false, otpErrorMessage: "*Please enter OTP" }) }
         } else { this.setState({ otpStatus2: false, otpErrorMessage: "*Please enter OTP" }) }
     } else { this.setState({ otpStatus: false, otpErrorMessage: "*Please enter OTP" }) }
 }

 handleOtpInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     this.setState({ [name]: value })
     console.log("valueset==>", value)
     if (name == "otp") {
         this.state.otpErrorMessage = validateOtp(value).error;
         this.state.otpStatus = validateOtp(value).status;
     }
     else if (name == "otp2") {
         this.state.otpErrorMessage = validateOtp(value).error;
         this.state.otpStatus2 = validateOtp(value).status;
     }
     else if (name == "otp3") {
         this.state.otpErrorMessage = validateOtp(value).error;
         this.state.otpStatus3 = validateOtp(value).status;
     }
     else if (name == "otp4") {
         this.state.otpErrorMessage = validateOtp(value).error;
         this.state.otpStatus4 = validateOtp(value).status;
     }
 }

//  handlemobilenoInput = (e) => {
//      const name = e.target.name;
//      const value = e.target.value;
//      this.setState({ [name]: value })
//      console.log("valueset==>", value)

//      this.state.mobilenoErrorMessage = validateMobileNo(value).error;
//      this.state.mobilenoStatus = validateMobileNo(value).status;

//  }

 submitmobilenoHandler = () => {
     if (this.state.mobilenoStatus) {          
//                      // alert('Submit Successfully');
//                      //  window.location.href = "SignupRetailer";
//                      // this.setState({ modalStatus: false })
                     this.setState({ modalStatus: !this.state.modalStatus });
     } else { this.setState({ otpStatus: false, mobilenoErrorMessage: "*Please enter Mobileno" }) }
 }
 

   render() {
      return (
         <div>

            <h3 class="info_c3">Manage General Info</h3>
            <div class="name_c3">
               <span class="name">
                  <label>Name</label>
                  <p><input type="text" class="form-control" placeholder="Sushree" /></p>
               </span>
               <span class="name">
                  <label>Mobile Number</label>
                  <ul class="select_s3">
                     <li>
                        <select class="form-control _exmple">
                           <option>+91</option>
                           <option>2</option>
                        </select>
                     </li>
                     <li><input type="text" class="form-control _number" placeholder="9650225013" /></li>
                  </ul>
               </span>
               <span class="name">
                  <label>Email 
                     {/* <img src="images/about-icon.png" /> */}
                    <img src={require("../assets/images/about-icon.png")} />

                     <a href="#">(Verify)</a> 
                   


                  </label>


                  <ul class="verify_c3">
                     <li><input 
                     // name="mobileno"
                     type="text" 
                     class="form-control bhaswati_c3" 
                     placeholder="bhaswati@gmail.com" 
                     // onChange={(event) => this.handlemobilenoInput(event)}
                     /></li>
                     <li class="verify_button"> 
                     
                     {/* <a href="45-setting-enduser-popup.html#">Verify</a>  */}
                     <Link onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}> Verify <i class="fa fa-angle-down" aria-hidden="true"></i></Link>
                     
                     </li>
                  </ul>
                  {/* <div>
                     <label style={{ color: "red" }}>
                        {this.state.mobilenoErrorMessage}
                     </label>
                  </div> */}
               </span>
               <span class="name">
                  <label>Referral Code</label>
                  <p><input type="text" class="form-control" placeholder="#$%^&*1234ert$$$$" /></p>
               </span>
               <div class="age-range">
                  <span class="name">
                     <label>Age Range</label>
                     <select class="form-control _range_s3">
                        <option>20-29</option>
                        <option>30-39</option>
                        <option>40-49</option>
                     </select>
                  </span>
                  <span class="name">
                     <label>Gender</label>
                     <select class="form-control _range_s3">
                        <option>Male</option>
                        <option>Female</option>
                     </select>
                  </span>
               </div>
               <label>Please Enter Date and Month of  your Birth</label>
               <div class="your_birth">
                  <div class="please_enter">
                     <ul>
                        <li class="date">Date</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>12</option>
                              <option>13</option>
                              <option>14</option>
                              <option>15</option>
                           </select>
                        </li>
                     </ul>
                  </div>
                  <div class="please_enter">
                     <ul>
                        <li class="date">Month</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>Jan</option>
                              <option>Feb</option>
                              <option>Mar</option>
                              <option>Apr</option>
                           </select>
                        </li>
                     </ul>
                  </div>
               </div>
               <label>Please Enter Date and Month of your Anniversary</label>
               <div class="your_birth">
                  <div class="please_enter">
                     <ul>
                        <li class="date">Date</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>12</option>
                              <option>13</option>
                              <option>14</option>
                              <option>15</option>
                           </select>
                        </li>
                     </ul>
                  </div>
                  <div class="please_enter">
                     <ul>
                        <li class="date">Month</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>Jan</option>
                              <option>Feb</option>
                              <option>Mar</option>
                              <option>Apr</option>
                           </select>
                        </li>
                     </ul>
                  </div>
               </div>
               <span class="name">
                  <label>Occupation</label>
                  <input type="text" class="form-control" placeholder="Occupation" />
               </span>
               <span class="name">
                  <label>Income Range</label>
                  <select class="form-control">
                     <option>Les then 10.000</option>
                  </select>
               </span>
               <span class="name">
                  <label>Homeownership</label>
                  <select class="form-control">
                     <option>Rent</option>
                  </select>
               </span>
               <span class="name">
                  <label>Educational Level</label>
                  <select class="form-control">
                     <option>Master’s Degree or Above</option>
                  </select>
               </span>
               <div class="address">
                  <h3>Address Details</h3>
                  <span class="name">
                     <label>Pin Code*</label>
                     <input type="text" class="form-control" placeholder="110025" />
                  </span>
                  <span class="name">
                     <label>State*</label>
                     <select class="form-control">
                        <option>UP</option>
                     </select>
                  </span>
                  <span class="name">
                     <label>City*</label>
                     <input type="text" class="form-control" placeholder="Noida" />
                  </span>
                  <span class="name">
                     <label>Address*</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Virgo Aluminum, Block D, Okhla Industrial Estate Phase 1"></textarea>
                  </span>
                  <ul class="button_cs">
                     {/* <a href="62-dashboard-landing-screen.html">  <li class="cancel_c3"><button class="save">Cancel</button></li></a>  */}
                      <Link to ="/#" ><li class="cancel_c3"><button class="save">Cancel</button></li> </Link>
                     {/* <a href="62-dashboard-landing-screen.html"> <li><button class="save">Save</button></li></a> */}  
                     <Link to ="/#" ><li><button class="save">Save</button></li> </Link>
                  </ul>
               </div>


               <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "90px" }} >
                        {/* <ModalHeader >Alert!!
            <button onClick={() => this.setState({ modalStatus: false })} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </ModalHeader> */}
                        <ModalBody>
                            <form>
                                <div class="modal-body">
                                    <div class="web-pagemodal">
                                        <h5 class="text-center mt-3">OTP verification</h5>
                                        <form>
                                            <div class="register-cont">
                                                <p class="my-3">Please enter the 4 digits OTP sent on your registered email id.</p>
                                            </div>
                                            <div class="form-group">
                                                <div class="otp-box">
                                                    <p class="my-3">Enter 4 - digits code</p>
                                                    <ul>
                                                        {/* <li><input type="text" class="form-control" value="" /></li> */}
                                                        <li>
                                                            <input class="form-control"
                                                                name="otp"
                                                                type="text"
                                                                maxLength={1}
                                                                placeholder="0"
                                                                onChange={(event) => this.handleOtpInput(event)} />
                                                        </li>
                                                        {/* <li><input type="text" class="form-control" value="" /></li> */}
                                                        <li>
                                                            <input class="form-control"
                                                                name="otp2"
                                                                type="text"
                                                                maxLength={1}
                                                                placeholder="0"
                                                                onChange={(event) => this.handleOtpInput(event)} />
                                                        </li>
                                                        {/* <li><input type="text" class="form-control" value="" /></li> */}
                                                        <li>
                                                            <input class="form-control"
                                                                name="otp3"
                                                                type="text"
                                                                maxLength={1}
                                                                placeholder="0"
                                                                // value={this.state.otp}
                                                                onChange={(event) => this.handleOtpInput(event)} />
                                                        </li>
                                                        {/* <li><input type="text" class="form-control" value="" /></li> */}
                                                        <li>
                                                            <input class="form-control"
                                                                name="otp4"
                                                                type="text"
                                                                maxLength={1}
                                                                placeholder="0"
                                                                id="d"
                                                                // value={this.state.otp}
                                                                onChange={(event) => this.handleOtpInput(event)} />
                                                        </li>
                                                    </ul>
                                                    <div>
                                                        <label class="validation-hint">
                                                            {this.state.otpErrorMessage}
                                                        </label>
                                                    </div>
                                                    {/* <a href="#" data-toggle="modal" data-dismiss="modal" data-target="#otpmodal" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })}>Resend</a> */}
                                                    <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })}>
                                                        Resend
                                                     </p></Link>
                                                </div>
                                            </div>
                                            <div class="modalsumit">
                                                {/* <a href="25-signup-user.html"> */}
                                                {/* <Link to="SignupRetailer"> */}
                                                <button type="button" class="btn btn-theme mb-4" data-toggle="modal" data-target="#otpmodal-2" onClick={() => this.submitHandler()}>SUBMIT</button>
                                                {/* </Link> */}
                                                {/* </a> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>


                            
                            </form>
                        </ModalBody>
                    </Modal>

                    <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "190px", }}>
                        <ModalBody>
                            <form>
                                <div class="modal-header locationsethead">
                                    <h5>OTP resent successfully.</h5>
                                </div>
                                <div style={{ textAlign: "center" }} >
                                    <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend })} >OK</button>
                                </div>
                            </form>
                        </ModalBody>
                    </Modal>


               {/* <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                     <div class="modal-content">
                        <div class="modal-body verfy_cs3">
                           <h1>OTP verification</h1>
                           <p class="text_c3">Please enter the 4 digits OTP sent on your registered email id </p>
                           <h2>Enter 4-digits code</h2>
                           <ul class="enter_code"  >
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                           </ul>
                           <span class="re_cs3"> */}
                              
                              {/* <a href="#" data-target="#resent" data-toggle="modal" data-dismiss="modal" >Resend</a>  */}
                              {/* <Link onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend , modalStatus: !this.state.modalStatus})  }  
                     
                            > Resend </Link>   
                              </span>
                        </div>
                        <div class="modal-footer botton_modal"> */}

                           {/* <a href="41-Settings .html"> <button class="save">SUBMIT</button></a> */}
                           {/* <Link onClick={() => this.setState({ modalStatus: !this.state.modalStatus })  }  
                        
                            > 
                           <button class="save">SUBMIT</button></Link>

                        </div>
                     </div>


                  </ModalBody>
               </Modal>    */}
               {/* <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                  <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>OTP resent successfully.</h5>
               </div>
               <div class="modal-body ok-cent">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick ={ () => this.setState ({ modalStatusResend : !this.state.modalStatusResend}) }>OK</button>
               </div>
            </div>
                  </ModalBody>
               </Modal>   */}


            </div>
         </div>
      )
   }
}

export default ManageInfoEndUser
