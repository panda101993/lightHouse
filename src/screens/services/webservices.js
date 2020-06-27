const siteUrl ="http://ec2-35-176-66-190.eu-west-2.compute.amazonaws.com:1507/api/v1/" 

export default function Api(parameters, apiMethod, variables, token, id) {
  var init = apiMethod == "GET" ? {
    method: "GET",
    headers: {
      //  'Authorization': token
      'Content-Type': 'application/json',
      'token': token ? token : null,
      "_id": id ? id : null,
      "id":id ? id : null
    },
  } :
    {
      method: apiMethod,
      headers: {
        "_id": id ? id : null,
        "id":id ? id : null,
        'token': token ? token : null,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(variables)
    }
 
  return fetch(siteUrl + parameters, init)
    .then(res => res.json()
      .then(data => {
        var apiData = {
          status: res.status,
          data: data
        }
        return apiData;
      }))
    .catch(err => {
  
      return "error"
    });
};
