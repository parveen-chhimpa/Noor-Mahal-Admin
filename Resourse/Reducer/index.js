import { combineReducers } from "redux";
import {LoginReducer} from '../Reducer/LoginReducer'
import {AddPromoReducer} from '../Reducer/AddPromoReducer'
import {BaneerReducer} from '../Reducer/BaneerReducer'
import {ItemReducer} from '../Reducer/ItemReducer'
import {ListItems} from '../Reducer/ItemReducer'
import {BookingReducer} from '../Reducer/BookingReducer'
const rootReducer= combineReducers({
    LoginReducer,
    AddPromoReducer,
    BaneerReducer,
    ItemReducer,
    BookingReducer,
    ListItems
});

export default rootReducer;