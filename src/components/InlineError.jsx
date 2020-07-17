import React from 'react';

export const InlineError = props => {
    return (
        <label class="" style={{ color: 'red' }}>{props.message}</label>
    )
}