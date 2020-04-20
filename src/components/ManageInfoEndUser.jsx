import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class ManageInfoEndUser extends Component {
   constructor(props) {
      super(props)

      this.state = {
         modalStatusSubmit:false,
         modalStatus: false,
         modalStatusResend:false
      }
   }

   render() {
      return (
         <div>

            <h3 class="info_c3">Manage General Info</h3>
            <div class="name_c3">
               <span class="name">
                  <label>Name</label>
                  <p><input type="text" class="form-control" placeholder="Sushree" /></p>
               </span>
               <span class="name">
                  <label>Mobile Number</label>
                  <ul class="select_s3">
                     <li>
                        <select class="form-control _exmple">
                           <option>+91</option>
                           <option>2</option>
                        </select>
                     </li>
                     <li><input type="text" class="form-control _number" placeholder="9650225013" /></li>
                  </ul>
               </span>
               <span class="name">
                  <label>Email <img src="images/about-icon.png" />


                     <a href="#">(Verify)</a> 
                   


                  </label>


                  <ul class="verify_c3">
                     <li><input type="text" class="form-control bhaswati_c3" placeholder="bhaswati@gmail.com" /></li>
                     <li class="verify_button"> 
                     
                     {/* <a href="45-setting-enduser-popup.html#">Verify</a>  */}
                     <Link onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}> Verify <i class="fa fa-angle-down" aria-hidden="true"></i></Link>
                     
                     </li>
                  </ul>
               </span>
               <span class="name">
                  <label>Referral Code</label>
                  <p><input type="text" class="form-control" placeholder="#$%^&*1234ert$$$$" /></p>
               </span>
               <div class="age-range">
                  <span class="name">
                     <label>Age Range</label>
                     <select class="form-control _range_s3">
                        <option>20-29</option>
                        <option>30-39</option>
                        <option>40-49</option>
                     </select>
                  </span>
                  <span class="name">
                     <label>Gender</label>
                     <select class="form-control _range_s3">
                        <option>Male</option>
                        <option>Female</option>
                     </select>
                  </span>
               </div>
               <label>Please Enter Date and Month of  your Birth</label>
               <div class="your_birth">
                  <div class="please_enter">
                     <ul>
                        <li class="date">Date</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>12</option>
                              <option>13</option>
                              <option>14</option>
                              <option>15</option>
                           </select>
                        </li>
                     </ul>
                  </div>
                  <div class="please_enter">
                     <ul>
                        <li class="date">Month</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>Jan</option>
                              <option>Feb</option>
                              <option>Mar</option>
                              <option>Apr</option>
                           </select>
                        </li>
                     </ul>
                  </div>
               </div>
               <label>Please Enter Date and Month of your Anniversary</label>
               <div class="your_birth">
                  <div class="please_enter">
                     <ul>
                        <li class="date">Date</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>12</option>
                              <option>13</option>
                              <option>14</option>
                              <option>15</option>
                           </select>
                        </li>
                     </ul>
                  </div>
                  <div class="please_enter">
                     <ul>
                        <li class="date">Month</li>
                        <li>
                           <select class="form-control month_c3">
                              <option>Jan</option>
                              <option>Feb</option>
                              <option>Mar</option>
                              <option>Apr</option>
                           </select>
                        </li>
                     </ul>
                  </div>
               </div>
               <span class="name">
                  <label>Occupation</label>
                  <input type="text" class="form-control" placeholder="Occupation" />
               </span>
               <span class="name">
                  <label>Income Range</label>
                  <select class="form-control">
                     <option>Les then 10.000</option>
                  </select>
               </span>
               <span class="name">
                  <label>Homeownership</label>
                  <select class="form-control">
                     <option>Rent</option>
                  </select>
               </span>
               <span class="name">
                  <label>Educational Level</label>
                  <select class="form-control">
                     <option>Master’s Degree or Above</option>
                  </select>
               </span>
               <div class="address">
                  <h3>Address Details</h3>
                  <span class="name">
                     <label>Pin Code*</label>
                     <input type="text" class="form-control" placeholder="110025" />
                  </span>
                  <span class="name">
                     <label>State*</label>
                     <select class="form-control">
                        <option>UP</option>
                     </select>
                  </span>
                  <span class="name">
                     <label>City*</label>
                     <input type="text" class="form-control" placeholder="Noida" />
                  </span>
                  <span class="name">
                     <label>Address*</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Virgo Aluminum, Block D, Okhla Industrial Estate Phase 1"></textarea>
                  </span>
                  <ul class="button_cs">
                     {/* <a href="62-dashboard-landing-screen.html">  <li class="cancel_c3"><button class="save">Cancel</button></li></a>  */}
                      <Link to ="/#" ><li class="cancel_c3"><button class="save">Cancel</button></li> </Link>
                     {/* <a href="62-dashboard-landing-screen.html"> <li><button class="save">Save</button></li></a> */}  
                     <Link to ="/#" ><li><button class="save">Save</button></li> </Link>
                  </ul>
               </div>

               <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                     <div class="modal-content">
                        <div class="modal-body verfy_cs3">
                           <h1>OTP verification</h1>
                           <p class="text_c3">Please enter the 4 digits OTP sent on your registered email id </p>
                           <h2>Enter 4-digits code</h2>
                           <ul class="enter_code"  >
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                              <li><input type="text" class="form-control txt_c3" /></li>
                           </ul>
                           <span class="re_cs3">
                              
                              {/* <a href="#" data-target="#resent" data-toggle="modal" data-dismiss="modal" >Resend</a>  */}
                              <Link onClick={() => this.setState({ modalStatusResend: !this.state.modalStatusResend , modalStatus: !this.state.modalStatus})  }  
                     
                            > Resend </Link>   
                              </span>
                        </div>
                        <div class="modal-footer botton_modal">

                           {/* <a href="41-Settings .html"> <button class="save">SUBMIT</button></a> */}
                           <Link onClick={() => this.setState({ modalStatus: !this.state.modalStatus })  }  
                        //   component ={}
                            > 
                           <button class="save">SUBMIT</button></Link>

                        </div>
                     </div>


                  </ModalBody>
               </Modal>   
               <Modal isOpen={this.state.modalStatusResend} toggle={this.toggle} style={{ top: "110px", left: "100px" }}>
                  <ModalBody>
                  <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>OTP resent successfully.</h5>
               </div>
               <div class="modal-body ok-cent">
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick ={ () => this.setState ({ modalStatusResend : !this.state.modalStatusResend}) }>OK</button>
               </div>
            </div>
                  </ModalBody>
               </Modal>  


            </div>
         </div>
      )
   }
}

export default ManageInfoEndUser
