import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import Apirequest from "../../../api/Apirequest"
import Cookies from "universal-cookie"
import {signupActionRetailer} from "../../../redux/action/AuthAction"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { TumblrShareButton } from 'react-share';
import { validateEmail, validatePassword, validateCFPassword } from '../../../utils/validation/Validation';

export class SignupRetailer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datafound: "",
            selectedvalue: "",

            shopName: "",
            shopNameStatus: false,

            shopNumber: "",
            shopNumStatus:false,

            floorNumber: "",
            floorStatus:false,

            email: "",
            emailErrorMessage:null,
            emailErrorStatus:null,

            password: "",
            passwordErrorMessage:null,
            passwordErrorStatus:null,

            cfPassword: "",
            cfpasswordErrorMessage:null,
            cfpasswordErrorStatus:null,

            termsAndPrivacy: false,

            selectedvalue:"",
            temp: this.props.location.pathname.split("/")
        }
    }


    componentDidMount() {
        const cookies = new Cookies();
        console.log(cookies.get('latitude'));
        const latitude = cookies.get('latitude')

        console.log(cookies.get('longitude'));
        const longitude = cookies.get('longitude')
        console.log(latitude, longitude)
        // var credentials = {
        //     "lat": latitude,
        //     "long": longitude
        // }

        Apirequest({ "lat": latitude, "long": longitude }, "/user/getMartsByRetailer", "POST")
            .then((resp) => {
                console.log("getmartsbyret", resp.data.result)
                switch (resp.status) {
                    case 200:
                        if (resp.data.responseCode == 200) {
                            this.setState({ datafound: resp.data.result[0] })
                            console.log(this.state.datafound.martName)
                        }
                        else if (resp.data.responseCode == 404) {
                            alert("Location not found")
                        }
                        else if (resp.data.responseCode == 500) {
                            alert("Internal Server Error")
                        }
                        break;
                    case 900:{
                        // alert("check your internet")
                        console.log("check your server")
                    }
                    break;
                    default:{
                        alert(resp.data)
                    }
                }
            })

            .catch(err => {
                console.log("changeresp---", err)
            }
            )
    }
    // handleDropdown(e){
    //     this.setState({selectedvalue: e.target.value})
    //     console.log("selected",this.state.selectedvalue)
    // }
    handleInput = (e, type) => {
        // console.log("abcd", this.state.selectedvalue)
        console.log("temp----",this.state.temp)
        switch (type) {
            case "shopname":
                {
                    this.setState({ shopName: e.target.value, shopNameStatus: true })
                }
                break;
            case "shopNo":
                {
                    this.setState({ shopNumber: e.target.value, shopNumStatus: true })
                }
                break
            case "floorNo":
                {
                    this.setState({ floorNumber: e.target.value, floorStatus: true })
                }
                break
            case "email":
                {
                    this.setState({ email: e.target.value }, () => this.handleValidation("email")
                     )
                }
                break
            case "password":
                {
                    this.setState({ password: e.target.value }, () => this.handleValidation("password"))
                }
                break
            case "cfpassword":
                {
                    this.setState({ cfPassword: e.target.value }, () => this.handleValidation("cfpassword"))
                }
                break
            default:
                {
                    console.log("error")
                }
        }
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
            case ("email"):
                var edata = validateEmail(this.state.email)
                console.log("email", edata)
                this.setState({ emailErrorMessage: edata.error, emailErrorStatus: edata.status }, () => console.log("errore", this.state))
                break
                case ("cfpassword"):
                    var cfdata = validateCFPassword(this.state.cfPassword,this.state.password)
                    console.log("this is data of pass", cfdata)
                    this.setState({ cfpasswordErrorMessage: cfdata.error, cfpasswordErrorStatus: cfdata.status }, () => console.log("errore", this.state))
        }
    }

    handleSignup=()=>{
        if(this.state.termsAndPrivacy){
            if(this.state.shopNameStatus && 
                this.state.shopNumStatus && 
                this.state.floorStatus && 
                this.state.emailErrorStatus &&
                this.state.passwordErrorStatus &&
                this.state.cfpasswordErrorStatus){
                    // console.log("selectedvalue",this.state.selectedvalue)
                    // this.state.temp[2]
                                    var Sdata={
                                    "mobileNumber": 918744810087,
                                    "martId":this.state.selectedvalue,
                                    "shopName":this.state.shopName,
                                    "shopNumber": this.state.shopNumber,
                                    "floorNumber": this.state.floorNumber,
                                    "email": this.state.email,
                                    "password": this.state.password
                                    }
                                    this.props.action.signupActionRetailer(Sdata, () => this.props.history.push(`/SignupOtp/${this.state.mobileNumber}`))
                                
                    }
                    else {
                        alert("Please fill all fields")
                    }
                    
                }
                else{
                    alert("Accept Terms and conditions")
                }
                
        }

        handleTermsCondition=()=>{
            this.setState({
                 termsAndPrivacy: !this.state.termsAndPrivacy
            })
        }
    


>>>>>>> ddd60b0343d5090d289f90173a125288b5ce87de

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
<<<<<<< HEAD
                                            <option>...</option>
=======
                                            <option value={this.state.datafound._id}>{this.state.datafound.martName}</option>
>>>>>>> ddd60b0343d5090d289f90173a125288b5ce87de
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
