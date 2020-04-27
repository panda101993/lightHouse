import React, { Component } from 'react'

export default class SidebarRetailer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
              <div class="col-lg-3 col-sm-12 mb-3">
                  <div class="manage">
                     <div class="nav flex-column nav-pills home_c3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active _settings" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-manage" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage General Info</a>
                        <a class="nav-link _settings" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-referral" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Referral Code</a>
                        <a class="nav-link _settings" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-webpage" role="tab" aria-controls="v-pills-settings" aria-selected="false">Manage Webpage</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-credits" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Credits</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-earned" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Credit History</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-recharge" role="tab" aria-controls="v-pills-settings" aria-selected="false">Recharge</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-history" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Recharge  History</a>
                        <a class="nav-link _settings" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-coupon" role="tab" aria-controls="v-pills-settings" aria-selected="false">Coupon View History</a>
                     </div>
                  </div>
               </div>
            
        )
    }
}
