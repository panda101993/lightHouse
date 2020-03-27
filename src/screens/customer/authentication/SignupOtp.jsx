import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
export default class SignupOtp extends Component {
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
                                   <a href="#" data-toggle="modal" data-target="#otpmodal">Resend</a>
                                </div>
                             </div>
                             <a href="81-step-2 retailer.html"><button type="button" class="btn btn-theme">SUBMIT</button></a>
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
