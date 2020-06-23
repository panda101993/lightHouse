import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom'; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { validateOtp } from '../../../utils/validation/Validation';
import ToasterFunction from "../../../components/ToasterFunc"
import apiRequest from '../../../api/Apirequest';




export default class SignupOtpRetailer extends Component {  
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

         temp: this.props.location.pathname.split("/")

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
               // window.location.href='Setting_retailer'
               try{
                  apiRequest({ otp: this.state.otp + this.state.otp2+ this.state.otp3+ this.state.otp4 }, '/retailer/verifyOTP', 'POST')
                  .then((resp) => {
                      console.log("response", resp)
                      switch (resp.status) {
                          case (200): {
                              if (resp.data.responseCode == 200) {
                                  this.props.history.push("/Setting_retailer")
                                  this.setState({ modalStatus: false })
                              }
                              else if (resp.data.responseCode == 403) {
                                  ToasterFunction("info", "This Mobile number already exists");
  
                                  this.setState({ dialCodeStatus: !this.state.dialCodeStatus })
                              }
                              else if (resp.data.responseCode == 404) {
                                  ToasterFunction("info", "This Mobile number already exists");
  
                              }
                              else if (resp.data.responseCode == 500) {
                                  ToasterFunction("error", "Internal Server Error");
  
                              }
                          }
                          break
                          case (900): {
                              if (resp.status == 900) {
                                  ToasterFunction("error", "Please check your internet connection")
                              }
                          }
                      }
                  })
          } catch (error) {
              console.log("response", error)
              ToasterFunction("error", "Network error, please contact the administrator");
  
          }

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


      // handleOtpInput2=(e)=> {
      //    const name = e.target.name;
      //    const value = e.target.value;
      //    this.setState({ [name]: value })
      //       // () => { this.validateOtp(value) });
      //    console.log("valueset==>", value)
      //    this.state.otpErrorMessage = this.validateOtp(value).error;
      //    this.state.otpStatus2 = this.validateOtp(value).status;
      // }

      //    handleOtpInput3=(e)=> {
      //       const name = e.target.name;
      //       const value = e.target.value;
      //       this.setState({ [name]: value })

      //          // () => { this.validateOtp(value) });
      //       console.log("valueset==>", value)
      //       this.state.otpErrorMessage = this.validateOtp(value).error;
      //       this.state.otpStatus3 = this.validateOtp(value).status;
      //    }

      //       handleOtpInput4=(e)=> {
      //          const name = e.target.name;
      //          const value = e.target.value;
      //          this.setState({ [name]: value })
      //             // () => { this.validateOtp(value) });
      //          console.log("valueset==>", value)
      //          this.state.otpErrorMessage = this.validateOtp(value).error;
      //          this.state.otpStatus4 = this.validateOtp(value).status;
      //       }

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

 
   resendOTP=()=>{
      console.log(this.state.temp[2])
      var OTPdata={
            "email":this.state.temp[2]
      }
      apiRequest(OTPdata,"/retailer/resendOTP","POST")
      .then((resp)=>{
         switch(resp.status){
            case 200:
               if(resp.data.responseCode==200){
                  alert("Otp has been sent to your registered Email successfully.")
               }
         }
      })
      .catch(err => {
         console.log("respresp---", err)
     }
     )
   }
   


    render() {
        return (
           <div>
              <body>
                 <Header />
                 {/* <section>
         <div class="container-fluid">
            <div class="cover-otp">
               <h1>OTP verification</h1>
               <form>
                  <div class="register-cont">
                     <p>Please enter the 4 digits OTP sent on your registered email id.</p>
                  </div>
                  <div class="form-group">
                     <div class="otp-box">
                        <p>Enter 4 - digits code</p>
                        <ul>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                        </ul>
                        <a href="#" data-toggle="modal" data-target="#otpmodal">Resend</a>
                     </div>
                  </div>
                  <a href="81-step-2%20retailer.html"><button type="button" class="btn btn-theme">SUBMIT</button></a>
               </form>
            </div>
         </div>
      </section> */}  

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


                                 <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.resendOTP()}>
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

              </body>
           </div>
        )
    }
}
