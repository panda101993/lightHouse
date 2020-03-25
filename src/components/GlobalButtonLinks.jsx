import React from 'react';
import { Link } from 'react-router-dom';

export const GlobalButtonLinks = props => {

    return <div>
        <Link to={props.linkLabel}>
            <button type={props.btnType} class={props.btnClass} >{props.btntxt}</button>
        </Link>
    </div>
}
