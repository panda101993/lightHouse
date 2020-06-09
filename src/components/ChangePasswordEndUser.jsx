import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Apirequest from "../api/Apirequest"
import {loginAction} from "../redux/action/ActionTypes";
import { connect } from "react-redux";


export class ChangePasswordEndUser extends Component { 
   constructor(props) {
      super(props)

      this.state = {
        
         modalStatus: false,
         oldpass:"",
         newpass:"",
         cnfpass:"",
         token:"",

         oldpassStatus:false,
         newpassStatus:false,
         cnfpassStatus:false
       
      }
   }

   handleInput=(e,type)=>{
      if(type=="oldpass"){
         this.setState({
            oldpass: e.target.value,
            oldpassStatus: true
         })
      }
      else  if(type=="newpass"){
         this.setState({
            newpass: e.target.value,
            newpassStatus: true
         })
      }
      else if(type=="cnfpass"){
         this.setState({
            cnfpass: e.target.value,
            cnfpassStatus: true
         })
      
   }
}

request=()=>{
   
   var data={
      "password": this.state.oldpass,
      "newPassword": this.state.newpass,
      "confirmPassword": this.state.cnfpass
   }
   // console.log("tokenkey----->",this.props.applicatonkey.token)
   if(this.state.oldpassStatus){
      if(this.state.newpassStatus){
         if(this.state.cnfpassStatus){
            Apirequest(data,"/user/changePassword","POST",this.props.applicatonkey.token)
            .then((resp)=>{
               // console.log("changepassresp",resp)
               switch(resp.status){
                  case 200:{
                     if(resp.data.responseCode==200){
                        alert("Your password is updated successfully")
                     }
                     else if(resp.data.responseCode==402){
                        alert("You have provided an incorrect old password")
                     }
                     else if(resp.data.responseCode==404){
                        alert("This user does not exist")
                     }
                     else if(resp.data.responseCode==500){
                        alert("Internal Server Error")
                     }
                  }
                  break;
                  default:{
                     alert(resp.data.error)
                  }
               }
            })
            .catch(err => {
               console.log("changeresp---", err)
           }
           )
         }
         else {
            alert("Confirm password")
         }
      }
      else {
         alert("Enter your new password")
      }
   }
   else {
      alert("First Enter your old password")
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
                                 <input type="email" class="form-control pass-word" aria-describedby="emailHelp" placeholder="XXXXXXuuXXXXXXXXX"
                                 onChange={(e)=>this.handleInput(e,"oldpass")}
                                 />
                              </div>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputPassword1" class="old-pass">New Password*</label>
                                 <input type="password" class="form-control pass-word" placeholder="XXXXXXXXXXXXXXX"
                                 onChange={(e)=>this.handleInput(e,"newpass")}
                                 />
                              </div>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputPassword1" class="old-pass">Confirm Password*</label>
                                 <input type="password" class="form-control pass-words" placeholder="XXXXXXXXXXXXXXX" 
                                 onChange={(e)=>this.handleInput(e,"cnfpass")}
                                 />
                              </div>
                              <ul class="button_cs">
                                 <li class="cancel_c300"><button class="save">Cancel</button></li>
                                 <li><button type="button" class="save0"data-toggle="modal" data-target="#otpmodal"  onClick={() =>this.request() } >Save</button></li>
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

const mapStateToProps = state => {
   console.log("change state", state)
   return {
      applicatonkey: state.AuthReducer.userData
      
   }
}
export default connect(mapStateToProps)(ChangePasswordEndUser);

