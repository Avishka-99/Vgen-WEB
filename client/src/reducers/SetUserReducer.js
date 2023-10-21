import { SET_USER,ADD_TO_CART, REMOVE_FROM_CART,INCREMENT_COUNTER,RESET_CART,SET_SEARCH_KEYWORD } from "../constants/ActionTypes";
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
}
export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product,
    };
}
    //update items count in cart
export const incrementCounter = (cartItemCount) => {
    return {
        type: INCREMENT_COUNTER,
        payload: cartItemCount,
    };
}
export const setSearchKeyword=(keyword)=>{
    return {
        type: SET_SEARCH_KEYWORD,
        payload: keyword,
    };
}
export const resetCart=()=>{
    return {
        type: RESET_CART,
    };
}
const initialState = {
    user:"null"
}

const SetUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            localStorage.setItem('type',action.data);
            return {
                //counter:getFromDatabase(),
                //...state,
                user: action.data
            }
        default: return state
    }
    
}


export default SetUserReducer;