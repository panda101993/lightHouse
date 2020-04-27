import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class RechargeHistoryRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
    }

    render() {
        return (
            <div>

                <div class="tab-pane fade show active" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <h3 class="info_c3">My Recharge History</h3>
                    <div class="name_c301 inc">
                        <div class="main-end">
                            <div class="frm-end">
                                <label>From Date</label>
                                <div class="ins-cale">
                                    <input type="date" class="birth-end" />
                                    <div>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="frm-end">
                                <label>End Date</label>
                                <div class="ins-cale">
                                    <input type="date" class="birth-end" />
                                    <div>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="sub-recharge">
                                <button type="button" class="save">Submit</button>
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
                        <div class="main-upi">
                            <div class="upi-elements">
                                <h5 class="heding-five">29 Jan, 2020</h5>
                                <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                <p class="upi-num">Receive 200 credits .</p>
                            </div>
                            <div class="main-upii">
                                <span>&#8377 1000.00</span>
                            </div>
                        </div>
                        <div class="main-upi">
                            <div class="upi-elements">
                                <h5 class="heding-five">29 Jan, 2020</h5>
                                <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                <p class="upi-num">Receive 200 credits .</p>
                            </div>
                            <div class="main-upii">
                                <span>&#8377 1000.00</span>
                            </div>
                        </div>
                        <div class="main-upi">
                            <div class="upi-elements">
                                <h5 class="heding-five">29 Jan, 2020</h5>
                                <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                <p class="upi-num">Receive 200 credits .</p>
                            </div>
                            <div class="main-upii">
                                <span>&#8377 1000.00</span>
                            </div>
                        </div>
                        <div class="main-upi">
                            <div class="upi-elements">
                                <h5 class="heding-five">29 Jan, 2020</h5>
                                <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                <p class="upi-num">Receive 200 credits .</p>
                            </div>
                            <div class="main-upii">
                                <span>&#8377 1000.00</span>
                            </div>
                        </div>
                        <div class="main-upi">
                            <div class="upi-elements">
                                <h5 class="heding-five">29 Jan, 2020</h5>
                                <p class="upi-num">UPI/002226298321/Payment from Paytm /lighthouse@com</p>
                                <p class="upi-num">Receive 200 credits .</p>
                            </div>
                            <div class="main-upii">
                                <span>&#8377 1000.00</span>
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

