// Import any necessary action types if you have defined them
import { ADD_TO_CART, REMOVE_FROM_CART,INCREMENT_COUNTER } from "../constants/ActionTypes";

// Define your initial cart state

const initialState = {
    cart: [],
    cartItemCount: 0,
  };
  
  // Define your CartReducer function
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
          cartItemCount: state.cartItemCount + action.payload.quantity,
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.productId !== action.payload.productId),
          cartItemCount: state.cartItemCount - action.payload.quantity,
        };
      default:
        return state;
        case INCREMENT_COUNTER:
            return {
                ...state,
                cartItemCount: action.payload,
            };
            
    }
  };
  
  export default cartReducer;
  