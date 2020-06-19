import React, { Component } from 'react'
import { Modal, ModalBody } from "reactstrap";

export default class Step2_retailer extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             ManageInfostep2:false,
             modalStatus: false,
             modalStatus1: false
        }
    }  
    handlestate = () =>{
        this.setState({
           modalStatus: !this.state.modalStatus,
           modalStatus1: !this.state.modalStatus1
        })
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
                        <li class="rs">Rs 300.00 </li>
                        <li class="rs">18% of sign up free</li>
                        <li class="rs bl">RS 800.00 </li>
                     </ul>
                  </div>
                  <div class="pas">
                     <ul class="button_cs">
                        <li><button class="save paddi" data-toggle="modal" data-target="#icon" onClick={() => this.setState({ modalStatus: !this.state.modalStatus })}>Pay and Submit</button></li>
                     </ul>
                     <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "200px", }}>
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

                           </div>
                        </ModalBody>
                     </Modal>

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
                              <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked/>
                              <label class="form-check-label mar" for="exampleRadios1">
                              Yes
                              </label>
                           </div>
                        </div>
                        <div class="col-md-10">
                           <ul class="select_s34">
                              <li><input type="text" class="form-control" placeholder="Please enter GSTIN"/></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="mmm">
                     <div class="row">
                        <div class="col-md-2">
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="exampleRadios"  value="option2"/>
                              <label class="form-check-label mar" for="exampleRadios2">
                              No
                              </label>
                           </div>
                        </div>
                        <div class="col-md-10">
                           <ul class="select_s34">
                              <div class="form-check">
                                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
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
                  <p><input type="text" class="form-control" placeholder="Business Name "/></p>
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
                              <li><input type="text" class="form-control" placeholder="9650225013"/></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </span>
                                <div class="address">
                                    <h3 class="enregbus">Registered Business Address:</h3>
                                    <span class="name">
                  <label>Pin Code*</label>
                  <input type="text" class="form-control" placeholder="110025"/>
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
                                                <input type="file" class="form-control-file"/>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="button_cs">
                                        <li class="cancel_c3">
                                            <button class="save" data-toggle="modal" data-target="#exampleModal">Cancel</button>
                                        </li>
                                        <li>
                  <button type="button" class="save" data-toggle="modal" data-target="#"  onClick={() => this.setState({ ManageInfostep2: !this.state.ManageInfostep2 })}  >Save</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
              </div>          
                    
    
   
        )
    }
}
