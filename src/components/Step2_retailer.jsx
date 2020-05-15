import React, { Component } from 'react'

export default class Step2_retailer extends Component {
    render() {
        return (
            <div>
               
                        <div class="tab-pane fade show active" id="v-pills-manage" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h3 class="info_c3">Register Your Business</h3>
                            <div class="name_c3">
                                
                                <span class="name">
                  <label>GSTIN *</label>
                  <div class="mmm">
                     <div class="row">
                        <div class="col-md-2">
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked/>
                              <label class="form-check-label mar" for="exampleRadios1">
                              Yes
                              </label>
                           </div>
                        </div>
                        <div class="col-md-10">
                           <ul class="select_s34">
                              <li><input type="text" class="form-control" placeholder="Please enter GSTIN"/></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="mmm">
                     <div class="row">
                        <div class="col-md-2">
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="exampleRadios"  value="option2"/>
                              <label class="form-check-label mar" for="exampleRadios2">
                              No
                              </label>
                           </div>
                        </div>
                        <div class="col-md-10">
                           <ul class="select_s34">
                              <div class="form-check">
                                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                 <label class="form-check-label mar" for="defaultCheck1">
                                 I confirm that I never been issued GSTIN
                                 </label>
                              </div>
                           </ul>
                        </div>
                     </div>
                  </div>
               </span>
                                
                                <span class="name">
                  <label>Registered Business Name *</label>
                  <p><input type="text" class="form-control" placeholder="Business Name "/></p>
               </span>
                                <span class="name">
                  <label>Registered Business Phone Number *</label>
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
                              <li><input type="text" class="form-control" placeholder="9650225013"/></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </span>
                                <div class="address">
                                    <h3 class="enregbus">Registered Business Address:</h3>
                                    <span class="name">
                  <label>Pin Code*</label>
                  <input type="text" class="form-control" placeholder="110025"/>
                  </span>
                                    <span class="name">
                     <label>State*</label>
                     <select class="form-control">
                        <option>UP</option>
                     </select>
                  </span>
                                    <span class="name">
                     <label>City*</label>
                     <select class="form-control">
                        <option>Noida</option>
                     </select>
                  </span>
                                    <span class="name">
                  <label>Address*</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                  </span>
                                    <span class="name">
                  <label>Upload Address Proof*</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Okhla phase 1 , D115"></textarea>
                  </span>
                                    <div class="filechoose">
                                        <div class="namee">
                                            <p class="upload">(Upload Electric Bill,Water Bill,Gas Bill,Bank Statement,Adhar Card Detail)</p>
                                            <i class="fa fa-paperclip" aria-hidden="true"></i>
                                            <div class="icnflex">
                                                <input type="file" class="form-control-file"/>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="button_cs">
                                        <li class="cancel_c3">
                                            <button class="save" data-toggle="modal" data-target="#exampleModal">Cancel</button>
                                        </li>
                                        <li>
                                       <a href="82-step-2 payment screen.html"> <button type="button" class="save" data-toggle="modal" data-target="#">Save</button></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    
    
    {/* <p class="copyright text-center">@All rights reserved 2020</p> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body verfy_cs3">
                    <h1>OTP verification</h1>
                    <p class="text_c3">Please enter the 4 digits OTP sent on your registered phone number </p>
                    <h2>Enter 4-digits code</h2>
                    <ul class="enter_code">
                        <li>
                            <input type="text" class="form-control txt_c3"/>
                        </li>
                        <li>
                            <input type="text" class="form-control txt_c3"/>
                        </li>
                        <li>
                            <input type="text" class="form-control txt_c3"/>
                        </li>
                        <li>
                            <input type="text" class="form-control txt_c3"/>
                        </li>
                    </ul>
                    <span class="re_cs3"><a href="#"  data-toggle="modal" data-target="#otpmodal" data-dismiss="modal">Resend</a></span>
                </div>
                <div class="modal-footer botton_modal">
                    <button type="button" class="save">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="otpmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header locationsethead">
                    <h5>OTP resent successfully.</h5>
                </div>
                <div class="modal-body ok">
                    <button class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#congrats">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="review" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header locationsethead">
                    <h5>Your application is under review by the administrator.
                     It may take upto 48 hours .
                  </h5>
                </div>
                <div class="modal-body ok">
                    <button class="btn setloc-btn" type="submit" data-dismiss="modal" data-toggle="modal" data-target="#app">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="app" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header locationsethead">
                    <h5>Your application is under review !</h5>
                    <img src="images/blue cross.png" data-dismiss="modal"/>
                </div>
                <div class="modal-body">
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="changed" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header locationsethead">
                    <h5>Your password has been changed successfully.</h5>
                </div>
                <div class="modal-body ok">
                    <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="paypal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header locationsethead">
                    <h5>My Payment</h5>
                    <img src="images/blue cross.png" data-dismiss="modal"/>
                </div>
                <div class="modal-body">
                    <div class="total-pay">
                        <h5 class="inc-gst">TOtal pay (Include GST) :    Rs 550.00 </h5>
                        <h5 class="inc-gst">Please select payment process  :</h5>
                    </div>
                    <ul class="imgeicons even">
                        <li><img src="images/paypal.png" data-toggle="modal" data-target="#paysuces" data-dismiss="modal"/></li>
                        <li> <img src="images/stripe.png"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="paysuces" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header locationsethead">
                    <h5>Congratulation you have successfully done payment!</h5>
                </div>
                <div class="modal-body ok">
                    <button class="btn setloc-btn" type="submit" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="locationsetmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
    </div>
    <div class="modal fade" id="logout" tabindex="-1" role="dialog"  aria-hidden="true">
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
     </div>
     <div class="modal fade" id="congtrs" tabindex="-1" role="dialog" aria-labelledby="congtrs" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content">
              <div class="modal-body">
                 <p class="mt-3">Congratulations Kamal, you have successfully signed up into the website !</p>
                 <p class="my-3">Please  register your business to activate services .</p>
                 
              </div>
              <div class="modal-footer botton_modal">
                 <button class="save" data-dismiss="modal">OK</button>
              </div>
           </div>
        </div>
     </div>
    {/* <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/app.js"></script>
    <script>
        $(document).ready(function(){
            $("#congtrs").modal('show');
        });
     </script>
    <script>
        $('.top-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    </script> */}


            </div>
        )
    }
}
