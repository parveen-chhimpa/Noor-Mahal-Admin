import Config from '../Helper/Config'


export const ItemService={
   ItemServices,
   ListOfItems,
}

async function ItemServices(postData,token){
   
    var URL = Config.API_URL + 'items'
    const requestOption = {
        method:'POST',
        headers:{
            "Authorization": 'Bearer ' + token,
            'Content-Type':'multipart/form-data',
        },
        body: postData

    }
    // console.log(token,'\\\\\\\\\\')
    return fetch(URL,requestOption)
    .then(handleResponse)
    .then(response=>{
        // console.log(response,'???????????????')
        return response;
    }).catch((err)=>{
    })
}
async function ListOfItems(token){
   
    var URL = Config.API_URL + 'itemslist'
    const requestOption = {
        method:'GET',
        headers:{
            "Authorization": 'Bearer ' + token,
            'Content-Type':'multipart/form-data',
        },

    }
    // console.log(token,'\\\\\\\\\\')
    return fetch(URL,requestOption)
    .then(handleResponse)
    .then(response=>{
        // console.log(response,'???????????????')
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