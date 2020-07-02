import apiRequest from "../../api/Apirequest";

export const getRetailerCategory=(token)=>{
    console.log()
     apiRequest({},"/retailer/getCategoriesByRetailer","POST",token)
    .then((res)=>{
        console.log("response for  category Lidt",res)

    })
}

export const getRetailerSubCategory=(token)=>{
    apiRequest({},"/retailer/getSubCategoriesByRetailer","POST",token)
    .then((res)=>{
        console.log("response for  category list 2",res)
    })
}