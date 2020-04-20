import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
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
                                                <Link class="nav-link" to="SignupRetailer" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Retailer
                           </Link>
                                                <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="14-login(retailer).html">Login</a>
                                                    <a class="dropdown-item" href="25-signup-user.html">Sign Up</a>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <Link class="nav-link " to="SignupCustomer" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    End User
                           </Link>
                                                <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="3-login.html">Login</a>
                                                    <a class="dropdown-item" href="25-signup-user.html">Sign Up</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <a class="navbar-brand" href="index.html">
                                    <img class="logo" src={require("../assets/images/Logo.png")} />
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto custom-nav">
                                        <li class="serch-sec">
                                            <input class="form-control" type="search" placeholder="Search by Title, Product/Service name etc" aria-label="Search" />
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </li>
                                        <li class="nav-item dropdown account-drop">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                My Account
                        </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">MY</a>
                                                <a class="dropdown-item" href="#">My Account</a>
                                            </div>
                                        </li>
                                        <li class="notification-icon"><i class="fa fa-bell" aria-hidden="true"></i></li>
                                        <li class="prfile">
                                            <img src={require("../assets/images/new-profile.png")} />
                                            <p>Kamal</p>
                                        </li>
                                    </ul>
                                </div> */}
                            </nav>
                        </div>
                    </header>
                {/* </body> */}
            </div>
        )
    }
}
