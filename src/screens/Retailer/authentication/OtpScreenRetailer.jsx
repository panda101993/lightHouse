import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { validateOtp } from '../../../utils/validation/Validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class OtpScreenRetailer extends Component {
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
                window.location.href='ResetpasswordRetailer'
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

   // check()
   // {
   // var letters = document.joe.otp.value.length +1;
   // if (letters <= 2)
   // {document.joe.otp.focus()}
   // else
   // {document.joe.otp2.focus()}
   // }

   // container=() => document.getElementsByClassName("container")[0];
   // container.onkeyup = function(e) {
   //     var target = e.srcElement;
   //     var maxLength = parseInt(target.attributes["maxlength"].value, 10);
   //     var myLength = target.value.length;
   //     if (myLength >= maxLength) {
   //         var next = target;
   //         while (next = next.nextElementSibling) {
   //             if (next == null)
   //                 break;
   //             if (next.tagName.toLowerCase() == "input") {
   //                 next.focus();
   //                 break;
   //             }
   //         }
   //     }
   // }

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
                                          type="texts"
                                          maxLength={1}
                                          placeholder="0"
                                          // value={this.state.otp}
                                          onChange={(event) => this.handleOtpInput(event)} />

                                    </li>
                                    <li>

                                       {/* <input type="text" class="form-control" value="" /> */}
                                       <input class="form-control"
                                          name="otp2"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
                                          // value={this.state.otp}
                                          onChange={(event) => this.handleOtpInput(event)} />
                                    </li>
                                    <li>
                                       {/* <input type="text" class="form-control" value="" /> */}
                                       <input class="form-control"
                                          name="otp3"
                                          type="text"
                                          maxLength={1}
                                          placeholder="0"
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


                                 <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>
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
                          <button type="button" onClick={() => this.submitHandler()} class="btn btn-theme" >SUBMIT</button>
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
