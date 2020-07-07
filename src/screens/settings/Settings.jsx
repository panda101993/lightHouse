import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import {SettingsRoutes} from '../../navigation/Navigation';

// module  name - 'reactstrap'

class Settings extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    handleNestedRoutes=(routes)=> {

        routes.map( (item,index)=>{
            return ( <Route path={`${item.layout}${item.path}`} {...this.props} component={item.Component}/>)
        })
        
    } 

    render(){
        return (
            <div>
                <Switch>
                    {this.handleNestedRoutes(SettingsRoutes)}
                </Switch>
            </div>
        )
    }
}

export default Settings;