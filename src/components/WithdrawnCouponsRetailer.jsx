import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GlobalCoupanImageBox } from "../components/GlobalCoupanImageBox";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class WithdrawnCoupansRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
            modalStatus1: false,

        }
    }

    render() {
        return (
            <div>

                <div class="tab-pane fade show active" id="Withdrawn" role="tabpanel" aria-labelledby="Withdrawn-tab">
                    <div class="">
                        <div class="cover-clander-btn mt-5">
                            <div class="row">
                                <div class="col-lg-2 col-md-3 col-sm-12">
                                    <div class="form-group pos-rel">
                                        <label for="">From</label>
                                        <input type="text" class="form-control" id="" aria-describedby="" placeholder="dd/mm/yy" />
                                        <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-3 col-sm-12">
                                    <div class="form-group pos-rel">
                                        <label for="">To</label>
                                        <input type="text" class="form-control" id="" aria-describedby="" placeholder="dd/mm/yy" />
                                        <i class="fa fa-calendar fa-calendar1" aria-hidden="true"></i>
                                    </div>
                                </div>


                                <div class="col-lg-8 col-md-6 col-sm-12">
                                    <div class="copn-btnsec">
                                        <button class="btn btn-theme">Submit</button>
                                        <button class="btn btn-theme">Reset</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="main-covercoupn my-4">
                            <ul>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Withdrawn Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section preview-spacearound">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Withdrawn Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section preview-spacearound">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Withdrawn Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section preview-spacearound">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Withdrawn Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section preview-spacearound">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Withdrawn Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section preview-spacearound">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
                                        <a href="103-Edit-coupon.html" class="button-style"> <button class="btn btn-three" >Copy</button></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="coupon-cover">
                                        <img src={require("../assets/images/coupon-1.png")} alt="" />
                                        <p>Withdrawn Date :-1/09/2020</p>
                                    </div>
                                    <div class="preview-section preview-spacearound">
                                        <button type="button" class="btn btn-modal active" data-toggle="modal" data-target="#great-deal1" data-dismiss="modal">Preview</button>
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
