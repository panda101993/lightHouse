import React from 'react';

export const InlineError = props => {
    return (
        <label class="" style={{color:"red", fontSize:12}}>{props.message}</label>
    )
}