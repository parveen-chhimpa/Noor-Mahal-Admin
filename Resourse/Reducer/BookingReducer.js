import {BookingConstent} from '../Constent/BookingConstent'
const initialState={
    BookingList:{}
}

export function BookingReducer(state = initialState,action){
    switch(action.type){
        case  BookingConstent.GET_LIST_OF_BOOKING_REQUEST:
            return state;

        case BookingConstent.GET_LIST_OF_BOOKING_SUCCESS:
            return {
                ...state,
                BookingList:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case BookingConstent.GET_LIST_OF_BOOKING_FAILURE:
                return state;

        default:
            return state
    }
}