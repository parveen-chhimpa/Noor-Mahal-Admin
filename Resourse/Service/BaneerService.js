import Config from '../Helper/Config'


export const BaneerService={
   BaneerServices
}

async function BaneerServices(token){
    var URL = Config.API_URL + 'banner'
    const requestOption = {
        method:'GET',

        headers:{
            Authorization: 'Bearer ' + token,
            'Content-Type':'multipart/form-data',

        },
    }

    return fetch(URL,requestOption)
    .then(handleResponse)
    .then(response=>{
        return response;
    }).catch((err)=>{
    })
}

function handleResponse(response) {
     return response.text().then(text => {
         const data = text && JSON.parse(text);
        
         if (!response.ok) {
             const error = (data && data.message) || response.statusText;
 
 
             return Promise.reject(error);
         }
 
 
         return data;
     });
 }