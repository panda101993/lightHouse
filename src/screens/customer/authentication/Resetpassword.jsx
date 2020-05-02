import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ResetPassword extends Component { 
   constructor(props) {
     super(props)
   
     this.state = {
      modalStatus: false,
      modalStatusResend: false
     }
   }
   
    render() {
        return (
            <div>
                <body>
                    <Header />
                    <section>
         <div class="container-fluid">
            <div class="cover-laging otp">
               <h1>Reset Password</h1>
               <form>
                  <div class="form-group">
                     <label>New Password:</label>
                     <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Password"/>
                  </div>
                  <div class="form-group">
                     <label>Confirm Password:</label>
                     <input type="password" class="form-control" placeholder="Confirm Password"/>
                  </div>
                <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#reset-page" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend })} >Reset</button>   
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
                                <Link to='/LoginCustomer' >  <button class="btn setloc-btn" type="submit"  >OK</button> </Link>    
                                </div>
                            </form>
                        </ModalBody>
                    </Modal>
                    <Footer />
             
                </body>



            </div>
        )
    }
}
