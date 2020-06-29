

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { validateOtp, validateMobileNo, validateEmail, validatePassword, validateCFPassword } from '../utils/validation/Validation';
import ApiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { retailerProfileAction } from "../redux/action/ProfileDetailsAction";
import { FilePicker } from 'react-file-picker'

let file64 = null

//={import { validateOtp,validateMobileNo } from '../utils/validation/Validation';
// 542a0596fd65c3351774d55bb1506619019389ac

class ManageInfoRetailer extends Component {
    constructor(props) {
        super(props)
        // this.handleUploadFile = this.handleUploadFile.bind(this);
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

            mobileno: "",
            mobilenoErrorMessage: "",
            mobilenoStatus: false,

            mobileno1: "",
            mobilenoErrorMessage1: "",
            mobilenoStatus1: false,


            modalStatus: false,
            modalStatusResend: false,
            shopName:"",
            shopNumber:"",
            floorNumber:"",
            martName:"",
            email:"",
            registeredBusinessName:"",
            registeredBusinessAddress:"",
            pinCode:"",
            state:"",
            city:"",
            address:"",
            GSTIN:""

        }
    }

    componentDidMount() {
        // this.props.action.retailerProfileAction(this.props.applicationData.token)
        this.props.action.retailerProfileAction(this.props.applicationData.token)
        
    }

    submitHandler = () => {
        if (this.state.otpStatus) {
            if (this.state.otpStatus2) {
                if (this.state.otpStatus3) {
                    if (this.state.otpStatus4) {

                        // alert('Submit Successfully');
                        // window.location.href = "SignupRetailer";
                        this.setState({ modalStatusResend: false })
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

    handlemobilenoInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

        this.state.mobilenoErrorMessage = validateMobileNo(value).error;
        this.state.mobilenoStatus = validateMobileNo(value).status;

    }

    handlemobilenoInput1 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

        this.state.mobilenoErrorMessage1 = validateMobileNo(value).error;
        this.state.mobilenoStatus1 = validateMobileNo(value).status;

    }

    handleShopNameInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

       
    }
    handleShopNumberInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

      
    }

    handlefloorNumberInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

       
    }

    handleRegisteredBusinessNameInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

     
    }
    handleRegisteredBusinessAddressInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

    }
    handlePinCodeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

      
    }
    handleAddressInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

    }
    handleGSTINInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

   
    }



    mobileOTPHandler() {

        try {
            ApiRequest({ "mobileNumber":"7979862051" }, '/retailer/verifyMobile', 'POST',this.props.applicationData.token)
                .then((resp) => {
                    console.log('responseOTP====>', resp);

                    switch (resp.status) {
                        case (200):
                            {
                                if (resp.data.responseCode == 200) {
                                      this.setState({ modalStatus: !this.state.modalStatus });
                                      
                                    ToasterFunction("info", "OTP sent Successfully");
                                }

                                else if (resp.data.responseCode == 404) {
                                    ToasterFunction("info", "Data not found, internal server error");
                                }
                                else if (resp.data.responseCode == 500) {
                                    ToasterFunction("error", "Internal Server Error");
                                }
                            }
                        case (900): {
                            if (resp.status == 900) {
                                ToasterFunction("error", "Please check your internet connection")
                            }
                        }
                    }

                })
        } catch (error) {
            console.log('errorresponse', error);
            // ToasterFunction("error", "Network error, please contact the administrator");
        }

    }
    mobileOTPHandler1() {

        try {
            ApiRequest({ "mobileNumber":"7979862051" }, '/retailer/verifyMobile', 'POST',this.props.applicationData.token)
                .then((resp) => {
                    console.log('responseOTP====>', resp);

                    switch (resp.status) {
                        case (200):
                            {
                                if (resp.data.responseCode == 200) {
                                      this.setState({ modalStatus: !this.state.modalStatus });
                                    
                                    ToasterFunction("info", "OTP sent Successfully");
                                }

                                else if (resp.data.responseCode == 404) {
                                    ToasterFunction("info", "Data not found, internal server error");
                                }
                                else if (resp.data.responseCode == 500) {
                                    ToasterFunction("error", "Internal Server Error");
                                }
                            }
                        case (900): {
                            if (resp.status == 900) {
                                ToasterFunction("error", "Please check your internet connection")
                            }
                        }
                    }

                })
        } catch (error) {
            console.log('errorresponse', error);
            // ToasterFunction("error", "Network error, please contact the administrator");
        }

    }

    submitmobilenoHandler = () => {
        if (this.state.mobilenoStatus) {
           this.mobileOTPHandler()
           
            // alert('Submit Successfully');
            //  window.location.href = "SignupRetailer";
            // this.setState({ modalStatus: false })
            
        } else { this.setState({ otpStatus: false, mobilenoErrorMessage: "*Please enter Mobileno" }) }
    }

    submitmobilenoHandler1 = () => {
        if (this.state.mobilenoStatus1) {
            this.mobileOTPHandler1()
            // alert('Submit Successfully');
            //  window.location.href = "SignupRetailer";
            // this.setState({ modalStatus: false })
             
            
        } else { this.setState({ otpStatus: false, mobilenoErrorMessage1: "*Please enter Mobileno" }) }
    }
    resendOTPHandler() {

        try {
            ApiRequest({ "mobileNumber":"7979862051" }, '/retailer/verifyMobile', 'POST',this.props.applicationData.token)
                .then((resp) => {
                    console.log('responseOTP====>', resp);

                    switch (resp.status) {
                        case (200):
                            {
                                if (resp.data.responseCode == 200) {
                                    this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })
                                    ToasterFunction("info", "OTP Resend Successful");
                                }

                                else if (resp.data.responseCode == 404) {
                                    ToasterFunction("info", "Data not found, internal server error");
                                }
                                else if (resp.data.responseCode == 500) {
                                    ToasterFunction("error", "Internal Server Error");
                                }
                            }
                        case (900): {
                            if (resp.status == 900) {
                                ToasterFunction("error", "Please check your internet connection")
                            }
                        }
                    }

                })
        } catch (error) {
            console.log('errorresponse', error);
            // ToasterFunction("error", "Network error, please contact the administrator");
        }

    }
    handleUploadFile(FileObject) {
        
        let file = null;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(FileObject)
        fileReader.onload = function(fileLoadedEvent) {
            file = fileLoadedEvent.target.result;
            // Print data in console
            console.log(file);
            file64 = file
            
        };  
        fileReader.onerror = function (error) {
            console.log('Error: ', error);
        };
        
    }

    saveButtonHandler() {

  console.log("file64=====>",file64)

       let obj = {
        shopName:this.state.shopName,
        shopNumber:this.state.shopNumber,
        floorNumber:this.state.floorNumber,
        mobileNumber:"7979862051",
        email:this.state.email,
        GSTIN:this.state.GSTIN,
        registeredBusinessName:this.state.registeredBusinessName,
        registeredBusinessPhoneNumber:"7979862051",
        pinCode:this.state.pinCode,
        city:"Patna",
        state:"Bihar",
        address:"Isapur",
       }

        console.log("retailer/manage=====>",obj)
        try {
            ApiRequest( obj , '/retailer/manage', 'PUT',this.props.applicationData.token)
               .then((resp) => {
                  console.log('response====>/retailer/manage', resp);

                  switch (resp.status) {
                     case (200):
                         {
                           if (resp.data.responseCode == 200) {
                            this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })
                            ToasterFunction("info", "OTP sent Successfully");
                        }

                           else if (resp.data.responseCode == 404) {
                             ToasterFunction("info", "Data not found, internal server error");
                         }
                         else if (resp.data.responseCode == 500) {
                             ToasterFunction("error", "Internal Server Error");
                         }
                     }
                     case (900): {
                         if (resp.status == 900) {
                             ToasterFunction("error", "Please check your internet connection")
                         }
                     }
                 }

               })
         } catch (error) {
            console.log('errorresponse', error);
            // ToasterFunction("error", "Network error, please contact the administrator");
         }

    }

    




    render() {
        return (
            <div>

                <div class="tab-pane fade show active " id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h3 class="info_c3">Manage General Info</h3>
                    <div class="name_c3">
                        <span class="name">
                            <label>Shop Name*</label>
                            <p><input name="shopName" 
                             onChange={(event) => this.handleShopNameInput(event)}
                            type="text" class="form-control"
                            placeholder="Shop name" /></p>
                        </span>
                        <span class="name">
                            <div class="shopfloor">
                                <div class="shop">
                                    <label>Shop Number*</label>
                                    <ul class="select">
                                        <li>
                                            <input 
                                            name="shopNumber" 
                                            onChange={(event) => this.handleShopNumberInput(event)}
                                            type="text" class="form-control" placeholder="Shop number" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="floor">
                                    <label>Floor Number*</label>
                                    <ul class="select">
                                        <li><input name="floorNumber" 
                                            onChange={(event) => this.handlefloorNumberInput(event)} 
                                            type="text" class="form-control" placeholder="9" /></li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                        <span class="name">
                            <label>Mart Name* </label>
                            <select class="form-control">
                                <option>Mart Name</option>
                                <option>ab</option>
                            </select>
                        </span>
                        <span class="name">
                            <label> Mobile Phone Number for Managing Coupons and Getting
                                 Communications From  LH *</label>
                            <div class="cover-phoneno no-minht">
                                <div class="code">
                                    <select class="form-control">
                                        <option selected>+91</option>
                                        <option>+92</option>
                                        <option>+92</option>
                                    </select>
                                </div>
                                <div class="code-no pos-rel">
                                    <input
                                        name="mobileno"
                                        type="text" class="form-control" placeholder="9999999999"
                                        onChange={(event) => this.handlemobilenoInput(event)}
                                    />
                                    <div class="green-verify">
                                        <button type="button" class="btn" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal"
                                            onClick={() => this.submitmobilenoHandler()}
                                        >verify</button>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <label style={{ color: "red" }}>
                                    {this.state.mobilenoErrorMessage}
                                </label>
                            </div>
                        </span>
                        <span class="name">
                            <label>Shop Phone Number to be Displayed on Coupons *</label>
                            <div class="cover-phoneno no-minht" style={{ position: "relative" }}>
                                <div class="code">
                                    <select class="form-control">
                                        <option selected>+91</option>
                                        <option>+92</option>
                                        <option>+92</option>
                                    </select>
                                </div>
                                <div class="code-no pos-rel" >
                                    <input
                                        name="mobileno1"
                                        type="text"
                                        class="form-control"
                                        placeholder="9999999999"
                                        onChange={(event) => this.handlemobilenoInput1(event)}
                                    />
                                    <div class="green-verify">
                                        <button type="button" class="btn" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal"
                                            onClick={() => this.submitmobilenoHandler1()}
                                        >verify</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label style={{ color: "red" }}>
                                    {this.state.mobilenoErrorMessage1}
                                </label>
                            </div>
                        </span>
                        <span class="name">
                            <label> Email id for Managing Coupons and Getting Communications From LH</label>
                            <p><input 
                            name="email" 
                            onChange={(event) => this.handleEmailInput(event)} 
                          type="text" class="form-control" placeholder="bhaswti2526@gmail.com" /></p>
                        </span>
                        <span class="name">
                            <label>Registered Business Name *</label>
                            <p><input name="registeredBusinessName" 
                            onChange={(event) => this.handleRegisteredBusinessNameInput(event)} 
     type="text" class="form-control" placeholder="Business Name " /></p>
                        </span>
                        <span class="name">
                            <label> Registered Business Address*</label>
                            <p><input name="registeredBusinessAddress" 
                            onChange={(event) => this.handleRegisteredBusinessAddressInput(event)} 
     type="text" class="form-control" placeholder="New Delhi  " /></p>
                        </span>
                        <div class="address">
                            <h3 class="enregbus">Enter Registered Business Address:</h3>
                            <span class="name">
                                <label>Pin Code*</label>
                                <input name="pinCode" 
                            onChange={(event) => this.handlePinCodeInput(event)} 
     type="text" class="form-control" placeholder="110025" />
                            </span>
                            <span class="name">
                                <label>State*</label>
                                <select class="form-control">
                                    <option>UP</option>
                                </select>
                            </span>
                            <span class="name">
                                <label>City*</label>
                                <select class="form-control">
                                    <option>Noida</option>
                                </select>
                            </span>
                            <span class="name">
                                <label>Address*</label>
                                <textarea 
                                name="address" 
                                onChange={(event) => this.handleAddressInput(event)} 
                                class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                            </span>
                            <span class="name">
                                <label>GSTIN *</label>
                                <input  name="GSTIN" 
                                onChange={(event) => this.handleGSTINInput(event)} 
                             type="text" class="form-control" placeholder="123456789" />
                            </span>
                            <span class="name">
                                <div class="downproof">
                                    <label>Download Proof *</label>
                                    <div class="dow">


                                    <FilePicker
                                    extensions={['pdf']}
                                    onChange={FileObject => this.handleUploadFile(FileObject)}
                                    onError={errMsg => console.log(errMsg)}
                                >
                                   
                                
                                        <img src={require("../assets/images/download.png")} />
                                        </FilePicker>
                                    </div>
                                </div>
                            </span>
                           


                            <ul class="button_cs">
                                <li class="cancel_c3"><button class="save">Cancel</button></li>
                                {/* <a href="101-coupon-template.html">   <li><button class="save">Save</button></li></a> */}
                                <li> <Link to="/Coupon_template" > <button class="save" onClick={() => this.saveButtonHandler()}>Save</button> </Link></li>
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
                                                    <p class="my-3">Please enter the 4 digits OTP sent on your registered phone number.</p>
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
                                                        <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.resendOTPHandler()}>
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
                                    <div class="modal-body">
                                        <div class="web-pagemodal">
                                            <h5 class="text-center mt-3"> OTP verification</h5>
                                            <form>
                                                <div class="register-cont">
                                                    <p class="my-3">Please enter the 4 digits OTP sent on your registered phone number.</p>
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
                                                        <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.resendOTPHandler()}>
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
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("stateLogin-------", state)
    return {
        applicationData: state.AuthReducer.userData

    }

}
const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ retailerProfileAction }, dispatch)
    }
}

// export default componentName
export default connect(mapStateToProps, mapDispatchToProps)(ManageInfoRetailer);
// <<<<<<< HEAD
// const mapSateToProps = state => {
//     console.log("change state", state)
//     return {
//         applicationkey: state.AuthReducer.userData
//     }
// }
// export default connect(mapSateToProps, { loginAction })(ManageInfoRetailer);

// =======
// >>>>>>> 542a0596fd65c3351774d55bb1506619019389ac

