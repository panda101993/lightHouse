import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Header5(props) {

    // const [modalStatus,setModal] =useState(false)
    const [modalStatus, setModal] = useState(false) 
    const [modalStatusView, setModalView] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

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
                                        <a href="#" data-toggle="modal" data-target="#fill-loctnform" >Choose location <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                                       
                                    </li>
                                </ul>
                            </div>
                            <div class="left-top">
                                <ul class="leftsideloctn">
                                    <li class="nav-item dropdown">
                                        
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                            <DropdownToggle className="nav-item dropdown" caret>
                                                Retailer
                                         </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu log-menu">

                                                <DropdownItem tag={Link} to="/LoginRetailer">Login</DropdownItem>
                                                <DropdownItem tag={Link} to="/" >Signup</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>


                                    </li>
                                    <li class="nav-item dropdown">
                                       
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
                {modalStatusView  ? 
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img class="logo" src={require("../assets/images/Logo.png")} />
                        </a>
                        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"  onClick={() => setModalView(!modalStatusView)}>
                            <span class="navbar-toggler-icon"></span>
                        </button> */} 
                          <button class="navbar-toggler" type="button" 
                          data-toggle="collapse"
                           data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setModalView(!modalStatusView)} >
               <span class="navbar-toggler-icon"></span>
               </button>
                        <div class="collapse navbar-collapse show" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto custom-nav">
                               
                                <li class="serch-sec">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search by Title, Product/Service name etc" />
                                        <div class="input-group-append">
                                            <button class="btn btn-seach" type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                  

                                <li class="nav-item dropdown account-drop">
                                   
                                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2} >
                                        <DropdownToggle caret>
                                            My Account
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag={Link} to="/Setting_enduser" >My Profile</DropdownItem>
                                            <DropdownItem tag={Link} to="/Setting_enduser/MyWishListUser" >My WishList </DropdownItem>
                                            <DropdownItem tag={Link} to="/Setting_enduser/MysavedCoupon">My Saved Coupons </DropdownItem>
                                            <DropdownItem  onClick={() => setModal(!modalStatus)} >LogOut</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                </li>
                                <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li>
                                <li class="prfile">
                                    <img src={require("../assets/images/new-profile.png")} />
                                    <p>Kamal</p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> :  <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img class="logo" src={require("../assets/images/Logo.png")} />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setModalView(!modalStatusView)}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto custom-nav">
                               
                                <li class="serch-sec">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search by Title, Product/Service name etc" />
                                        <div class="input-group-append">
                                            <button class="btn btn-seach" type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item dropdown account-drop">
                                   
                                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2} >
                                        <DropdownToggle caret>
                                            My Account
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag={Link} to="/Setting_enduser" >My Profile</DropdownItem>
                                            <DropdownItem tag={Link} to="/Setting_enduser/MyWishListUser" >My WishList </DropdownItem>
                                            <DropdownItem tag={Link} to="/Setting_enduser/MysavedCoupon">My Saved Coupons </DropdownItem>
                                            <DropdownItem  onClick={() => setModal(!modalStatus)} >LogOut</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                </li>
                                <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li>
                                <li class="prfile">
                                    <img src={require("../assets/images/new-profile.png")} />
                                    <p>Kamal</p>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> }
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
                            <Link to="SignupCustomer"><button type="button" class="btn setloc-btn" type="submit" onClick={() => setModal(!modalStatus)}>Yes</button></Link>
                        </div>
                    </form>
                </ModalBody>
            </Modal>

            
        </div>   
    )
}

export default Header5
