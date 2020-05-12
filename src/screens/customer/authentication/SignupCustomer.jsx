import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { Link } from 'react-router-dom';
import Header4 from '../../../components/Header4';

export default class SignupCustomer extends Component {
    render() {
        return (
            <div>

                {/* <section className="center-form"> */}
                <body>
                    {/* <Header /> */}
                <Header4 /> 
                    <section>
                        <div class="container-fluid">
                            <div class="cover-laging">
                                <h1>SIGN UP</h1>
                                <form>
                                    <div class="user-retailer">
                                        <ul>
                                            <li class="active"><a href="#">User</a></li>
                                            <li><Link  to="SignupRetailer">Retailer</Link></li>
                                        </ul>
                                    </div>
                                    {/* <div class="form-group">
                                        <label>Name*</label>
                                        <input type="text" class="form-control shpnm" placeholder="Name" />
                                    </div> */}
                                    <GlobalValidations
                                        divClass="form-group"
                                        label="Name*"
                                        labelClass=""
                                        inputType="text"
                                        inputId=""
                                        inputPlaceholder="Name"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                    />
                                    <div class="form-group">
                                        <label>Phone Number*</label>
                                        <div class="cover-phoneno no-spase">
                                            <div class="code">
                                                <select class="form-control">
                                                    <option selected>+91</option>
                                                    <option>+92</option>
                                                    <option>+92</option>
                                                </select>
                                            </div>
                                            {/* <div class="code-no">
                                                <input type="text" class="form-control" />
                                            </div> */}
                                            <GlobalValidations
                                                divClass="code-no"
                                                inputType="text"
                                                textInputClassName="form-control"
                                            />

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="fa-ital">Retailer Referral Code
                        <i class="fa fa-info-circle" aria-hidden="true">
                                                <label class="infospan">Retailer Referral Code, if not already filled, is optional and can be obtained from a member Retailer</label>
                                            </i>
                                        </label>
                                        <input type="text" class="form-control shpnm" placeholder="Name" />
                                    </div>
                                    {/* <div class="form-group">
                                        <label>Password</label>
                                        <input type="text" class="form-control shpnm" placeholder="Password" />
                                    </div> */}
                                    <GlobalValidations
                                        divClass="form-group"
                                        label="Password"
                                        labelClass=""
                                        inputType="text"
                                        inputId=""
                                        inputPlaceholder="Password"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                    />
                                    {/* <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input type="text" class="form-control shpnm" placeholder="Confirm Password" />
                                    </div> */}
                                    <GlobalValidations
                                        divClass="form-group"
                                        label="Confirm Password"
                                        labelClass=""
                                        inputType="text"
                                        inputId=""
                                        inputPlaceholder="Confirm Password"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                    />
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label agree">I agree to <a data-toggle="modal" data-target="#termscondtions">Terms and Conditions</a> </label>
                                    </div>
                                    <Link to="/OtpScreenUser"><button type="button" class="btn btn-theme" >SIGNUP</button> </Link>
                                    <div class="have-an">
                                        <p>Already Have an account? <Link to="LoginCustomer">Login</Link></p>
                                    </div>
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
