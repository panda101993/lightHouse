import React, { Component } from 'react'
import Header2 from "../../components/Header2"
import Footer from "../../components/Footer";
import { GlobalCoupanImageBox } from "../../components/GlobalCoupanImageBox";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SavedCoupansRetailer from "../../components/SavedCoupansRetailer";
import SubmittedCoupansRetailer from "../../components/SubmittedCouponsRetailer";
import PublishedCoupansRetailer from "../../components/PublishedCoupansRetailer";
import RejectedCoupansRetailer from "../../components/RejectedCouponsRetailer";
import WithdrawnCoupansRetailer from "../../components/WithdrawnCouponsRetailer";
import ExpiredCoupansRetailer from "../../components/ExpiredCouponsRetailer";
import { Switch, Route, Link  ,NavLink} from "react-router-dom";


const SavedCoupons = () => 
<div>
    <SavedCoupansRetailer />
</div>;

const SubmittedCoupons = () => 
<div>
    <SubmittedCoupansRetailer />
</div>;

const PublishedCoupons = () => 
<div>
    <PublishedCoupansRetailer />
</div>;

const RejectedCoupons = () => 
<div>
    <RejectedCoupansRetailer />
</div>;

const WithdrawnCoupons = () => 
<div>
    <WithdrawnCoupansRetailer />
</div>;

const ExpiredCoupons = () => 
<div>
    <ExpiredCoupansRetailer />
</div>;



export default class MyCoupanHistory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modalStatus:false,
             modalStatus1:false,


        }
    }
    
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <body>
                    <Header2 />
                    <section>
                        <div class="container-fluid">
                            <div class="coupn-setting my-5">
                                <ul>
                                    <li>
                                      
                                        <Link to="/Coupon_template" >Create Coupon</Link>
                                        </li>
                                    <li >  
                                        <Link to={`${path}/SavedCoupons`} class="active" > Manage Coupons </Link></li>
                                    <li><Link to='/ManageOnetime'>Single Use Coupon</Link></li>
                                    <li><Link to="/Setting_retailer">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="container-fluid">
                            <div class="cover-copantabs">
                                <div class="main-copnatbs">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <NavLink to={`${path}/`} className="nav-link active" id="Saved-tab" data-toggle="tab"  role="tab" aria-controls="Saved" aria-selected="true">Saved Coupons</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to={`${path}/SubmittedCoupons`} className="nav-link " id="Submitted-tab" data-toggle="tab"  role="tab" aria-controls="Submitted" aria-selected="false">Submitted Coupons</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to={`${path}/PublishedCoupons`} className="nav-link" id="Published-tab" data-toggle="tab"  role="tab" aria-controls="Published" aria-selected="false">Published Coupons</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to={`${path}/RejectedCoupons`} className="nav-link" id="Rejected-tab" data-toggle="tab"  role="tab" aria-controls="Rejected" aria-selected="false">Rejected Coupons</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to={`${path}/WithdrawnCoupons`} className="nav-link" id="Withdrawn-tab" data-toggle="tab"  role="tab" aria-controls="Withdrawn" aria-selected="false">Withdrawn Coupons</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink to={`${path}/ExpiredCoupons`} className="nav-link" id="Expired-tab" data-toggle="tab" role="tab" aria-controls="Expired" aria-selected="false">Expired Coupons</NavLink>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                    <Switch>
                                            <Route path={`${path}/`} exact component={SavedCoupons} />
                                            <Route path={`${path}/SavedCoupons`} exact component={SavedCoupons} />
                                            <Route path={`${path}/SubmittedCoupons`}  exact component={SubmittedCoupons} />
                                            <Route path={`${path}/PublishedCoupons`}  exact component={PublishedCoupons} />
                                            <Route path={`${path}/RejectedCoupons`}  exact component={RejectedCoupons} />
                                            <Route path={`${path}/WithdrawnCoupons`}  exact component={WithdrawnCoupons} />
                                            <Route path={`${path}/ExpiredCoupons`}  exact component={ExpiredCoupons} />




                                            
                                        </Switch>

                                      
                                        
                                       


                                       
                                        
                                     
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>

                    <Footer />
                    <Modal isOpen={this.state.modalStatus} toggle={this.toggle} style={{ top: "190px", }}>
                        <ModalBody>
                            <div class="modal-header locationsethead adminis">
                                <h5>Are you sure you want to withdraw the coupon?</h5>
                            </div>
                            {/* <div style={{ textAlign: "center" }}>
                                <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                            </div> */}
                             <div class="modal-body ok n-yes">
                                    <button class="btn setloc-btn" type="submit" data-dismiss="modal"  onClick={() => this.setState({ modalStatus: false })}>No</button>
                                    <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit"  onClick={() => this.setState({ modalStatus: false })}>Yes</button></a>
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
                    {/* <div class="modal fade" id="logout" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content coup-code">
                                <div class="modal-header locationsethead adminis">
                                    <h5>Are you sure you want to withdraw the coupon?</h5>
                                </div>
                                <div class="modal-body ok n-yes">
                                    <button class="btn setloc-btn" type="submit" data-dismiss="modal">No</button>
                                    <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit">Yes</button></a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="modal fade" id="coupancode" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content coup-code">
                                <div class="modal-header locationsethead adminis">
                                    <h5>Coupon code copied successfully!</h5>
                                </div>
                                <div class="modal-footer botton_modal">
                                    <button class="btn setloc-btn" type="submit" data-dismiss="modal">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </body>
            </div>
        )
    }
}
