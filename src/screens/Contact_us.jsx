import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Modal, ModalBody } from "reactstrap"
import { Link } from "react-router-dom"

export default class Contact_us extends Component {

   constructor(props) {
      super(props)

      this.state = {
         // otp: "",
         // otpErrorMessage: "",
         // otpStatus: false,
         modalStatus: false

      }
   }

   render() {
      return (
         <div>

            {/* <html lang="en">
   <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/font-awesome.min.css">
      <link rel="stylesheet" href="css/slick.css">
      <link rel="stylesheet" href="css/slick-theme.css">
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <title>LH</title>
   </head> */}
            <body>
               <Header />
        
               <section>
                  <div class="container-fluid">
                     <div class="contact-head">
                        <h1>Contact Us</h1>
                     </div>
                     <div class="cover-contactform">
                        <form>
                           <div class="frmcent">
                              <div class="form-group">
                                 <label>Name</label>
                                 <input type="text" class="form-control shpnm" aria-describedby="emailHelp" placeholder="Name" />
                              </div>
                              <div class="form-group">
                                 <label>Email ID</label>
                                 <input type="email" class="form-control shpnm" placeholder="Email Id" />
                              </div>
                              <div class="form-group">
                                 <label>Subject</label>
                                 <input type="text" class="form-control shpnm" aria-describedby="emailHelp" placeholder="Subject" />
                              </div>
                              <div class="form-group">
                                 <label>Description</label>
                                 <textarea class="form-control shpnm" rows="5" placeholder="Description"></textarea>
                              </div>
                              <div class="save-cancel">
                                 <button type="button" class="btn btn-save bt" onclick="window.location.href = 'index.html';" >Cancel</button>
                                 <button type="button" class="btn btn-save bt active" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Send</button>

                                 <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "200px", }}>
                                    <ModalBody>
                                       <div>
                                          <div class="modal-header locationsetheadsoon">
                                             <h5>Thanks for contacting us. Our executive will
                                             contact you soon !
                  </h5>
                                          </div>
                                          {/* <div style={{ textAlign: "center" }}>
                                             <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                                          </div> */}
                                          <div class="modal-body" style={{textAlign:'center'}}>
                                             <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatus: false })}>OK</button>
                                          </div>
                                       </div>
                                    </ModalBody>
                                 </Modal>
                              </div>
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
