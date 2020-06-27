import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateWebpage extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
    }

    render() {
        return (
            <div>
                
                <div class="tab-pane fade show active" id="v-pills-webpage" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div class="name_c3">
                        <div class="offer-in-circle">
                            <img src={require("../assets/images/greatcircle.png")} data-toggle="modal" data-target="#pophis" />
                            <div class="plus-circle">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="name_c301 inc border-outboundary">
                        <div class="name_c3">
                            <h3 class="info_c3 chnge-pass">Basic Information</h3>
                            <span class="name">
                                <label>Shop Name *</label>
                                <p><input type="text" class="form-control" placeholder="Shop Name" /></p>
                            </span>
                            <span class="name">
                                <label>Shop Number *</label>
                                <p><input type="text" class="form-control" placeholder="123456" /></p>
                            </span>
                            <span class="name">
                                <label>Floor Number *</label>
                                <p><input type="text" class="form-control" placeholder="2" /></p>
                            </span>
                            <span class="name">
                                <div class="about-usicon">
                                    <label>Shop Phone Number *</label>
                                </div>
                                <div class="selil">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <ul class="select_s3">
                                                <li>
                                                    <select class="form-control _exmple">
                                                        <option>+91</option>
                                                        <option>2</option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-10">
                                            <ul class="select_s34">
                                                <li><input type="text" class="form-control" placeholder="9650225013" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span class="name">
                                <label>Mart Name *</label>
                                <p>
                                    <select class="form-control">
                                        <option>Mart Name</option>
                                    </select>
                                </p>
                            </span>
                            <span class="name">
                                <label>Mart Address *</label>
                                <p><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea></p>
                            </span>
                        </div>
                    </div>
                    <div class="name_c301 inc border-outboundary">
                        <div class="name_c3">
                            <h3 class="info_c3 chnge-pass">Product Service Details</h3>
                            <ul class="pdf-down">
                                <li><button type="button" class="save csv" ><i class="fa fa-download" aria-hidden="true"></i>   Download Format</button></li>
                                <li><button type="button" class="save csv rite" ><i class="fa fa-upload" aria-hidden="true"></i>   Upload Data</button></li>
                            </ul>
                        </div>
                        <div class="name_c301 inc table-ele">
                            <table class="table no-border">
                                <thead>
                                    <tr>
                                        <th class="heding">SI.No</th>
                                        <th class="heding">Category</th>
                                        <th class="heding">Sub-Category</th>
                                        <th class="heding">Item Type</th>
                                        <th class="heding">Brand</th>
                                        <th class="heding">Item Name</th>
                                        <th class="heding">Price (INR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="num">01</td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                    </tr>
                                    <tr>
                                        <td class="num">02</td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                    </tr>
                                    <tr>
                                        <td class="num">03</td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                    </tr>
                                    <tr>
                                        <td class="num">04</td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                    </tr>
                                    <tr>
                                        <td class="num">05</td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-control cat-subcat">
                                                <option></option>
                                            </select>
                                        </td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                        <td><input type="text" class="form-control cat-subcat" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="plus-fa">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </div>
                            <div class="back-button">
                                <button type="button" class="save" >Save</button>
                            </div>
                        </div>
                    </div>
                    <div class="name_c301 inc border-outboundary">
                        <div class="name_c3">
                            <h3 class="info_c3 chnge-pass">About Us(Limit 500 words)</h3>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Write something about yourself and your shop....."></textarea>
                        </div>
                    </div>
                    <div class="name_c301 inc border-outboundary">
                        <div class="name_c3">
                            <h3 class="info_c3 chnge-pass">Shop Timings</h3>
                        </div>
                        <div class="name_c301 inc table-ele">
                            <table class="table no-border">
                                <thead>
                                    <tr>
                                        <th class="heding time">Day</th>
                                        <th class="heding time">Start Time</th>
                                        <th class="heding time">End Time</th>
                                        <th class="heding time">Close Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sunday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select class="form-control cat-subcat lst">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select class="form-control cat-subcat lst">
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="custom-control custom-switch togg-cent">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="name_c3">
                                <ul class="button_cs">
                                    <a href="77-settings-retailer.html"> <li class="cancel_c3"><button class="save" data-toggle="modal" data-target="#exampleModal">Cancel</button></li></a>
                                    <a href="77-settings-retailer2.html">   <li class="cancel_c3"><button class="save" data-toggle="modal" data-target="#">Preview</button></li></a>
                                    <li><button type="button" class="save" data-toggle="modal" data-target="#thanks-for">Save</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

