import React from "react"

const One = (data) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
            <rect width="100%" x={0} y={0} height="100%" fill="rgb(11, 14, 74)" />
            <text x={50} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Title-"}</text>
            <text x={200} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.title ? data.title : "COOLCoUpOn"}</text>
            <text x={50} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Cupon Code-"}</text>
            <text x={200} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.couponCode ? data.couponCode : "COOLCoUpOn"}</text>
            <text x={50} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Percent"}</text>
            <text x={200} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.discount ? `${data.discount}%` : "10%"}</text>
            <text x={50} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"TILL"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.expiryDate ? data.expiryDate : "31-DEC"}</text>
            <image x={200} y={250} href={data.image ? data.image : "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"} height="200" width="200" />
        </svg>)
}

const Two = (data) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
            <rect width="100%" x={0} y={0} height="100%" fill="rgb(111, 14, 74)" />
            <text x={50} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Title-"}</text>
            <text x={200} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.title ? data.title : "COOLCoUpOn"}</text>
            <text x={50} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Cupon Code-"}</text>
            <text x={200} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.couponCode ? data.couponCode : "COOLCoUpOn"}</text>
            <text x={50} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Percent"}</text>
            <text x={200} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.discount ? `${data.discount}%` : "10%"}</text>
            <text x={50} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"TILL"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.expiryDate ? data.expiryDate : "31-DEC"}</text>
            <image x={200} y={250} href={data.image ? data.image : "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"} height="200" width="200" />
        </svg>)
}
const Three = (data) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
            <rect width="100%" x={0} y={0} height="100%" fill="rgb(11, 124, 74)" />
            <text x={50} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Title-"}</text>
            <text x={200} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.title ? data.title : "COOLCoUpOn"}</text>
            <text x={50} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Cupon Code-"}</text>
            <text x={200} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.couponCode ? data.couponCode : "COOLCoUpOn"}</text>
            <text x={50} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Percent"}</text>
            <text x={200} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.discount ? `${data.discount}%` : "10%"}</text>
            <text x={50} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"TILL"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.expiryDate ? data.expiryDate : "31-DEC"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"31-DEC"}</text>t>
              <image x={200} y={250} href={data.image ? data.image : "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"} height="200" width="200" />
        </svg>)
}
const Four = (data) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
            <rect width="100%" x={0} y={0} height="100%" fill="rgb(11, 94, 74)" />
            <text x={50} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Title-"}</text>
            <text x={200} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.title ? data.title : "COOLCoUpOn"}</text>
            <text x={50} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Cupon Code-"}</text>
            <text x={200} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.couponCode ? data.couponCode : "COOLCoUpOn"}</text>
            <text x={50} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Percent"}</text>
            <text x={200} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.discount ? `${data.discount}%` : "10%"}</text>
            <text x={50} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"TILL"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.expiryDate ? data.expiryDate : "31-DEC"}</text>
            <image x={200} y={250} href={data.image ? data.image : "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"} height="200" width="200" />
        </svg>)
}
const Five = (data) => {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 700 500">
            <rect width="100%" x={0} y={0} height="100%" fill="rgb(11, 14, 174)" />
            <text x={50} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Title-"}</text>
            <text x={200} y={50} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.title ? data.title : "COOLCoUpOn"}</text>
            <text x={50} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Cupon Code-"}</text>
            <text x={200} y={100} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.couponCode ? data.couponCode : "COOLCoUpOn"}</text>
            <text x={50} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"Percent"}</text>
            <text x={200} y={150} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.discount ? `${data.discount}%` : "10%"}</text>
            <text x={50} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{"TILL"}</text>
            <text x={200} y={200} style={{ 'fontFamily': ' Roboto', 'fontStyle': 'Regular', 'fontSize': "24px", 'lineHeight': "12px" }} fill="yellow">{data.expiryDate ? data.expiryDate : "31-DEC"}</text>
            <image x={200} y={250} href={data.image ? data.image : "https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"} height="200" width="200" />
        </svg>)
}

export const getTemplate = (id, data) => {
    console.log("aaaa", id, data)
    // eslint-disable-next-line default-case
    switch (id) {
        case (0): {
            return (
                <One {...data} />
            )
        }
        case (1): {
            return (
                <Two {...data} />
            )
        }
        case (2): {
            return (
                <Three {...data} />
            )
        }
        case (3): {
            return (
                <Four {...data} />
            )
        }
        case (4): {
            return (
                <Five {...data} />
            )
        }
    }

}