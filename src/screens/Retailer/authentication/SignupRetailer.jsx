import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { Link } from 'react-router-dom';

export default class SignupRetailer extends Component {
    render() {
        return (
            <div>


                <body>
                    <Header />

                    <section>
                        <div class="container-fluid">
                            <div class="cover-laging">
                                <h1>RETAILER SIGN UP</h1>
                                <form>

                                    <div class="form-group">
                                        <label>Mart Name*</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Mart name</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <GlobalValidations
                                        divClass="form-group"
                                        label="Shop Name*"
                                        labelClass=""
                                        inputType="text"
                                        inputId=""
                                        inputPlaceholder="Shop Name"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                    />
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label >Shop Number*</label>
                                            <input type="text" class="form-control shpnm" placeholder="Shop Number" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Floor Number*</label>
                                            <input type="text" class="form-control shpnm" placeholder="2" />
                                        </div>
                                    </div>

                                    <div class="eimanaging">
                                        Email id for Managing Coupons and Getting Communications From LH *
                  </div>


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
                                        <label class="form-check-label agree">I agree to <a data-toggle="modal" data-target="#termscondtions"> <Link to="/TermsCondition" > Terms and Conditions</Link></a> </label>
                                    </div>
                                    <Link to="SignupOtp"><button type="button" class="btn btn-theme" >SIGNUP</button> </Link>
                                    <div class="have-an">
                                        <p>Already Have an account? <Link to="LoginRetailer">Login</Link></p>
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
