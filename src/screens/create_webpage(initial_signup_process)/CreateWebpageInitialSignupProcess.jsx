import React, { Component } from 'react'
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { validateOtp } from '../../utils/validation/Validation';

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



            modalStatus: false,
            modalStatusResend: false
        }
    }

    submitHandler = () => {
        if (this.state.otpStatus) {
            if (this.state.otpStatus2) {
                if (this.state.otpStatus3) {
                    if (this.state.otpStatus4) {
                //    function  goTo() { <Link to="/SignupCustomer" /> }
                         alert('Submit Successfully');
                        this.setState({modalStatus:false}) 
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

    render() {
        return (
            <div>
                <body>
                    <Header2 />
                    <section class="bg-form">
                        <div class="cover-forgot bg-whiteform">
                            <h1>Join Us:</h1>
                            <form>
                                <div class="form-group">
                                    <label>Mobile Number</label>
                                    <div class="cover-phoneno">
                                        <div class="code">
                                            <select class="form-control">
                                                <option selected>+91</option>
                                                <option>+92</option>
                                                <option>+92</option>
                                            </select>
                                        </div>
                                        <div class="code-no">
                                            <input type="text" class="form-control" placeholder="Enter your phone number" />
                                        </div>
                                        
                                    </div>
                                    <div class="join-usbttn">
                                        <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#otpmodal-2" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>SUBMIT</button>
                                    </div>

                                    {/* <p onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>
                                        Log Out
                                    </p>  */}


                                </div>
                                <div class="text-center mt-5">
                                    <p>Already have an account ? 
                                        {/* <a href="3-login.html">  */} 
                                        <Link to="/LoginCustomer" >Login</Link>
                                      
.                                    </p>
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
                                                    <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.setState({modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })}>
                                                        Resend
                                                     </p></Link>
                                                </div>
                                            </div>
                                            <div class="modalsumit">
                                                {/* <a href="25-signup-user.html"> */}
                                                <button type="button" class="btn btn-theme mb-4" data-toggle="modal" data-target="#otpmodal-2" onClick={() => this.submitHandler()}>SUBMIT</button>
                                                {/* </a> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                {/* <div class="">
                                    <label>Are you want to sure logout?</label>
                                    <div class="btn-cover">
                                        <Link to="/Login" ><button onClick={() => this.setState({ modalStatus: false })} >Yes</button></Link>
                                    </div>

                                    <div class="">
                                        <Link to="/" ><button onClick={() => this.setState({ modalStatus: false })}>No</button></Link>
                                    </div>
                                </div> */}
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



                    {/* <div class="modal fade" id="otpmodal-2" tabindex="-1" role="dialog" aria-labelledby="otpmodal-2" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
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
                                                        <li><input type="text" class="form-control" value="" /></li>
                                                        <li><input type="text" class="form-control" value="" /></li>
                                                        <li><input type="text" class="form-control" value="" /></li>
                                                        <li><input type="text" class="form-control" value="" /></li>
                                                    </ul>
                                                    <a href="#" data-toggle="modal" data-dismiss="modal" data-target="#otpmodal">Resend</a>
                                                </div>
                                            </div>
                                            <div class="modalsumit">
                                                <a href="25-signup-user.html"><button type="button" class="btn btn-theme mb-4" data-toggle="modal" data-target="#otpmodal-2">SUBMIT</button></a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="modal fade" id="logout" tabindex="-1" role="dialog" aria-hidden="true">
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
                    {/* <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog" aria-hidden="true">
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
                    </div> */}
                    {/* <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/app.js"></script>
      <script>
         $('.top-slider').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         
         ]
         });
      </script> */}

                </body>
            </div>
        )
    }
}
