import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';

export default class ResetPassword extends Component {
    render() {
        return (
            <div>
                {/* <section className="center-form"> */}
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
                  <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#reset-page">Reset</button>
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
