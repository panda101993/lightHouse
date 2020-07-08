<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
=======
import React, { useState, useEffect  } from 'react'
>>>>>>> 7a838c46eb79e2089f4d27e012d1f41ba98fd5ed
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
<<<<<<< HEAD
import { logoutAction } from "../redux/action/AuthAction";
=======
import {logoutAction} from "../redux/action/AuthAction";
>>>>>>> 7a838c46eb79e2089f4d27e012d1f41ba98fd5ed
import Cookies from 'universal-cookie';

function Header2(props) {
    console.log("creditData==>", props.applicationData.credit)
    // const [modalStatus,setModal] =useState(false)
    const [modalStatus, setModal] = useState(false)
    const [modalStatusView, setModalView] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
<<<<<<< HEAD
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
=======
    const [latitude,setLatitude] = useState("");
    const [longitude,setLongitude] = useState("");
>>>>>>> 7a838c46eb79e2089f4d27e012d1f41ba98fd5ed

    useEffect(() => {
        const cookies = new Cookies();
        const latitude = cookies.get('latitude')
        const longitude = cookies.get('longitude')

        // console.log("long",longitude)
        // console.log("latt",latitude)
        setLatitude(latitude);
        setLongitude(longitude);

<<<<<<< HEAD
    });
    // this.props.action.logoutAction()=>this.props.history.push("/"))
=======
      });
// this.props.action.logoutAction()=>this.props.history.push("/"))
>>>>>>> 7a838c46eb79e2089f4d27e012d1f41ba98fd5ed
    return (
        <div>
            {/* <body> */}
            <header >
                <div class="top-head">
                    <div class="container-fluid">
                        <nav class="top-nav">
                            <div class="right-top">
                                <ul class="right-sideloctn">
                                    <li>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="modal" data-target="#fill-loctnform" >{latitude + " , " + longitude}<i class="" aria-hidden="true"></i></a>
                                        {/* <select class="custom-select" id="inputGroupSelect01" data-toggle="modal" data-target="#locationsetmodal">
                                            <option selected>Choose location</option>
                                            <option value="1">New Delhi</option>
                                            <option value="2">Lucknow</option>
                                            <option value="3">Noida</option>
                                        </select> */}
                                    </li>
                                </ul>
                            </div>
                            <div class="left-top">
                                <ul class="leftsideloctn">
                                    <li class="nav-item dropdown">
                                        {/* <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Retailer
                   </a>
                                    <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="14-login(retailer).html">Login</a>
                                        <a class="dropdown-item" href="25-signup-user.html">Sign Up</a>
                                    </div> */}
                                        {/* <select class="nav-link"   id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                        {/* Retailer */}
                                        {/* <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown"> */}
                                        {/* <option selected value="Retailers">Retailers </option>
                                            <option class="dropdown-item" value="1">Login</option>
                                            <option class="dropdown-item" value="2">Sign Up</option>  */}
                                        {/* </div> */}
                                        {/* </select> */}
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                            <DropdownToggle className="nav-item dropdown" caret>
                                                Retailer
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu log-menu">

                                                <DropdownItem tag={Link} to="/LoginRetailer">Login</DropdownItem>
                                                <DropdownItem tag={Link} to="/CreateWebpageInitialSignupProcess" >Signup</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>

                                    </li>
                                    <li class="nav-item dropdown">
                                        {/* <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        End User
                   </a>
                                    <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="3-login.html">Login</a>
                                        <a class="dropdown-item" href="25-signup-user.html">Sign Up</a>
                                    </div> */}
                                        {/* <select value="UserEnd" class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                        {/* <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown"> */}
                                        {/* <option selected value="Retailers">UserEnd </option>
                                            <option class="dropdown-item" value="1" >Login</option>
                                            <option class="dropdown-item" value="2">Sign Up</option>  */}
                                        {/* </div> */}
                                        {/* </select>  */}
                                        <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                                            <DropdownToggle caret>
                                                Enduser
        </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu log-menu" >

                                                <DropdownItem tag={Link} to="/LoginCustomer">Login</DropdownItem>
                                                <DropdownItem tag={Link} to="/SignupCustomer">Signup</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {modalStatusView ? <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img class="logo" src={require("../assets/images/Logo.png")} />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="true" aria-label="Toggle navigation" onClick={() => setModalView(!modalStatusView)} >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse show" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto custom-nav">
                                {/* <li class="serch-sec">
                                <input class="form-control"
                                    type="search"
                                    placeholder="Search by Title, Product/Service name etc"
                                    aria-label="Search"
                                />
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </li> */}
                                {/* <li class="serch-sec">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search by Title, Product/Service name etc" />
                                        <div class="input-group-append">
                                            <button class="btn btn-seach" type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li> */}
                                <li class="nav-item dropdown account-drop">
                                    {/* <a class="nav-link py-0" id="navbarDropdown" href="77-settings-retailer1.html">  */}
                                    <Link class="nav-link py-0" id="navbarDropdown" to='/Setting_retailer/MyCredits'>
                                        Credits Point({props.applicationData.credit})
                             </Link>
                                    {/* </a> */}
                                </li>
                                <li class="nav-item dropdown account-drop">
                                    <a class="nav-link py-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setModal(!modalStatus)}>
                                        {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                        {/* My Account */}
                                    Log Out
                                    {/* </a> */}
                                    </a>
                                    {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">MY</a>
                                    <a class="dropdown-item" href="#">My Account</a>
                                </div> */}
                                </li>
                                <Link to='/NotificationScreensRetailer' >
                                    <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li>
                                </Link>


                                <li class="prfile">
                                    {props.applicationData.shopName}
                                    <p></p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> : <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img class="logo" src={require("../assets/images/Logo.png")} />
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation" onClick={() => setModalView(!modalStatusView)} >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto custom-nav">
                                    {/* <li class="serch-sec">
                                <input class="form-control"
                                    type="search"
                                    placeholder="Search by Title, Product/Service name etc"
                                    aria-label="Search"
                                />
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </li> */}
                                    {/* <li class="serch-sec">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search by Title, Product/Service name etc" />
                                        <div class="input-group-append">
                                            <button class="btn btn-seach" type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li> */}
                                    <li class="nav-item dropdown account-drop">
                                        {/* <a class="nav-link py-0" id="navbarDropdown" href="77-settings-retailer1.html">
                             Credits Point({props.applicationData.credit})
                         </a> */}
                                        <Link class="nav-link py-0" id="navbarDropdown" to='/Setting_retailer/MyCredits'>
                                            Credits Point({props.applicationData.credit})
                             </Link>
                                    </li>

                                    <li class="nav-item dropdown account-drop">
                                        <a class="nav-link py-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setModal(!modalStatus)}>
                                            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                            {/* My Account */}
                                    Log Out
                                    {/* </a> */}
                                        </a>
                                        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">MY</a>
                                    <a class="dropdown-item" href="#">My Account</a>
                                </div> */}
                                    </li>
                                    {/* <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li> */}
                                    <Link to='/NotificationScreensRetailer' >
                                        <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li>
                                    </Link>
                                    <li class="prfile">
                                        {/* <img src={require("../assets/images/new-profile.png")} /> */}
                                        <p>{props.applicationData.shopName}</p>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>}

            </header>
            <Modal isOpen={modalStatus} style={{ top: "190px", }}>
                <ModalBody>
                    <form>
                        <div class="modal-header locationsethead">
                            <h5>Are you sure you want to Logout?</h5>
                        </div>
                        {/* <div >
                        <button class="btn setloc-btn" onClick={() => this.setState({ modalStatus: false })} >OK</button>
                    </div> */}
                        <div class="modal-body ok n-yes">
                            <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => setModal(!modalStatus)}>No</button>
                            <Link to="/">      <button type="button" class="btn setloc-btn" type="submit" onClick={() => {
                                setModal(!modalStatus)
                                props.action.logoutAction()
                            }}>Yes</button></Link>
                        </div>
                    </form>
                </ModalBody>
            </Modal>

            {/* <div class="modal fade" id="logout" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content coup-code">
                    <div class="modal-header locationsethead adminis">
                        <h5>Are you sure you want to Logout?</h5>
                    </div>
                    <div class="modal-body ok n-yes">
                        <button class="btn setloc-btn" type="submit" data-dismiss="modal">No</button>
                        <a href="3-login.html"><button type="button" class="btn setloc-btn" type="submit">Yes</button></a>
                    </div>
                </div>
            </div>
        </div> */}
            {/* </body> */}
        </div>
    )
}
const mapStateToProps = state => {
    console.log("stateLogin-------", state)
    return {
        applicationData: state.ProfileDetailsReducer.profileData
    }

}
const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ logoutAction }, dispatch)
    }
}

// export default Header2
export default connect(mapStateToProps, mapDispatchToProps)(Header2);