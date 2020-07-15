import React from "react"
import apiRequest from "../../api/Apirequest";

export const getRetailerCategory=(token)=>{
    console.log()
     return apiRequest({},"/retailer/getCategoriesByRetailer","GET",token)
    .then((res)=>{
        console.log("response for  category Lidt",res)
        if(res.status===200){
            console.log("response for  category list 2",res)
            if(res.data.responseCode){
                if(res.data.result.length===0){
                    return []
                }
                else{
                    return res.data.results[0].productServiceDetails
                }
            }
        }

    }).catch(err=>console.log("aaaaaa",err))
}

export const getRetailerSubCategory=(token,formdata)=>{
    return apiRequest(formdata,"/retailer/getSubCategoriesByRetailer","POST",token)
    .then((res)=>{
        if(res.status===200){
            console.log("response for  category list 2",res)
            if(res.data.responseCode){
                if(res.data.result1.length===0){
                    return []
                }
                else{
                    return res.data.result1
                }
            }
        }
        // return res.data.result1[0].productServiceDetails
    })
}
export const getItemTypeByRetailer=(token,formdata)=>{
    return apiRequest(formdata,"/retailer/getItemTypeByRetailer","POST",token)
    .then((res)=>{
        console.log("response for  category list 3",res)
    })
}
export const getBrandByRetailer=(token,formdata)=>{
    return apiRequest(formdata,"/retailer/getBrandByRetailer","POST",token)
    .then((res)=>{
        console.log("response for  category list 4",res)
    })
}
export const getItemNameByRetailer=(token,formdata)=>{
    return apiRequest(formdata,"/retailer/getItemNameByRetailer","POST",token)
    .then((res)=>{
        console.log("response for  category list 5",res)
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


const svg = {
    ONE: () => <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
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
    </svg>,
    SECOND: () => <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
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
    </svg>

}
export const sendSVG=()=>{
    let data={"template":Five()}
    // console.log("data",data)
    // http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1507/api/v1/admin/addTemplate
    return apiRequest(data,"/admin/addTemplate","POST","")
    .then((res)=>{
        console.log("response for  category Template",res)
    }).catch(e=>console.log("response for  category Template error",e))
}

export const getSVG=()=>{
    let data={"template":svg}
    console.log("as",data)
    // http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1507/api/v1/admin/addTemplate
    return apiRequest({},"/admin/listTemplate","GET","")
    .then((res)=>{
        // return res.data.result
        console.log("response for  LIST Template",res)
    })
}