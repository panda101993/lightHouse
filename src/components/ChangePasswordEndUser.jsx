import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Apirequest from "../api/Apirequest"
// import {loginAction} from "../redux/action/ActionTypes";
import { connect } from "react-redux";
import { validatePassword, validateCFPassword } from '../utils/validation/Validation';
import ToasterFunction from './ToasterFunc';


export class ChangePasswordEndUser extends Component { 
   constructor(props) {
      super(props)

      this.state = {
         oldpass:"",

         modalStatus: false,
         oldpassStatus:false,

         newpass:"",
         newpassStatus:false,
         newPassErrorMsg:null,

         cnfpass:"",
         cnfpassStatus:false,
         cnfPassErrorMsg:null

       
      }
   }

   handleInput=(e,type)=>{
      if(type=="oldpass"){
         this.setState({ oldpass: e.target.value, oldpassStatus:true })
      }
      else  if(type=="newpass"){
         this.setState({
            newpass: e.target.value,
         },
         ()=>{this.handleValidation("newpass")}
            // newpassStatus: validatePassword(this.state.newpass).status,
            // newpassErrormsg: validatePassword(this.state.newpass).error
         )
      }
      else if(type=="cnfpass"){
         this.setState({
            cnfpass: e.target.value,
         },
         ()=>{this.handleValidation("cnfpass")}
         )
      
   }
}

handleValidation(key) {
   console.log('key-value', key);
   switch (key) {
       // case ("email"):
       //     var data = validateEmail(this.state.email)
       //     this.setState({ emailErrorMessage: data.error, emailErrorStatus: data.status }, () => console.log("errore", this.state))
       //     break

       case ("newpass"):
           var data = validatePassword(this.state.newpass)
           console.log("this is data of pass", data)
           this.setState({ newpassErrormsg: data.error, newpassStatus: data.status }, () => console.log("errore", this.state))
           break
       case ("cnfpass"):
           var data = validateCFPassword(this.state.cnfpass,this.state.newpass)
           this.setState({ cnfpassErrormsg: data.error, cnfpassStatus: data.status }, () => console.log("errore", this.state))
           
           break
   }
}

request=()=>{
   if(this.state.oldpassStatus&&
      this.state.newpassStatus&&
         this.state.cnfpassStatus){
            var credentials={
               "password":this.state.oldpass,
               "newPassword":this.state.newpass
            }
            Apirequest(credentials,"/user/changePassword","POST",this.props.applicatonkey.token)
            .then((resp)=>{
                  switch(resp.status){
                     case 200:{
                        if(resp.data.responseCode==200){
                           ToasterFunction("success","Your password is updated successfully")
                        }
                        else if(resp.data.responseCode==402){
                           ToasterFunction("warn","You have provided an incorrect old password")
                        }
                        else if(resp.data.responseCode==404){
                           ToasterFunction("error","This user does not exist")
                        }
                        else if(resp.data.responseCode==500){
                           ToasterFunction("error","Internal Server error")
                        }
                     }
                  }
            })
         }
         else{
            ToasterFunction("error","Enter all fields")}
      }
   




   

    render() {
        return (
            <div>
              
                        <h3 class="info_c3">Change Password</h3>
                        <div class="name_c301">
                           <form>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputEmail1" class="old-pass">Old Password*</label>
                                 <input type="email" class="form-control pass-word" aria-describedby="emailHelp" placeholder="XXXXXXXXXXXXXXX"
                                 onChange={(e)=>this.handleInput(e,"oldpass")}
                                 />
                              </div>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputPassword1" class="old-pass">New Password*</label>
                                 <input type="password" class="form-control pass-word" placeholder="XXXXXXXXXXXXXXX"
                                 onChange={(e)=>this.handleInput(e,"newpass")}
                                 />
                                 <lable class="" style={{color:"red", fontSize:12}}>{this.state.newpassErrormsg}</lable>
                              </div>
                              <div class="form-group chang-sec">
                                 <label for="exampleInputPassword1" class="old-pass">Confirm Password*</label>
                                 <input type="password" class="form-control pass-words" placeholder="XXXXXXXXXXXXXXX" 
                                 onChange={(e)=>this.handleInput(e,"cnfpass")}
                                 />
                                 <lable class="" style={{color:"red", fontSize:12}}>{this.state.cnfpassErrormsg}</lable>
                              </div>
                              <ul class="button_cs">
                                 <li class="cancel_c300"><button class="save">Cancel</button></li>
                                 <li><button type="button" class="save0"data-toggle="modal" data-target="#otpmodal"  onClick=
                                 // {() => this.setState({ modalStatus: !this.state.modalStatus })}
                                 {() =>this.request() }
                                  >Save</button></li>
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
