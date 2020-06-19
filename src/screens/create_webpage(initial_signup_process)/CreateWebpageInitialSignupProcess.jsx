import React, { Component } from 'react'
import Footer from '../../components/Footer';
import { Link, Switch } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';

import { validateOtp, validateMobileNo, validateDialCode } from '../../utils/validation/Validation';
import Header2 from '../../components/Header2';
import CountriesJSON from '../../utils/JSON/country.json';
import apiRequest from '../../api/Apirequest';
import ToasterFunction from '../../components/ToasterFunc';

export default class CreateWebpageInitialSignupProcess extends Component {
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

            mobileno: "",
            mobilenoErrorMessage: "",
            mobilenoStatus: false,

            dialCode: "+91",
            dialCodeErrorMessage: "",
            dialCodeStatus: true,



            modalStatus: false,
            modalStatusResend: false
        }
    }

    submitHandler = () => {
        if (this.state.otpStatus) {
            if (this.state.otpStatus2) {
                if (this.state.otpStatus3) {
                    if (this.state.otpStatus4) {

                        // alert('Submit Successfully');
                        // window.location.href = "SignupRetailer";
                        // this.setState({ modalStatus: false })
                        try{
                            apiRequest({ otp: this.state.otp + this.state.otp2+ this.state.otp3+ this.state.otp4 }, '/retailer/verifyOTP', 'POST')
                            .then((resp) => {
                                console.log("response", resp)
                                switch (resp.status) {
                                    case (200): {
                                        if (resp.data.responseCode == 200) {
                                            this.props.history.push(`/SignupRetailer/${this.state.mobileno}`)
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

    handleDialCode = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log("valueset==>", value)

        this.state.dialCodeErrorMessage = validateDialCode(value).error;
        this.state.dialCodeStatus = validateDialCode(value).status;
    }

    getInitialSignupRetailer = () => {
        try {
            apiRequest({ mobileNumber: this.state.mobileno }, '/retailer/signUpRetailer', 'POST')
                .then((resp) => {
                    console.log("response", resp)
                    switch (resp.status) {
                        case (200): {
                            if (resp.data.responseCode == 200) {
                                ToasterFunction("success", "Successfully sent otp . Please verify");
                                this.setState({ modalStatus: !this.state.modalStatus });

                            }
                            else if (resp.data.responseCode == 402) {
                                ToasterFunction("Already Signedup,Need login");
                                this.props.history.push("/LoginRetailer")

                                this.setState({ dialCodeStatus: !this.state.dialCodeStatus })
                            }
                            else if (resp.data.responseCode == 400) {
                                ToasterFunction("OTP Sent");
                                this.setState({ modalStatus: !this.state.modalStatus });
                                // this.props.history.push(`/SignupRetailer/${this.state.mobileno}`)

                                this.setState({ dialCodeStatus: !this.state.dialCodeStatus })
                            }
                            else if (resp.data.responseCode == 403) {
                                ToasterFunction("Mobile OTP verified");
                                this.props.history.push(`/SignupRetailer/${this.state.mobileno}`)

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
    }

    submitmobilenoHandler = () => {
        if (this.state.mobilenoStatus) {
            if (this.state.dialCodeStatus) {
                console.log("dialCodeStatus", this.state.dialCodeStatus)
                this.getInitialSignupRetailer();

            } else { this.setState({ dialCodeStatus: false, dialCodeErrorMessage: "*Please select Dial Code" }) }
        } else { this.setState({ mobilenoStatus: false, mobilenoErrorMessage: "*Please enter Mobileno" }) }
    }

    //to return list of all dial_code as per countries
    DialCode = CountriesJSON.map((item, index) => {
        return <option value={index} >{item.dial_code}</option>
    });



    render() {
        return (
            <div>
                <body>
                    {/* <Header2 /> */}
                    <Header2 />
                    <section class="bg-form">
                        <div class="cover-forgot bg-whiteform">
                            <h1>Join Us:</h1>
                            <form>
                                <div class="form-group">
                                    <label>Mobile Number</label>
                                    <div class="cover-phoneno">
                                        <div class="code">
                                            <select class="form-control"
                                                name="dialCode"
                                                onChange={(event) => this.handleDialCode(event)}
                                            >
                                                <option selected>+91</option>
                                                {this.DialCode}
                                                {/* <option>+92</option>
                                                <option>+92</option> */}
                                            </select>
                                            <br />
                                            <div>
                                                <label style={{ color: "red" }}>
                                                    {this.state.dialCodeErrorMessage}
                                                </label>
                                            </div>
                                        </div>

                                        <div class="code-no">
                                            <input
                                                name="mobileno"
                                                type="text" class="form-control"
                                                placeholder="Enter your phone number"
                                                onChange={(event) => this.handlemobilenoInput(event)}
                                            />
                                            <br />
                                            <div>
                                                <label style={{ color: "red" }}>
                                                    {this.state.mobilenoErrorMessage}
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div>
                                            <label style={{color:"red"}}>
                                                {this.state.mobilenoErrorMessage}
                                            </label>
                                        </div> */}
                                    <div class="join-usbttn">
                                        <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#otpmodal-2" onClick={() => this.submitmobilenoHandler()} >SUBMIT</button>
                                    </div>

                                    {/* <p onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>
                                        Log Out
                                    </p>  */}


                                </div>
                                <div class="text-center mt-5">
                                    <p>Already have an account ?
                                        {/* <a href="3-login.html">Login</a> */}
                                        <Link to="/LoginCustomer" >Login</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section class="mb-5">
                        <div class="container">
                            <div class="cover-basic">
                                <div class="basic ">
                                    <h5 class="text-center mb-2 font-weight-bold">Lighthouse (LH) Increases Footfall</h5>
                                    <ul class="lh-list">
                                        <li>Provide your coupon to your consumer to have their repeat business</li>
                                        <li>A new consumer can search for your couponusing LH</li>
                                        <li>Coupon will be pushed to consumer through emails based on their wish list</li>
                                        <li>Coupon can be shared by you or by consumers with family, friends and neighbours</li>
                                    </ul>
                                </div>
                                <div class="basic ">
                                    <h5 class="text-center mb-2 font-weight-bold">Lighthouse – How it works?</h5>
                                    <ul class="lh-list">
                                        <li>Retailer creates & publishes a coupon using LH</li>
                                        <li>When the consumer is done paying, ask him/her to scan a QR code get a coupon for next visit</li>
                                        <li>For each consumer who signs up, Retailer earns 5 points or Coupon Display Credits (CDC)</li>
                                        <li>Every time a consumer views a coupon, Retailer is charged a CDC</li>
                                        <li>5 CDCs ensures 5 views of a Coupon; no cost for listing Coupon</li>
                                        <li>More Coupon views will results in more business</li>
                                    </ul>
                                </div>
                                <div class="basic ">
                                    <h5 class="text-center mb-2 font-weight-bold">LH Advantage for you</h5>
                                    <ul class="lh-list">
                                        <li>You can create as many coupon as you want easily using LH for small sign up cost</li>
                                        <li>Each additional pamphlet costs you money. Each additional LH Coupon costs  you nothing</li>
                                        <li>Consumer does not want to hold pamphlets. LH Coupons are sent to mobile of the consumer</li>
                                        <li>Consumer has no incentive to save pamphlets. LH Coupons are cash incentives stored in mobiles</li>
                                        <li>LH Coupons can be searched online</li>
                                        <li>Consumer is reminded when Coupons are expiring</li>
                                    </ul>
                                </div>
                                <div class="basic ">
                                    <h5 class="text-center mb-2 font-weight-bold">Benefits of distributing coupons</h5>
                                    <ul class="lh-list">
                                        <li>Branding and awareness : Coupons work as advertisements at minimal cost</li>
                                        <li>Retain existing customers : Coupons bring existing customers from trying out new and keep coming back to you</li>
                                        <li>Getting new customers : People love discounts and coupons attract them to try your offering</li>
                                        <li>Demand distribution : Providing coupons for off-peak hours can help better utilise your assets and resources to earn higher revenue</li>
                                        <li>Clearing excess or old stock: You can run a campaign to increase your sales of item that are not selling by discounting them</li>
                                    </ul>
                                </div>
                                <div class="basic ">
                                    <h5 class="text-center mb-2 font-weight-bold">Benefits to your consumer (Shopper)</h5>
                                    <ul class="lh-list">
                                        <li>Consumer saves money on his/her next visit to store</li>
                                        <li>Consumer can search for your Coupon if he/she does not have one</li>
                                        <li>Consumer doesn’t have to save pamphlet. He/she can carry Coupon in his/her mobile</li>
                                        <li>Consumer can create a wish list & receive Coupons from nearby shops to his/her email</li>
                                        <li>Consumer can share Coupon with family & friends</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />




                    <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "90px" }} >
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
                                                                onChange={(event) => this.handleOtpInput(event)} />
                                                        </li>
                                                    </ul>
                                                    <div>
                                                        <label class="validation-hint">
                                                            {this.state.otpErrorMessage}
                                                        </label>
                                                    </div>
                                                    <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })}>
                                                        Resend
                                                     </p></Link>
                                                </div>
                                            </div>
                                            <div class="modalsumit">

                                                <button type="button" class="btn btn-theme mb-4" data-toggle="modal" data-target="#otpmodal-2" onClick={() => this.submitHandler()}>SUBMIT</button>
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
                </body>
            </div>
        )
    }
}
