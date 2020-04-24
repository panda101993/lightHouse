// import React, { Component } from 'react'
// import Header from '../../../components/Header';
// import Footer from '../../../components/Footer';
// import { GlobalValidations } from '../../../components/GlobalValidations';
// import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
// import { Link } from 'react-router-dom';

// export default class LoginCustomer extends Component {
//     render() {
//         return (
//             <div>
          
//                 <body>
//                     <Header />
//                     <section>
//                         <div class="container-fluid">
//                             <div class="cover-laging">
//                                 <h1>LOGIN</h1>
//                                 <form>
//                                     {/* <div class="form-group">
//                                     <label>Phone Number :</label>
//                                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
//                                 </div> */}
//                                     <GlobalValidations
//                                         divClass=""
//                                         label="Phone Number :"
//                                         labelClass=""
//                                         inputType="text"
//                                         inputId="exampleInputEmail1"
//                                         inputPlaceholder="Enter your phone number"
//                                         errorMessage=""
//                                         textInputClassName="form-control"
//                                     />

//                                     {/* <div class="form-group">
//                                     <label>Password:</label>
//                                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//                                 </div> */}
//                                     <GlobalValidations
//                                         divClass=""
//                                         label="Password:"
//                                         labelClass=""
//                                         inputType="password"
//                                         inputId="exampleInputPassword1"
//                                         inputPlaceholder="Password"
//                                         errorMessage=""
//                                         textInputClassName="form-control"
//                                     />
//                                     <div class="form-group form-check">
//                                         <input type="checkbox" class="form-check-input" />
//                                         <label class="form-check-label">Remember Me</label>
//                                         <label><Link to="OtpScreenUser">Forgot Password ?</Link></label>
//                                     </div>
//                                     <GlobalButtonLinks
//                                       //  linkLabel="Create_webpage"
//                                       linkLabel="/LandingScreen"
//                                         btnType="button"
//                                         btnClass="btn btn-theme"
//                                         btntxt="Login"
//                                     />
//                                     {/* <Link to="">
//                                     <button type="button" class="btn btn-theme">LOGIN</button> 
//                                     <GlobalButtons
//                                     tnType="button"
//                                     btnClass="btn btn-theme"
//                                     btntxt="LOGIN"
//                                     />
//                                     </Link> */}
//                                     <div class="have-an">
//                                         <p>Don't have an account ? <Link to="SignupCustomer">Sign up</Link></p>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </section>

//                     <Footer />

//                 </body>



//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { GlobalValidations } from '../../../components/GlobalValidations'
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks'
import { Link } from 'react-router-dom';

export default class LoginCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            mobileno: "",
            mobilenoStatus: false,
            mobilenoErrorMessage: "",

            password: "",
            passwordStatus: false,
            passwordErrorMessage: "",
            
        }   
    }

    

    // HandleMobileno(mobileno) {

    //     this.setState({ mobileno: mobileno })
    //     this.state.mobilenoErrorMessage = this.validateMobileno(mobileno).error;
    //     this.state.mobilenoStatus = this.validateMobileno(mobileno).status;
    // }
    // HandlePassword(password) {

    //     this.setState({ password: password })
    //     this.state.passwordErrorMessage = this.validatePassword(password).error;
    //     this.state.passwordStatus = this.validatePassword(password).status;
    // }

    handleFormInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })

        if (name == "mobileno") {
            this.state.mobilenoErrorMessage = this.validateMobileno(value).error;
        this.state.mobilenoStatus = this.validateMobileno(value).status;
         }
         else if (name == "password") {
            this.state.passwordErrorMessage = this.validatePassword(value).error;
            this.state.passwordStatus = this.validatePassword(value).status;
         }
        }


    validateMobileno(value) {
        var numberRegex = /^[1-9][0-9]{9,12}$/;
        if (value == "" || value == undefined || value == null) {
            return { status: false, error: "Please enter mobileNo." }

        }
        else if (!numberRegex.test(value)) {
            return { status: false, error: "Please enter valid mobileNo." }
        }
        else {
            return { status: true, error: '', height: 0 }
        }
    }
      validatePassword(value) {
        if (value == "" || value == undefined || value == null) {
            return { status: false, error: "Please enter valid password." }
        }
        else if (value.length < 6) {
            return { status: false, error: "Password must contain 6 or more characters." };
        }
        else {
            return { status: true, error: '', height: 0 }
        }
    }

    submitHandler = () => {
        if (this.state.mobilenoStatus) {
           if (this.state.passwordStatus){
                    alert('Submit Successfully');
               
           } else { this.setState({ passwordStatus: false, passwordErrorMessage: "*Please enter password" }) }
        } else { this.setState({ mobilenoStatus: false, mobilenoErrorMessage: "*Please enter mobileno" }) }
     }
    
  

    render() {
        return (
            <div>
          
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
                                        errorMessage={this.state.mobilenoErrorMessage}
                                        textInputClassName="form-control"
                                        name="mobileno"
                                        onChange={(event) => this.handleFormInput(event)}                  
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
                                        errorMessage={this.state.passwordErrorMessage}
                                        textInputClassName="form-control"
                                        name="password"
                                        onChange={(event) => this.handleFormInput(event)} 
                                    />
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label">Remember Me</label>
                                        <label><Link to="/Forgotpassword">Forgot Password ?</Link></label>
                                    </div>
                                    {/* <GlobalButtonLinks
                                        linkLabel="Signup_User"
                                        btnType="button"
                                        btnClass="btn btn-theme"
                                        btntxt="LOGIN"
                                    /> */}
                                    {/* <Link to=""> */} 
                                    <Link to="/LandingScreen" >
                                    <button type="button" onClick={() => this.submitHandler()} class="btn btn-theme">LOGIN</button>  
                                    </Link>
                                    {/* <GlobalButtons
                                    tnType="button"
                                    btnClass="btn btn-theme"
                                    btntxt="LOGIN"
                                    /> */}
                                    {/* </Link> */}
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
