import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                {/* <section className="center-form"> */}
                <body>
                    <Header />
                    <section>
                        <div class="container-fluid">
                            <div class="cover-laging">
                                <h1>LOGIN</h1>
                                <form>
                                    {/* <div class="form-group">
                                    <label>Phone Number :</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                                </div> */}
                                    <GlobalValidations
                                        divClass=""
                                        label="Phone Number :"
                                        labelClass=""
                                        inputType="text"
                                        inputId="exampleInputEmail1"
                                        inputPlaceholder="Enter your phone number"
                                        errorMessage=""
                                        textInputClassName="form-control"
                                    />

                                    {/* <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div> */}
                                    <GlobalValidations
                                        divClass=""
                                        label="Password:"
                                        labelClass=""
                                        inputType="password"
                                        inputId="exampleInputPassword1"
                                        inputPlaceholder="Password"
                                        errorMessage=""
                                        textInputClassName="form-control"
                                    />
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label">Remember Me</label>
                                        <label><Link to="OtpScreen_Retailer">Forgot Password ?</Link></label>
                                    </div>
                                    <GlobalButtonLinks
                                        linkLabel="Signup_User"
                                        btnType="button"
                                        btnClass="btn btn-theme"
                                        btntxt="LOGIN"
                                    />
                                    {/* <Link to="">
                                    <button type="button" class="btn btn-theme">LOGIN</button> 
                                    <GlobalButtons
                                    tnType="button"
                                    btnClass="btn btn-theme"
                                    btntxt="LOGIN"
                                    />
                                    </Link> */}
                                    <div class="have-an">
                                        <p>Don't have an account ? <Link to="Signup">Sign up</Link></p>
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
