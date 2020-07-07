import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GlobalCoupanImageBox } from "../components/GlobalCoupanImageBox";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import Apirequest from '../api/Apirequest';
import ToasterFunction from '../../src/components/ToasterFunc';



 class SubmittedCoupansRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
            modalStatus1: false,
            modalStatus2: false,
            modalStatusReopen: false,
            modalStatusReopen1: false,

            couponId :'',
            fromDate:'',
            toDate:'',
            couponStatus:"submit coupon", 
            
           

        }
    }
  
    componentDidMount(){
        this.submitHandler()
    }


    
   
      resetHandler=() =>{
        this.setState({fromDate:'',
        toDate:''

        })
    }
  
    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
       
     }
     submitHandler = e => {
       // e.preventDefault()
        console.log(this.state) 
        console.log("token====>",this.props.applicationData.token)
        var requestData= {
           "token":this.props.applicationData.token ,
             "fromDate": this.state.fromDate,
           "toDate":this.state.toDate,
           "couponStatus":this.state.couponStatus,
        } 
        console.log("gggggg=>",requestData)
        
        
        Apirequest(requestData,"/retailer/couponHistory", "POST",this.props.applicationData.token) 
            .then((resp) => {
               console.log("wxyz==>", resp);
               // ToasterFunction("info", resp.data.responseMessage);
            
               switch (resp.status) {
                case (200):
                    {
                    if (resp.data.responseCode == 200) {
                        // ToasterFunction("info", resp.data.responseMessage); 
                        ToasterFunction("success", resp.data.responseMessage);
                        this.setState({ 
                            allData: resp.data.result[0].details
                         });
                    }
                     else if (resp.data.responseCode == 404) {
                        ToasterFunction("info", resp.data.responseMessage);
    
                    }
                    else if (resp.data.responseCode == 500) {
                        ToasterFunction("error", resp.data.responseMessage);
    
                    }
                }
                case (900): {
                    if (resp.status == 900) {
                        ToasterFunction("error", "Please check your internet connection")
                    }
                }
            }
            })
         
            .catch(e => { console.log(e) }) 
     }
     
     
     render() {
        const{toDate ,fromDate} =this.state

        return (
            <div>

                <div class="tab-pane fade show active" id="Submitted" role="tabpanel" aria-labelledby="Submitted-tab">
                    <div class="">
                        <div class="cover-clander-btn mt-5">
                        
                        
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-12">
                                    <div class="form-group pos-rel">
                                        <label for="">From</label>
                                        <input type="date" 
                                        class="form-control" 
                                      
                                        id="" aria-describedby="" 
                                        placeholder="dd/mm/yy"
                                       value={fromDate}
                                       name="fromDate"
                                        onChange={this.changeHandler}

                                        />
                                        {/* <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i> */}
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-12">
                                    <div class="form-group pos-rel">
                                        <label for="">To</label>
                                        <input 
                                        type="date" 
                                        
                                        class="form-control" 
                                        id="" aria-describedby="" 
                                        placeholder="dd/mm/yy" 
                                        name="toDate"
                                        value={toDate}
                                        onChange={this.changeHandler}

                                        />
                                         {/* <div class="ins-cale">
                     <input type="date" class="form-control" />
                     <i class="fa fa-calendar" aria-hidden="true"></i>
                  </div> */}
                                        {/* <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i> */}
                                    </div>
                                </div>

                                <div class="col-lg-8 col-md-6 col-sm-12">
                                    <div class="copn-btnsec">
                                        <button class="btn btn-theme" onClick={this.submitHandler}>Submit</button>
                                        <button class="btn btn-theme" onClick={this.resetHandler}>Reset</button>
                                    </div>
                                </div>
                               

                            </div>
                           
                          
                        </div>

                        <div class="main-covercoupn my-4">
                            <ul>

                                {/* <li>
          <div class="coupon-cover">
            <img src={require("../assets/images/coupon-1.png")} alt=""/>
            <p>Submitted Date :-1/09/2020</p>
          </div>
          <div class="preview-section">
             <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
            <button class="btn btn-three" data-toggle="modal" data-target="#coupnwithdraw">Withdraw</button>
            <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
          </div>
        </li> */}
                                <GlobalCoupanImageBox
                                    coupanImgSrc={require("../assets/images/coupon-1.png")}
                                    alt=""
                                    date="Submitted Date :-1/09/2020"
                                    btn1Linkto=""
                                    btn1LinkClass=""
                                    btn1Type="button"
                                    btn1Class="btn btn-modal active"
                                    btn1Name="Preview"
                                    modalcallbtn1={() => this.setState({ modalStatus2: !this.state.modalStatus2 })}
                                    btn2Linkto=""
                                    btn2LinkClass=""
                                    btn2Class="btn btn-three"
                                    btn2Name="Withdraw"
                                    modalcallbtn2={() => this.setState({ modalStatus: !this.state.modalStatus })}
                                    btn3Linkto=""
                                    btn3LinkClass=""
                                    btn3Class="btn btn-three"
                                    btn3Name="Copy"
                                    modalcallbtn3={() => this.setState({ modalStatus1: !this.state.modalStatus1 })}

                                />
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Submitted Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <button class="btn btn-three" data-toggle="modal" data-target="#coupnwithdraw">Withdraw</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Submitted Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <button class="btn btn-three" data-toggle="modal" data-target="#coupnwithdraw">Withdraw</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Submitted Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <button class="btn btn-three" data-toggle="modal" data-target="#coupnwithdraw">Withdraw</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Submitted Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <button class="btn btn-three" data-toggle="modal" data-target="#coupnwithdraw">Withdraw</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Submitted Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <button class="btn btn-three" data-toggle="modal" data-target="#coupnwithdraw">Withdraw</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                    <ModalBody>
                        <div class="modal-header locationsethead adminis">
                            <h5>Are you sure you want to withdraw the coupon?</h5>
                        </div>
                        {/* <div style={{ textAlign: "center" }}>
                                <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                            </div> */}
                        <div class="modal-body ok n-yes">
                            <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => this.setState({ modalStatus: false })}>No</button>
                            <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatus: false })}>Yes</button></a>
                        </div>


                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalStatus1} toggle={this.toggle} style={{ top: "190px", }}>
                    <ModalBody>
                        <div class="modal-header locationsethead adminis">
                            <h5>Coupon code copied successfully!</h5>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatus1: false })} >OK</button>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalStatus2} toggle={this.toggle} style={{ top: "190px", }}>
                    <ModalBody>
                        <div class="mainoffer">
                            <img src={require("../assets/images/burger1.png")} class="bur-img" />
                            <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5>
                            <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6>
                        </div>
                        <div class="modal-body ny">
                            <a ><button type="button" class="btn btn-modal" data-dismiss="modal" onClick={() => this.setState({ modalStatus2: false })}>Cancel</button></a>
                            <button type="button" class="btn btn-modal active" data-dismiss="modal" data-toggle="modal" data-target="#copun-save" onClick={() => this.setState({ modalStatus2: !this.state.modalStatus2, modalStatusReopen1: !this.state.modalStatusReopen1 })}>Save</button>
                            <button type="button" class="btn btn-modal" data-dismiss="modal" data-toggle="modal" data-target="#admin-msg" onClick={() => this.setState({ modalStatus2: !this.state.modalStatus2, modalStatusReopen: !this.state.modalStatusReopen })}>Submit</button>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalStatusReopen} toggle={this.toggle} style={{ top: "190px", }}>
                    <ModalBody>
                        <div class="modal-body">
                            <p class="my-2">Thanks for  submiting the coupon. Administrator will verify and will update you soon !</p>
                            <p class="my-2">Here is your link of the coupon :<a href="https://couponhu78.com">https://couponhu78.com</a></p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                           <Link to="/LoginCustomer"><button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatusReopen: !this.state.modalStatusReopen })} >OK</button></Link> 
                        </div>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalStatusReopen1} toggle={this.toggle} style={{ top: "190px", }}>
                    <ModalBody>
                        {/* <div class="modal-header locationsethead adminis">
                            <h5>Your coupon has been saved successfully!</h5>
                        </div> */}
                        <div class="modal-body">
                        <p class="my-3">Your coupon has been saved successfully!</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button class="btn setloc-btn" type="submit" onClick={() => this.setState({ modalStatusReopen1: !this.state.modalStatusReopen1})} >OK</button>
                        </div>
                    </ModalBody>
                </Modal>


                {/* <div class="modal fade" id="copun-save" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <p class="my-3">Your coupon has been saved successfully!</p>
                                <div class="text-center">
                                    <a href="my-coupons-history.html"><button type="button" class="btn btn-three active">OK</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div class="modal fade bd-example-modal-lg" id="admin-msg" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered bd-example-modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <p class="my-2">Thanks for  submiting the coupon. Administrator will verify and will update you soon !</p>
                                <p class="my-2">Here is your link of the coupon :<a href="https://couponhu78.com">https://couponhu78.com</a></p>
                                <div class="text-center">
                                    <a href="101-coupon-template.html"><button type="button" class="btn btn-three active my-2" type="submit">OK</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div class="modal fade bd-example-modal-lg" id="great-deal1" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content offer">
                            <div class="modal-body bumoffer">
                                <div class="mainoffer">
                                    <img src="images/burger1.png" class="bur-img" />
                                    <h5><a href="60-Website(Retailer)%20.html">Burger King</a></h5>
                                    <h6><a href="61-Website-(Mart-Page%20)%20.html">GIP Mall</a></h6>


                                </div>
                                <div class="modal-body ny">
                                    <a ><button type="button" class="btn btn-modal" data-dismiss="modal">Cancel</button></a>
                                    <button type="button" class="btn btn-modal active" data-dismiss="modal" data-toggle="modal" data-target="#copun-save">Save</button>
                                    <button type="button" class="btn btn-modal" data-dismiss="modal" data-toggle="modal" data-target="#admin-msg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}



            </div>

        )
    }
}

const mapStateToProps = state => {
    console.log("stateLogin-------", state)
    return {
       applicationData: state.AuthReducer.userData
         
    }
          
 }
 export default connect(mapStateToProps)(SubmittedCoupansRetailer);

 
