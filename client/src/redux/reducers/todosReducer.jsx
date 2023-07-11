import * as actionTypes from '../actions/type';


export const todosReducers = (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [
                ...state,
                action.payload
            ]

        case actionTypes.GETALL_TODO:
            console.log(action.payload)
            return action.payload

        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))

        case actionTypes.UPDATE_TODO:
            console.log(action.payload)
            return state.map((ele) => (
                ele._id === action.payload._id ? action.payload : ele
            ));

        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);

        default:
            return state;
    }
}
