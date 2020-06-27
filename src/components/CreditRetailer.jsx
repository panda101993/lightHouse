
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux"; 
class CreditRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {

            modalStatus: false,

        }
    }

    render() {
        return (
            <div>



                <div class="tab-pane fade show active" id="v-pills-credits" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <h3 class="info_c3">My Credits</h3>
                    <div class="name_c301">
                        <div class="maincred">
                            <div class="mycredit">
                                 credits ( {this.props.applicationData.credit} )
                                </div>
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
  export default connect(mapStateToProps)(CreditRetailer);