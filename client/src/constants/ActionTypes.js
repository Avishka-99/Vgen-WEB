export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const INCREASE_VALUE='INCREASE_VALUE';
export const SET_USER='SET_USER';
export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_FROM_CART='REMOVE_FROM_CART';
export const SET_SEARCH_KEYWORD='SET_SEARCH_KEYWORD';




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
