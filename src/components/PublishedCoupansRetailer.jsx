

import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { GlobalCoupanImageBox } from "../components/GlobalCoupanImageBox";
import { Modal, ModalBody } from 'reactstrap';
import { connect } from "react-redux";
import Apirequest from '../api/Apirequest';
import ToasterFunction from '../../src/components/ToasterFunc';


 class PublishedCoupansRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
            modalStatus1: false,


            couponId :'',
            fromDate:'',
            toDate:'',
            couponStatus:"Published coupon", 
        }
    }


    
    resetHandler=() =>{
        this.setState({fromDate:'',
        toDate:''

        })
    }
    componentDidMount(){
        this.submitHandler()
    }
    
  
    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
       
     }
     submitHandler = e => {
      //  e.preventDefault()
        console.log(this.state) 
        console.log("token====>",this.props.applicationData.token



        )
        var requestData= {
           "token":this.props.applicationData.token


           ,
             "fromDate": this.state.fromDate,
           "toDate":this.state.toDate,
           "couponStatus":this.state.couponStatus,
        } 
        console.log("gggggg=>",requestData)
        
        
        Apirequest(requestData,"/retailer/couponHistory", "POST",this.props.applicationData.token



        ) 
            .then((resp) => {
               console.log("wxyz==>", resp);
               // ToasterFunction("info", resp.data.responseMessage);
            
               switch (resp.status) {
                case (200):
                    {
                    if (resp.data.responseCode == 200) { 
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
         
            .catch(err => { console.log(err) })
     }

    render() {
        const{toDate ,fromDate} =this.state

        return (
            <div>

                <div class="tab-pane fade show active " id="Published" role="tabpanel" aria-labelledby="Published-tab">
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
                                        <input type="date" 
                                        class="form-control" 
                                        id="" aria-describedby="" 
                                        placeholder="dd/mm/yy" 
                                        name="toDate"
                                        value={toDate}
                                        onChange={this.changeHandler}
                                        />
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
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Published Date :-1/09/2020</p>
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
                                        <p>Published Date :-1/09/2020</p>
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
                                        <p>Published Date :-1/09/2020</p>
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
                                        <p>Published Date :-1/09/2020</p>
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
                                        <p>Published Date :-1/09/2020</p>
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
                                        <p>Published Date :-1/09/2020</p>
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
 export default connect(mapStateToProps)(PublishedCoupansRetailer);