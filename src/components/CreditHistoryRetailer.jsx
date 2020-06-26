import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreditHistoryRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
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

