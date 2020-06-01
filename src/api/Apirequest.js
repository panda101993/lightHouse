// const siteUrl = "http://localhost:3000"; //Staging 
// export const siteUrl = "http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1507/api/v1";
export const siteUrl = "http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1507/api/v1";

export default function apiRequest(variables, method, apiMethod, token, id) {
    var init = apiMethod == "GET" ? {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'Authorization': token ? token : ''
        }
    } :
        {
            method: apiMethod,
            headers: {
                'Content-Type': "application/json",
                'Authorization': token ? token : ''
            },
            body: JSON.stringify(variables)         
        }
    return fetch(siteUrl + method, init)
        .then(res => res.json()
            .then(data => {
                var apiData = {
                    status: res.status,
                    data: data
                }
                console.log("ApiData=====>>>>", apiData)
                return apiData;
            }))
        .catch(err => {
            console.log("err" + JSON.stringify(err))
            var apiData = {
                status: 900,
                data: "Please check your internet connection."
            }
            return apiData
        });
};
