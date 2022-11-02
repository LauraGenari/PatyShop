import rootReducer from "./_reducers/rootReducer";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./_sagas/productSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer);
const store = configureStore({
    reducer:rootReducer, 
    middleware: ()=>[sagaMiddleware]
})

sagaMiddleware.run(productSaga);
export default store;