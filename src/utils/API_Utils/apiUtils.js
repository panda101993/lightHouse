import React from "react"
import apiRequest from "../../api/Apirequest";

export const getRetailerCategory=(token)=>{
    console.log()
     return apiRequest({},"/retailer/getCategoriesByRetailer","GET",token)
    .then((res)=>{
        console.log("response for  category Lidt",res)
        return res.data.results[0].productServiceDetails

    }).catch(err=>console.log("aaaaaa",err))
}

export const getRetailerSubCategory=(token,formdata)=>{
    return apiRequest(formdata,"/retailer/getSubCategoriesByRetailer","POST",token)
    .then((res)=>{
        console.log("response for  category list 2",res)
    })
}
const Five = () => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
            <rect width="100%" x={0} y={0} height="100%" fill="rgb(11, 14, 174)" />
            <text x={50} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Title-"}</text>
            <text x={200} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow"></text>
            <text x={50} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Cupon Code-"}</text>
            <text x={200} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow"></text>
            <text x={50} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Percent"}</text>
            <text x={200} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow"></text>
            <text x={50} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"TILL"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow"></text>
            <image x={200} y={250} href={"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"} height="200" width="200" />
        </svg>)
}

export const sendSVG=()=>{
    let data={"template":Five()}
    // http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1507/api/v1/admin/addTemplate
    return apiRequest(data,"/admin/addTemplate","POST","")
    .then((res)=>{
        console.log("response for  category Template",res)
    })
}