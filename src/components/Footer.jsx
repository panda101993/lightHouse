// import React, { Component } from 'react'

// export default class Footer extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <body> */}
//                 <footer class="footer">
//                     <div class="container-fluid">
//                         <div class="row">
//                             <div class="col-lg-3 col-md-12 col-sm-12">
//                                 <div class="footer-logosec">
//                                     <img class="dammy-logo" src={require("../assets/images/logo-copy.png")} />
//                                 </div>
//                             </div>
//                             <div class="col-lg-6 col-md-12 col-sm-12">
//                                 <div class="main-infosec">
//                                     <div class="info-left mr-15">
//                                         <h2>Information</h2>
//                                         <ul class="foter">
//                                             <li><a href="about.html">About Us </a></li>
//                                             <li><a href="terms-condition.html">Terms&Conditions </a></li>
//                                             <li><a href="privacypolicy.html">Privacy Policy </a></li>
//                                         </ul>
//                                     </div>
//                                     <div class="info-left">
//                                         <h2>CONTACT</h2>
//                                         <ul class="foter">
//                                             <li><a href="how-it-work.html">How it Works </a></li>
//                                             <li><a href="contact-us.html">Contact Us </a></li>
//                                             <li><a href="FAQS.html">FAQs </a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-lg-3 col-md-12 col-sm-12">
//                                 <div class="right-footer">
//                                     <h2>Follow Us</h2>
//                                     <ul class="social-icon">
//                                         <li><a href="#"><img class="social-pic" src={require("../assets/images/fb.png")} /></a></li>
//                                         <li><a href="#"><img class="social-pic" src={require("../assets/images/linkdn.png")} /></a></li>
//                                         <li><a href="#"><img class="social-pic" src={require("../assets/images/googlepluse.png")} /></a></li>
//                                         <li><a href="#"><img class="social-pic" src={require("../assets/images/twitr.png")} /></a></li>
//                                         <li><a href="#"><img class="social-pic" src={require("../assets/images/insta.png")} /></a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//                 {/* </body> */}
//                 <p class="copyright text-center">@All rights reserved 2020</p>
//                 {/* <script src="js/jquery.min.js"></script>
//                 <script src="js/bootstrap.bundle.min.js"></script>
//                 <script src="js/slick.min.js"></script>
//                 <script src="js/custom.js"></script>
//                 <script src="js/app.js"></script> */}
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Apirequest from '../api/Apirequest'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            description: '',
            FAQs:'',
            PrivacyPolicy:'',
            HowItworks:'',
            ContactUs:'',
            TermAndCondition:'',
            staticID:''
        }
        // submitHandler = () =>{

        // }

    }
    

    handleFaqs = () => {
        var requestData = {
            "title":""
        }
        console.log("Data",requestData)
        Apirequest(requestData, "/user/FAQs", "POST")
            .then((resp) => {
                console.log("wxyz==>", resp);

            })
            .catch(e => { console.log(e) })

    }

    handlePolicy = () => {
        var requestData = {
            
                "title":"Privacy Policy"
                
        }
        console.log("Data",requestData)
        Apirequest(requestData, "/static/viewStatic", "POST")
            .then((resp) => {
                console.log("wxyz==>", resp);

            })
            .catch(e => { console.log(e) })

    }
    handleWorks = () => {
        var requestData = {
            "title":"How it's Work"
        }
        console.log("Data",requestData)
        Apirequest(requestData, "/static/viewStatic", "POST")
            .then((resp) => {
                console.log("wxyz==>", resp);

            })
            .catch(e => { console.log(e) })

    }
    hanndleContactUs = () => {
        var requestData = {
            "title":""
        }
        console.log("Data",requestData)
        Apirequest(requestData, "/static/viewStatic", "POST")
            .then((resp) => {
                console.log("wxyz==>", resp);

            })
            .catch(e => { console.log(e) })

    }
    handleTermsCondition = () => {
        var requestData = {
            "title":"Terms & Condition"
        }
        console.log("Data",requestData)
        Apirequest(requestData, "/static/viewStatic", "POST")
            .then((resp) => {
                console.log("wxyz==>", resp);

            })
            .catch(e => { console.log(e) })

    }

    aboutHandler = () => {
        var requestData = {
            "title":"Abouts Us"
        }
        console.log("Data",requestData)
        Apirequest(requestData, "/static/viewStatic", "POST")
            .then((resp) => {
                console.log("wxyz==>", resp);

            })
            .catch(e => { console.log(e) })

    }
    render() {
        return (
            <div>
                {/* <body> */}
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="footer-logosec">
                                    <img class="dammy-logo" src={require("../assets/images/logo-copy.png")} />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="main-infosec">
                                    <div class="info-left mr-15">
                                        <h2>Information</h2>
                                        <ul class="foter">
                                            <li><Link to="/About" onClick={() => this.aboutHandler()}>About Us</Link></li>
                                            <li><Link to="/TermsCondition" onClick={() => this.handleTermsCondition()}>Terms&Conditions</Link></li>
                                            <li><Link to="/Policy" onClick={() => this.handlePolicy()}>Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                    <div class="info-left">
                                        <h2>CONTACT</h2>
                                        <ul class="foter">
                                            <li><Link to="/How_It_Works"  onClick={() => this.handleWorks()}>How it Works </Link></li>
                                            <li><Link to="/Contact_us"  onClick={() => this.hanndleContactUs()}>Contact Us</Link></li>
                                            <li><Link to="/FaQs" onClick={() => this.handleFaqs()}>FAQs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="right-footer">
                                    <h2>Follow Us</h2>
                                    <ul class="social-icon">
                                        <li><a href="#"><img class="social-pic" src={require("../assets/images/fb.png")} /></a></li>
                                        <li><a href="#"><img class="social-pic" src={require("../assets/images/linkdn.png")} /></a></li>
                                        <li><a href="#"><img class="social-pic" src={require("../assets/images/googlepluse.png")} /></a></li>
                                        <li><a href="#"><img class="social-pic" src={require("../assets/images/twitr.png")} /></a></li>
                                        <li><a href="#"><img class="social-pic" src={require("../assets/images/insta.png")} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* </body> */}
                <p class="copyright text-center">@All rights reserved 2020</p>
                {/* <script src="js/jquery.min.js"></script>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/slick.min.js"></script>
                <script src="js/custom.js"></script>
                <script src="js/app.js"></script> */}
            </div>
        )
    }
}
