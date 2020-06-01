import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { Link } from 'react-router-dom';
import { signupAction } from "../../../redux/action/AuthAction"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

export class SignupCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            password: "",
            email:"",
            // cfpassword:"",
            mobileNumber: "",

            fielderr: ""
        }
    }

    submithandler = () => {
        if (this.state.fname == "" || this.state.password == "" || this.state.mobileNumber == "") {
            this.setState({ fielderr: "Please enter all fields" })
        }
        else {
            this.setState({ fielderr: "" })
            var requestData = {
                "firstName": this.state.fname,
                "mobileNumber": this.state.mobileNumber,
                "email": this.state.email,
                "password": this.state.password,
                "TeamName": this.state.teamName,
            }
            this.props.action.signupAction(requestData,()=> this.props.history.push("/OtpScreenUser"))
            //  window.location.href = "/OtpScreenUser";

        }
    }

    changehandler = (e, type) => {
        switch (type) {
            case "fullname":
                { this.setState({ fname: e.target.value }) }
                break
            case "password":
                { this.setState({ password: e.target.value }) }
                break
            case "mobileNumber":
                { this.setState({ mobileNumber: e.target.value }) }
                break
            case "email":
                { this.setState({ email: e.target.value })  }
                break
            default:
                {
                    console.log("ghfhgfh")
                }
        }

    }
    render() {
        return (
            <div>

                {/* <section className="center-form"> */}
                <body>
                    <Header />

                    <section>
                        <div class="container-fluid">
                            <div class="cover-laging">
                                <h1>SIGN UP</h1>
                                <form>
                                    {/* <div class="user-retailer">
                                        <ul>
                                            <li class="active"><a href="#">User</a></li>
                                            <li><Link  to="SignupRetailer">Retailer</Link></li>
                                        </ul>
                                    </div> */}
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
                                        realValue={this.state.fname}
                                        onChange={(e) => this.changehandler(e, "fullname")}
                                    />

                                    <GlobalValidations
                                        divClass="form-group"
                                        label="Email*"
                                        labelClass=""
                                        inputType="text"
                                        inputId=""
                                        inputPlaceholder="email"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                        realValue={this.state.email}
                                        onChange={(e) => this.changehandler(e, "email")}
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
                                                realValue={this.state.mobileNumber}
                                                onChange={(e) => this.changehandler(e, "mobileNumber")}
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
                                        realValue={this.state.password}
                                        onChange={(e) => this.changehandler(e, "password")}
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
                                    {this.state.fielderr}
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label agree">I agree to  <Link to="/TermsCondition" > Terms and Conditions</Link> </label>

                                    </div>

                                    {/* <Link to="/OtpScreenUser"> */}
                                    <button type="button" class="btn btn-theme" onClick={() => this.submithandler()}>SIGNUP</button>
                                    {/* </Link> */}
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

const mapStateToProps = state => {
    console.log("First state", state)
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ signupAction }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupCustomer);