import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux"; 
 class ReferralCodeRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,
           
        }
    } 
    componentDidMount(){
        
        console.log("qrcodeeeee====>",this.props.applicationData)
      }
   

    render() {
        return (
            <div>

<div class="tab-pane fade show active " id="v-pills-referral" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <h3 class="info_c3">My Referral Code</h3>
        <div class="name_c301">
            <div class="light">
                Brand Name
                            </div>
            <div class="maincred ref">
                <div class="mycredit ref">
        <p class="li"> {this.props.applicationData.retailerReferralCode}</p>
                    {/* <img src={require("../assets/images/qrreader.png")} /> */}
                    <img src ={this.props.applicationData.qrCode} />
                  
                </div>
            </div>
            <div class="pas print">
                <ul class="button_cs">
                    <li>
                        <button class="save paddi ppp" data-toggle="modal" data-target="#icon">Print</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>



            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("stateLogin-------", state)
    return {
       applicationData: state.ProfileDetailsReducer.profileData      
    }
          
  }
 
// export default Header2
export default connect(mapStateToProps)(ReferralCodeRetailer);