import React from 'react';

export const GlobalAlertCoupanTitleBox = props => {
    return (<div class="category_c3 data-bin">
<div>
    <h3>{props.headerName}</h3>
<span>{props.bodyText}</span>
<p>{props.expiryDate}</p>
</div>
<div class="tras-dust">
    <i class="fa fa-trash" aria-hidden="true" onClick={props.onClick}></i>
</div>
    </div>)
}
