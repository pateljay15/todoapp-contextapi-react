import {ADD_TODO, REMOVE_TODO} from "./action.types";

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action)
            console.log(state)
            return[...state, action.payload];
    
        case REMOVE_TODO:
            console.log(action)
            return state.filter(todo => todo.id !== action.payload);    
    
        default:
            return state;
    }
};