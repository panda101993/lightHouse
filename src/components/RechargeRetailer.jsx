import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import ToasterFunction from '../components/ToasterFunc';
import ApiRequest from '../api/Apirequest';
 class RechargeRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
            unitCreditCost: null

        }
    }
    componentDidMount(){
     
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
                             this.setState({unitCreditCost : resp.data.result.unitCreditCost})
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
            <div>

<div class="tab-pane fade show active " id="v-pills-recharge" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <h3 class="info_c3">Recharge</h3>
                                            <div class="name_c301">
                                                <div class="five-pay-flex">
                                                    <div class="fivehundred">
                                                        <p class="five-color"> 500</p>
                                                        <p class="mi-rec">Minimum Recharge RS 500 in Multiples of Ten</p>
                                                    </div>
                                                    <div class="pay-recharge">
                                                        <button type="button" class="save" data-toggle="modal" data-target="#paypal">Pay</button>
                                                    </div>
                                                </div>
                                                <ul class="rdflex">
                                                    <li>
                                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                        <label class="form-check-label exrad" for="exampleRadios1">
                                                            RS 500
                                    </label>
                                                    </li>
                                                    <li>
                                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                        <label class="form-check-label exrad" for="exampleRadios1">
                                                            RS 1000
                                    </label>
                                                    </li>
                                                    <li>
                                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                        <label class="form-check-label exrad" for="exampleRadios1">
                                                            RS 1500
                                    </label>
                                                    </li>
                                                    <li>
                                                        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" />
                                                        <label class="form-check-label exrad" for="exampleRadios1">
                                                            RS 2000
                                    </label>
                                                    </li>
                                                </ul>
                                                <ul class="rec-credit">
        <li>{this.state.unitCreditCost?(`Recharge Rs 500.00 You will receive ${500/this.state.unitCreditCost} credits`):''}</li>
                                                </ul>
                                            </div>
                                        </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("stateLogin-------", state)
    return {
       applicationData: state.AuthReducer.userData,
 
    }
 
 }

 export default connect(mapStateToProps)(RechargeRetailer);