import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class RechargeRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

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
                                                    <li>Recharge Rs 500.00 You will receive 100 credits</li>
                                                </ul>
                                            </div>
                                        </div>


            </div>
        )
    }
}

