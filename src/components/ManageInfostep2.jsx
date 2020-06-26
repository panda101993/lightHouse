import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { validateOtp, validateMobileNo, validateEmail, validatePinCode } from '../utils/validation/Validation';
import { connect } from "react-redux";
import ProvinceJSON from "../utils/JSON/province.json";
import Apirequest from "../api/Apirequest"
import dateJSON from "../utils/JSON/date.json";
import monthJSON from "../utils/JSON/month.json"

export class ManageInfostep2 extends Component {

   constructor(props) {
      super(props)

      this.state = {
         // modalStatusSubmit:false,
         // modalStatus: false,
         // modalStatusResend:false
         email: "",
         emailErrorMsg: "",
         emailErrorStatus: null,

         pincode: "",
         pincodeErrorMsg: "",
         pincodeErrorStatus: null,

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

         province: "",

         city: "",

         address: "",

         modalStatus: false,
         modalStatusResend: false,

         StepTwoView: false,

         ageRange: "",

         gender: "",

         dateSelectBirth: "",

         dateSelectAnniversary: "",

         monthSelectBirth: "",

         monthSelectAnniversary: "",

         occupation: "",

         incomeRange: "",

         ownerShip: "",

         educationLevel: ""
      }
   }

   ProvinceList = ProvinceJSON.states.map((item, index) => {
      return <option value={item.state}
      >{item.state}</option>

   });

   dateJSON = dateJSON.dates.map((item, index) => {
      return <option value={item.date}
      >{item.date}</option>

   });

   monthJSON = monthJSON.months.map((item, index) => {
      return <option value={item.month}
      >{item.month}</option>

   });


   submitHandler = () => {
      if (this.state.otpStatus) {
         if (this.state.otpStatus2) {
            if (this.state.otpStatus3) {
               if (this.state.otpStatus4) {

                  var data = {
                     "mobileNumber": this.state.email,
                     "otp": this.state.otp + this.state.otp2 + this.state.otp3 + this.state.otp4
                  }
                  // console.log("this state", data)
                  // this.setState({ modalStatus: false, StepTwoView: !this.state.StepTwoView })
                  Apirequest(data, "/user/otpVerify","POST")
                     .then((resp) => {
                        console.log(resp)
                        switch (resp.status) {
                           case 200:
                              if (resp.data.responseCode == 200) {
                                 this.setState({ modalStatus: false, StepTwoView: !this.state.StepTwoView })
                              }
                              else if(resp.data.responseCode == 402){
                                 alert("Invalid OTP")
                              }
                        }
                     })
                     .catch(err => {
                        console.log(err)
                     })

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

   handleWeeklySignup = (e, type) => {
      switch (type) {
         case "email":
            this.setState({ email: e.target.value }, () => this.handleValidation("email"))
            break;
         case "pincode":
            this.setState({ pincode: e.target.value }, () => this.handleValidation("pincode"))
            break;
         case "province":
            this.setState({ province: e.target.value })
            // console.log("province",this.state.province)
            break
         case "city":
            this.setState({ city: e.target.value })
            break
         case "address":
            this.setState({ address: e.target.value })
            break
         case "ageRange":
            this.setState({ ageRange: e.target.value })
            break
         case "gender":
            this.setState({ gender: e.target.value })
            break
         case "dateSelectBirth":
            this.setState({ dateSelectBirth: e.target.value })
            break
         case "dateSelectAnniversary":
            this.setState({ dateSelectAnniversary: e.target.value })
            break
         case "monthSelectBirth":
            this.setState({ monthSelectBirth: e.target.value })
            break
         case "monthSelectAnniversary":
            this.setState({ monthSelectAnniversary: e.target.value })
            break
         case "occupation":
            this.setState({ occupation: e.target.value })
            break
         case "incomeRange":
            this.setState({ incomeRange: e.target.value })
            break
         case "homeOwnership":
            this.setState({ homeOwnership: e.target.value })
            break
         case "educationLevel":
            this.setState({ educationLevel: e.target.value })
            break
      }
   }
   handleValidation(key) {
      console.log('key-value', key);
      switch (key) {

         //  case ("password"):
         //      var data = validatePassword(this.state.password)
         //      console.log("this is data of pass", data)
         //      this.setState({ passwordErrorMessage: data.error, passwordErrorStatus: data.status }, () => console.log("errore", this.state))
         //      break
         case ("email"):
            var data = validateEmail(this.state.email)
            console.log("email", data)
            this.setState({ emailErrorMsg: data.error, emailErrorStatus: data.status }, () => console.log("errore", this.state))
            break
         case ("pincode"):
            var data = validatePinCode(this.state.pincode)
            console.log("this is data of pass", data)
            this.setState({ pincodeErrorMsg: data.error, pincodeErrorStatus: data.status }, () => console.log("errore", this.state))
            break

      }
   }

   verifyEmail = () => {
      if(this.state.emailErrorStatus&&
         this.state.pincodeErrorStatus&&
         this.state.province!=""&&
         this.state.address!=""){

      
      var data = {
         "email":this.state.email,
         "pinCode":this.state.pincode,
         "state":this.state.province,
         "city":this.state.city,
         "address":this.state.address,
      }

      try {
         Apirequest(data, "/user/weeklyEmailSignup", "POST",this.props.applicatonkey.token)
            .then((resp) => {
               console.log("emailotpp", resp)
               switch(resp.status){
                  case 200:
                     if(resp.data.responseCode==200){
                        alert("Submitted Successfully")
                        this.setState({ modalStatus: !this.state.modalStatus })
                     }
                     else if(resp.data.responseCode==409){
                        alert("This email already exists.")
                     }
               }
            })
      }
      catch (e) {
         console.log(e)
      }
   }else alert("Enter all fields")
}

resendHandler=()=>{


   Apirequest({mobileNumber: this.state.email},"/user/resendOTP","POST")
   .then((resp=>{
      switch(resp.status){
         case 200:{
            if(resp.data.responseCode==200){
               alert("Otp has been sent to your registered mobile email")
               //  this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })
            }
            else if(resp.data.responseCode==404){
               alert("Provided email/mobile number is not registered")
            }
            else if(resp.data.responseCode==500){
               alert("Internal Server error")
            }
         }
      }
   }))

   .catch(err => {
      console.log("respresp---", err)
  }
  )
}

finalSubmit=()=>{

   var data={
      "ageRange":this.state.ageRange,
      "gender":this.state.gender,
      "dateOfBirth":this.state.dateSelectBirth+"-"+this.state.monthSelectBirth,
      "occupation":this.state.occupation,
      "incomeRange":this.state.incomeRange,
      "homeOwnership":this.state.homeOwnership,
      "educationLevel":this.state.educationLevel,
      "anniversaryDate":this.state.dateSelectAnniversary+"-"+this.state.monthSelectAnniversary
   }
   console.log("final submit data",data)
   Apirequest(data,"/user/personalisedExperience","POST",this.props.applicatonkey.token)
   .then((resp)=>{
      console.log("final resppp",resp)
      switch(resp.status){
         case 200:
            if(resp.data.responseCode==200){
               this.props.history.push("/LandingScreen")
            }
            else if(resp.data.responseCode==404){
               alert("Err")
            }
            else if(resp.data.responseCode==500){
               alert("Internal Server Error")
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
         this.state.StepTwoView ?
            <div>
               <div class="tab-pane fade show active" id="Manage-General-Info" role="tabpanel" aria-labelledby="Manage-General-Info-tab">
                  <h3 class="info_c3">Please Provide Information For Personalised  Experience</h3>
                  <div class="name_c301">
                     <div class="age-range">
                        <span class="name">
                           <label>Age Range</label>
                           <select class="form-control _range_s3"
                              value={this.state.ageRange}
                              onChange={(e) => this.handleWeeklySignup(e, "ageRange")}

                           >
                              <option value="20-29">20-29</option>
                              <option value="30-39">30-39</option>
                              <option value="40-49">40-49</option>
                           </select>
                        </span>
                        <span class="name">
                           <label>Gender</label>
                           <select class="form-control _range_s3"
                              value={this.state.gender}
                              onChange={(e) => this.handleWeeklySignup(e, "gender")}
                           >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                           </select>
                        </span>
                     </div>
                     <label>Please Enter Date and Month of  your Birth</label>
                     <div class="your_birth">
                        <div class="please_enter">
                           <ul>
                              <li class="date">Date</li>
                              <li class="no">
                                 <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                 <select class="form-control month_c3no"
                                    value={this.state.dateSelectBirth}
                                    onChange={(e) => this.handleWeeklySignup(e, "dateSelectBirth")}
                                 >
                                    {/* <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option> */}
                                    {this.dateJSON}
                                 </select>
                              </li>
                           </ul>
                        </div>
                        <div class="please_enter">
                           <ul>
                              <li class="date">Month</li>
                              <li class="no">
                                 <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                 <select class="form-control month_c3no"
                                    value={this.state.monthSelectBirth}
                                    onChange={(e) => this.handleWeeklySignup(e, "monthSelectBirth")}
                                 >
                                    {/* <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option> */}
                                    {this.monthJSON}
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
                              <li class="no">
                                 <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                 <select class="form-control month_c3no"
                                    value={this.state.dateSelectAnniversary}
                                    onChange={(e) => this.handleWeeklySignup(e, "dateSelectAnniversary")}
                                 >
                                    {/* <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option> */}
                                    {this.dateJSON}
                                 </select>
                              </li>
                           </ul>
                        </div>
                        <div class="please_enter">
                           <ul>
                              <li class="date">Month</li>
                              <li class="no">
                                 <i class="fa fa-sort-desc drop-btn" aria-hidden="true"></i>
                                 <select class="form-control month_c3no"
                                    value={this.state.monthSelectAnniversary}
                                    onChange={(e) => this.handleWeeklySignup(e, "monthSelectAnniversary")}
                                 >
                                    {/* <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option> */}
                                    {this.monthJSON}
                                 </select>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <span class="name">
                        <label>Occupation</label>
                        <input type="text" class="form-control income-stp" placeholder="Occupation"
                           onChange={(e) => this.handleWeeklySignup(e, "occupation")}
                        />
                     </span>
                     <span class="name">
                        <label>Income Range</label>
                        <select class="form-control income-stp"
                           value={this.state.incomeRange}
                           onChange={(e) => this.handleWeeklySignup(e, "incomeRange")}
                        >
                           <option value="Less then 10,000">Less then 10,000</option>
                           <option value="10,000-50,000">10,000-50,000</option>
                           <option value="50,000-100,000">50,000-100,000</option>
                        </select>
                     </span>
                     <span class="name">
                        <label>Homeownership</label>
                        <select class="form-control income-stp"
                           value={this.state.homeOwnership}
                           onChange={(e) => this.handleWeeklySignup(e, "homeOwnership")}
                        >
                           <option value="Rent">Rent</option>
                           <option value="Own">Own</option>
                           <option value="Employer Provided">Employer Provided</option>
                           <option value="Paying Guest">Paying Guest</option>
                        </select>
                     </span>
                     <span class="name">
                        <label>Educational Level</label>
                        <select class="form-control income-stp"
                           value={this.state.educationLevel}
                           onChange={(e) => this.handleWeeklySignup(e, "educationLevel")}
                        >
                           <option value="Master’s Degree or Above">Master’s Degree or Above</option>
                           <option value="Bachelor's Degree">Bachelor's Degree</option>
                           <option value="Diploma">Diploma</option>
                           <option value="12th or Below">12th or Below</option>
                        </select>
                     </span>
                     <div class="address">
                        <ul class="button_cs">
                           <a href="index.html"><li class="cancel_c300"><button type="button" class="save">Skip</button></li></a>
                           <li> 
                              {/* <Link to="/LandingScreen"> */}
                                 <button type="button" class="save0" onClick={()=>this.finalSubmit()}>Submit</button>
                                 {/* </Link>  */}
                                 </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            :
            <div>

               <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <h3 class="info_c3">Information Required For Weekly Email Sign Up</h3>
                  <div class="name_c3">
                     <label>Email
                              <img src={require("../assets/images/about-icon.png")} />
                     </label>
                     <span><input type="text" class="form-control email_c3" placeholder="" onChange={(e) => this.handleWeeklySignup(e, "email")} /></span>
                     <label class="home_c3">Home Address</label>
                     <ul class="current_c3">
                        <li><img src={require("../assets/images/location-512.png")} /></li>
                        <li><button class="use_my"><img src={require("../assets/images/Asset_12-512.png")} />Use my current location</button></li>
                     </ul>
                     <h5 class="enter_cs3">Enter your location details</h5>
                     <label>Pin Code*</label>
                     <span><input type="text" class="form-control" placeholder="Pin Code"
                        onChange={(e) => this.handleWeeklySignup(e, "pincode")}
                     /></span>
                     <label>State*</label>
                     <select class="form-control"
                        value={this.state.province}
                        onChange={(e) => this.handleWeeklySignup(e, "province")}
                     >
                        {this.ProvinceList}
                     </select>
                     <label>City*</label>
                     <span><input type="text" class="form-control" placeholder="City"
                        onChange={(e) => this.handleWeeklySignup(e, "city")}
                     /></span>
                     <label>
                        Address*
                           </label>
                     <span> <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"
                        onChange={(e) => this.handleWeeklySignup(e, "address")}
                     ></textarea></span>
                     <ul class="button_cs">
                        <li class="cancel_c3">
                           {/* <a href="49-step-3-signup.html" class="skipnew"> */}
                              <button class="save" onClick={()=>this.setState({StepTwoView:!this.state.StepTwoView})}>Skip</button>
                              {/* </a> */}
                              </li>
                        <li><button class="save" data-toggle="modal" data-target="#exampleModal" onClick={
                           () => this.verifyEmail()
                           // () => this.setState({ modalStatus: !this.state.modalStatus })
                        } >Submit</button></li>
                     </ul>
                  </div>
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
                                       <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={
                                          ()=>this.resendHandler()
                                          }>
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
                           <h5>Otp has been sent to your registered email</h5>
                        </div>
                        <div style={{ textAlign: "center" }} >
                           <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })} >OK</button>
                        </div>
                     </form>
                  </ModalBody>
               </Modal>
            </div>
      )
   }
}

// export default ManageInfostep2
const mapStateToProps = state => {
   console.log("change state", state)
   return {
      applicatonkey: state.AuthReducer.userData

   }
}
export default connect(mapStateToProps)(ManageInfostep2);
