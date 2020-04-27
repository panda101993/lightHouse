import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CoupanViewHistoryRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
    }

    render() {
        return (
            <div>

 <div class="tab-pane fade show active" id="v-pills-coupon" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <h3 class="info_c3">Coupon View History</h3>
                                            <div class="name_c301 inc too-inc">
                                                <div class="main-end">
                                                    <select class="form-control first-el">
                                                        <option>Select Coupon Code</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                    <div class="frm-end">
                                                        <label>From Date</label>
                                                        <div class="ins-cale">
                                                            <input type="date" class="form-control" />
                                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div class="frm-end">
                                                        <label>End Date</label>
                                                        <div class="ins-cale">
                                                            <input type="date" class="form-control" />
                                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div class="sub-recharge pad">
                                                        <button type="button" class="save sub-can">Submit</button>
                                                        <button type="button" class="save sub-can">Cancel</button>
                                                    </div>
                                                </div>
                                                <div class="main-coup">
                                                    <ul class="coupion-choice">
                                                        <li>
                                                            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                            <label class="form-check-label exrad" for="exampleRadios1">
                                                                By Gender
                                        </label>
                                                        </li>
                                                        <li>
                                                            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                            <label class="form-check-label exrad" for="exampleRadios1">
                                                                By Age Range
                                        </label>
                                                        </li>
                                                        <li>
                                                            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                            <label class="form-check-label exrad" for="exampleRadios1">
                                                                By Address
                                        </label>
                                                        </li>
                                                        <li>
                                                            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                            <label class="form-check-label exrad" for="exampleRadios1">
                                                                By Income Range
                                        </label>
                                                        </li>
                                                        <li>
                                                            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                            <label class="form-check-label exrad" for="exampleRadios1">
                                                                By Homeownership
                                        </label>
                                                        </li>
                                                        <li>
                                                            <input class="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                            <label class="form-check-label exrad" for="exampleRadios1">
                                                                By Education Level
                                        </label>
                                                        </li>
                                                        <li>
                                                            <button type="button" class="save sub-can">Cancel</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="graph">
                                                    <h5>Progress chart 12/09/2019 -19/09/2019</h5>
                                                    <img src={require("../assets/images/graphhh.png")} />
                                                </div>
                                            </div>
                                        </div>


            </div>
        )
    }
}

