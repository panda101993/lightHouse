import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ToasterFunction from '../components/ToasterFunc';
import ApiRequest from '../api/Apirequest';
import { connect } from "react-redux";
import PreviewWebpageRetailer from '../components/PreviewWebpageRetailer'
class CreateWebpage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PreviewWebpageRetailerStatus: false,
            modalStatus: false,

            mobileno: '',
            ShopNumber: "540",
            FloorNumber: "8",
            MartName: "VIshal",
            MartAddress: "Patna",
            ShopName: "Vishal_mega_mart",
            aboutUs: "",
            productServiceDetails: [
                {

                    categoryId: "5e8fa54d532d1e0e3d0217cf",
                    subCategoryId: "5e89d98e2ec5db299d01f53b",
                    itemType: "SHOES1",
                    brand: "NIKE1",
                    itemName: "AIR1",
                    price: "INR 20000"
                },
                {

                    categoryId: "5e8fa54d532d1e0e3d0217cf",
                    subCategoryId: "5ea930689ab143186bf93acb",
                    itemType: "SHOES2",
                    brand: "NIKE2",
                    itemName: "AIR2",
                    price: "INR 20000"
                },
                {

                    categoryId: "5e8fa54d532d1e0e3d0217cf",
                    subCategoryId: "5ea930689ab143186bf93acb",
                    itemType: "SHOES3",
                    brand: "NIKE3",
                    itemName: "AIR3",
                    price: "INR 20000"
                },
                {

                    categoryId: "5e8fa54d532d1e0e3d0217cf",
                    subCategoryId: "5ea930689ab143186bf93acb",
                    itemType: "SHOES4",
                    brand: "NIKE4",
                    itemName: "AIR4",
                    price: "INR 20000"
                },
            ],
            shopTimingApiReq: [
                {
                    sunday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ],
                    monday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ],
                    tuesday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ],
                    wednesday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ],
                    thursday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ],
                    friday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ],
                    saturday: [
                        {
                            startTime: "8:00 AM",
                            endTime: "8:00 PM",
                            closeDay: true
                        }
                    ]
                }
            ],
            shopTiming: [
                {
                    sunday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ],
                    monday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ],
                    tuesday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ],
                    wednesday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ],
                    thursday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ],
                    friday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ],
                    saturday: [
                        {
                            startTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            endTime: {
                                hours: "11",
                                minutes: "11",
                                AM_PM: "AM"


                            },
                            closeDay: true
                        }
                    ]
                }
            ]


        }
    }
    handleSave() {

        let obj = {
            "webSiteImages": [
                "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1588158718/d3wsy67jfiei5huxn6j5.jpg"
            ],
            "status": "ACTIVE",
            "retailerId": "5eeb69d78f89e2137e0e52eb",
            "basicInformation": [
                {
                    "shopName": this.state.ShopName,
                    "shopNumber": this.state.ShopNumber,
                    "floorNumber": this.state.FloorNumber,
                    "shopPhoneNumber": "787878787878",
                    "martName": this.state.MartName,
                    "martAddress": this.state.MartAddress
                }
            ],
            "aboutUs": this.state.aboutUs,
            "shopTiming": this.state.shopTimingApiReq,
            "productServiceDetails": this.state.productServiceDetails
        }
        console.log("Api Req==>", obj)
        try {
            ApiRequest(obj, '/retailer/websites', 'POST', this.props.applicationData.token)
                .then((resp) => {
                    console.log('response====>/retailer/websites', resp);

                    switch (resp.status) {
                        case (200):
                            {
                                if (resp.data.responseCode == 200) {
                                    console.log('response====>/retailer/websites', resp);
                                    ToasterFunction("info", resp.data.responseMessage);
                                }

                                else if (resp.data.responseCode == 404) {
                                    ToasterFunction("info", "Data not found, internal server error");
                                }
                                else if (resp.data.responseCode == 500) {
                                    ToasterFunction("error", "Internal Server Error");
                                }
                            }
                            break;
                        case (900): {
                            if (resp.status == 900) {
                                ToasterFunction("error", "Please check your internet connection")
                            }
                        }
                    }

                })
        } catch (error) {
            console.log('errorresponse', error);
            ToasterFunction("error", "Network error, please contact the administrator");
        }
        console.log('hitting====>/retailer/websites');
    }


    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }
    productServiceDetailsInput = (e, index) => {

        const name = e.target.name;
        const value = e.target.value;
        let productServiceDetailsArr = this.state.productServiceDetails
        productServiceDetailsArr[index][name] = value
        this.setState({ productServiceDetails: productServiceDetailsArr })
    }
    handleShopTimingInput = (event, day, type) => {


        let shopTimingArr = this.state.shopTiming
        let shopTimingApiReqArr = this.state.shopTimingApiReq
        shopTimingArr[0][day][0][event.target.name][type] = event.target.value


        if (type === "hours") {
            shopTimingApiReqArr[0][day][0][event.target.name] = `${event.target.value}:${shopTimingArr[0][day][0][event.target.name].minutes} ${shopTimingArr[0][day][0][event.target.name].AM_PM}`
        }
        else if (type === "minutes") {
            shopTimingApiReqArr[0][day][0][event.target.name] = `${shopTimingArr[0][day][0][event.target.name].hours}:${event.target.value} ${shopTimingArr[0][day][0][event.target.name].AM_PM}`
        }
        else {
            shopTimingApiReqArr[0][day][0][event.target.name] = `${shopTimingArr[0][day][0][event.target.name].hours}:${shopTimingArr[0][day][0][event.target.name].minutes} ${event.target.value}`
        }
        this.setState({ shopTiming: shopTimingArr, shopTimingApiReq: shopTimingApiReqArr })


    }



    render() {
        return (
            this.state.PreviewWebpageRetailerStatus ? <PreviewWebpageRetailer ShopNumber={this.state.ShopNumber} FloorNumber={this.state.FloorNumber} MartName={this.state.MartName} MartAddress={this.state.MartAddress} ShopName={this.state.shopName} /> : <div>

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
                                <p><input name="shopName"
                                    onChange={(event) => this.handleInput(event)} type="text" class="form-control" placeholder="Shop Name" /></p>
                            </span>
                            <span class="name">
                                <label>Shop Number *</label>
                                <p><input name="shopNumber"
                                    onChange={(event) => this.handleInput(event)}
                                    type="text" class="form-control" placeholder="123456" /></p>
                            </span>
                            <span class="name">
                                <label>Floor Number *</label>
                                <p><input name="floorNumber"
                                    onChange={(event) => this.handleInput(event)}
                                    type="text" class="form-control" placeholder="2" /></p>
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
                                                <li><input
                                                    name="mobileno"
                                                    onChange={(event) => this.handleInput(event)}
                                                    type="text" class="form-control" placeholder="9650225013" /></li>
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

                                    {this.state.productServiceDetails.map((item, index) => {
                                        return (

                                            <tr>
                                                <td class="num">0{index + 1}</td>
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
                                                <td><input name="itemType" onChange={(event) => this.productServiceDetailsInput(event, index)} type="text" class="form-control cat-subcat" /></td>
                                                <td><input name="brand" onChange={(event) => this.productServiceDetailsInput(event, index)} type="text" class="form-control cat-subcat" /></td>
                                                <td><input name="itemName" onChange={(event) => this.productServiceDetailsInput(event, index)} type="text" class="form-control cat-subcat" /></td>
                                                <td><input name="price" onChange={(event) => this.productServiceDetailsInput(event, index)} type="text" class="form-control cat-subcat" /></td>
                                            </tr>

                                        )
                                    })

                                    }

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
                            <textarea name="aboutUs"
                                onChange={(event) => this.handleInput(event)} class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Write something about yourself and your shop....."></textarea>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "sunday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "sunday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "sunday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "sunday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "sunday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "sunday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "monday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "monday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "monday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "monday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "monday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "monday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "tuesday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "tuesday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "tuesday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "tuesday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "tuesday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "tuesday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "wednesday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "wednesday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "wednesday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "wednesday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "wednesday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "wednesday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "thursday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "thursday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "thursday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "thursday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "thursday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "thursday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "friday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "friday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "friday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "friday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "friday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "friday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "saturday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "saturday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>

                                                </select>
                                                <select name="startTime" class="form-control cat-subcat lst" onChange={(event, day = "saturday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="catt">
                                            <div class="table-cont">
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "saturday", type = "hours") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "saturday", type = "minutes") => this.handleShopTimingInput(event, day, type)}>
                                                    <option>00</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                                <select name="endTime" class="form-control cat-subcat lst" onChange={(event, day = "saturday", type = "AM_PM") => this.handleShopTimingInput(event, day, type)}>
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
                                    <li button onClick={() => { this.setState({ PreviewWebpageRetailerStatus: true }) }} class="cancel_c3"><button class="save" data-toggle="modal" data-target="#">Preview</button></li>
                                    <li><button onClick={() => { this.handleSave() }} type="button" class="save" data-toggle="modal" data-target="#thanks-for">Save</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {

    return {
        applicationData: state.AuthReducer.userData

    }

}
export default connect(mapStateToProps)(CreateWebpage);
