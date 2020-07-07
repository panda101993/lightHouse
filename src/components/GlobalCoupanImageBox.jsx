import React from 'react';
import { Link } from 'react-router-dom';

export const GlobalCoupanImageBox = props => {
    return (<li>
        <div class="coupon-cover">
        <img src={props.coupanImgSrc} alt={props.alt} />
    <p>{props.date}</p>
</div>
<div class="preview-section">
{/* <Link to={props.btn1Linkto} class={props.btn1LinkClass}>  */}
<button type={props.btn1Type} class={props.btn1Class} onClick={props.modalcallbtn1} >{props.btn1Name}</button>
{/* </Link> */}
    {/* <Link to={props.btn2Linkto} class={props.btn2LinkClass}>   */}
    <button class={props.btn2Class} onClick={props.modalcallbtn2} >{props.btn2Name}</button>
    {/* </Link> */}
    {/* <Link to={props.btn3Linkto} class={props.btn3LinkClass}>  */}
    <button class={props.btn3Class} onClick={props.modalcallbtn3}>{props.btn3Name}</button>
    {/* </Link>  */}
</div>
</li>)
}

