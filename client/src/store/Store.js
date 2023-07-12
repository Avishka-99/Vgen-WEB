import { MiddlewareArray, configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import CounterReducer from "../reducers/CounterReducer"
import ValueReducer from "../reducers/ValueReducer";
import SetUserReducer from "../reducers/SetUserReducer";

const rootReducer = combineReducers({ 
    CounterReducer,
    ValueReducer,
    SetUserReducer

})
const Store = configureStore(
    {
        reducer: rootReducer,
        middleware: new MiddlewareArray()
    }
);

export default Store;