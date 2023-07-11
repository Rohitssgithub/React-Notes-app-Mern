// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from "./reducers/tabReducer";

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})


// const middleware = [thunk];
// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// )


const store = configureStore({ reducer: reducer, middleware: [thunk, logger] })


export default store;