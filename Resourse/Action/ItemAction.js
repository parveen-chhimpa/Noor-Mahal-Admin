import {ItemConstent} from '../Constent/ItemConstent'
import {ItemService} from '../Service/ItemService'
export const ITEMAction = {
    ItemAction,
    ListOfItemAction,
}

function ItemAction(data,token){
    return dispatch=>{
        dispatch(request());
        return ItemService.ItemServices(data,token).then(
            response =>{
                dispatch(success(response));
                return Promise.resolve(response);
            },
            error =>{
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request(){
        return {type:ItemConstent.GET_ITEM_REQUEST}
    }
    function success(data){
        return {type:ItemConstent.GET_ITEM_SUCCESS,data}
    }
    function failure(error){
      return {type:ItemConstent.GET_ITEM_FAILURE,error}
    }
}
function ListOfItemAction(data){
    return dispatch=>{
        dispatch(request());
        return ItemService.ListOfItems(data).then(
            response =>{
                dispatch(success(response));
                return Promise.resolve(response);
            },
            error =>{
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request(){
        return {type:ItemConstent.GET_LIST_OF_ITEMS_REQUEST}
    }
    function success(data){
        return {type:ItemConstent.GET_LIST_OF_ITEMS_SUCCESS,data}
    }
    function failure(error){
      return {type:ItemConstent.GET_LIST_OF_ITEMS_FAILURE,error}
    }
}