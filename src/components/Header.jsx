import React, { useState, useEffect } from 'react'
import { Modal, ModalBody, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { validatePinCode, validateProvince, validateCity, validateAddress } from '../utils/validation/Validation';
import ProvinceJSON from '../utils/JSON/province.json';
import apiRequest from '../api/Apirequest';
import ToasterFunction from '../components/ToasterFunc';
import Cookies from 'universal-cookie';
// import Geocode from "react-geocode";

const Header = (props) => {
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
    const [search, setSearch] = useState("");

    const [modalStatus, setModal] = useState(false);
    const [modalStatus1, setModal1] = useState(false);
    const [modalStatusView, setModalView] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    // const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [showLocationTitle, setShowLocationTitle] = useState(true)

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    // const toggle2 = () => setDropdownOpen2(prevState => !prevState);

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
        // reverseGeoCode(event.target.value);
        setCityError(validateCity(event.target.value).error);
        setCityStatus(validateCity(event.target.value).status);
    }

    let handleAddress = (event) => {
        setAddress(event.target.value);
        setAddressError(validateAddress(event.target.value).error);
        setAddressStatus(validateAddress(event.target.value).status);
    }

    let handleSearch = (event) => {
        setSearch(event.target.value);

    }


    // to return list of state 
    const ProvinceList = ProvinceJSON.states.map((item, index) => {
        return <option value={item.state}
        >{item.state}</option>

    });


    const reverseGeoCode = () => {

        return new Promise((resolve, reject) => {

            if (window.google) {
                let geocoder = new window.google.maps.Geocoder();

                geocoder.geocode({ address: pinCode }, function (results, status) {

                    console.log("Results=> ", results, " status=> ", status);

                    if (status === "OK") {

                        let lat = results[0].geometry.location.lat();
                        let lng = results[0].geometry.location.lng();

                        const cookies = new Cookies();
                        cookies.set('latitude', lat, { path: '/' });
                        cookies.set('longitude', lng, { path: '/' });

                        // console.log("latLong=> ", results[0].geometry.location, lat, lng);

                        setLatitude(lat);
                        setLongitude(lng);
                        resolve();

                    } else {
                        reject();
                        //   alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            }
            else {
                reject();
            }
        })

    }

    // let getAddressData = () => {

    //     // Get address from latidude & longitude.
    //     Geocode.setApiKey("AIzaSyC5xm2_oboD4KY1Si7XtasWL0IzjDOshPM");

    //     Geocode.fromLatLng("48.8583701", "2.2922926").then(
    //         response => {
    //             const address = response.results[0].formatted_address;
    //             console.log("getaddressdata", address);
    //         },
    //         error => {
    //             console.error(error);
    //         }
    //     );
    // }

    // let getCoordinateFromAddress = () => {

    //     // Get latidude & longitude from address.
    //     Geocode.fromAddress("Eiffel Tower").then(
    //         response => {
    //             const { lat, lng } = response.results[0].geometry.location;
    //             console.log("akkkkkkk", lat, lng);
    //         },
    //         error => {
    //             console.error(error);
    //         }
    //     );
    // }


    let getPopupAddress = () => {
        try {
            apiRequest({ pinCode: pinCode, state: province, city: city, address: address }, '/user/dashboardPopupAddress', 'POST')
                .then((resp) => {
                    console.log('response==', resp)

                    switch (resp.status) {
                        case (200): {
                            if (resp.data.responseCode == 200) {
                                ToasterFunction("success", "Location added successfully");
                                //  alert("Location added successfully")
                            }
                            else if (resp.data.responseCode == 404) {
                                ToasterFunction("info", "Location not found");
                                //  alert("Location not found")
                            }
                            else if (resp.data.responseCode == 500) {
                                ToasterFunction("error", "Internal Server Error");
                                //  alert("Internal Server Error")
                            }
                        }
                            break;
                        default: return;
                    }
                })
        } catch (error) {
            // console.log("responseerror==",error)
            ToasterFunction("error", "Network error, please contact the administrator");

        }

    }

    async function validatemain() {

        if (pinCodeStatus) {

            reverseGeoCode().then(resp => {
                setShowLocationTitle(false);
                if (provinceStatus) {
                    if (cityStatus) {
                        if (addressStatus) {
                            getPopupAddress();
                            // alert(`submit sucsessfully`)
                            setModal1(!modalStatus1)
                        } else { setAddressError("*Please Enter Address.") }
                    } else { setCityError("*Please Select City.") }
                } else { setProvinceError("*Please Select State.") }
            })
                .catch(err => {
                    setPinCodeError("*Unable to find your location. Please enter another pin code.")
                    setPinCodeStatus(false);
                })

        } else { setPinCodeError("*Please enter pin code.") }
    }

    const handleModal = () => {
        //    console.log("abcd");
        setModal(false)
        setModal1(true)
    }




    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("position",position);
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude); 
            const cookies = new Cookies();
            cookies.set('latitude', position.coords.latitude, { path: '/' });
            cookies.set('longitude', position.coords.longitude, { path: '/' });
            setShowLocationTitle(false);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

        },
            function (error) {
                setModal(true);
            }
        );

    }, []);



    let getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("position",position);
            // console.log("Latitude is :", position.coords.latitude);
            //  console.log("Longitude is :", position.coords.longitude); 
            setShowLocationTitle(false);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        },
            function (error) {
                console.log("location_error=>", error);
                ToasterFunction('info', 'You have denied location access to this website. Please manually allow the location access from the browser.');
                // setModal(true);
            }

        );
        setModal1(false);
    }


    let navigateButton = () => {
        window.location.href = `/couponsBySearch/${search}`
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
                                        <a href="#" data-toggle="modal" data-target="#fill-loctnform" onClick={() => setModal1(!modalStatus1)}>{showLocationTitle ? "Choose location" : latitude + " , " + longitude}<i class="" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="left-top">
                                <ul class="leftsideloctn">
                                    <li class="nav-item dropdown">
                                        <Dropdown isOpen={dropdownOpen} id="retailer-dropdown" toggle={toggle}>
                                            <DropdownToggle id="retailer-dropdown" className="nav-item dropdown" caret>
                                                Retailer
                                         </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu log-menu">

                                                <DropdownItem tag={Link} id="login-retailer" to="/LoginRetailer">Login</DropdownItem>
                                                {/* <DropdownItem tag={Link} to="/SignupRetailer" >Signup</DropdownItem> */}
                                                <DropdownItem tag={Link} to="/CreateWebpageInitialSignupProcess">Signup</DropdownItem>
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
                            <Link class="navbar-brand" to="/">
                                <img class="logo" src={require("../assets/images/Logo.png")} />
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" onClick={() => setModalView(!modalStatusView)}>
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse show" id="navbarSupportedContent">
                                {/* <ul class="navbar-nav ml-auto custom-nav">
                                    <li class="serch-sec">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search by Title, Product/Service name etc" />
                                            <div class="input-group-append">
                                                <button class="btn btn-seach" type="button">
                                                    <i class="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li> */}

                                {/* <li class="nav-item dropdown account-drop">
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

                                    </li> */}
                                {/* <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li> */}
                                {/* <li class="prfile">
                                        <img src={require("../assets/images/new-profile.png")} />
                                        <p>Kamal</p>
                                    </li> */}
                                {/* </ul> */}
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
                                            <input type="text"
                                                value={search}
                                                onChange={handleSearch}
                                                class="form-control"
                                                placeholder="Search by Mart, Retailer, Category, Sub category, Item type, Brand" />
                                            {/* placeholder="Search by Title, Product/Service name etc" /> */}
                                            <div class="input-group-append">

                                                <button disabled={!search} class="btn btn-seach" type="button" onClick={() => navigateButton()}>
                                                    <i class="fa fa-search"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </li>
                                    {/* 
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

                                    </li> */}
                                    {/* <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li>
                                    <li class="prfile">
                                        <img src={require("../assets/images/new-profile.png")} />
                                        <p>Kamal</p>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>}
            </header>
            <Modal isOpen={modalStatus} style={{ top: "190px", }}>
                <ModalBody>
                    <form>
                        <div class="modal-header locationsethead">
                            <h5>Our search and notification services require information about your geolocation. Please set your location.</h5>
                        </div>
                        <div class="modal-body ok n-yes">
                            <button class="btn setloc-btn" type="button" data-dismiss="modal" onClick={() => handleModal()}>Ok</button>
                            {/* <Link to="SignupCustomer"><button type="button" class="btn setloc-btn" type="submit" onClick={() => setModal(!modalStatus)}>Yes</button></Link> */}
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
                                <li><button type="button" class="btn btn-location" onClick={() => getCurrentLocation()}>Use my current location</button></li>
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
                                            {ProvinceList}
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
                                                .filter(({ state }) => state == province)
                                                .map(({ districts }) => districts.map((DistrictList) => <option>{DistrictList}</option>))}
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
                                        <button type="button" class="btn btn-primary" onClick={(e) => validatemain(e)}>Save</button>
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

export default Header


