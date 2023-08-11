import { SET_SEARCH_KEYWORD } from "../constants/ActionTypes";

const initialState={
    searchKeyword:'',
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_SEARCH_KEYWORD:
            return{
                ...state,
                searchKeyword:action.payload,
            };
            default:
                return state;
    }
}