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