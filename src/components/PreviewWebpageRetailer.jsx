import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class PreviewWebpageRetailer extends Component {
   

    render() {
        return (
            <div>

                <div class="tab-pane fade show active" id="v-pills-webpage" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    
                    <section>
                        <div class="bg"><img src={require("../assets/images/Layer-40.png")} /></div>
                        <div class="container">
                            <div class="basic ">
                                <span><button class="view-but">View Coupons</button></span>
                                <h5>Basic Information</h5>
                                <div class="information">
                                    <ul class="shop">
                                        <li>Shop Name : &nbsp &nbsp </li>
                                        <li>Shop Number : &nbsp &nbsp </li>
                                        <li>Floor Number : &nbsp &nbsp </li>
                                        <li>Mart Name &nbsp : &nbsp &nbsp </li>
                                        <li>Mart Address: &nbsp &nbsp </li>
                                    </ul>
                                    <ul class="mart">
                                        <li>Shop Name</li>
                                        <li>123456789</li>
                                        <li>2</li>
                                        <li>Mart Name</li>
                                        <li>Okhla Phase 1 , D -115, New Delhi</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="about-us">
                                <h4>About Us ( Limit 500 words )</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                                    </p>
                                {/* <p style="margin: 0px">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                                    </p>
                                <p style="margin: 0px; text-align: right;">
                                    <a href="#" class="bluelink">Read More</a>
                                </p> */}
                            </div>
                            <div class="time">
                                <h2>Shop Timings  </h2>
                                <div class="shop-timing">
                                    <ul class="sunday">
                                        <li>Sunday</li>
                                        <li>Monday</li>
                                        <li>Tuesday</li>
                                        <li>Wednesday</li>
                                        <li>Thursday</li>
                                        <li>Friday</li>
                                        <li>Saturday</li>
                                    </ul>
                                    <ul class="timeing">
                                        <li>9:30 AM - 5 PM</li>
                                        <li>9:30 AM - 5 PM</li>
                                        <li>9:30 AM - 5 PM</li>
                                        <li>9:30 AM - 5 PM</li>
                                        <li>9:30 AM - 5 PM</li>
                                        <li>9:30 AM - 5 PM</li>
                                        <li><a href="#">Close</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="product">
                                <h1>Product Service Details</h1>
                                <div class="accordion frequently" id="accordionExample">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Category 1 </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div class="sub-catgy">
                                                    <h6>Sub Category 1</h6>
                                                    <ul>
                                                        <li>Cloth</li>
                                                        <li>Nike</li>
                                                        <li>T-shirt</li>
                                                        <li>Rs.123.00</li>
                                                    </ul>
                                                    <ul>
                                                        <li>Cloth</li>
                                                        <li>Nike</li>
                                                        <li>T-shirt</li>
                                                        <li>Rs.123.00</li>
                                                    </ul>
                                                    <ul>
                                                        <li>Cloth</li>
                                                        <li>Nike</li>
                                                        <li>T-shirt</li>
                                                        <li>Rs.123.00</li>
                                                    </ul>
                                                    <div class="accordion frequently" id="accordionExample1">
                                                        <div class="card">
                                                            <div class="card-header chl-head" id="headingsub1">
                                                                <h2 class="mb-0">
                                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesub1" aria-expanded="false" aria-controls="collapsesub1">
                                                                        Sub Category 2 </button>
                                                                </h2>
                                                            </div>
                                                            <div id="collapsesub1" class="collapse" aria-labelledby="headingsub1" data-parent="#accordionExample1">
                                                                <div class="card-body">
                                                                    <div class="sub-catgy">
                                                                        <ul>
                                                                            <li>Cloth</li>
                                                                            <li>Nike</li>
                                                                            <li>T-shirt</li>
                                                                            <li>Rs.123.00</li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li>Cloth</li>
                                                                            <li>Nike</li>
                                                                            <li>T-shirt</li>
                                                                            <li>Rs.123.00</li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li>Cloth</li>
                                                                            <li>Nike</li>
                                                                            <li>T-shirt</li>
                                                                            <li>Rs.123.00</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header chl-head" id="heading2">
                                                                <h2 class="mb-0">
                                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesub2" aria-expanded="false" aria-controls="collapseOne">
                                                                        Sub Category 3 </button>
                                                                </h2>
                                                            </div>
                                                            <div id="collapsesub2" class="collapse" aria-labelledby="headingsub2" data-parent="#accordionExample1">
                                                                <div class="card-body">
                                                                    <div class="sub-catgy">
                                                                        <ul>
                                                                            <li>Cloth</li>
                                                                            <li>Nike</li>
                                                                            <li>T-shirt</li>
                                                                            <li>Rs.123.00</li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li>Cloth</li>
                                                                            <li>Nike</li>
                                                                            <li>T-shirt</li>
                                                                            <li>Rs.123.00</li>
                                                                        </ul>
                                                                        <ul>
                                                                            <li>Cloth</li>
                                                                            <li>Nike</li>
                                                                            <li>T-shirt</li>
                                                                            <li>Rs.123.00</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="heading2">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseOne">
                                                    Category 2 </button>
                                            </h2>
                                        </div>
                                        <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div class="sub-catgy">
                                                    <h6>Sub Category 1</h6>
                                                    <ul>
                                                        <li>Cloth</li>
                                                        <li>Nike</li>
                                                        <li>T-shirt</li>
                                                        <li>Rs.123.00</li>
                                                    </ul>
                                                    <ul>
                                                        <li>Cloth</li>
                                                        <li>Nike</li>
                                                        <li>T-shirt</li>
                                                        <li>Rs.123.00</li>
                                                    </ul>
                                                    <ul>
                                                        <li>Cloth</li>
                                                        <li>Nike</li>
                                                        <li>T-shirt</li>
                                                        <li>Rs.123.00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="back-button">
                            <a href="113-create webpage.html"> <button type="button" class="save">Edit</button> </a>
                        </div>
                    </section>
                </div>



            </div>
        )
    }
}

