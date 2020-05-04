import React, { Component } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class componentName extends Component { 
    constructor(props) {
        super(props)
      
        this.state = {
         modalStatus: false,
         modalStatusResend: false ,
        
         password: "",
         passwordStatus: false,
         passwordErrorMessage: "",
         
         Conpassword: "",
         ConpasswordStatus: false,
         ConpasswordErrorMessage: "",
           


        }
      }
      
    handleFormInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })

        if (name == "password") {
            this.state.passwordErrorMessage = this.validatePassword(value).error;
            this.state.passwordStatus = this.validatePassword(value).status;
         }
          if (name == "Conpassword") {
            this.state.ConpasswordErrorMessage = this.validatePassword(value).error;
            this.state.ConpasswordStatus = this.validatePassword(value).status;
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
            if (this.state.passwordStatus) {
               if (this.state.ConpasswordStatus){ 
                   if(this.state.Conpassword == this.state.password) 
                   {
                   // alert('Submit Successfully');
                   this.setState({ modalStatusResend: !this.state.modalStatusResend })
                   }
                    else { this.setState({ ConpasswordStatus: false, ConpasswordErrorMessage: "*Confirm password doesn`t match" }) }
                      //  window.location.href = "Setting_retailer";
               } else { this.setState({ ConpasswordStatus: false, ConpasswordErrorMessage: "*Please enter confirm password" }) }
            } else { this.setState({ passwordStatus: false, passwordErrorMessage: "*Please enter password" }) }
         } 

  render() { 
    return (
      <>
        <body>
         <Header /> 
         <section>
         <div class="container-fluid">
            <div class="cover-laging otp">
               <h1>Reset Password</h1>
               <form>
                  <div class="form-group">
                     <label>New Password:</label>
                     <input type="text"
                      class="form-control"
                       aria-describedby="emailHelp" 
                       placeholder="Password" 
                       name="password"
                      onChange={(event) => this.handleFormInput(event)} 
                     /> 
                  </div> 
                  <div>
                                    <label class="validation-hint">
                                       {this.state.passwordErrorMessage}
                                    </label>
                                 </div>
                  <div class="form-group">
                     <label>Confirm Password:</label>
                     <input type="password" 
                      class="form-control" 
                       placeholder="Confirm Password"  
                       name="Conpassword"
                     onChange={(event) => this.handleFormInput(event)} 
                     />
                  </div>  
                  <div>
                                    <label class="validation-hint">
                                       {this.state.ConpasswordErrorMessage}
                                    </label>
                                 </div>
                <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#reset-page" 
               //  onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend })}
                 onClick={() => this.submitHandler()}
                 
                 >Reset</button>   
               </form>
            </div>
         </div>
      </section>
      <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "190px", }}>
                        <ModalBody>
                            <form>
                                <div class="modal-header locationsethead">
                                    <h5>OTP resent successfully.</h5>
                                </div>
                                <div style={{ textAlign: "center" }} >
                                <Link to='/LoginRetailer' >  <button class="btn setloc-btn" type="submit"  >OK</button> </Link>    
                                </div>
                            </form>
                        </ModalBody>
                    </Modal>
         <Footer />
        </body>
      </>
    )
  }
}

export default componentName
