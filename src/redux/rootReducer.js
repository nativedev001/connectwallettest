import { combineReducers } from "redux";
import IceReducer from "./icecream/IceReducer";
import reducer from "./cake/reducerCake";

const rootReducer = combineReducers({
    IceCream: IceReducer,
    cake: reducer
})

export default rootReducer