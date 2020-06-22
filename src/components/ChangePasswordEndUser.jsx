import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ChangePasswordEndUser extends Component { 
   constructor(props) {
      super(props)

      this.state = {
        
         modalStatus: false,
       
      }
   }

    render() {
        return (
            <div>
              
                        <h3 class="info_c3">Change Password</h3>
                        <div class="name_c301">
                           <form>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputEmail1" class="old-pass">Old Password*</label>
                                 <input type="email" class="form-control pass-word" aria-describedby="emailHelp" placeholder="XXXXXXXXXXXXXXX"/>
                              </div>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputPassword1" class="old-pass">New Password*</label>
                                 <input type="password" class="form-control pass-word" placeholder="XXXXXXXXXXXXXXX"/>
                              </div>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputPassword1" class="old-pass">Confirm Password*</label>
                                 <input type="password" class="form-control pass-words" placeholder="XXXXXXXXXXXXXXX" />
                              </div>
                              <ul class="button_cs">
                                 <li class="cancel_c300"><button class="save">Cancel</button></li>
                                 <li><button type="button" class="save0"data-toggle="modal" data-target="#otpmodal"  onClick={() => this.setState({ modalStatus: !this.state.modalStatus })} >Save</button></li>
                              </ul>
                           </form>
                        </div>
                        <Modal isOpen={this.state.modalStatus} toggle={this.toggle}  style={{ top: "190px", }}>
                  <ModalBody>
                  <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Your password has been changed successfully.</h5>
               </div>
               <div style={{ textAlign: "center" }}>
                  <button class="btn setloc-btn" type="submit" data-dismiss="modal"   onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}   >OK</button>
               </div>
            </div>
                  </ModalBody>
               </Modal>  
            </div>
        )
    }
}

export default ChangePasswordEndUser
