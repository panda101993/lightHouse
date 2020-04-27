import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ManageInfoRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
    }

    render() {
        return (
            <div>

                <div class="tab-pane fade show active " id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h3 class="info_c3">Manage General Info</h3>
                    <div class="name_c3">
                        <span class="name">
                            <label>Shop Name*</label>
                            <p><input type="text" class="form-control" placeholder="Shop name" /></p>
                        </span>
                        <span class="name">
                            <div class="shopfloor">
                                <div class="shop">
                                    <label>Shop Number*</label>
                                    <ul class="select">
                                        <li>
                                            <input type="text" class="form-control" placeholder="Shop number" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="floor">
                                    <label>Floor Number*</label>
                                    <ul class="select">
                                        <li><input type="text" class="form-control" placeholder="9" /></li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                        <span class="name">
                            <label>Mart Name* </label>
                            <select class="form-control">
                                <option>Mart Name</option>
                                <option>ab</option>
                            </select>
                        </span>
                        <span class="name">
                            <label> Mobile Phone Number for Managing Coupons and Getting
                                 Communications From  LH *</label>
                            <div class="cover-phoneno no-minht">
                                <div class="code">
                                    <select class="form-control">
                                        <option selected>+91</option>
                                        <option>+92</option>
                                        <option>+92</option>
                                    </select>
                                </div>
                                <div class="code-no pos-rel">
                                    <input type="text" class="form-control" placeholder="9999999999" />
                                    <div class="green-verify">
                                        <button type="button" class="btn" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal">verify</button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span class="name">
                            <label>Shop Phone Number to be Displayed on Coupons *</label>
                            <div class="cover-phoneno no-minht">
                                <div class="code">
                                    <select class="form-control">
                                        <option selected>+91</option>
                                        <option>+92</option>
                                        <option>+92</option>
                                    </select>
                                </div>
                                <div class="code-no pos-rel">
                                    <input type="text" class="form-control" placeholder="9999999999" />
                                    <div class="green-verify">
                                        <button type="button" class="btn" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal">verify</button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span class="name">
                            <label> Email id for Managing Coupons and Getting Communications From LH</label>
                            <p><input type="text" class="form-control" placeholder="bhaswti2526@gmail.com" /></p>
                        </span>
                        <span class="name">
                            <label>Registered Business Name *</label>
                            <p><input type="text" class="form-control" placeholder="Business Name " /></p>
                        </span>
                        <span class="name">
                            <label> Registered Business Address*</label>
                            <p><input type="text" class="form-control" placeholder="New Delhi  " /></p>
                        </span>
                        <div class="address">
                            <h3 class="enregbus">Enter Registered Business Address:</h3>
                            <span class="name">
                                <label>Pin Code*</label>
                                <input type="text" class="form-control" placeholder="110025" />
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
                                <label>GSTIN *</label>
                                <input type="text" class="form-control" placeholder="123456789" />
                            </span>
                            <span class="name">
                                <div class="downproof">
                                    <label>Download Proof *</label>
                                    <div class="dow">
                                        <img src={require("../assets/images/download.png")} />
                                    </div>
                                </div>
                            </span>
                            <ul class="button_cs">
                                <li class="cancel_c3"><button class="save">Cancel</button></li>
                                <a href="101-coupon-template.html">   <li><button class="save">Save</button></li></a>
                            </ul>
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}

