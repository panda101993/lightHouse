// import React, { Component } from 'react'
// import Header from '../../../components/Header';
// import Footer from '../../../components/Footer';
// import { GlobalValidations } from '../../../components/GlobalValidations';
// import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
// import { Link } from 'react-router-dom';

// export default class ForgotPassword extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <section className="center-form"> */}
//                 <body>
//                     <Header />
//                     <section>
//          <div class="container-fluid">
//             <div class="cover-forgot">
//                <h1>FORGOT PASSWORD</h1>
//                <form>
//                   <div class="register-cont">
//                      <p>Please enter your registered phone number. We will send you OTP to reset your password.</p>
//                   </div>
//                   <div class="form-group">
//                      <label>Email ID/ Phone Number :</label>
//                      <div class="cover-phoneno">
//                         <div class="code">
//                            <select class="form-control">
//                               <option selected>+91</option>
//                               <option>+92</option>
//                               <option>+92</option>
//                            </select>
//                         </div>
//                         <div class="code-no">
//                            <input type="text" class="form-control"/>
//                         </div>
//                      </div>
//                   </div>
//                   <a href="19-forgotpassword-user.html"> <button type="button" class="btn btn-theme"> SUBMIT</button> </a> 
//                </form>
//             </div>
//          </div>
//       </section>

//                     <Footer />

//                 </body>



//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { GlobalValidations } from '../../../components/GlobalValidations';
import { GlobalButtonLinks } from '../../../components/GlobalButtonLinks';
import { Link } from 'react-router-dom';
import Apirequest from '../../../api/Apirequest'

export default class ForgotPassword extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error:'',
         mobileNumber:"",
         mobilenoStatus:''
      }
   }

   // getpassword = () => {

   // Apirequest(credential, "/user/forgotPassword", "POST")
   //      .then((resp) => {
   //          console.log('respresp',resp);
   //      })

   //      .catch(err => {
   //       console.log("respresp---", err)
   //   }
   //   )
   //    }

     

   handleinput=(e)=>{
       this.setState({mobileNumber: e.target.value})
       var value=e.target.value;
       const name = e.target.name;
    //   this.validateMobileno(value)  
    this.setState({ [name]: value })
       this.state.mobilenoErrorMessage = this.validateMobileno(value).error;
       this.state.mobilenoStatus = this.validateMobileno(value).status;

   }

   validateMobileno(value) {
      var numberRegex = /^[1-9][0-9]{9,12}$/;
      if (value == "" || value == undefined || value == null) {
           return { status: false, error: "Please enter mobileNo." }
        // this.setState({error:"Please enter mobileNo."})

      }
      else if (!numberRegex.test(value)) {
         return { status: false, error: "Please enter valid mobileNo." }
       //  this.setState({error:"Please enter valid mobileNo."})
      }
      else {
           return { status: true, error: '', height: 0 }
         //this.setState({error:""})
      }
  }  

  
  submitHandler = () => {
   if (this.state.mobilenoStatus) {
               var credentials={
                  "mobileNumber": this.state.mobileNumber,
                  "email":""
               }
           //  alert('Submit Successfully');
               // window.location.href = "/ForgotPasswordOtp";
               Apirequest(credentials, "/user/forgotPassword", "POST")
               .then((resp) => {
                   console.log('respresp',resp.data.result);
                   
                  switch(resp.status){
                     case 200: {
                        if(resp.data.responseCode==200)
                        {
                        this.props.history.push(`/ForgotPasswordOtp/${this.state.mobileNumber}`)
                        }
                        else if(resp.data.responseCode==404)
                        {
                           alert("Provided email/mobile number is not registered")
                        }
                        else if(resp.data.responseCode==500)
                        {
                           alert("Internal Server error")
                        }
                     }
                     break;
                     default:
                        console.log("default err",resp.data.error)
                  }
               })
       
               .catch(err => {
                console.log("respresp---", err)
            }
            )
     
   } else { this.setState({ mobilenoStatus: false, mobilenoErrorMessage: "*Please enter mobileno" }) }
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
