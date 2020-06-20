import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import Apirequest from "../../../api/Apirequest"
import { validateEmailMobile } from '../../../utils/validation/Validation';


export default class ForgotpasswordRetailer extends Component {

constructor(props) {
   super(props);
   this.state = {
      error:'',
      mobilenoStatus:'',
      mobileNumber:""
   }
}

handleinput=(e)=>{
    this.setState({mobileNumber:e.target.value})
    var value=e.target.value;
    const name = e.target.name;
 //   this.validateMobileno(value)  
 this.setState({ [name]: value })
    this.state.mobilenoErrorMessage = validateEmailMobile(value).error;
    this.state.mobilenoStatus = validateEmailMobile(value).status;

}

// validateMobileno(value) {
//    var numberRegex = /^[1-9][0-9]{9,12}$/;
//    if (value == "" || value == undefined || value == null) {
//         return { status: false, error: "Please enter mobileNo." }
//      // this.setState({error:"Please enter mobileNo."})

//    }
//    else if (!numberRegex.test(value)) {
//       return { status: false, error: "Please enter valid mobileNo." }
//     //  this.setState({error:"Please enter valid mobileNo."})
//    }
//    else {
//         return { status: true, error: '', height: 0 }
//       //this.setState({error:""})
//    }
// }  


submitHandler = () => {
if (this.state.mobilenoStatus) {
  
        //  alert('Submit Successfully');
            // window.location.href = "/OtpScreenRetailer";
            var credentials={
               "mobileNumber": this.state.mobileNumber,
               "email":""
            }
            Apirequest(credentials, "/retailer/forgotPassword", "POST")
            .then((resp) => {
                console.log('respresp',resp);
                console.log('resprespdata',resp.data.result);
                
               switch(resp.status){
                  case 200: {
                     if(resp.data.responseCode==200)
                     {
                     this.props.history.push(`/OtpScreenRetailer/${this.state.mobileNumber}`)
                     }
                     else if(resp.data.responseCode==404)
                     {
                        alert("Provided email/mobile number is not registered")
                     }
                     else if(resp.data.responseCode==500)
                     {
                        alert("Internal server error")
                    }
                  }
                  break;
                  default:
                     console.log(resp.data.error)
                     console.log("default err",resp.data.error)
               }
            })

    
            .catch(err => {
             console.log("respresp---", err)
         }
         )

  
} else { this.setState({ mobilenoStatus: false, mobilenoErrorMessage: "*Please enter mobileno/Email" }) }
}


 render() {
     return (
         <div>
             {/* <section className="center-form"> */}
             <body>
                 <Header />
                 <section>
      <div class="container-fluid">
         <div class="cover-forgot">
            <h1>FORGOT PASSWORD</h1>
            <form>
               <div class="register-cont">
                  <p>Please enter your registered phone number. We will send you OTP to reset your password.</p>
               </div>
               <div class="form-group">
                  <label>Email ID/ Phone Number :</label>
                  <div class="cover-phoneno">
                     <div class="code">
                        <select class="form-control">
                           <option selected>+91</option>
                           <option>+92</option>
                           <option>+92</option>
                        </select>
                     </div>
                     <div class="code-no">
                        <input 
                        type="text" 
                        class="form-control" 
                        name="mobileNo"
                        onChange={(e)=>this.handleinput(e)}
                        />
                     </div>

                  </div>
                  <div>
                     {this.state.mobilenoErrorMessage}
                  </div>
               </div>
               {/* <Link to ="/ForgotPasswordOtp">  */}
               <button type="button" 
               class="btn btn-theme"  onClick={() => this.submitHandler()} > SUBMIT</button> 
               {/* </Link>  */}
            </form>
         </div>
      </div>
   </section>

                 <Footer />

             </body>



         </div>
     )
 }
}
