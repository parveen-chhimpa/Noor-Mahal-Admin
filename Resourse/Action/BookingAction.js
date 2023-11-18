import {BookingConstent}from '../Constent/BookingConstent'
import {BookingService} from '../Service/BookingService'
export const BookingAction = {
    ListOfBookingAction
}

function ListOfBookingAction(data){
    return dispatch=>{
        dispatch(request());
        return BookingService.ListOfBooking(data).then(
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
        return {type:BookingConstent.GET_LIST_OF_BOOKING_REQUEST}
    }
    function success(data){
        return {type:BookingConstent.GET_LIST_OF_BOOKING_SUCCESS,data}
    }
    function failure(error){
      return {type:BookingConstent.GET_LIST_OF_BOOKING_FAILURE,error}
    }
}