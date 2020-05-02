import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class ForgotPasswordOtp extends Component { 
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
                {/* <section className="center-form"> */}
                <body>
                    <Header />
                    <section>
         <div class="container-fluid">
            <div class="cover-otp">
               <h1>OTP verification</h1>
               <form>
                  <div class="register-cont">
                     <p>Please enter the 4 digits OTP sent on your registered Email ID or Phone Number</p>
                  </div>
                  <div class="form-group">
                     <div class="otp-box">
                        <p>Enter 4 - digits code</p>
                        <ul>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                           <li><input type="text" class="form-control" value=""/></li>
                        </ul>
                        {/* <a href="#" data-toggle="modal" data-target="#otpmodal">Resend</a> */} 
                        <Link><p style={{ textAlign: "end", color: "#123abd" }} onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend, modalStatus: !this.state.modalStatus })}>
                                                        Resend
                                                     </p></Link>
                     </div>
                  </div>
                  {/* <a href="22-reset-password.html"><button type="button" class="btn btn-theme" >SUBMIT</button></a> */} 
                  <Link to="/Resetpassword" ><button type="button" class="btn btn-theme" >SUBMIT</button> </Link>
               </form>
            </div>
         </div>
      </section>    <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "190px", }}>
                        <ModalBody>
                            <form>
                                <div class="modal-header locationsethead">
                                    <h5>OTP resent successfully.</h5>
                                </div>
                                <div style={{ textAlign: "center" }} >
                                    <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend })} >OK</button>
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

// import React, { Component } from 'react'
// import Header from '../../../components/Header';
// import Footer from '../../../components/Footer';
// import { GlobalValidations } from '../../../components/GlobalValidations';
// import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
// import { Link } from 'react-router-dom';

// export default class ForgotPasswordOtp extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <section className="center-form"> */}
//                 <body>
//                     <Header />
//                     <section>
//          <div class="container-fluid">
//             <div class="cover-otp">
//                <h1>OTP verification</h1>
//                <form>
//                   <div class="register-cont">
//                      <p>Please enter the 4 digits OTP sent on your registered Email ID or Phone Number</p>
//                   </div>
//                   <div class="form-group">
//                      <div class="otp-box">
//                         <p>Enter 4 - digits code</p>
//                         <ul>
//                            <li><input type="text" class="form-control" value=""/></li>
//                            <li><input type="text" class="form-control" value=""/></li>
//                            <li><input type="text" class="form-control" value=""/></li>
//                            <li><input type="text" class="form-control" value=""/></li>
//                         </ul>
//                         <a href="#" data-toggle="modal" data-target="#otpmodal">Resend</a>
//                      </div>
//                   </div>
//                   <a href="22-reset-password.html"><button type="button" class="btn btn-theme" >SUBMIT</button></a>
//                </form>
//             </div>
//          </div>
//       </section>

//                     <Footer />

//                 </body>



//             </div>
//         )
//     }
// }

