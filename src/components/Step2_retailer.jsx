
import React, { Component } from 'react'
import { Modal, ModalBody } from "reactstrap";
import ApiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';
import { FilePicker } from 'react-file-picker'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { retailerProfileAction } from "../redux/action/ProfileDetailsAction";

let file64 = null
class Step2_retailer extends Component {
   constructor(props) {
      super(props)

      this.state = {
         ManageInfostep2: false,
         modalStatus: false,
         modalStatus1: false,
         signUpSuccessModalStatus:true,
         GSTIN: "",
         registeredBusinessName: "",
         pinCode: "",
         signUpFee: 0,
         gstOnSignUp: 0,
         totalAmount: 0,
         reviewModalStatus: false
      }
   }

   componentDidMount(){

      try {
         ApiRequest({ token: this.props.applicationData.token }, '/retailer/profile', 'GET', this.props.applicationData.token)
            .then((resp) => {
               console.log('response====>/retailer/profile', resp,this.props.applicationData.token);

               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           console.log('response====>/retailer/profile', resp.data.result.retailerStatus==='PENDING REVIEW');
                           resp.data.result.retailerStatus==='PENDING REVIEW'? this.setState({reviewModalStatus: true}) : this.setState({reviewModalStatus: false})
                        }

                        
                        else if (resp.data.responseCode == 404) {
                           ToasterFunction("info", "Data not found, internal server error");
                        }
                        else if (resp.data.responseCode == 500) {
                           ToasterFunction("error", "Internal Server Error");
                        }
                     }
                  case (900): {
                     if (resp.status == 900) {
                        ToasterFunction("error", "Please check your internet connection")
                     }
                  }
               }

            })
      } catch (error) {
         console.log('errorresponse', error);
         // ToasterFunction("error", "Network error, please contact the administrator");
      }


   }
   handlestate = () => {
      this.setState({
         modalStatus: !this.state.modalStatus,
         modalStatus1: !this.state.modalStatus1
      })
   }
   handleRegisteredBusinessNameInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value })
      console.log("valueset==>", value)


   }

   handlePinCodeInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value })
      console.log("valueset==>", value)


   }
   handleGSTINInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value })
      console.log("valueset==>", value)


   }
   handleUploadFile(FileObject) {

      let file = null;
      let fileReader = new FileReader();
      fileReader.readAsDataURL(FileObject)
      fileReader.onload = function (fileLoadedEvent) {
         file = fileLoadedEvent.target.result;
         // Print data in console
         console.log(file);
         file64 = file

      };
      fileReader.onerror = function (error) {
         console.log('Error: ', error);
      };

   }

   handlePayment() {
      console.log("PaymentLinkAPI going to hit====>")
      try {
         ApiRequest({ token: this.props.applicationData.token }, '/retailer/payment', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('response====>/retailer/business', resp);

               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           console.log(resp.data.paymentLink)
                           window.location.assign(`${resp.data.paymentLink}`);

                        }

                        else if (resp.data.responseCode == 404) {
                           ToasterFunction("info", "Data not found, internal server error");
                        }
                        else if (resp.data.responseCode == 500) {
                           ToasterFunction("error", "Internal Server Error");
                        }
                     }
                  case (900): {
                     if (resp.status == 900) {
                        ToasterFunction("error", "Please check your internet connection")
                     }
                  }
               }

            })
      } catch (error) {
         console.log('errorresponse', error);
         // ToasterFunction("error", "Network error, please contact the administrator");
      }



   }

   getAmountAPI() {

      console.log("this.props.action.retailerProfileAction===>", this.props.profileData.shopName)
      console.log("getting GST etc=====>")
      let configObj = {
         token: this.props.applicationData.token,
         configType: "RETAILER"
      }
      try {
         ApiRequest(configObj, '/configuration/configurations/RETAILER', 'GET', this.props.applicationData.token)
            .then((resp) => {
               console.log('/configuration/configurations/{configType}', resp);

               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           ToasterFunction("info", "Data is saved successfully");
                           console.log("/configuration/configurations/RETAILER", resp.data.result)
                           let signUpFee = resp.data.result.retailerSignupAmount
                           let gstOnSignUp = resp.data.result.gstOnSignup
                           let totalAmount = (signUpFee + (gstOnSignUp * signUpFee / 100))
                           console.log("signUpFee,gstOnSignUp,totalAmount", totalAmount)
                           this.setState({
                              signUpFee: resp.data.result.retailerSignupAmount,
                              gstOnSignUp: resp.data.result.gstOnSignup,
                              totalAmount: totalAmount
                           })
                            this.setState({ ManageInfostep2: !this.state.ManageInfostep2 })
                        }

                        else if (resp.data.responseCode == 404) {
                           ToasterFunction("info", "Data not found, internal server error");
                        }
                        else if (resp.data.responseCode == 500) {
                           ToasterFunction("error", "Internal Server Error");
                        }
                     }
                  case (900): {
                     if (resp.status == 900) {
                        ToasterFunction("error", "Please check your internet connection")
                     }
                  }
               }

            })
      } catch (error) {
         console.log('errorresponse', error);
         // ToasterFunction("error", "Network error, please contact the administrator");
      }


   }



   saveButtonHandler() {

      console.log("file64=====>", file64)
      //Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjBjZmVlM2M4Njc1MDRhMjNmYjFkMSIsImlhdCI6MTU5Mjg5NTU3NywiZXhwIjoxNTkyOTgxOTc3fQ.ANJ7tTwDe235TN8m4lfL6TXJ9GIIcFaFF5dK6wBWIHA"
      let obj = {
         token: this.props.applicationData.token,
         GSTIN: this.state.GSTIN,
         registeredBusinessName: this.state.registeredBusinessName,
         pinCode: this.state.pinCode,
         city: "Patna",
         state: "Bihar",
         address: "Isapur",
         addressProof: file64


      }

      console.log("retailer/manage=====>", obj)
      try {
         ApiRequest(obj, '/retailer/business', 'POST', this.props.applicationData.token)
            .then((resp) => {
               console.log('response====>/retailer/business', resp);

               switch (resp.status) {
                  case (200):
                     {
                        if (resp.data.responseCode == 200) {
                           ToasterFunction("info", "Data is saved successfully");

                           this.getAmountAPI()
                        }

                        else if (resp.data.responseCode == 404) {
                           ToasterFunction("info", "Data not found, internal server error");
                        }
                        else if (resp.data.responseCode == 500) {
                           ToasterFunction("error", "Internal Server Error");
                        }
                     }
                  case (900): {
                     if (resp.status == 900) {
                        ToasterFunction("error", "Please check your internet connection")
                     }
                  }
               }

            })
      } catch (error) {
         console.log('errorresponse', error);
         // ToasterFunction("error", "Network error, please contact the administrator");
      }

   }


   render() {
      return (
         this.state.ManageInfostep2 ?
            <div>
               <div class="tab-pane fade show active" id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <h3 class="info_c3">Register Your Business</h3>
                  <div class="name_c3">
                     <div class="totgst">
                        <ul class="gst">
                           <li class="ta">Sign up free :</li>
                           <li class="ta">GST Amount :</li>
                           <li class="ta bl">Total Amount :</li>
                        </ul>
                        <ul class="gst">
                           <li class="rs">{`Rs ${this.state.signUpFee}`}  </li>
                           <li class="rs">{`${this.state.gstOnSignUp} % of sign up free`}</li>
                           <li class="rs bl"> {`RS ${this.state.totalAmount}`} </li>
                        </ul>
                     </div>
                     <div class="pas">
                        <ul class="button_cs">
                           <li><button class="save paddi" data-toggle="modal" data-target="#icon" onClick={() => this.handlePayment()}>Pay and Submit</button></li>
                        </ul>
                        {/* <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "200px", }}>
                        <ModalBody>
                           <div>
                              <div class="modal-content">
                                 <div class="modal-header locationsethead">
                                    <img src={require("../assets/images/blue cross.png")} data-dismiss="modal" />
                                 </div>
                                 <div class="modal-body">
                                    <ul class="imgeicons even">
                                       <li><img src={require("../assets/images/paypal.png")} data-toggle="modal" data-target="#paysuccess" data-dismiss="modal" onClick={()=>this.handlestate()} /></li>
                                       <li> <img src={require("../assets/images/stripe.png")} data-toggle="modal" data-target="#paysuccess" data-dismiss="modal" 
                                       onClick={()=>this.handlestate()}
                                       /></li>
                                    </ul>
                                 </div>
                              </div>
                              {/* <div style={{ textAlign: "center" }}>
                                             <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                                          </div> */}

                        {/* </div> */}
                        {/* </ModalBody>
                     </Modal> */}

                        <Modal isOpen={this.state.modalStatus1} toggle={this.toggle} style={{ top: "200px", }}>
                           <ModalBody>
                              <div>


                                 <div class="modal-content">
                                    <div class="modal-header locationsethead">
                                       <h5>Congratulation your payment has been done successfully.</h5>
                                    </div>
                                    <div class="modal-body ok">
                                       <button type="button" class="btn setloc-btn" data-dismiss="modal" onclick="window.location.href = '81-step-2 retailer1.html';">OK</button>
                                    </div>


                                 </div>


                              </div>
                           </ModalBody>
                        </Modal>
                     </div>
                  </div>
               </div>
            </div>
            :
            <div>

               <div class="tab-pane fade show active" id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <h3 class="info_c3">Register Your Business</h3>
                  <div class="name_c3">

                     <span class="name">
                        <label>GSTIN *</label>
                        <div class="mmm">
                           <div class="row">
                              <div class="col-md-2">
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                    <label class="form-check-label mar" for="exampleRadios1">
                                       Yes
                              </label>
                                 </div>
                              </div>
                              <div class="col-md-10">
                                 <ul class="select_s34">
                                    <li><input name="GSTIN"
                                       onChange={(event) => this.handleGSTINInput(event)}
                                       type="text" class="form-control" placeholder="Please enter GSTIN" /></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="mmm">
                           <div class="row">
                              <div class="col-md-2">
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" value="option2" />
                                    <label class="form-check-label mar" for="exampleRadios2">
                                       No
                              </label>
                                 </div>
                              </div>
                              <div class="col-md-10">
                                 <ul class="select_s34">
                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                       <label class="form-check-label mar" for="defaultCheck1">
                                          I confirm that I never been issued GSTIN
                                 </label>
                                    </div>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </span>

                     <span class="name">
                        <label>Registered Business Name *</label>
                        <p><input
                           name="registeredBusinessName"
                           onChange={(event) => this.handleRegisteredBusinessNameInput(event)}

                           type="text" class="form-control" placeholder="Business Name " /></p>
                     </span>
                     <span class="name">
                        <label>Registered Business Phone Number *</label>
                        <div class="selil">
                           <div class="row">
                              <div class="col-md-2">
                                 <ul class="select_s3">
                                    <li>
                                       <select class="form-control _exmple">
                                          <option>+91</option>
                                          <option>2</option>
                                       </select>
                                    </li>
                                 </ul>
                              </div>
                              <div class="col-md-10">
                                 <ul class="select_s34">
                                    <li><input type="text" class="form-control" placeholder="9650225013" /></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </span>
                     <div class="address">
                        <h3 class="enregbus">Registered Business Address:</h3>
                        <span class="name">
                           <label>Pin Code*</label>
                           <input
                              name="pinCode"
                              onChange={(event) => this.handlePinCodeInput(event)}
                              type="text" class="form-control" placeholder="110025" />
                        </span>
                        <span class="name">
                           <label>State*</label>
                           <select class="form-control">
                              <option>UP</option>
                           </select>
                        </span>
                        <span class="name">
                           <label>City*</label>
                           <select class="form-control">
                              <option>Noida</option>
                           </select>
                        </span>
                        <span class="name">
                           <label>Address*</label>
                           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                        </span>
                        <span class="name">
                           <label>Upload Address Proof*</label>
                           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                        </span>
                        <div class="filechoose">
                           <div class="namee">
                              <p class="upload">(Upload Electric Bill,Water Bill,Gas Bill,Bank Statement,Adhar Card Detail)</p>
                              <i class="fa fa-paperclip" aria-hidden="true"></i>
                              <div class="icnflex">
                                 <FilePicker
                                    extensions={['pdf']}
                                    onChange={FileObject => this.handleUploadFile(FileObject)}
                                    onError={errMsg => console.log(errMsg)}
                                 >
                                    <input type="text" class="form-control-file" />
                                 </FilePicker>
                              </div>
                           </div>
                        </div>
                        <ul class="button_cs">
                           <li class="cancel_c3">
                              <button class="save" data-toggle="modal" data-target="#exampleModal">Cancel</button>
                           </li>
                           <li>
                              <button type="button" class="save" data-toggle="modal" data-target="#" onClick={() => this.saveButtonHandler()}  >Save</button>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <Modal isOpen={this.state.signUpSuccessModalStatus} toggle={this.toggle} style={{ top: "200px", }}>
                        <ModalBody>
                           <div>
                             
                                
                                    <div class="modal-content">
                                       <div class="modal-header locationsethead">
                                          <h5>Congratulations { this.props.profileData.shopName}, you have successfully signed up into the website ! </h5>
                                          
                                       </div>
                                       <div class="modal-body ok">
                                          <button type="button" class="btn setloc-btn" data-dismiss="modal" onClick={() => this.setState({ signUpSuccessModalStatus: !this.state.signUpSuccessModalStatus })} >OK</button>
                                       </div>

                                       
                                    
                                
                              </div>


                           </div>
                        </ModalBody>
                     </Modal>
                     <Modal isOpen={this.state.reviewModalStatus} toggle={this.toggle} style={{ top: "200px", }}>
                        <ModalBody>
                           <div>
                             
                                
                                    <div class="modal-content">
                                       <div class="modal-header locationsethead">
                                          <h5> Your application is under review ! </h5>
                                          
                                       </div>
                                       <div class="modal-body ok">
                                          <button type="button" class="btn setloc-btn" data-dismiss="modal" onClick={() => this.setState({ reviewModalStatus: !this.state.reviewModalStatus })} >OK</button>
                                       </div>

                                       
                                    
                                
                              </div>


                           </div>
                        </ModalBody>
                     </Modal>


               </div>
            </div>



      )
   }
}


const mapStateToProps = state => {
   console.log("stateLogin-------", state)
   return {
      applicationData: state.AuthReducer.userData,

      profileData: state.ProfileDetailsReducer.profileData

   }

}
const mapDispatchToProps = dispatch => {
   return {
      action: bindActionCreators({ retailerProfileAction }, dispatch)
   }
}

// export default componentName
export default connect(mapStateToProps, mapDispatchToProps)(Step2_retailer);