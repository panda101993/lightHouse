import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class FAQs extends Component {
    render() {
        return (
            <div>
                
{/* <html lang="en">
   <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/font-awesome.min.css">
      <link rel="stylesheet" href="css/slick.css">
      <link rel="stylesheet" href="css/slick-theme.css">
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="css/responsive-style.css">
      <title>FAQ</title>
   </head> */}
   <body>
       <Header/>
      {/* <header >
         <div class="top-head">
            <div class="container-fluid">
               <nav  class="top-nav">
                  <div class="right-top">
                     <ul class="right-sideloctn">
                        <li>
                           <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </li>
                        <li>
                           <a href="#" data-toggle="modal" data-target="#fill-loctnform" >Choose location <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                           <!-- <select class="custom-select" id="inputGroupSelect01" data-toggle="modal" data-target="#locationsetmodal">
                              <option selected>Choose location</option>
                              <option value="1">New Delhi</option>
                              <option value="2">Lucknow</option>
                              <option value="3">Noida</option>
                              </select> -->
                        </li>
                     </ul>
                  </div>
                  <div class="left-top">
                     <ul class="leftsideloctn">
                        <li class="nav-item dropdown">
                           <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Retailer
                           </a>
                           <div class="dropdown-menu log-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="14-login(retailer).html">Login</a>
                              <a class="dropdown-item" href="create-webpage126.html">Sign Up</a>
                           </div>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           End User
                           </a>
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
               <img class="logo" src="images/logo.png">
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto custom-nav">
                     <!--   <li class="serch-sec">
                        <input class="form-control" type="search" placeholder="Search by Title, Product/Service name etc" aria-label="Search">
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
                        </li -->
                        <li class="notification-icon"><a href="124-notifications-screen-retailer.html"><i class="fa fa-bell" aria-hidden="true"></i></a></li>
                        <li class="prfile"><p>Kamal</p></li>
                     <!-- <li class="prfile">
                        <img src="images/new-profile.png">
                        <p>Kamal</p>
                        </li> -->
                  </ul>
               </div>
            </nav>
         </div>
      </header> */}
      <section class="wrapper">
         <div class="container-fluid">
            <div class="row save-coupon">
               <div class="col-lg-3 col-md-12 col-sm-12 mb-3">
                  <div class="manage manage-faq">
                     <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active _settings" id="v-pills-faq-tab" data-toggle="pill" href="#v-pills-faq" role="tab" aria-controls="v-pills-faq" aria-selected="true">Loging</a>
                        <a class="nav-link _settings" id="v-pills-faq2-tab" data-toggle="pill" href="#v-pills-faq2" role="tab" aria-controls="v-pills-faq2" aria-selected="false">Location Settings</a>
                        <a class="nav-link _settings" id="v-pills-faq3-tab" data-toggle="pill" href="#v-pills-faq3" role="tab" aria-controls="v-pills-faq3" aria-selected="false">Settings</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9 col-md-12 col-sm-12">
                  <div class="tab-content" id="v-pills-tabContent">
                     <div class="tab-pane fade show active" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-faq-tab">
                        <div class="cover-accordion">
                           <div class="accordion frequently freqr" id="accordionExample">
                              <div class="card">
                                 <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingsix">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfour">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfive">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="v-pills-faq2" role="tabpanel" aria-labelledby="v-pills-faq2-tab">
                        <div class="cover-accordion">
                           <div class="accordion frequently freqr" id="accordionExample">
                              <div class="card">
                                 <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingsix">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfour">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfive">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="v-pills-faq3" role="tabpanel" aria-labelledby="v-pills-faq3-tab">
                        <div class="cover-accordion">
                           <div class="accordion frequently freqr" id="accordionExample">
                              <div class="card">
                                 <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingsix">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfour">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="card">
                                 <div class="card-header" id="headingfive">
                                    <h2 class="mb-0">
                                       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                       </button>
                                    </h2>
                                 </div>
                                 <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
                                    <div class="card-body">
                                       <p class="faq-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
         
      </section>
      <Footer/>
      {/* <footer class="footer">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="footer-logosec">
                     <img class="dammy-logo" src="images/logo-copy.png">
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="main-infosec">
                     <div class="info-left mr-15">
                        <h2>Information</h2>
                        <ul class="foter">
                           <li><a href="about.html">About Us </a></li>
                           <li><a href="terms-condition.html">Terms&Conditions </a></li>
                           <li><a href="privacypolicy.html">Privacy Policy </a></li>
                        </ul>
                     </div>
                     <div class="info-left">
                        <h2>CONTACT</h2>
                        <ul class="foter">
                           <li><a href="how-it-work.html">How it Works </a></li>
                           <li><a href="contact-us.html">Contact Us </a></li>
                           <li><a href="FAQS.html">FAQs </a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="right-footer">
                     <h2>Follow Us</h2>
                     <ul class="social-icon">
                        <li><a href="#"><img class="social-pic" src="images/fb.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/linkdn.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/googlepluse.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/twitr.png"></a></li>
                        <li><a href="#"><img class="social-pic" src="images/insta.png"></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer> */}
      {/* <p class="copyright text-center">@All rights reserved 2020</p>
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/app.js"></script>
      <script>
         $('.top-slider').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 4,
         slidesToScroll: 4,
         responsive: [
         {
         breakpoint: 1024,
         settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
         }
         },
         {
         breakpoint: 600,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2
         }
         },
         {
         breakpoint: 480,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
         }
         
         ]
         });
      </script>
      <script type="text/javascript">
         $('.panel-collapse').on('show.bs.collapse', function () {
         $(this).siblings('.panel-heading').addClass('active');
         });
         
         $('.panel-collapse').on('hide.bs.collapse', function () {
         $(this).siblings('.panel-heading').removeClass('active');
         });
      </script> */}
      {/* <div class="modal fade" id="locationsetmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header locationsethead">
                  <h5>Please Set Your Location!</h5>
               </div>
               <div class="modal-body">
                  <button class="btn setloc-btn" type="submit">OK</button>
               </div>
            </div>
         </div>
      </div> */}
   </body>

            </div>
        )
    }
}
