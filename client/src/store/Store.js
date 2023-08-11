import { MiddlewareArray, configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import CounterReducer from "../reducers/CounterReducer"
import ValueReducer from "../reducers/ValueReducer";
import SetUserReducer from "../reducers/SetUserReducer";
import cartReducer from "../reducers/cartReducer";


const rootReducer = combineReducers({ 
    CounterReducer,
    ValueReducer,
    SetUserReducer,
    cartReducer

})
const Store = configureStore(
    {
        reducer: rootReducer,
        middleware: new MiddlewareArray()
    }
);

export default Store;