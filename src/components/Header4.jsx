import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { validatePinCode, validateProvince, validateCity, validateAddress } from '../utils/validation/Validation';
import ProvinceJSON from '../utils/JSON/province.json';
import apiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';

const Header4 = (props) => {
    const [pinCode, setPinCode] = useState("");
    const [pinCodeError, setPinCodeError] = useState("");
    const [pinCodeStatus, setPinCodeStatus] = useState(false);


    const [province, setProvince] = useState("");
    const [provinceError, setProvinceError] = useState("");
    const [provinceStatus, setProvinceStatus] = useState(false);

    

    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState("");
    const [cityStatus, setCityStatus] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [addressStatus, setAddressStatus] = useState(false);

    const [modalStatus, setModal] = useState(false);
    const [modalStatus1, setModal1] = useState(false);
    const [modalStatusView, setModalView] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    let handlePinCode = (event) => {
        setPinCode(event.target.value)
        setPinCodeError(validatePinCode(event.target.value).error);
        setPinCodeStatus(validatePinCode(event.target.value).status);
    }

    let handleProvince = (event) => {
        setProvince(event.target.value);
        setProvinceError(validateProvince(event.target.value).error);
        setProvinceStatus(validateProvince(event.target.value).status);
    }

    let handleCity = (event) => {
        setCity(event.target.value);
        setCityError(validateCity(event.target.value).error);
        setCityStatus(validateCity(event.target.value).status);
    }

    let handleAddress = (event) => {
        setAddress(event.target.value);
        setAddressError(validateAddress(event.target.value).error);
        setAddressStatus(validateAddress(event.target.value).status);
    }


    // to return list of state 
    const ProvinceList = ProvinceJSON.states.map((item, index) => {
        return <option value={item.state} 
        >{item.state}</option>
        
    });

    let getPopupAddress = () => {
    try {
        apiRequest({pinCode:pinCode,state:province,city:city,address:address},'/user/dashboardPopupAddress','POST')
     .then((resp)=>{
         console.log('response==',resp)

         switch(resp.status) {
             case(200): {
                 if(resp.data.responseCode == 200)
                 {
                    ToasterFunction("success", "Location added successfully");
                    //  alert("Location added successfully")
                 }
                 else if(resp.data.responseCode == 404)
                 {
                    ToasterFunction("info", "Location not found");
                    //  alert("Location not found")
                 }
                 else if(resp.data.responseCode == 500)
                 {
                    ToasterFunction("error", "Internal Server Error");
                    //  alert("Internal Server Error")
                 }
             }
         }

      
     })   
    } catch (error) {
        console.log("responseerror==",error)
        ToasterFunction("error", "Network error, please contact the administrator");
        
    }
        
    }



    function validatemain() {
        if (pinCodeStatus) {
            if (provinceStatus) {
                if (cityStatus) {
                    if (addressStatus) {
                        getPopupAddress();
                        // alert(`submit sucsessfully`)
                        setModal1(!modalStatus1)
                    } else { setAddressError("*Please Enter Address") }
                } else { setCityError("*Please Select City") }
            } else { setProvinceError("*Please Select State") }
        } else { setPinCodeError("*Please Enter Pin code") }
    }


    return (
        <div>
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
                                        <a href="#" data-toggle="modal" data-target="#fill-loctnform" onClick={() => setModal1(!modalStatus1)}>Choose location <i class="fa fa-angle-down" aria-hidden="true"></i></a>
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
                {modalStatusView ?
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <Link class="navbar-brand" to="/" >
                                <img class="logo" src={require("../assets/images/Logo.png")} />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" onClick={() => setModalView(!modalStatusView)}>
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
                                                <DropdownItem tag={Link} to="/Setting_enduser/MysavedCoupon">My Favourite Coupons </DropdownItem>
                                                <DropdownItem onClick={() => setModal(!modalStatus)} >LogOut</DropdownItem>
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
                    </div> : <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <Link class="navbar-brand" to="/">
                                <img class="logo" src={require("../assets/images/Logo.png")} />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setModalView(!modalStatusView)}>
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
                                                <DropdownItem tag={Link} to="/Setting_enduser/MysavedCoupon">My Favourite Coupons </DropdownItem>
                                                <DropdownItem onClick={() => setModal(!modalStatus)} >LogOut</DropdownItem>
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
                    </div>}
            </header>
            <Modal isOpen={modalStatus} style={{ top: "190px", }}>
                <ModalBody>
                    <form>
                        <div class="modal-header locationsethead">
                            <h5>Are you sure you want to Logout?</h5>
                        </div>
                        <div class="modal-body ok n-yes">
                            <button class="btn setloc-btn" type="submit" data-dismiss="modal" onClick={() => setModal(!modalStatus)}>No</button>
                            <Link to="SignupCustomer"><button type="button" class="btn setloc-btn" type="submit" onClick={() => setModal(!modalStatus)}>Yes</button></Link>
                        </div>
                    </form>
                </ModalBody>
            </Modal>

            <Modal isOpen={modalStatus1} style={{ top: "25px", marginLeft: "110px" }}>
                <ModalBody>
                    <form>
                        <div class="modal-header">
                            <ul class="curent-loc">
                                <li><i class="fa fa-map-marker" aria-hidden="true"></i></li>
                                <li><button type="button" class="btn btn-location">Use my current location</button></li>
                            </ul>
                        </div>
                        <div class="modal-body">
                            <div class="location-form">
                                <h3>Enter Your Location Details</h3>
                                <form>
                                    <div class="form-group dash-form">
                                        <label for="exampleFormControlInput1">Pin Code*</label>
                                        <input type="text"
                                            value={pinCode}
                                            onChange={handlePinCode}
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="" />
                                    </div>
                                    <div style={{ color: 'red' }}>
                                        <lable forhtml="pinCodeError">{pinCodeError}</lable>
                                    </div>

                                    <div class="form-group dash-form">
                                        <label for="exampleFormControlSelect1">State*</label>
                                        <select class="form-control" 
                                        id="exampleFormControlSelect1" 
                                        onChange={handleProvince} 
                                        value={province}>
                                            <option value="">Select State</option> 
                                            { ProvinceList}                                         
                                        </select>  
                                    </div>
                                    <div style={{ color: 'red' }}>
                                        <lable forhtml="provinceError">{provinceError}</lable>
                                    </div>

                                    <div class="form-group dash-form">
                                        <label for="exampleFormControlSelect2">City*</label>                                         
                                        <select class="form-control"
                                        id="exampleFormControlInput1"
                                        onChange={handleCity}
                                        value={city}>{ProvinceJSON.states
                                        .filter(({state})=> state == province)
                                        .map(({districts}) => districts.map((DistrictList) =><option>{DistrictList}</option>))}
                                            <option value="">Select City</option>
                                            {/* { DistrictList } */}
                                        </select>
                                        
                                    </div>
                                    <div style={{ color: 'red' }}>
                                        <lable forhtml="cityError">{cityError}</lable>
                                    </div>

                                    <div class="form-group dash-form">
                                        <label for="exampleFormControlTextarea1">Address*</label>
                                        <textarea class="form-control"
                                            id="exampleFormControlTextarea1" rows="3" 
                                            value={address} 
                                            onChange={handleAddress}>
                                        </textarea>
                                    </div>
                                    <div style={{ color: 'red' }}>
                                        <lable forhtml="addressError">{addressError}</lable>
                                    </div>

                                    <div class="dasmodal-save">
                                        <button type="submit" class="btn btn-primary" onClick={() => validatemain()}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>


        </div>
    )
}

export default Header4
