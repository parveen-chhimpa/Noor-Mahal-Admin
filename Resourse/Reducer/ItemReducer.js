import {ItemConstent} from '../Constent/ItemConstent'
const initialState={
    Item:{},
    ListItems:{},
}

export function ItemReducer(state = initialState,action){
    switch(action.type){
        case  ItemConstent.GET_ITEM_REQUEST:
            return state;

        case ItemConstent.GET_ITEM_SUCCESS:
            return {
                ...state,
                Item:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case ItemConstent.GET_ITEM_FAILURE:
                return state;

        default:
            return state
    }
}
export function ListItems(state = initialState,action){
    switch(action.type){
        case  ItemConstent.GET_LIST_OF_ITEMS_REQUEST:
            return state;

        case ItemConstent.GET_LIST_OF_ITEMS_SUCCESS:
            return {
                ...state,
                ListItems:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case ItemConstent.GET_LIST_OF_ITEMS_FAILURE:
                return state;

        default:
            return state
    }
}