import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SignupOtp extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         modalStatus: false
      }
   }
   
   render() {
      return (
         <div>
            <body>
               <Header />
               <section>
                  <div class="container-fluid">
                     <div class="cover-otp">
                        <h1>OTP verification</h1>
                        <form>
                           <div class="register-cont">
                              <p>Please enter  the 4 digits OTP sent on your registered Email Id .</p>
                           </div>
                           <div class="form-group">
                              <div class="otp-box">
                                 <p>Enter 4 - digits code</p>
                                 <ul>
                                    <li><input type="text" class="form-control" value="" /></li>
                                    <li><input type="text" class="form-control" value="" /></li>
                                    <li><input type="text" class="form-control" value="" /></li>
                                    <li><input type="text" class="form-control" value="" /></li>
                                 </ul>
                                 {/* <a href="#" data-toggle="modal" data-target="#otpmodal">Resend</a> */}
                                 <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>
                                    Resend
                                 </p></Link>


                                 <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                                    <ModalBody>
                                          <div class="modal-header locationsethead">
                                             <h5>OTP resent successfully.</h5>
                                          </div>
                                          <div style={{textAlign:"center"}}>
                                             <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                                          </div>
                                          
                                                                                
                                    </ModalBody>
                                 </Modal>


                              </div>
                           </div>
                           <a href="81-step-2 retailer.html"><button type="button" class="btn btn-theme">SUBMIT</button></a>
                        </form>
                     </div>
                  </div>
               </section>

               <Footer />
               <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog" aria-hidden="true">
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
               </div>

            </body>
         </div>
      )
   }
}


// export default SignupOtp;
