import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { Link } from 'react-router-dom';
import { signupAction } from "../../../redux/action/AuthAction"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { validateEmail, validateName, validateMobileNo, validatePassword, validateCFPassword} from '../../../utils/validation/Validation'


export class SignupCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            fnameErrorMessage:null,
            fnameErrorStatus:null,

            password: "",
            passwordErrorMessage:null,
            passwordErrorStatus:null,

            email:"",
            emailErrorMessage:null,
            emailErrorStatus:null,

            cfpassword:"",
            cfpasswordErrorMessage:null,
            cfpasswordErrorStatus:null,

            mobileNumber: "",
            mobileErrorMessage:null,
            mobileErrorStatus:null,

            fielderr: "",

            termsAndPrivacy: false
        }
    }

    submithandler = () => {
        // if (this.state.fname == "" || this.state.password == "" || this.state.mobileNumber == "") {
        //     this.setState({ fielderr: "Please enter all fields" })
        // }
        // else {
        //     this.setState({ fielderr: "" })
        //     var requestData = {
        //         "firstName": this.state.fname,
        //         "mobileNumber": this.state.mobileNumber,
        //         // "email": this.state.email,
        //         "password": this.state.password,
        //     }
            
        //     this.props.action.signupAction(requestData,()=> this.props.history.push("/OtpScreenUser"))
        //     //  window.location.href = "/OtpScreenUser";

        // }

        if (this.state.termsAndPrivacy) {
            if (this.state.passwordErrorStatus &&
                this.state.fnameErrorStatus &&
                this.state.cfpasswordErrorStatus&&
                this.state.mobileErrorStatus) {
                var requestData = {
                    "firstName": this.state.fname,
                    // "Email": this.state.email,
                    "password": this.state.password,
                    "mobileNumber": this.state.mobileNumber,
                }
                this.props.action.signupAction(requestData, () => this.props.history.push(`/OtpScreenUser/${this.state.mobileNumber}`))
            }
            else {
                alert("Fill all details!")
            }
        }
        else {
            alert("Accept terms and privacy.")
        }
    }
    

    changehandler = (e, type) => {
        switch (type) {
            case "fullname":
                { this.setState({ fname: e.target.value }, 
                () => this.handleValidation("fullName"))
            }
                break
            case "password":
                { this.setState({ password: e.target.value },
                    () => this.handleValidation("password"))
                     }
                break
            case "mobileNumber":
                { this.setState({ mobileNumber: e.target.value },
                    () => this.handleValidation("mobileNumber")
                    ) }
                break
            case "email":
                { this.setState({ email: e.target.value },
                    () => this.handleValidation("email")
                    )  }
                break
                case "cfpassword":
                    { this.setState({ cfpassword: e.target.value },
                        () => this.handleValidation("cfpassword"))
                         }
                    break
            default:
                {
                    console.log("ghfhgfh")
                }
        }

    }

    handleTermsCondition=()=>{
        this.setState({
             termsAndPrivacy: !this.state.termsAndPrivacy
        })
    }

    handleValidation(key) {
        console.log('key-value', key);
        switch (key) {
            // case ("email"):
            //     var data = validateEmail(this.state.email)
            //     this.setState({ emailErrorMessage: data.error, emailErrorStatus: data.status }, () => console.log("errore", this.state))
            //     break
            case ("password"):
                var data = validatePassword(this.state.password)
                console.log("this is data of pass", data)
                this.setState({ passwordErrorMessage: data.error, passwordErrorStatus: data.status }, () => console.log("errore", this.state))
                break
            case ("fullName"):
                var data = validateName(this.state.fname)
                this.setState({ fnameErrorMessage: data.error, fnameErrorStatus: data.status }, () => console.log("errore", this.state))
                break
            case ("mobileNumber"):
                var data = validateMobileNo(this.state.mobileNumber)
                console.log("mobileNumber", data)
                this.setState({ mobileErrorMessage: data.error, mobileErrorStatus: data.status }, () => console.log("errore", this.state))
                break
                case ("cfpassword"):
                    var data = validateCFPassword(this.state.cfpassword,this.state.password)
                    console.log("this is data of pass", data)
                    this.setState({ cfpasswordErrorMessage: data.error, cfpasswordErrorStatus: data.status }, () => console.log("errore", this.state))
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
                                        errorMessage={this.state.fnameErrorMessage}
                                    />

                                    {/* <GlobalValidations
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
                                    /> */}
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
                                                errorMessage={this.state.mobileErrorMessage}
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
                                        inputType="password"
                                        inputId=""
                                        inputPlaceholder="Password"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                        realValue={this.state.password}
                                        onChange={(e) => this.changehandler(e, "password")}
                                        errorMessage={this.state.passwordErrorMessage}
                                    />
                                    {/* <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input type="text" class="form-control shpnm" placeholder="Confirm Password" />
                                    </div> */}
                                    <GlobalValidations
                                        divClass="form-group"
                                        label="Confirm Password"
                                        labelClass=""
                                        inputType="password"
                                        inputId=""
                                        inputPlaceholder="Confirm Password"
                                        errorMessage=""
                                        textInputClassName="form-control shpnm"
                                        onChange={(e) => this.changehandler(e, "cfpassword")}
                                        errorMessage={this.state.cfpasswordErrorMessage}
                                    />
                                    
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input"
                                        onChange={()=>this.handleTermsCondition()}
                                        />
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
    console.log("Signup state", state)
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ signupAction }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupCustomer);