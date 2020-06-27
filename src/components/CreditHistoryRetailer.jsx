import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import Apirequest from '../api/Apirequest';
import ToasterFunction from '../../src/components/ToasterFunc';

export default class CreditHistoryRetailer extends Component {
   
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
            modalStatus1: false,
            couponId :'',
            fromDate:'',
            toDate:'',
            couponStatus:"withdrawn coupon",

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
        
        
        Apirequest(requestData,"/retailer/couponHistory", "POST",this.props.applicationData.token ) 
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
        return (
            <div>

                <div class="tab-pane fade show active" id="v-pills-earned" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <h3 class="info_c3">My Credit History</h3>
                    <div class="name_c301 inc">
                        <div class="main-end">
                            <div class="frm-end">
                                <label>From Date</label>
                                <div class="ins-cale"> 
                                <input type="date" 
                                        class="form-control" 
                                        id="" aria-describedby="" 
                                        placeholder="dd/mm/yy" 
                                        // value={fromDate}
                                       name="fromDate"
                                        onChange={this.changeHandler}
                                        />
                                    {/* <input type="date" class="birth-end" /> */}
                                    {/* <div>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </div> */}
                                </div>
                            </div>
                            <div class="frm-end">
                                <label>End Date</label>
                                <div class="ins-cale"> 
                                <input type="date" 
                                        class="form-control" 
                                        id="" aria-describedby="" 
                                        placeholder="dd/mm/yy" 
                                        name="toDate"
                                        // value={toDate}
                                        onChange={this.changeHandler}
                                        />

                                    {/* <input type="date" class="birth-end" />
                                    <div>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </div> */}
                                </div>
                            </div>
                            <div class="sub-recharge">
                                <button type="button" class="save" onClick={this.submitHandler}>Submit</button>
                            </div>
                        </div>
                        <ul class="pdf-down">
                            <li>
                                <button type="button" class="save csv">Download PDF</button>
                            </li>
                            <li>
                                <button type="button" class="save csv rite">Download CSV</button>
                            </li>
                        </ul>
                        <div class="main-upi creit">
                            <div class="upi-elements">
                                <h5 class="heding-five">29 Jan, 2020</h5>
                            </div>
                            <div class="main-upii">
                                <div class="labelsin">
                                    <label>10 Credits</label>
                                    <label>Sign Up Credits</label>
                                </div>
                                <span>CR</span>
                            </div>
                        </div>
                        <div class="main-upi creit">
                            <div class="upi-elements">
                                <h5 class="heding-five">22 Jan, 2020</h5>
                            </div>
                            <div class="main-upii">
                                <div class="labelsin">
                                    <label>10 Credits</label>
                                    <label>Sign Up Credits</label>
                                </div>
                                <span>CR</span>
                            </div>
                        </div>
                        <div class="main-upi creit">
                            <div class="upi-elements">
                                <h5 class="heding-five">18 Jan, 2020</h5>
                            </div>
                            <div class="main-upii">
                                <div class="labelsin">
                                    <label>10 Credits</label>
                                    <label>Sign Up Credits</label>
                                </div>
                                <span>CR</span>
                            </div>
                        </div>
                        <div class="main-upi creit">
                            <div class="upi-elements">
                                <h5 class="heding-five">28 Jan, 2020</h5>
                            </div>
                            <div class="main-upii">
                                <div class="labelsin">
                                    <label>10 Credits</label>
                                    <label>Sign Up Credits</label>
                                </div>
                                <span>CR</span>
                            </div>
                        </div>
                        <div class="main-upi creit">
                            <div class="upi-elements">
                                <h5 class="heding-five">22 Jan, 2020</h5>
                            </div>
                            <div class="main-upii">
                                <div class="labelsin">
                                    <label>10 Credits</label>
                                    <label>Sign Up Credits</label>
                                </div>
                                <span>CR</span>
                            </div>
                        </div>
                        <div class="back-button">
                            <button type="button" class="save">Back</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

