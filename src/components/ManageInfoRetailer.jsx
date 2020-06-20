

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { validateOtp, validateMobileNo, validateEmail, validatePassword, validateCFPassword } from '../utils/validation/Validation';
import ProvinceJSON from '../utils/JSON/province.json';
import Apirequest from '../api/Apirequest';

export default class ManageInfoRetailer extends Component {
    submit = () => {
        this.setState({ modalStatus: !this.state.modalStatus })
        var requestData = {
            shopName: this.state.shopName,
            shopNumber: this.state.shopNumber,
            floorNumer: this.state.floorNumer,
            martName: this.state.martName,
            martId: this.state.martId,
            mobileNumber: this.state.mobileNumber,
            email: this.state.email,
            GSTIN: this.state.GSTIN,
            registeredBusinessName: this.state.registeredBusinessName,
            registeredBussinessAddress: this.state.registeredBussinessAddress,
            addressProof: this.state.addressProof,
            pinCode: this.state.pinCode,
            city: this.state.city,
            state: this.state.state,
            address: this.state.address,
            token: this.state.token,
        }
        Apirequest(requestData, "/retailer/business", "POST", this.props.applicationkey.token)
            .then((resp) => {
                console.log("abcd==>", resp);

            })
            .catch(e => { console.log(e) })

    }

    constructor(props) {
        super(props)
        this.state = {
            shopName: '',
            shopNumber: '',
            floorNumer: '',
            martName: '',
            martId: '',
            mobileNumber: '',
            email: '',
            GSTIN: '',
            registeredBusinessName: '',
            registeredBusinessAddress: '',
            addressProof: '',
            pinCode: '',
            city: '',
            state: '',
            address: '',
            token:'',


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
            modalStatusResend: false

        }
    }
    shopNamehandler=(event,type)=>{
        switch (type) {
            case "shopName":
                this.setState({shopName:event.target.value})
                break;
            case "shopNumber":
                this.setState({shopNumber:event.target.value})
                break;
            case "floorNumer":
                  this.setState({floorNumer:event.target.value})
                  break;
            case "email":
                      this.setState({email:event.target.value})
                      break; 
            case "registeredBussinessName":
                      this.setState({registeredBusinessName:event.target.value})
                          break;
             case "registeredBussinessAddress":
                      this.setState({registeredbussinessAddress:event.target.value})
                          break;
            case "pinCode":
                  this.setState({pinCode:event.target.value})
                  break; 
            case "GSTIN":
                      this.setState({GSTIN:event.target.value})
                      break;   
            case "city":
                          this.setState({city:event.target.value})
                          break; 
            case "state":
                          this.setState({state:event.target.value})
                          break;    
            case "address":
                          this.setState({address:event.target.value})
                          break; 
          //   case "martName":
          //                 this.setState({martName:event.target.value})
          //                 break; 
            default:
                break;
        }
      }
  

    submitHandler = () => {
        if (this.state.otpStatus) {
            if (this.state.otpStatus2) {
                if (this.state.otpStatus3) {
                    if (this.state.otpStatus4) {

                        // alert('Submit Successfully');
                        // window.location.href = "SignupRetailer";
                        this.setState({ modalStatus: false })
                        var Data = {
                        "otp": this.state.otp + this.state.otp2 + this.state.otp3 + this.state.otp4,
                        }
                        console.log("data", Data)
                        Apirequest(Data, "/retailer/verifyOTP", "POST")
                            .then((resp) => {
                                console.log("wxyz==>", resp);

                            })
                            .catch(e => { console.log(e) })





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

    submitmobilenoHandler = () => {
        if (this.state.mobilenoStatus) {
            // alert('Submit Successfully');
            //  window.location.href = "SignupRetailer";
            // this.setState({ modalStatus: false })
            this.setState({ modalStatus: !this.state.modalStatus });
            var Data = {
                "mobileno": this.state.mobileno,
            }
            console.log("Data", Data)
            Apirequest(Data, "/retailer/signUpRetailer", "POST")
                .then((resp) => {
                    console.log("wxyz==>", resp);

                })
                .catch(e => { console.log(e) })
        } else { this.setState({ otpStatus: false, mobilenoErrorMessage: "*Please enter Mobileno" }) }
    }

    submitmobilenoHandler1 = () => {
        if (this.state.mobilenoStatus1) {
            // alert('Submit Successfully');
            //  window.location.href = "SignupRetailer";
            // this.setState({ modalStatus: false })
            this.setState({ modalStatus: !this.state.modalStatus });
            var Data = {
                "mobileno1": this.state.mobileno,
            }
            console.log("Data", Data)
            Apirequest(Data, "/retailer/signUpRetailer", "POST")
                .then((resp) => {
                    console.log("wxyz==>", resp);

                })
                .catch(e => { console.log(e) })
        } else { this.setState({ otpStatus: false, mobilenoErrorMessage1: "*Please enter Mobileno" }) }
    }

    render() {
        return (
            <div>

                <div class="tab-pane fade show active " id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h3 class="info_c3">Manage General Info</h3>
                    <div class="name_c3">
                        <span class="name">
                            <label>Shop Name*</label>
                            <p><input type="text" class="form-control" placeholder="Shop name" /></p>
                        </span>
                        <span class="name">
                            <div class="shopfloor">
                                <div class="shop">
                                    <label>Shop Number*</label>
                                    <ul class="select">
                                        <li>
                                            <input type="text" class="form-control" placeholder="Shop number" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="floor">
                                    <label>Floor Number*</label>
                                    <ul class="select">
                                        <li><input type="text" class="form-control" placeholder="9" /></li>
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
                            <p><input type="text" class="form-control" placeholder="bhaswti2526@gmail.com" /></p>
                        </span>
                        <span class="name">
                            <label>Registered Business Name *</label>
                            <p><input type="text" class="form-control" placeholder="Business Name " /></p>
                        </span>
                        <span class="name">
                            <label> Registered Business Address*</label>
                            <p><input type="text" class="form-control" placeholder="New Delhi  " /></p>
                        </span>
                        <div class="address">
                            <h3 class="enregbus">Enter Registered Business Address:</h3>
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
                                <select class="form-control">
                                    <option>Noida</option>
                                </select>
                            </span>
                            <span class="name">
                                <label>Address*</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                            </span>
                            <span class="name">
                                <label>GSTIN *</label>
                                <input type="text" class="form-control" placeholder="123456789" />
                            </span>
                            <span class="name">
                                <div class="downproof">
                                    <label>Download Proof *</label>
                                    <div class="dow">
                                        <img src={require("../assets/images/download.png")} />
                                    </div>
                                </div>
                            </span>
                            <ul class="button_cs">
                                <li class="cancel_c3"><button class="save">Cancel</button></li>
                                {/* <a href="101-coupon-template.html">   <li><button class="save">Save</button></li></a> */}
                                <li> <Link to="/Coupon_template" > <button class="save">Save</button> </Link></li>
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
                    </div>

                </div>





            </div>
        )
    }
}
const mapSateToProps = state => {
    console.log("change state", state)
    return {
        applicationkey: state.AuthReducer.userData
    }
}
export default connect(mapSateToProps, { loginAction })(ManageInfoRetailer);


