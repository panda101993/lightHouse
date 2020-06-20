import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Modal, ModalBody } from "reactstrap"
import { Link } from "react-router-dom"

export default class Contact_us extends Component {

   constructor(props) {
      super(props)

      this.state = {
         name: '',
         email: '',
         subject: '',
         description: '',
         // otp: "",
         // otpErrorMessage: "",
         // otpStatus: false,
         modalStatus: false

      }
   }
   validateName(name) {
      var nameRegex = /^[a-zA-Z ]+$/;
      var name = name.trim();
      if (name == "" || name == undefined || name == null) {
         return { status: false, error: "*Please enter your name." };
      } else if (!nameRegex.test(name)) {
         return { status: false, error: "*Please enter atleast 2 characters." };
      } else if (name.length < 2) {
         return { status: false, error: "*Please enter atleast 2 characters." };
      } else {
         return { status: true, error: "" };
      }
   }
   validateName(subject) {
      var nameRegex = /^[a-zA-Z ]+$/;
      var name = name.trim();
      if (name == "" || name == undefined || name == null) {
         return { status: false, error: "*Please enter your subject." };
      } else if (!nameRegex.test(name)) {
         return { status: false, error: "*Please enter atleast 2 characters." };
      } else if (name.length < 2) {
         return { status: false, error: "*Please enter atleast 2 characters." };
      } else {
         return { status: true, error: "" };
      }
   }

   validateEmail(email) {
      var emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
      email = email.trim();
      if (email == "" || email == undefined || email == null) {
         return { status: false, error: "*Please enter the email." };
      } else if (!emailRegex.test(email)) {
         return { status: false, error: "*Please enter valid Email Address." };
      } else {
         return { status: true, error: "" };
      }
   }
   // inputHandler = (event, type) => {
   //    switch (type) {
   //       case name:
   //          this.setState({ name: event.target.value })
   //          break;
   //       case email:
   //          this.setState({ email: event.target.value })
   //          break;
   //       case subject:
   //          this.setState({ subject: event.target.value })
   //          break;
   //       case description:
   //          this.setState({ description: event.target.value })
   //          break;
   //       default:
   //          break;
   //    }
   // }
   // submitHandler = () =>{

   // }


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
                                 <input type="text" class="form-control shpnm" aria-describedby="emailHelp" placeholder="Name" onChange={(event) => this.inputHandler(event)} />
                              </div>
                              <div class="form-group">
                                 <label>Email ID</label>
                                 <input type="email" class="form-control shpnm" placeholder="Email Id" onChange={(event) => this.inputHandler(event)} />
                              </div>
                              <div class="form-group">
                                 <label>Subject</label>
                                 <input type="text" class="form-control shpnm" aria-describedby="emailHelp" placeholder="Subject" onChange={(event) => this.inputHandler(event)} />
                              </div>
                              <div class="form-group">
                                 <label>Description</label>
                                 <textarea class="form-control shpnm" rows="5" placeholder="Description"></textarea>
                              </div>
                              <div class="save-cancel">
                                 <button type="button" class="btn btn-save bt" onclick="window.location.href = 'index.html';" >Cancel</button>
                                 <button type="button" class="btn btn-save bt active" onClick={() => this.submitHandler()}>Send</button>
                                 {/* onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}                                            */}
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
                                          <div class="modal-body" style={{ textAlign: 'center' }}>
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
