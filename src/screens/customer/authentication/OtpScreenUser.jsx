<<<<<<< HEAD
import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { validateOtp } from '../../../utils/validation/Validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Apirequest from '../../../api/Apirequest';
import ToasterFunction from '../../../components/ToasterFunc';



export default class OtpScreenUser extends Component {
   constructor(props) {
      super(props)

      this.state = {
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

         temp: this.props.location.pathname.split("/"),



         modalStatus: false,
         // error:"",
         // status:""

      }

   }


   submitHandler = () => {
      if (this.state.otpStatus) {
         if (this.state.otpStatus2) {
            if (this.state.otpStatus3) {
               if (this.state.otpStatus4) {

               //   alert('Submit Successfully');
                  //  window.location.href='/Setting_enduser'
                  var requestData={
                     "mobileNumber":this.state.temp[2],
                     "otp":this.state.otp+this.state.otp2+this.state.otp3+this.state.otp4
                  }
                  Apirequest(requestData,"/user/otpVerify","POST")
                  .then((resp)=>{
                     switch(resp.status){
                        case 200:{
                           if(resp.data.responseCode==200){
                              this.props.history.push("/Setting_enduser")
                           }
                           else if(resp.data.responseCode==402){
                              ToasterFunction("invalid","Invalid OTP")
                           }
                           else if(resp.data.responseCode==404){
                              ToasterFunction("not exist","This user does not exist")
                           }
                           else if(resp.data.responseCode==500){
                              ToasterFunction("error","Internal Server Error")
                           }
                        }
                     }
                  })
                  .catch(err => {
                     console.log("respresp---", err)
                 }
                 )

               } else { this.setState({ otpStatus4: false, otpErrorMessage: "*Please enter OTP" }) }
            } else { this.setState({ otpStatus3: false, otpErrorMessage: "*Please enter OTP" }) }
         } else { this.setState({ otpStatus2: false, otpErrorMessage: "*Please enter OTP" }) }
      } else { this.setState({ otpStatus: false, otpErrorMessage: "*Please enter OTP" }) }
   }

   handleOtpInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value })
      //    () => { this.validateOtp(value) });
      console.log("valueset==>", value)
      // this.state.otpErrorMessage = this.validateOtp(value).error;
      // this.state.otpStatus = this.validateOtp(value).status;


      if (name == "otp") {
         this.state.otpErrorMessage = validateOtp(value).error;
         this.state.otpStatus = validateOtp(value).status;
         // var len = Math.floor(Math.log10(value))+1;
         // if(len === 1){
         //    this.otp2.focus()
         //    this.inputs.
         // }
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


   //    switch(name){
   //       case "otp":
   //          this.state.otpErrorMessage = this.validateOtp(value).error;
   //          this.state.otpStatus = this.validateOtp(value).status;
   //          break
   //          case "otp2":
   //             console.log("In otp 22222")
   //             this.state.otpErrorMessage2 = this.validateOtp(value).error;
   //             this.state.otpStatus2 = this.validateOtp(value).status;
   //             break
   //             case "otp3":
   //                this.state.otpErrorMessage3 = this.validateOtp(value).error;
   //                this.state.otpStatus3 = this.validateOtp(value).status;
   //                break
   //                case "otp4":
   //                   this.state.otpErrorMessage4 = this.validateOtp(value).error;
   //                   this.state.otpStatus4 = this.validateOtp(value).status;
   //                   break
   //                   default:
   //                      console.log("Enter valid field")
   //    }
   // }

   // validateOtp(value) {
   //    console.log("validate===>", value)
   //    var otpRegex = /^\d{1}$/;
   //    //   otp = otp.trim();
   //    if (value == "" || value == undefined || value == null) {
   //       return { status: false, error: "Please enter OTP." };
   //    } else if (!otpRegex.test(value)) {
   //       return { status: false, error: "*Please enter valid OTP." };
   //    } else {
   //       return { status: true, error: "" };
   //    }
   // }
//  moveOnMax=()=>{
//    var container = document.getElementsByClassName("container")[0];
//    container.onkeyup = function(e) {
//        var target = e.srcElement || e.target;
//        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
//        var myLength = target.value.length;
//        if (myLength >= maxLength) {
//            var next = target;
//            while (next = next.nextElementSibling) {
//                if (next == null)
//                    break;
//                if (next.tagName.toLowerCase() === "input") {
//                    next.focus();
//                    break;
//                }
//            }
//          }
//       }
//  }

   resendHandler=()=>{


      Apirequest({mobileNumber: this.state.temp[2]},"/user/resendOTP","POST")
      .then((resp=>{
         switch(resp.status){
            case 200:{
               if(resp.data.responseCode==200){
                  ToasterFunction("otp","Otp has been sent to your registered mobile number")
               }
               else if(resp.data.responseCode==404){
                  ToasterFunction("error","Provided email/mobile number is not registered")
               }
               else if(resp.data.responseCode==500){
                  ToasterFunction("error","Internal Server error")
               }
            }
            break
            default:{
               alert("Error")
            }
         }
      }))
   }

   render() {
      return (
         <div>
            {/* <section className="center-form"> */}
            <body>
               <Header />
               <section>
                  <div class="container-fluid">
                     <div class="cover-otp">
                        <h1>OTP verification</h1>
                        {/* <form onSubmit={this.submitLoginForm}> */}
                        <form>
                           <div class="register-cont">
                              <p>Please enter the 4 digits OTP sent on your registered phone number.</p>
                           </div>
                           <div class="form-group">
                              <div class="otp-box">
                                 <p>Enter 4 - digits code</p>
                                 
                                 <ul>
                                    <li>
                                       <input class="form-control"
                                          name="otp"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp"
                                          onChange={(event) => this.handleOtpInput(event)} />

                                    </li>
                                    <li>

                                      
                                       <input class="form-control"
                                          name="otp2"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp2"
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    <li>
                                       {/* <input type="text" class="form-control" value="" /> */}
                                       <input class="form-control"
                                          name="otp3"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp3"
                                          // value={this.state.otp}
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    <li>
                                       {/* <input type="text" class="form-control" value="" /> */}
                                       <input class="form-control"
                                          name="otp4"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp4"
                                          // value={this.state.otp}
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    {/* < input value={this.state.otp} onChange={(value) => this.UserOtp(value)}/> */}

                                 </ul>

                                 <div>
                                    <label class="validation-hint">
                                       {this.state.otpErrorMessage}
                                    </label>
                                 </div>
{/* </div> */}

                                 <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() =>this.resendHandler()}>
                                    Resend
                                 </p></Link>


                                 <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                                    <ModalBody>
                                       <div class="modal-header locationsethead">
                                          <h5>OTP resent successfully.</h5>
                                       </div>
                                       <div style={{ textAlign: "center" }}>
                                          <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                                       </div>


                                    </ModalBody>
                                 </Modal>


                              </div>
                           </div>
                           {/* <Link to="/Setting_enduser"> */}
                              <button type="button" onClick={() => this.submitHandler()} class="btn btn-theme" >SUBMIT</button>
                              {/* </Link> */}
                        </form>
                     </div>
                  </div>
               </section>
               <Footer />

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

            </body>




         </div>
      )
   }
}
=======
import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { validateOtp } from '../../../utils/validation/Validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Apirequest from '../../../api/Apirequest';
import ToasterFunction from '../../../components/ToasterFunc';



export default class OtpScreenUser extends Component {
   constructor(props) {
      super(props)

      this.state = {
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

         temp: this.props.location.pathname.split("/"),



         modalStatus: false,
         // error:"",
         // status:""

      }

   }


   submitHandler = () => {
      if (this.state.otpStatus) {
         if (this.state.otpStatus2) {
            if (this.state.otpStatus3) {
               if (this.state.otpStatus4) {

               //   alert('Submit Successfully');
                  //  window.location.href='/Setting_enduser'
                  var requestData={
                     "mobileNumber":this.state.temp[2],
                     "otp":this.state.otp+this.state.otp2+this.state.otp3+this.state.otp4
                  }
                  Apirequest(requestData,"/user/otpVerify","POST")
                  .then((resp)=>{
                     switch(resp.status){
                        case 200:{
                           if(resp.data.responseCode==200){
                              this.props.history.push("/Setting_enduser")
                           }
                           else if(resp.data.responseCode==402){
                              ToasterFunction("invalid","Invalid OTP")
                           }
                           else if(resp.data.responseCode==404){
                              ToasterFunction("not exist","This user does not exist")
                           }
                           else if(resp.data.responseCode==500){
                              ToasterFunction("error","Internal Server Error")
                           }
                        }
                     }
                  })
                  .catch(err => {
                     console.log("respresp---", err)
                 }
                 )

               } else { this.setState({ otpStatus4: false, otpErrorMessage: "*Please enter OTP" }) }
            } else { this.setState({ otpStatus3: false, otpErrorMessage: "*Please enter OTP" }) }
         } else { this.setState({ otpStatus2: false, otpErrorMessage: "*Please enter OTP" }) }
      } else { this.setState({ otpStatus: false, otpErrorMessage: "*Please enter OTP" }) }
   }

   handleOtpInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value })
      //    () => { this.validateOtp(value) });
      console.log("valueset==>", value)
      // this.state.otpErrorMessage = this.validateOtp(value).error;
      // this.state.otpStatus = this.validateOtp(value).status;


      if (name == "otp") {
         this.state.otpErrorMessage = validateOtp(value).error;
         this.state.otpStatus = validateOtp(value).status;
         // var len = Math.floor(Math.log10(value))+1;
         // if(len === 1){
         //    this.otp2.focus()
         //    this.inputs.
         // }
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


   //    switch(name){
   //       case "otp":
   //          this.state.otpErrorMessage = this.validateOtp(value).error;
   //          this.state.otpStatus = this.validateOtp(value).status;
   //          break
   //          case "otp2":
   //             console.log("In otp 22222")
   //             this.state.otpErrorMessage2 = this.validateOtp(value).error;
   //             this.state.otpStatus2 = this.validateOtp(value).status;
   //             break
   //             case "otp3":
   //                this.state.otpErrorMessage3 = this.validateOtp(value).error;
   //                this.state.otpStatus3 = this.validateOtp(value).status;
   //                break
   //                case "otp4":
   //                   this.state.otpErrorMessage4 = this.validateOtp(value).error;
   //                   this.state.otpStatus4 = this.validateOtp(value).status;
   //                   break
   //                   default:
   //                      console.log("Enter valid field")
   //    }
   // }

   // validateOtp(value) {
   //    console.log("validate===>", value)
   //    var otpRegex = /^\d{1}$/;
   //    //   otp = otp.trim();
   //    if (value == "" || value == undefined || value == null) {
   //       return { status: false, error: "Please enter OTP." };
   //    } else if (!otpRegex.test(value)) {
   //       return { status: false, error: "*Please enter valid OTP." };
   //    } else {
   //       return { status: true, error: "" };
   //    }
   // }
//  moveOnMax=()=>{
//    var container = document.getElementsByClassName("container")[0];
//    container.onkeyup = function(e) {
//        var target = e.srcElement || e.target;
//        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
//        var myLength = target.value.length;
//        if (myLength >= maxLength) {
//            var next = target;
//            while (next = next.nextElementSibling) {
//                if (next == null)
//                    break;
//                if (next.tagName.toLowerCase() === "input") {
//                    next.focus();
//                    break;
//                }
//            }
//          }
//       }
//  }

   resendHandler=()=>{


      Apirequest({mobileNumber: this.state.temp[2]},"/user/resendOTP","POST")
      .then((resp=>{
         switch(resp.status){
            case 200:{
               if(resp.data.responseCode==200){
                  ToasterFunction("otp","Otp has been sent to your registered mobile number")
               }
               else if(resp.data.responseCode==404){
                  ToasterFunction("error","Provided email/mobile number is not registered")
               }
               else if(resp.data.responseCode==500){
                  ToasterFunction("error","Internal Server error")
               }
            }
            break
            default:{
               alert("Error")
            }
         }
      }))
   }

   render() {
      return (
         <div>
            {/* <section className="center-form"> */}
            <body>
               <Header />
               <section>
                  <div class="container-fluid">
                     <div class="cover-otp">
                        <h1>OTP verification</h1>
                        {/* <form onSubmit={this.submitLoginForm}> */}
                        <form>
                           <div class="register-cont">
                              <p>Please enter the 4 digits OTP sent on your registered phone number.</p>
                           </div>
                           <div class="form-group">
                              <div class="otp-box">
                                 <p>Enter 4 - digits code</p>
                                 
                                 <ul>
                                    <li>
                                       <input class="form-control"
                                          name="otp"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp"
                                          onChange={(event) => this.handleOtpInput(event)} />

                                    </li>
                                    <li>

                                      
                                       <input class="form-control"
                                          name="otp2"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp2"
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    <li>
                                       {/* <input type="text" class="form-control" value="" /> */}
                                       <input class="form-control"
                                          name="otp3"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp3"
                                          // value={this.state.otp}
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    <li>
                                       {/* <input type="text" class="form-control" value="" /> */}
                                       <input class="form-control"
                                          name="otp4"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          id="otp4"
                                          // value={this.state.otp}
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    {/* < input value={this.state.otp} onChange={(value) => this.UserOtp(value)}/> */}

                                 </ul>

                                 <div>
                                    <label class="validation-hint">
                                       {this.state.otpErrorMessage}
                                    </label>
                                 </div>
{/* </div> */}

                                 <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() =>this.resendHandler()}>
                                    Resend
                                 </p></Link>


                                 <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                                    <ModalBody>
                                       <div class="modal-header locationsethead">
                                          <h5>OTP resent successfully.</h5>
                                       </div>
                                       <div style={{ textAlign: "center" }}>
                                          <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                                       </div>


                                    </ModalBody>
                                 </Modal>


                              </div>
                           </div>
                           {/* <Link to="/Setting_enduser"> */}
                              <button type="button" onClick={() => this.submitHandler()} class="btn btn-theme" >SUBMIT</button>
                              {/* </Link> */}
                        </form>
                     </div>
                  </div>
               </section>
               <Footer />

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

            </body>




         </div>
      )
   }
}
>>>>>>> 7a838c46eb79e2089f4d27e012d1f41ba98fd5ed
