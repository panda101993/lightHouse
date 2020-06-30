import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import Apirequest from '../api/Apirequest';
import ToasterFunction from '../../src/components/ToasterFunc';

class RechargeHistoryRetailer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalStatus: false,
            modalStatus1: false,
            couponId: '',
            fromDate: '',
            toDate: '',
            allData: [],
            couponStatus: "withdrawn coupon",
        }
    }
    componentDidMount() {
        this.submitHandler()
    }

    resetHandler = () => {
        this.setState({
            fromDate: '',
            toDate: ''

        })
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })

    }
    submitHandler = e => {
        //  e.preventDefault()
        console.log(this.state)
        console.log("token====>credit", this.props.applicationData.userId)
        var requestData = {
            "retailerId": this.props.applicationData.userId,
            "fromDate": this.state.fromDate,
            "toDate": this.state.toDate,

        }
        console.log("gggggg=>", requestData)


        Apirequest(requestData, "/retailer/rechargeHsitory", "POST")
            .then((resp) => {
                console.log("/retailer/rechargeHsitory==>", resp);
                console.log("array==>", resp.data.paginated.docs);
                // ToasterFunction("info", resp.data.responseMessage);

                switch (resp.status) {
                    case (200):
                        {
                            if (resp.data.responseCode == 200) {
                                // ToasterFunction("info", resp.data.responseMessage);
                                ToasterFunction("success", resp.data.responseMessage);
                                this.setState({
                                    allData: resp.data.paginated.docs
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
 dateHandler(dateItem){
  const d = new Date(dateItem);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const a = d.getDate()
  const b = months[d.getMonth()+1]
  const c = d.getFullYear()
  const e = a+" "+b+", "+c
  console.log(e)
 
    return( e )
 }
    render() {
        const { toDate, fromDate } = this.state
        return (
            <div>

                <div class="tab-pane fade show active" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <h3 class="info_c3">My Recharge History</h3>
                    <div class="name_c301 inc">
                        <div class="main-end">
                            <div class="frm-end">
                                <label>From Date</label>
                                <div class="ins-cale">
                                    <input type="date"
                                        class="form-control"
                                        id="" aria-describedby=""
                                        placeholder="dd/mm/yy"
                                        value={fromDate}
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
                                        value={toDate}
                                        onChange={this.changeHandler}
                                    />

                                    {/* <input type="date" class="birth-end" /> */}
                                    {/* <div>
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
                        {this.state.allData.map((item,index) => {
                            return(
                            <div class="main-upi">
                                <div class="upi-elements">
                            <h5 class="heding-five">{this.dateHandler(item.dateOfRecharge)}</h5>
                                    <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                    <p class="upi-num">Receive 200 credits .</p>
                                </div>
                                <div class="main-upii">
                                    <span>₹ {item.rechargeAmount}.00</span>
                                </div>
                            </div>
                         )
                        })

                        }

                        <div class="back-button">
                            <button type="button" class="save">Back</button>
                        </div>
                    </div>
                </div>


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
export default connect(mapStateToProps)(RechargeHistoryRetailer);
