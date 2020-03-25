import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {just_action}  from "../redux/action/Just_Action"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
        <div>
            <h1 onClick={()=>this.props.action.just_action(this.props.name)}>{this.props.name}</h1>
        </div>
        )
    }
}
 const mapStateToProps=(state)=>{
     console.log("dddd",state)
    return{
        name : state.InitialReducer.name
    }
 }
 const mapDispatchToProps=(dispatch)=>{
     return{
        action:bindActionCreators({just_action},dispatch)

     }

 }
export default connect(mapStateToProps,mapDispatchToProps)(Login)