// store index 
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

import createSagaMiddleware from "redux-saga";  //引入saga的创建中间件
import homeSagas from './sagas'  //引入sagas.js

const sagaMiddleware = createSagaMiddleware() // 创建saga中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;  //配置调试器
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware) //添加saga中间件到enhancer里
)
const store = createStore(
    reducer,
    enhancer
)
sagaMiddleware.run(homeSagas)  //开启saga中间件

export default store