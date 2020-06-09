import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { validateOtp, validateMobileNo } from '../../../utils/validation/Validation';
import Apirequest from "../../../api/Apirequest"

export default class ForgotPasswordOtp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalStatus: false,
            modalStatusResend: false,

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

            // mobileno: props.mob,
            mobilenoErrorMessage: "",
            mobilenoStatus: false,

            temp: this.props.location.pathname.split("/")


            //   modalStatus: false,
            //   modalStatusResend: false

        }
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
    submitHandler = () => {
        if (this.state.otpStatus) {
            if (this.state.otpStatus2) {
                if (this.state.otpStatus3) {
                    if (this.state.otpStatus4) {
                        // console.log("pppppp--",this.state.otp+this.state.otp2+this.state.otp3+this.state.otp4)
                        console.log("mobilenumber",this.state.temp[2])
                        var credentials = {
                            "mobileNumber": this.state.temp[2],
                            "otp": this.state.otp+this.state.otp2+this.state.otp3+this.state.otp4
                         }
                         Apirequest(credentials, "/user/otpVerify", "POST")
                         .then((resp) => {
                            // console.log("resenddddd",resp)
                            // console.log("otpppp", resp.data)
                            switch (resp.status) {
                               case 200: {
                                  if (resp.data.responseCode == 200) {
                                     // alert("Otp has been sent to your registered mobile number")
                                     window.location.href = '/Resetpassword'
                                    
                                  }
                                  else if (resp.data.responseCode == 404) {
                                     alert("This user does not exist.")
                                  }
                                  else if (resp.data.responseCode == 500) {
                                     alert("Internal Server error")
                                  }
                                  else{
                                      alert(resp.data.responseMessage)
                                  }
                               }
                                  break;
                               default:
                                  console.log("default err", resp.data.error)
                            }
                         })
                        // alert('Submit Successfully');
                        // window.location.href = "/Resetpassword"
                        //    this.setState({ modalStatus: false })



                    } else { this.setState({ otpStatus4: false, otpErrorMessage: "*Please enter OTP" }) }
                } else { this.setState({ otpStatus3: false, otpErrorMessage: "*Please enter OTP" }) }
            } else { this.setState({ otpStatus2: false, otpErrorMessage: "*Please enter OTP" }) }
        } else { this.setState({ otpStatus: false, otpErrorMessage: "*Please enter OTP" }) }
    }

    resendHandler = () => {
        // this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })
        // var temp= this.props.location.pathname;
        // console.log("----->",this.state.temp[2])
        // var Array = this.state.temp.split("/")
        var credentials={
            "mobileNumber": this.state.temp[2]
        }
        // console.log(temp.split("/"))
        // console.log(this.state.temp[2])
        Apirequest(credentials,"/user/resendOTP","POST")
        .then((resp)=>{
            // console.log("resenddddd",resp)
            console.log("otpppp",resp.data.result)
            switch(resp.status){
                case 200: {
                   if(resp.data.responseCode==200)
                   {
                      alert("Otp has been sent to your registered mobile number")
                   }
                   else if(resp.data.responseCode==404)
                   {
                      alert("Provided email/mobile number is not registered")
                   }
                   else if(resp.data.responseCode==500)
                   {
                      alert("Internal Server error")
                   }
                }
                break;
                default:
                   console.log("default err",resp.data.error)
             }
        })
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
                                <form>
                                    <div class="register-cont">
                                        <p>Please enter the 4 digits OTP sent on your registered Email ID or Phone Number</p>
                                    </div>
                                    <div class="form-group">
                                        <div class="otp-box">
                                            <p>Enter 4 - digits code</p>
                                            {/* <ul>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                        </ul> */}
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




                                            {/* <a href="#" data-toggle="modal" data-target="#otpmodal">Resend</a> */}
                                            <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() =>this.resendHandler() }>
                                                Resend
                                                     </p></Link>
                                        </div>
                                    </div>
                                    {/* <a href="22-reset-password.html"><button type="button" class="btn btn-theme" >SUBMIT</button></a> */}
                                    {/* <Link to="/Resetpassword" > */}
                                    <button type="button" class="btn btn-theme" onClick={() => this.submitHandler()} >SUBMIT</button>
                                    {/* </Link> */}
                                </form>
                            </div>
                        </div>
                    </section>    <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "190px", }}>
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


                    <Footer />

                </body>



            </div>
        )
    }
}

