import React from 'react';

export const GlobalButtons = props => {
    return (<button class={props.btnClass} type={props.btnType}>{props.btntxt}</button>)
}