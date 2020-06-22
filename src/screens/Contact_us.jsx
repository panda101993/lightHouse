import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Modal, ModalBody } from "reactstrap"
import { Link } from "react-router-dom"
import Apirequest from '../api/Apirequest'
import {validateEmail,validateName} from '../utils/validation/Validation';

export default class Contact_us extends Component {

   constructor(props) {
      super(props)

      this.state = {
         name: '',
         nameStatus: false,
         nameErrorMessage: '',
         nameErrorStatus:false,

         email: '',
         emmailStatus: false,
         emailErrorStatus: false,
         emailErrorMessage:'',

         subject: '',
         subjectStatus: false,
         sujectErrorMessage:'',
         sujectErrorStatus:false,

         description: '',
         descriptionStatus: false,
         fielderr: '',
         error:'',
         
         

         // otp: "",
         // otpErrorMessage: "",
         // otpStatus: false,
         modalStatus: false

      }
   }
  


  
   inputHandler = (e, type) => {
      switch (type) {
         case "name":
            this.setState({ name: e.target.value}, () => this.handleValidation("name"))
            break;
         case "email":
            this.setState({ email: e.target.value},  () => this.handleValidation("email"))
            break;
         case "subject":
            this.setState({ subject: e.target.value, subjectStatus: true })
            break;
         case "description":
            this.setState({ description: e.target.value, descriptionStatus: true })
            break;
         default:
            {
               console.log("error")
            }
            break;

      }
   }
   handleValidation = (key) => {
      switch (key) {
         case ("name"):
            var data = validateName(this.state.name)
            console.log("this is data of name", data)
            this.setState({ nameErrorMessage: data.error, nameErrorStatus: data.status }, () => console.log("error", this.state))
            break;
         case ("email"):
            var data = validateEmail(this.state.email)
            console.log("this is data of Email", data)
            this.setState({ emailErrorMessage: data.error, emailErrorStatus: data.status }, () => console.log("error", this.state))
            break;
         // case ("suject"):
         //    var data = validateSuject(this.state.subject)
         //    console.log("this is data of name", data)
         //    this.setState({ sujectErrorMessage: data.error, sujectErrorStatus: data.status }, () => console.log("error", this.state))
         //    break;

         default:
            break;
      }
   }
   submitHandler = () => {
      if (this.state.name == "" || this.state.email == "" || this.state.subject == "" || this.state.description == "") {
         this.setState({ fielderr: "Please enter all fields" })
      }
      else {
         this.setState({ fielderr: "" })
         var requestData = {
            "name": this.state.name,

            "email": "no-aliahmad@mobiloitte.com",
            "subject": this.state.subject,
            "description": this.state.description,

         }
         console.log("data", requestData)
         Apirequest(requestData, "/user/contactUs", "POST") 
            .then((resp) => {
               console.log("wxyz==>", resp);

            })
         
            .catch(e => { console.log(e) })


           
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
                               
                                 <input type="text" class="form-control shpnm" aria-describedby="emailHelp" placeholder="Name" onChange={(e) => this.inputHandler(e, "name")} />
                                 
                                {this.state.nameErrorMessage}
                             
                              </div>
                              <div class="form-group">
                                 <label>Email ID</label>
                                 <input type="email" class="form-control shpnm" placeholder="Email Id" onChange={(e) => this.inputHandler(e, "email")} />
                                 {this.state.emailErrorMessage}
                              </div>
                              <div class="form-group">
                                 <label>Subject</label>
                                 <input type="text" class="form-control shpnm" aria-describedby="emailHelp" placeholder="Subject" onChange={(e) => this.inputHandler(e, "subject")} />
                                 {/* {this.state.subjectErrorMessage} */}
                              </div>
                              <div class="form-group">
                                 <label>Description</label>
                                 <textarea class="form-control shpnm" rows="5" placeholder="Description" onChange={(e) => this.inputHandler(e, "description")} ></textarea>
                                 {/* {this.state.descriptionErrorMessage} */}
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
